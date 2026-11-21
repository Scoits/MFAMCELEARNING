// Test van de Code Block-modules in een headless browser.
// Iedere module wordt in een iframe geladen, zoals Rise dat doet. De test loopt vaste
// routes door, controleert of de afrondingsmelding { type: 'complete' } bij de parent
// aankomt en maakt schermafbeeldingen op desktop- en telefoonformaat.
// Gebruik: node test/run.js <buildmap> <schermafbeeldingenmap>
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(process.argv[2] || "../../build/code-blocks");
const shotDir = path.resolve(process.argv[3] || "../../build/screenshots");
fs.mkdirSync(shotDir, { recursive: true });
const routes = require("./routes.js");

function harness(src, height) {
  return `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">
  <style>body{margin:0;background:#eef1f5;font-family:sans-serif}iframe{display:block;width:100%;height:${height}px;border:0}</style></head>
  <body><iframe id="f" src="${src}" title="module"></iframe>
  <script>window.received=[];addEventListener('message',e=>window.received.push(e.data));</script></body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const results = [];
  for (const [mod, list] of Object.entries(routes)) {
    const file = path.join(buildDir, mod, "index.html");
    for (const vp of [{ name: "desktop", width: 900, height: 900 }, { name: "telefoon", width: 390, height: 844 }]) {
      for (const route of list) {
        if (vp.name === "telefoon" && !route.phone) continue;
        const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 2 });
        const page = await ctx.newPage();
        const errors = [];
        page.on("pageerror", (e) => errors.push(String(e)));
        const hfile = path.join(shotDir, `_harness_${mod}.html`);
        fs.writeFileSync(hfile, harness("file://" + file, vp.height));
        await page.goto("file://" + hfile);
        const frame = page.frame({ url: /index\.html$/ });
        await frame.waitForSelector(".main h2");
        frame.on("pageerror", (e) => errors.push(String(e)));
        const shots = [];
        let i = 0;
        for (const step of route.steps) {
          i++;
          await route.run(frame, step);
          await page.waitForTimeout(120);
          if (route.shotsAt && route.shotsAt.includes(i)) {
            const name = `${mod}_${route.name}_${vp.name}_${String(i).padStart(2, "0")}.png`;
            // Volledige inhoud van het iframe vastleggen.
            // Iframe tijdelijk even hoog maken als de inhoud en de hele module vastleggen.
            const h = await frame.evaluate(() => document.documentElement.scrollHeight);
            await page.evaluate((hh) => { document.getElementById("f").style.height = hh + "px"; }, h);
            await page.waitForTimeout(80);
            await page.locator("#f").screenshot({ path: path.join(shotDir, name) });
            await page.evaluate((hh) => { document.getElementById("f").style.height = hh + "px"; }, vp.height);
            shots.push(name);
          }
        }
        const received = await page.evaluate(() => window.received);
        const node = await frame.evaluate(() => document.documentElement.getAttribute("data-node"));
        const score = await frame.evaluate(() => window.SCENARIO && window.SCENARIO.state ? window.SCENARIO.state().vars : null);
        const overflow = await frame.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1 || [...document.querySelectorAll(".app, .main, .deck")].some((e) => e.scrollWidth > e.clientWidth + 1));
        const ok = received.some((m) => m && m.type === "complete") && errors.length === 0 && !overflow &&
          (!route.expect || route.expect(node, score));
        results.push({ mod, route: route.name, vp: vp.name, ok, node, score, received, errors, overflow, shots });
        await ctx.close();
      }
    }
  }
  await browser.close();
  for (const r of results) {
    console.log(`${r.ok ? "GOED " : "FOUT "} ${r.mod} ${r.route} ${r.vp} eindnode=${r.node} vars=${JSON.stringify(r.score)} berichten=${JSON.stringify(r.received)} horizontaal_scrollen=${r.overflow}${r.errors.length ? " fouten=" + r.errors.join("|") : ""}`);
  }
  fs.writeFileSync(path.join(shotDir, "testresultaat.json"), JSON.stringify(results, null, 2));
  process.exit(results.every((r) => r.ok) ? 0 : 1);
})();

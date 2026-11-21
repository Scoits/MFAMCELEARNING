// Welkomstanimatie: ieder hoofdstuk, telefoon en desktop, afronding, overslaan, Minder beweging, axe-core.
// Gebruik: node test/welkom.js <buildmap> <uitvoermap> [video]
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const buildDir = path.resolve(process.argv[2]), outDir = path.resolve(process.argv[3]), video = process.argv[4] === "video";
fs.mkdirSync(outDir, { recursive: true });
const AXE = fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
const results = [];
const report = (n, ok, d) => { results.push({ n, ok, d }); console.log(`${ok ? "GOED" : "FOUT"}  ${n}${d ? "  " + d : ""}`); };
function harness(file, h) {
  const p = path.join(outDir, `_h_${path.basename(path.dirname(file))}_${h}.html`);
  fs.writeFileSync(p, `<!doctype html><html lang="nl"><head><meta name="viewport" content="width=device-width, initial-scale=1"><title>h</title><style>body{margin:0;background:#eef1f5}iframe{display:block;width:100%;height:${h}px;border:0}</style></head><body><iframe id="f" src="file://${file}" title="module"></iframe><script>window.received=[];addEventListener('message',e=>window.received.push(e.data));</script></body></html>`);
  return "file://" + p;
}
const settle = (f) => f.evaluate(() => Promise.race([Promise.all(document.getAnimations().filter((a) => a.effect && a.effect.getTiming().iterations !== Infinity).map((a) => a.finished.catch(() => {}))), new Promise((r) => setTimeout(r, 4000))]));
(async () => {
  const browser = await chromium.launch();
  for (const mod of ["DRTC-WELKOM-MFA", "DRTC-WELKOM-MC"]) {
    const file = path.join(buildDir, mod, "index.html");
    for (const vp of [{ name: "telefoon", width: 390, height: 844 }, { name: "desktop", width: 900, height: 760 }]) {
      const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, ...(video && vp.name === "telefoon" && mod.endsWith("MC") ? { recordVideo: { dir: outDir, size: { width: 390, height: 844 } } } : {}) });
      const page = await ctx.newPage();
      await page.goto(harness(file, vp.height));
      const f = page.frame({ url: /index\.html$/ }); await f.waitForSelector(".main h2");
      const playing = await f.evaluate(() => window.WELKOM.state().playing);
      const n = await f.evaluate(() => document.querySelectorAll(".pips span").length);
      const axe = new Set(); let overflow = 0;
      for (let i = 0; i < n; i++) {
        if (i > 0) await f.locator(".actions .btn", { hasText: /Volgende/ }).click();
        if (video && vp.name === "telefoon") await page.waitForTimeout(3500);
        await settle(f);
        overflow = Math.max(overflow, await f.evaluate(() => document.documentElement.scrollWidth - innerWidth));
        if (vp.name === "telefoon") { await f.evaluate(AXE); (await f.evaluate(async () => (await axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] } })).violations.map((v) => v.id + ": " + v.nodes.map((x) => x.target.join(" ")).slice(0, 2).join(", ")))).forEach((v) => axe.add(v)); }
        const h = await f.evaluate(() => document.documentElement.scrollHeight);
        await page.evaluate((hh) => { document.getElementById("f").style.height = hh + "px"; }, h);
        await page.locator("#f").screenshot({ path: path.join(outDir, `${mod}-${vp.name}-h${i + 1}.png`) });
        await page.evaluate((hh) => { document.getElementById("f").style.height = hh + "px"; }, vp.height);
      }
      const rec = await page.evaluate(() => window.received);
      report(`${mod} ${vp.name}: ${n} hoofdstukken, speelt vanzelf, afronding`, playing && rec.filter((m) => m.type === "complete").length === 1 && overflow <= 0, `speelt=${playing} berichten=${JSON.stringify(rec)} overloop=${overflow}`);
      if (vp.name === "telefoon") report(`${mod}: axe-core WCAG 2.1 AA op ${n} hoofdstukken`, axe.size === 0, axe.size ? [...axe].join(" | ") : "geen overtredingen");
      await ctx.close();
    }
    // Overslaan, en Minder beweging
    {
      const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
      const page = await ctx.newPage(); await page.goto(harness(file, 844));
      const f = page.frame({ url: /index\.html$/ }); await f.waitForSelector(".main h2");
      await page.waitForTimeout(500);
      const st = await f.evaluate(() => ({ playing: window.WELKOM.state().playing, anim: document.querySelectorAll(".stage *").length && getComputedStyle(document.querySelector(".stage .wave")).animationName, play: !document.querySelector(".actions .btn.secondary:nth-child(2)").hidden }));
      await f.getByRole("button", { name: "Overslaan" }).click();
      await page.waitForTimeout(200);
      const node = await f.evaluate(() => document.documentElement.getAttribute("data-node"));
      const rec = await page.evaluate(() => window.received);
      report(`${mod}: Minder beweging en overslaan`, !st.playing && st.anim === "none" && !st.play && node === "h8" && rec.some((m) => m.type === "complete"), JSON.stringify({ ...st, node, rec }));
      await page.locator("#f").screenshot({ path: path.join(outDir, `${mod}-minder-beweging-slot.png`) });
      await ctx.close();
    }
    // Toetsenbord: alleen Tab en Enter tot het einde
    {
      const ctx = await browser.newContext({ viewport: { width: 900, height: 760 } });
      const page = await ctx.newPage(); await page.goto(harness(file, 760));
      const f = page.frame({ url: /index\.html$/ }); await f.waitForSelector(".main h2");
      await page.locator("#f").focus();
      let tabs = 0;
      for (let i = 0; i < 20 && !(await f.evaluate(() => document.activeElement && document.activeElement.tagName === "BUTTON" && /Volgende/.test(document.activeElement.textContent))); i++) { await page.keyboard.press("Tab"); tabs++; }
      for (let i = 0; i < 7; i++) await page.keyboard.press("Enter");
      const node = await f.evaluate(() => document.documentElement.getAttribute("data-node"));
      report(`${mod}: alleen toetsenbord`, node === "h8", `tabs=${tabs} eind=${node}`);
      await ctx.close();
    }
  }
  await browser.close();
  fs.writeFileSync(path.join(outDir, "welkom-resultaat.json"), JSON.stringify(results, null, 2));
  process.exit(results.every((r) => r.ok) ? 0 : 1);
})();

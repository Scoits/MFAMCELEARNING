// Toegankelijkheid en taal voor de proefpakketten MFA-L01-I01 en MC-L04-SL01.
//  1. axe-core (WCAG 2.1 A en AA) op ieder scherm van een volledige route: contrast, labels, rollen.
//  2. Tekst op 200 procent (browserzoom) op telefoonbreedte: geen horizontaal scrollen, knoppen bereikbaar.
//  3. MFA-L01-I01: route alleen met toetsenbord en hervatten midden in de opdracht.
//  4. Taalwissel: bouw met een proefvertaling en-GB en controleer dat alle tekst uit het taalbestand komt.
// Gebruik: node test/toegankelijkheid.js <buildmap> <uitvoermap>
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const buildDir = path.resolve(process.argv[2] || "../../build/code-blocks");
const outDir = path.resolve(process.argv[3] || "../../build/proef");
fs.mkdirSync(outDir, { recursive: true });
const AXE = fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");

const results = [];
function report(name, ok, detail) { results.push({ name, ok, detail }); console.log(`${ok ? "GOED" : "FOUT"}  ${name}${detail ? "  " + detail : ""}`); }

function harness(file, height) {
  const h = path.join(outDir, `_harness_${path.basename(path.dirname(file))}_${height}.html`);
  fs.writeFileSync(h, `<!doctype html><html lang="nl"><head><meta name="viewport" content="width=device-width, initial-scale=1"><title>proef</title>
  <style>body{margin:0;background:#eef1f5}iframe{display:block;width:100%;height:${height}px;border:0}</style></head>
  <body><iframe id="f" src="file://${file}" title="module"></iframe>
  <script>window.received=[];addEventListener('message',e=>window.received.push(e.data));</script></body></html>`);
  return "file://" + h;
}
const frameOf = (page) => page.frame({ url: /index\.html$/ });

async function axeScan(f) {
  await f.evaluate(AXE);
  return f.evaluate(async () => {
    const r = await window.axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] } });
    return r.violations.map((v) => `${v.id} (${v.nodes.length}): ${v.nodes.slice(0, 2).map((n) => n.target.join(" ")).join(", ")}`);
  });
}

// Stappen die op ieder scherm een axe-scan doen.
const ROUTES = {
  "MC-L04-SL01": [".actions .btn", ".options .opt:nth-child(1)", ".actions .btn", ".options .opt:nth-child(1)", ".actions .btn",
    ".options .opt:nth-child(2)", ".actions .btn", [1, 3, 4, 6, 8], ".actions .btn", ".options .opt:nth-child(1)", ".actions .btn",
    ".options .opt:nth-child(1)", ".actions .btn", "checkall", ".actions .btn"],
  "MFA-L01-I01": [".actions .btn", '[data-zone="kombuis"]', '[data-zone="zieken"]', ".actions .btn", '[data-zone="gbrug"]', ".actions .btn", '[data-zone="gacc"]', ".actions .btn"]
};
async function doStep(f, s) {
  if (s === "checkall") { const b = f.locator("input[type=checkbox]"); for (let i = 0; i < await b.count(); i++) await b.nth(i).check(); return; }
  if (Array.isArray(s)) { for (const n of s) await f.locator(`.options .opt:nth-child(${n})`).click(); await f.locator(".actions .btn").last().click(); return; }
  await f.locator(s).last().click();
}

(async () => {
  const browser = await chromium.launch();

  for (const [mod, steps] of Object.entries(ROUTES)) {
    const file = path.join(buildDir, mod, "index.html");

    // 1. axe op ieder scherm
    {
      const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
      const page = await ctx.newPage();
      await page.goto(harness(file, 844));
      const f = frameOf(page); await f.waitForSelector(".main h2");
      const all = new Set();
      (await axeScan(f)).forEach((v) => all.add(v));
      for (const s of steps) { await doStep(f, s); await page.waitForTimeout(60); (await axeScan(f)).forEach((v) => all.add(v)); }
      report(`${mod}: axe-core WCAG 2.1 AA op ${steps.length + 1} momenten`, all.size === 0, all.size ? [...all].join(" | ") : "geen overtredingen");
      await ctx.close();
    }

    // 2. Tekst op 200 procent op telefoonbreedte. Browserzoom 200 procent op een telefoon van 390 px
    //    geeft een venster van 195 CSS-pixels; dat bootsen we na met viewport 195 en schaalfactor 2.
    {
      const ctx = await browser.newContext({ viewport: { width: 195, height: 422 }, deviceScaleFactor: 4 });
      const page = await ctx.newPage();
      await page.goto(harness(file, 422));
      const f = frameOf(page); await f.waitForSelector(".main h2");
      let worst = 0, cut = 0, where = "";
      const check = async (label) => {
        const r = await f.evaluate(() => {
          const els = [document.documentElement, ...document.querySelectorAll(".app,.main,.deck,.options,.actions")];
          let over = 0, w = "";
          els.forEach((e) => { const d = (e === document.documentElement ? e.scrollWidth - innerWidth : e.scrollWidth - e.clientWidth); if (d > over) { over = d; w = e.className || e.tagName; } });
          const btns = [...document.querySelectorAll(".btn:not([disabled]), .opt:not([disabled]), .room:not([disabled])")].filter((b) => { const r = b.getBoundingClientRect(); return r.right > innerWidth + 1 || r.width < 20; }).length;
          return { over, btns, w };
        });
        if (r.over > worst) { worst = r.over; where = r.w; }
        cut += r.btns;
        const h = await f.evaluate(() => document.documentElement.scrollHeight);
        await page.evaluate((hh) => { document.getElementById("f").style.height = hh + "px"; }, h);
        await page.locator("#f").screenshot({ path: path.join(outDir, `${mod}-tekst-200-${label}.png`) });
        await page.evaluate(() => { document.getElementById("f").style.height = "422px"; });
      };
      await check("start");
      await doStep(f, steps[0]); await check("scherm1");
      await doStep(f, steps[1]); await check("feedback");
      report(`${mod}: tekst op 200 procent, telefoon`, worst <= 1 && cut === 0, `meeste_overloop_px=${worst} ${where} afgesneden_knoppen=${cut}`);
      await ctx.close();
    }
  }

  // 3. MFA-L01-I01 met alleen toetsenbord, en hervatten
  {
    const file = path.join(buildDir, "MFA-L01-I01", "index.html");
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    let page = await ctx.newPage();
    await page.goto(harness(file, 844));
    let f = frameOf(page); await f.waitForSelector(".main h2");
    await page.locator("#f").focus();
    let tabs = 0;
    const keyTo = async (sel, key = "Enter") => {
      for (let i = 0; i < 40; i++) {
        if (await f.evaluate((s) => document.activeElement && document.activeElement.matches(s), sel)) { await page.keyboard.press(key); await page.waitForTimeout(60); return; }
        await page.keyboard.press("Tab"); tabs++;
      }
      throw new Error("Niet bereikbaar met Tab: " + sel);
    };
    await keyTo(".actions .btn");
    await keyTo('[data-zone="verf"]'); await keyTo('[data-zone="zieken"]'); await keyTo(".actions .btn");
    const mid = await f.evaluate(() => document.documentElement.getAttribute("data-node"));
    await keyTo('[data-zone="gbrug"]'); await keyTo(".actions .btn");
    await keyTo('[data-zone="gacc"]'); await keyTo(".actions .btn");
    const endNode = await f.evaluate(() => document.documentElement.getAttribute("data-node"));
    const rec = await page.evaluate(() => window.received);
    report("MFA-L01-I01: alleen toetsenbord", endNode === "end" && rec.some((m) => m.type === "complete"), `tabs=${tabs} eindscherm=${endNode}`);
    await page.close();
    // Hervatten: nieuwe sessie, stop bij opdracht 2
    page = await ctx.newPage(); await page.goto(harness(file, 844));
    f = frameOf(page); await f.waitForSelector(".main h2");
    await f.locator(".actions .btn").click(); // intro met "al afgerond"
    await f.locator('[data-zone="zieken"]').click(); await f.locator(".actions .btn").last().click();
    await page.close();
    page = await ctx.newPage(); await page.goto(harness(file, 844));
    f = frameOf(page); await f.waitForSelector(".main h2");
    const prompt = await f.evaluate(() => document.documentElement.getAttribute("data-node"));
    await f.getByRole("button", { name: /Verder waar ik was/ }).click();
    const after = await f.evaluate(() => document.documentElement.getAttribute("data-node"));
    report("MFA-L01-I01: hervatten midden in de opdracht", prompt === "hervatten" && after === "task2", `melding=${prompt} na_hervatten=${after}`);
    await ctx.close();
  }

  // 4. Taalwissel met een proefvertaling en-GB (alleen voor de test, wordt daarna verwijderd)
  for (const mod of ["MC-L04-SL01", "MFA-L01-I01"]) {
    const dir = path.join(ROOT, "modules", mod);
    const nl = JSON.parse(fs.readFileSync(path.join(dir, "tekst.nl-NL.json"), "utf8"));
    const fake = Object.fromEntries(Object.entries(nl).map(([k, v]) => [k, "EN " + v]));
    const tmpFile = path.join(dir, "tekst.en-GB.json");
    const existed = fs.existsSync(tmpFile);
    if (!existed) fs.writeFileSync(tmpFile, JSON.stringify(fake));
    const tmpOut = path.join(outDir, "taalproef");
    try { execFileSync("python3", [path.join(ROOT, "build.py"), tmpOut, mod]); }
    finally { if (!existed) fs.unlinkSync(tmpFile); }
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage();
    await page.goto(harness(path.join(tmpOut, `${mod}-en-GB`, "index.html"), 844));
    const f = frameOf(page); await f.waitForSelector(".main h2");
    await f.locator(".actions .btn").click();
    const info = await f.evaluate(() => ({ lang: document.documentElement.lang, h1: document.querySelector("h1").textContent, h2: document.querySelector(".main h2").textContent, btnUI: [...document.querySelectorAll(".btn")].map((b) => b.textContent) }));
    await page.screenshot({ path: path.join(outDir, `${mod}-en-GB-proef.png`) });
    report(`${mod}: taalbestand en-GB wordt gebruikt`, info.lang === "en-GB" && info.h1.startsWith("EN ") && info.h2.includes("EN "), JSON.stringify(info));
    await ctx.close();
  }

  await browser.close();
  fs.writeFileSync(path.join(outDir, "toegankelijkheid-resultaat.json"), JSON.stringify(results, null, 2));
  process.exit(results.every((r) => r.ok) ? 0 : 1);
})();

// Technische proef MC-L04-SL01: telefoon met aanraken, alleen toetsenbord, hervatten,
// afronding naar de parent, opslag geblokkeerd en een lage blokhoogte.
// Gebruik: node test/proef.js <buildmap> <uitvoermap>
const { chromium, devices } = require("playwright");
const fs = require("fs");
const path = require("path");

const MOD = "MC-L04-SL01";
const buildDir = path.resolve(process.argv[2] || "../../build/code-blocks");
const outDir = path.resolve(process.argv[3] || "../../build/proef");
fs.mkdirSync(outDir, { recursive: true });
const file = "file://" + path.join(buildDir, MOD, "index.html");

function harness(height) {
  const h = path.join(outDir, `_harness_${height}.html`);
  fs.writeFileSync(h, `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">
  <style>body{margin:0;background:#eef1f5}iframe{display:block;width:100%;height:${height}px;border:0}</style></head>
  <body><iframe id="f" src="${file}" title="module"></iframe>
  <script>window.received=[];addEventListener('message',e=>window.received.push(e.data));</script></body></html>`);
  return "file://" + h;
}
const frameOf = (page) => page.frame({ url: /index\.html$/ });
const node = (f) => f.evaluate(() => document.documentElement.getAttribute("data-node"));
const vars = (f) => f.evaluate(() => window.SCENARIO.state().vars);
const received = async (page) => { await page.waitForTimeout(200); return page.evaluate(() => window.received); };

const results = [];
function report(name, ok, detail) { results.push({ name, ok, detail }); console.log(`${ok ? "GOED" : "FOUT"}  ${name}${detail ? "  " + detail : ""}`); }

// Tab tot het element met deze tekst focus heeft en druk dan op de toets.
async function keyTo(page, f, text, key = "Enter") {
  const seen = [];
  for (let i = 0; i < 60; i++) {
    const t = await f.evaluate(() => {
      const a = document.activeElement;
      if (!a || a === document.body) return "";
      return a.tagName === "INPUT" ? (a.closest("label") || a).innerText : (a.innerText || "");
    });
    seen.push(t.slice(0, 30));
    // De module zet de focus zelf op de volgende knop; die telt als bereikt zonder Tab.
    if (t.includes(text)) { await page.keyboard.press(key); await page.waitForTimeout(80); return i; }
    await page.keyboard.press("Tab");
  }
  throw new Error("Niet bereikbaar met Tab: " + text + " | gezien: " + seen.join(" / "));
}
async function focusVisible(f) {
  return f.evaluate(() => {
    const a = document.activeElement; if (!a || a === document.body) return false;
    const st = getComputedStyle(a.tagName === "INPUT" ? a.closest("label") || a : a);
    return st.outlineStyle !== "none" && parseFloat(st.outlineWidth) >= 2;
  });
}

(async () => {
  const browser = await chromium.launch();

  // 1. Telefoon met aanraken (iPhone 13-profiel), volledige juiste route met tikken.
  {
    const ctx = await browser.newContext({ ...devices["iPhone 13"] });
    const page = await ctx.newPage();
    const errors = []; page.on("pageerror", (e) => errors.push(String(e)));
    await page.goto(harness(844));
    const f = frameOf(page); await f.waitForSelector(".main h2");
    const tap = async (sel, n = 0) => { await f.locator(sel).nth(n).tap(); await page.waitForTimeout(60); };
    await tap(".actions .btn");
    for (const pick of [0, 0, 1]) { await tap(".options .opt", pick); await tap(".actions .btn"); }
    for (const n of [0, 2, 3, 5, 7]) await tap(".options .opt", n);
    await tap(".actions .btn"); await tap(".actions .btn");
    await tap(".options .opt", 0); await tap(".actions .btn");
    await tap(".options .opt", 0); await tap(".actions .btn");
    const boxes = f.locator("input[type=checkbox]");
    for (let i = 0; i < await boxes.count(); i++) await boxes.nth(i).tap();
    await tap(".actions .btn");
    const smallTargets = await f.evaluate(() => [...document.querySelectorAll("button, label.check")].filter((b) => b.getBoundingClientRect().height < 44).length);
    const overflow = await f.evaluate(() => [...document.querySelectorAll(".app,.main")].some((e) => e.scrollWidth > e.clientWidth + 1) || document.documentElement.scrollWidth > innerWidth + 1);
    const v = await vars(f), r = await received(page);
    await page.screenshot({ path: path.join(outDir, "proef-1-telefoon-debriefing.png") });
    report("Telefoon met aanraken, juiste route", (await node(f)) === "s9" && v.Punten === 6 && r.some((m) => m.type === "complete") && !overflow && smallTargets === 0 && !errors.length,
      `eindscherm=${await node(f)} punten=${v.Punten} berichten=${JSON.stringify(r)} knoppen<44px=${smallTargets} horizontaal_scrollen=${overflow}`);
    await ctx.close();
  }

  // 2. Alleen toetsenbord (Tab, Enter, spatie), omweg-route op desktopbreedte.
  {
    const ctx = await browser.newContext({ viewport: { width: 900, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(harness(900));
    const f = frameOf(page); await f.waitForSelector(".main h2");
    await page.locator("#f").focus();
    let tabs = 0, noFocusRing = 0;
    const step = async (text, key) => { tabs += await keyTo(page, f, text, key); };
    const ring = async () => { if (!(await focusVisible(f))) noFocusRing++; };
    await step("Begin de nacht");
    await step("Hij slaapt bijna"); await ring(); await step("Verder");
    await step("extra deken"); await step("Verder");
    await step("Meet nu");
    await step("De koorts verklaart"); await step("Verder");
    for (const t of ["Temperatuur", "Pols", "Ademhaling"]) await step(t);
    await step("Controleer"); await step("Naar het gesprek");
    for (const t of ["De waarden van nu", "gegeten", "Wat er sinds", "rederij", "film"]) { await step(t); await ring(); }
    await step("Controleer"); await step("Bel de arts");
    await step("Je loopt snel"); await step("Verder");
    await step("Verder");
    await step("Het gaat wel"); await step("Verder");
    for (const t of ["Patiëntevaluatieformulier", "Observatielijst", "Gegeven medicijnen", "Adviezen van de arts", "Persoonlijke medicijnen"]) { await step(t, "Space"); await ring(); }
    await step("Verder"); await step("Naar de debriefing");
    const v = await vars(f), r = await received(page);
    report("Alleen toetsenbord, omweg-route", (await node(f)) === "s9" && v.Tijdpad === "laat" && r.some((m) => m.type === "complete") && noFocusRing === 0,
      `eindscherm=${await node(f)} Tijdpad=${v.Tijdpad} tabs=${tabs} focus_zonder_zichtbare_rand=${noFocusRing}`);
    await ctx.close();
  }

  // 3. Hervatten na afsluiten midden in het scenario, daarna afronden en opnieuw openen.
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
    let page = await ctx.newPage();
    await page.goto(harness(844));
    let f = frameOf(page); await f.waitForSelector(".main h2");
    const click = async (sel, n = 0) => { await f.locator(sel).nth(n).click(); };
    await click(".actions .btn"); await click(".options .opt", 0); await click(".actions .btn");
    await click(".options .opt", 0); await click(".actions .btn"); // nu op s3, Tijdpad juist, Punten 2
    const before = { node: await node(f), vars: await vars(f) };
    await page.close(); // venster dicht
    page = await ctx.newPage();
    await page.goto(harness(844));
    f = frameOf(page); await f.waitForSelector(".main h2");
    const prompt = await node(f);
    await page.screenshot({ path: path.join(outDir, "proef-3-hervatten.png") });
    await f.getByRole("button", { name: "Verder waar ik was" }).click();
    const after = { node: await node(f), vars: await vars(f) };
    report("Hervatten midden in het scenario", prompt === "hervatten" && after.node === before.node && JSON.stringify(after.vars) === JSON.stringify(before.vars),
      `voor=${JSON.stringify(before)} melding=${prompt} na=${JSON.stringify(after)}`);
    // Afmaken
    await click(".options .opt", 1); await click(".actions .btn");
    for (const n of [0, 2, 3, 5, 7]) await click(".options .opt", n);
    await click(".actions .btn"); await click(".actions .btn");
    await click(".options .opt", 0); await click(".actions .btn");
    await click(".options .opt", 0); await click(".actions .btn");
    const boxes = f.locator("input[type=checkbox]"); for (let i = 0; i < await boxes.count(); i++) await boxes.nth(i).check();
    await click(".actions .btn");
    await page.waitForTimeout(200);
    const done1 = (await received(page)).filter((m) => m.type === "complete").length;
    await page.close();
    page = await ctx.newPage(); await page.goto(harness(844));
    f = frameOf(page); await f.waitForSelector(".main h2");
    const n2 = await node(f), r2 = await received(page);
    const note = await f.locator(".note", { hasText: "al afgerond" }).count() ? "al afgerond" : "";
    await page.screenshot({ path: path.join(outDir, "proef-3-al-afgerond.png") });
    report("Opnieuw openen na afronding", done1 === 1 && n2 === "intro" && r2.some((m) => m.type === "complete") && note.includes("al afgerond"),
      `afrondingsmeldingen_eerste_keer=${done1} scherm=${n2} melding_opnieuw_verstuurd=${r2.some((m) => m.type === "complete")}`);
    // Opnieuw beginnen wist de opslag
    await f.locator(".actions .btn").click(); await f.locator(".options .opt").nth(2).click(); await f.locator(".actions .btn").click();
    const midNode = await node(f);
    await page.close(); page = await ctx.newPage(); await page.goto(harness(844));
    f = frameOf(page); await f.waitForSelector(".main h2");
    const promptNode = await node(f);
    if (promptNode !== "hervatten") throw new Error("Geen hervatmelding; tussenstand " + midNode + ", scherm " + promptNode);
    await f.getByRole("button", { name: "Opnieuw beginnen" }).click();
    const n3 = await node(f), v3 = await vars(f);
    report("Opnieuw beginnen vanuit de hervatmelding", n3 === "intro" && v3.Punten === 0, `scherm=${n3} punten=${v3.Punten}`);
    await ctx.close();
  }

  // 4. Opslag geblokkeerd (bijvoorbeeld privévenster of strenge browserinstelling).
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    await ctx.addInitScript(() => { Object.defineProperty(window, "localStorage", { get() { throw new Error("geblokkeerd"); } }); });
    const page = await ctx.newPage();
    const errors = []; page.on("pageerror", (e) => errors.push(String(e)));
    await page.goto(harness(844));
    const f = frameOf(page); await f.waitForSelector(".main h2");
    const click = async (sel, n = 0) => { await f.locator(sel).nth(n).click(); };
    await click(".actions .btn");
    for (const pick of [0, 0, 1]) { await click(".options .opt", pick); await click(".actions .btn"); }
    for (const n of [0, 2, 3, 5, 7]) await click(".options .opt", n);
    await click(".actions .btn"); await click(".actions .btn");
    await click(".options .opt", 0); await click(".actions .btn");
    await click(".options .opt", 0); await click(".actions .btn");
    const boxes = f.locator("input[type=checkbox]"); for (let i = 0; i < await boxes.count(); i++) await boxes.nth(i).check();
    await click(".actions .btn");
    const r = await received(page);
    const nb = await node(f);
    report("Opslag geblokkeerd: module werkt zonder hervatten", nb === "s9" && r.some((m) => m.type === "complete") && !errors.length, `eindscherm=${nb} berichten=${JSON.stringify(r)} fouten=${errors.join("|")}`);
    await ctx.close();
  }

  // 5. Lage maximale blokhoogte in Rise (500 px): de inhoud scrolt binnen het blok.
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage();
    await page.goto(harness(500));
    const f = frameOf(page); await f.waitForSelector(".main h2");
    await f.locator(".actions .btn").click();
    await f.locator(".options .opt").nth(0).click();
    const btn = f.locator(".actions .btn").last();
    await btn.scrollIntoViewIfNeeded();
    const visible = await btn.isVisible();
    const scrolls = await f.evaluate(() => document.documentElement.scrollHeight > innerHeight);
    await btn.click();
    report("Blokhoogte 500 px: scrollen binnen het blok", visible && scrolls && (await node(f)) === "s2", `inhoud_hoger_dan_blok=${scrolls}`);
    await ctx.close();
  }

  await browser.close();
  fs.writeFileSync(path.join(outDir, "proefresultaat.json"), JSON.stringify(results, null, 2));
  process.exit(results.every((r) => r.ok) ? 0 : 1);
})();

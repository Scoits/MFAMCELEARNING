// Taalbestanden voor de Code Block-pakketten.
// De tekst van een module staat los van de structuur, zodat vertalen kan zonder de logica aan te raken
// (tekst in een Code Block gaat niet mee in de XLIFF-export van Rise).
//
//   node taal.js splits <moduleId>        data.js -> structuur.js + tekst.nl-NL.json (eenmalig)
//   node taal.js controleer <moduleId>    controleert dat iedere taal dezelfde sleutels heeft als nl
//   node taal.js csv <moduleId> <taal>    schrijft tekst.<taal>.csv (sleutel; nl; vertaling) voor een vertaler
const fs = require("fs"), vm = require("vm"), path = require("path");
const MODS = path.join(__dirname, "modules");

// Waarden onder deze sleutels zijn logica, geen tekst.
const SKIP = new Set(["id", "type", "next", "start", "var", "eq", "ne", "gte", "set", "inc", "vars", "key", "color", "dash", "quality", "if", "step", "steps_total", "version", "points", "count", "bonus", "correct", "retry", "highlightLast", "maxPoints", "sign", "target", "corridor"]);

function loadData(mod) {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(MODS, mod, "data.js"), "utf8"), ctx);
  return ctx.window.MODULE;
}

function split(obj, prefix, out) {
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => {
      const p = prefix + "." + i;
      if (typeof v === "string") { out[p] = v; obj[i] = null; } else if (v && typeof v === "object") split(v, p, out);
    });
    return;
  }
  for (const k of Object.keys(obj)) {
    const v = obj[k], p = prefix ? prefix + "." + k : k;
    if (SKIP.has(k)) continue;
    if (k === "vitals" && Array.isArray(v)) continue; // rijsleutels
    if (k === "steps" && typeof v === "number") continue;
    if (typeof v === "string") { out[p] = v; delete obj[k]; } else if (v && typeof v === "object") split(v, p, out);
  }
}

const cmd = process.argv[2], mod = process.argv[3];
if (cmd === "splits") {
  const M = loadData(mod), text = {};
  const src = fs.readFileSync(path.join(MODS, mod, "data.js"), "utf8");
  const header = src.slice(0, src.indexOf("window.MODULE"));
  split(M, "", text);
  const struct = JSON.stringify(M, null, 2).replace(/null/g, "null");
  fs.writeFileSync(path.join(MODS, mod, "structuur.js"),
    header.replace(/\s*\*\/\s*$/, "\n   Structuur zonder tekst; de tekst staat in tekst.<taal>.json. */\n") + "window.MODULE = " + struct + ";\n");
  fs.writeFileSync(path.join(MODS, mod, "tekst.nl-NL.json"), JSON.stringify(text, null, 2) + "\n");
  fs.unlinkSync(path.join(MODS, mod, "data.js"));
  console.log(`${mod}: ${Object.keys(text).length} tekstregels naar tekst.nl-NL.json`);
} else if (cmd === "controleer") {
  const nl = JSON.parse(fs.readFileSync(path.join(MODS, mod, "tekst.nl-NL.json"), "utf8"));
  let ok = true;
  for (const f of fs.readdirSync(path.join(MODS, mod)).filter((f) => /^tekst\.[\w-]+\.json$/.test(f) && f !== "tekst.nl-NL.json")) {
    const t = JSON.parse(fs.readFileSync(path.join(MODS, mod, f), "utf8"));
    const missing = Object.keys(nl).filter((k) => !(k in t) || !String(t[k]).trim());
    const extra = Object.keys(t).filter((k) => !(k in nl));
    console.log(`${mod} ${f}: ${missing.length} ontbrekend, ${extra.length} overbodig`);
    if (missing.length || extra.length) ok = false;
  }
  process.exit(ok ? 0 : 1);
} else if (cmd === "csv") {
  const lang = process.argv[4];
  const nl = JSON.parse(fs.readFileSync(path.join(MODS, mod, "tekst.nl-NL.json"), "utf8"));
  const tf = path.join(MODS, mod, `tekst.${lang}.json`);
  const t = fs.existsSync(tf) ? JSON.parse(fs.readFileSync(tf, "utf8")) : {};
  const q = (s) => '"' + String(s).replace(/"/g, '""') + '"';
  const rows = ["sleutel;nl;" + lang].concat(Object.keys(nl).map((k) => [k, nl[k], t[k] || ""].map(q).join(";")));
  fs.writeFileSync(path.join(MODS, mod, `tekst.${lang}.csv`), "﻿" + rows.join("\r\n") + "\r\n");
  console.log(`tekst.${lang}.csv geschreven (${rows.length - 1} regels)`);
} else {
  console.log("Gebruik: node taal.js splits|controleer|csv <moduleId> [taal]");
}

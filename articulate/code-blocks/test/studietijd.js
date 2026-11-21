// Doorlooptijd per pakket volgens de rekenregel uit de afspraken: leestijd = woorden / 150 minuten,
// plus 1 minuut per beslismoment (die minuut dekt het lezen van de vraag en de keuzes).
// Gerapporteerd: het kortste volledige pad (telt voor de studietijd) en het langste pad zonder herhaling.
// Gebruik: node test/studietijd.js
const fs = require("fs"), vm = require("vm"), path = require("path");
const MODS = path.join(__dirname, "../modules");
const words = (s) => String(s || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;

function load(mod) {
  const dir = path.join(MODS, mod), ctx = { window: {} };
  const structFile = fs.existsSync(path.join(dir, "structuur.js")) ? "structuur.js" : "data.js";
  vm.runInNewContext(fs.readFileSync(path.join(dir, structFile), "utf8"), ctx);
  const M = ctx.window.MODULE;
  const tf = path.join(dir, "tekst.nl-NL.json");
  if (structFile === "structuur.js" && fs.existsSync(tf)) {
    const T = JSON.parse(fs.readFileSync(tf, "utf8"));
    for (const p of Object.keys(T)) {
      const parts = p.split("."); let o = M;
      for (let i = 0; i < parts.length - 1; i++) { if (o[parts[i]] == null) o[parts[i]] = /^\d+$/.test(parts[i + 1]) ? [] : {}; o = o[parts[i]]; }
      o[parts[parts.length - 1]] = T[p];
    }
  }
  return M;
}
function blockWords(b) {
  if (!b) return 0; if (typeof b === "string") return words(b);
  let n = 0; for (const k of ["lead", "msg", "note", "from", "caption"]) n += words(b[k]);
  for (const k of ["steps", "list"]) (b[k] || []).forEach((t) => (n += words(t)));
  (b.kv || []).forEach((r) => (n += words(r[0]) + words(r[1])));
  (b.timeline || []).forEach((r) => (n += words(r[0]) + words(r[1])));
  (b.blocks || []).forEach((x) => (n += blockWords(x)));
  if (Array.isArray(b.vitals)) n += b.vitals.length * 12; // ongeveer 12 woorden leeswerk per rij in de observatielijst
  return n;
}
// Kosten van een scherm in minuten, met de gekozen optie (feedback lezen).
function nodeCost(n, opt) {
  let w = words(n.title) + (n.body || []).reduce((a, b) => a + blockWords(b), 0) + (n.extra || []).reduce((a, b) => a + blockWords(b), 0);
  (n.learn || []).forEach((t) => (w += words(t))); (n.items || []).forEach((t) => (w += words(t)));
  w += words(n.feedback);
  let d = 0;
  if (n.type === "choice" || n.type === "pick" || n.type === "checklist") d = 1;
  if (opt) w += words(opt.feedback);
  if (n.type === "pick") w += words(n.feedbackFull);
  return w / 150 + d;
}
function edges(M, id) {
  const n = M.nodes[id], out = [];
  const res = (nx) => (typeof nx === "string" ? [nx] : nx ? [nx.then, nx.else] : []);
  if (n.type === "debrief") return out;
  if (n.type === "choice") n.options.forEach((o) => { if (!o.retry) res(o.next || n.next).forEach((t) => out.push([t, nodeCost(n, o)])); });
  else res(n.next).forEach((t) => out.push([t, nodeCost(n)]));
  return out;
}
function paths(M) {
  // Kortste pad (Dijkstra) en langste pad zonder herhaling (diepte-eerst; de grafen zijn klein).
  const dist = { [M.start]: 0 }, done = new Set();
  while (true) {
    let cur = null; for (const k in dist) if (!done.has(k) && (cur === null || dist[k] < dist[cur])) cur = k;
    if (cur === null) break; done.add(cur);
    for (const [t, c] of edges(M, cur)) if (dist[t] === undefined || dist[cur] + c < dist[t]) dist[t] = dist[cur] + c;
  }
  const end = Object.keys(M.nodes).find((k) => M.nodes[k].type === "debrief");
  const endCost = nodeCost(M.nodes[end]);
  let longest = 0;
  (function dfs(id, acc, seen) {
    if (id === end) { longest = Math.max(longest, acc); return; }
    for (const [t, c] of edges(M, id)) if (!seen.has(t)) { seen.add(t); dfs(t, acc + c, seen); seen.delete(t); }
  })(M.start, 0, new Set([M.start]));
  return { kortst: dist[end] + endCost, langst: longest + endCost };
}
function mapTime(M) {
  let w = words(M.intro.title) + M.intro.body.reduce((a, b) => a + blockWords(b), 0) + words(M.end.title) + M.end.body.reduce((a, b) => a + blockWords(b), 0);
  M.tasks.forEach((t) => (w += words(t.prompt) + words(t.good) + M.zones.length * 3));
  return { kortst: w / 150 + M.tasks.length, langst: null };
}
const out = [];
for (const mod of fs.readdirSync(MODS).sort()) {
  const M = load(mod);
  const r = M.nodes ? paths(M) : mapTime(M);
  out.push({ module: mod, versie: M.version || "", kortste_pad_min: Math.round(r.kortst), langste_pad_min: r.langst ? Math.round(r.langst) : null });
  console.log(`${mod} (versie ${M.version || "-"}): kortste volledige pad ${r.kortst.toFixed(1)} min${r.langst ? `, langste pad ${r.langst.toFixed(1)} min` : ""}`);
}
if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify(out, null, 2));

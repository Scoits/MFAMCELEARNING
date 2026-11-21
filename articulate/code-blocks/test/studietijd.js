// Schat de doorlooptijd per module met de strenge rekenregel uit de afspraken:
// 150 woorden per minuut voor de zichtbare tekst op de juiste route, plus 1 minuut per beslismoment
// (die minuut dekt het lezen van de vraag en de keuzes).
const fs = require("fs"), vm = require("vm"), path = require("path");
const words = (s) => String(s || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
function blockWords(b) {
  if (!b) return 0; if (typeof b === "string") return words(b);
  let n = 0; for (const k of ["lead", "msg", "note", "from"]) n += words(b[k]);
  for (const k of ["steps", "list"]) (b[k] || []).forEach((t) => (n += words(t)));
  (b.kv || []).forEach((r) => (n += words(r[0]) + words(r[1])));
  (b.timeline || []).forEach((r) => (n += words(r[0]) + words(r[1])));
  (b.blocks || []).forEach((x) => (n += blockWords(x)));
  if (b.vitals) n += b.vitals.length * 12;
  return n;
}
for (const mod of fs.readdirSync(path.join(__dirname, "../modules"))) {
  const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(__dirname, "../modules", mod, "data.js"), "utf8"), ctx);
  const M = ctx.window.MODULE; let w = 0, d = 0;
  if (M.nodes) {
    let id = M.start, seen = new Set();
    while (id && !seen.has(id)) {
      seen.add(id); const n = M.nodes[id];
      w += words(n.title) + words(n.question); (n.body || []).forEach((b) => (w += blockWords(b))); (n.extra || []).forEach((b) => (w += blockWords(b)));
      (n.learn || []).forEach((t) => (w += words(t))); (n.items || []).forEach((t) => (w += words(t)));
      if (n.options) { d++;  }
      let next = n.next;
      if (n.type === "choice") { const o = n.options.reduce((a, b) => ((b.points || 0) > (a.points || 0) ? b : a)); w += words(o.feedback); next = o.next || n.next; }
      if (n.type === "pick") w += words(n.feedbackFull);
      if (n.type === "checklist") d++;
      id = typeof next === "string" ? next : next && next.then;
    }
  } else {
    [M.intro, M.end].forEach((s) => { w += words(s.title); s.body.forEach((b) => (w += blockWords(b))); });
    M.tasks.forEach((t) => { d++; w += words(t.prompt) + words(t.good) + M.zones.length * 3; });
  }
  console.log(`${mod}: ${w} woorden, ${d} beslismomenten, ${Math.round(w / 150 + d)} minuten`);
}

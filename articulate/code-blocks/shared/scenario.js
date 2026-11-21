/* Scenariomotor voor interactieve modules in een Rise 360 Code Block.
   De inhoud staat in window.MODULE (zie modules/<id>/data.js).
   Afronding: bij het bereiken van een node van type "debrief" stuurt de module
   window.parent.postMessage({ type: 'complete' }, '*'), de afrondingsmelding van Rise. */
(function () {
  "use strict";
  var M = window.MODULE;
  var UI = window.UI || {};
  function u(k) { return k in UI ? UI[k] : k; }
  /* Tekst uit het taalbestand (tekst.<taal>.json) op de juiste plek in de structuur zetten. */
  if (window.TEXT) Object.keys(window.TEXT).forEach(function (p) {
    var parts = p.split("."), o = M;
    for (var i = 0; i < parts.length - 1; i++) {
      var k = parts[i];
      if (o[k] == null) o[k] = /^\d+$/.test(parts[i + 1]) ? [] : {};
      o = o[k];
    }
    o[parts[parts.length - 1]] = window.TEXT[p];
  });
  var app = document.getElementById("app");
  /* Beweging: ingetogen, en helemaal uit bij de systeeminstelling Minder beweging. */
  var REDUCED = false;
  try { REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  var lastClock = null;
  function enter(into) {
    into.classList.remove("enter");
    void into.offsetWidth;
    Array.prototype.forEach.call(into.children, function (c, i) { c.style.setProperty("--i", Math.min(i, 8)); });
    into.classList.add("enter");
  }
  function countUp(elm, to, suffix) {
    if (REDUCED || !window.requestAnimationFrame) { elm.textContent = to + suffix; return; }
    var t0 = null, dur = 900;
    (function step(t) {
      if (t0 === null) t0 = t;
      var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      elm.textContent = Math.round(to * e) + suffix;
      if (k < 1) window.requestAnimationFrame(step);
    })(performance.now());
  }
  var state, completedSent = false;

  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else if (k === "text") e.textContent = attrs[k];
      else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    (children || []).forEach(function (c) { if (c) e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return e;
  }

  function reset() {
    state = { vars: JSON.parse(JSON.stringify(M.vars || {})), log: [], tried: {} };
    if (!("Punten" in state.vars)) state.vars.Punten = 0;
  }

  function sendComplete() {
    if (completedSent) return;
    completedSent = true;
    try { window.parent.postMessage({ type: "complete" }, "*"); } catch (e) { /* buiten Rise */ }
    document.documentElement.setAttribute("data-complete", "true");
  }

  /* Hervatten: de voortgang wordt bij ieder scherm in de browser bewaard (localStorage).
     Dat werkt per browser en apparaat; het gaat niet via Moodle. Als opslag niet mag,
     werkt de module gewoon zonder hervatten. */
  var KEY = "drtc-" + M.id + "-" + (M.version || "1");
  function save(data) { try { window.localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {} }
  function load() { try { var v = window.localStorage.getItem(KEY); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function clearSaved() { try { window.localStorage.removeItem(KEY); } catch (e) {} }

  function cond(c) {
    if (!c) return true;
    var v = state.vars[c.var];
    if ("eq" in c) return v === c.eq;
    if ("ne" in c) return v !== c.ne;
    if ("gte" in c) return v >= c.gte;
    return true;
  }
  function resolveNext(n) {
    if (!n) return null;
    if (typeof n === "string") return n;
    return cond(n.if) ? n.then : n.else;
  }
  function tpl(s) {
    return String(s).replace(/\{(\w+)\}/g, function (m, k) {
      if (k === "max") return M.maxPoints;
      return k in state.vars ? state.vars[k] : m;
    });
  }

  /* Inhoudsblokken */
  function vitalsRows(keys) {
    return keys.map(function (k) { return Object.assign({ key: k }, M.vitals.rows[k]); });
  }
  function renderVitals(b) {
    var keys = b.vitals.filter(function (k) { return typeof k === "string" ? true : cond(k.if); })
      .map(function (k) { return typeof k === "string" ? k : k.key; });
    var rows = vitalsRows(keys);
    var cols = M.vitals.columns;
    var wrap = el("div");
    var table = el("table", { class: "vitals" }, [
      el("caption", { class: "sr", text: b.caption || u("observatielijst") }),
      el("thead", null, [el("tr", null, cols.map(function (c) { return el("th", { scope: "col", text: c.label }); }))]),
      el("tbody", null, rows.map(function (r, i) {
        return el("tr", { class: (b.highlightLast && i === rows.length - 1) ? "now" : "" },
          cols.map(function (c) { return el("td", { "data-label": c.label, text: r[c.key] != null ? String(r[c.key]) : u("nietGemeten") }); }));
      }))
    ]);
    wrap.appendChild(el("div", { class: "table-wrap", tabindex: "0", role: "region", "aria-label": b.caption || u("observatielijst") }, [table]));
    if (b.chart) wrap.appendChild(renderChart(rows));
    if (b.caption) wrap.appendChild(el("p", { class: "caption", text: b.caption }));
    return wrap;
  }
  function renderChart(rows) {
    var series = M.vitals.chart; /* [{key,label,color,dash}] */
    var W = 640, H = 220, padL = 34, padR = 96, padT = 12, padB = 30;
    var max = 0;
    series.forEach(function (s) { rows.forEach(function (r) { var v = num(r[s.key]); if (v != null) max = Math.max(max, v); }); });
    max = Math.ceil((max + 10) / 20) * 20;
    var x = function (i) { return padL + (rows.length === 1 ? 0 : i * (W - padL - padR) / (rows.length - 1)); };
    var y = function (v) { return padT + (H - padT - padB) * (1 - v / max); };
    var svg = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Verloop van ' +
      series.map(function (s) { return s.label; }).join(", ") + ' over de tijd">';
    for (var g = 0; g <= max; g += 40) {
      svg += '<line x1="' + padL + '" x2="' + (W - padR) + '" y1="' + y(g) + '" y2="' + y(g) + '" stroke="#e3e8ee"/>' +
        '<text x="' + (padL - 6) + '" y="' + (y(g) + 4) + '" font-size="11" text-anchor="end" fill="#5b6776">' + g + "</text>";
    }
    rows.forEach(function (r, i) {
      svg += '<text x="' + x(i) + '" y="' + (H - 10) + '" font-size="11" text-anchor="middle" fill="#5b6776">' + r.tijd + "</text>";
    });
    series.forEach(function (s) {
      var pts = [];
      rows.forEach(function (r, i) { var v = num(r[s.key]); if (v != null) pts.push([x(i), y(v), v]); });
      if (!pts.length) return;
      svg += '<polyline class="line" pathLength="1" fill="none" stroke="' + s.color + '" stroke-width="3" ' + (s.dash ? 'stroke-dasharray="' + s.dash + '" ' : "") +
        'points="' + pts.map(function (p) { return p[0] + "," + p[1]; }).join(" ") + '"/>';
      pts.forEach(function (p, j) { svg += '<circle class="dot" style="--d:' + j + '" cx="' + p[0] + '" cy="' + p[1] + '" r="3.5" fill="' + s.color + '"/>'; });
      var last = pts[pts.length - 1];
      svg += '<text x="' + (last[0] + 8) + '" y="' + (last[1] + 4) + '" font-size="12" font-weight="600" fill="' + s.color + '">' + s.label + "</text>";
    });
    svg += "</svg>";
    var box = el("div", { class: "chart", html: svg });
    box.appendChild(el("div", { class: "legend" }, series.map(function (s) {
      var sp = el("span", { text: s.label }); sp.style.color = s.color; return sp;
    })));
    return box;
  }
  function num(v) {
    if (v == null) return null;
    var m = String(v).replace(",", ".").match(/^\d+(\.\d+)?/);
    return m ? parseFloat(m[0]) : null;
  }

  function renderBlocks(blocks, into) {
    (blocks || []).forEach(function (b) {
      if (b == null) return;
      if (typeof b === "string") { into.appendChild(el("p", { html: tpl(b) })); return; }
      if (b.if && !cond(b.if)) return;
      if (b.blocks) { renderBlocks(b.blocks, into); return; }
      if (b.lead) into.appendChild(el("p", { class: "lead", html: b.lead }));
      if (b.msg) into.appendChild(el("div", { class: "msg" }, [el("div", { class: "from", text: b.from || u("bericht") }), el("div", { html: b.msg })]));
      if (b.note) into.appendChild(el("div", { class: "note", html: b.note }));
      if (b.steps) into.appendChild(el("ol", { class: "steps" }, b.steps.map(function (s) { return el("li", { html: s }); })));
      if (b.list) into.appendChild(el("ul", { class: "plain" }, b.list.map(function (s) { return el("li", { html: s }); })));
      if (b.kv) into.appendChild(el("div", { class: "table-wrap" }, [el("table", { class: "kv" }, [el("tbody", null,
        b.kv.map(function (r) { return el("tr", null, [el("td", { text: r[0] }), el("td", { html: r[1] })]); }))])]));
      if (b.vitals) into.appendChild(renderVitals(b));
      if (b.timeline) into.appendChild(el("ol", { class: "timeline" }, b.timeline.map(function (t) {
        return el("li", null, [el("b", { text: t[0] }), document.createTextNode(t[1])]);
      })));
    });
  }

  /* Opbouw scherm */
  function shell() {
    app.innerHTML = "";
    var logo = el("div", { class: "logo" }, [el("img", { src: window.DRTC_LOGO || "logo.png", alt: u("logo") })]);
    var top = el("header", { class: "top" }, [
      logo,
      el("div", { class: "titles" }, [el("div", { class: "code", text: M.code }), el("h1", { text: M.title })]),
      M.badge ? el("span", { class: "badge", text: M.badge }) : null
    ]);
    var prog = el("div", { class: "progress", role: "progressbar", "aria-label": u("voortgang"), "aria-valuemin": "0", "aria-valuemax": "100" }, [el("span")]);
    var main = el("main", { class: "main", tabindex: "-1", "aria-live": "polite" });
    app.appendChild(top); app.appendChild(prog); app.appendChild(main);
    var foot = [M.footer, M.version ? u("versie") + " " + M.version : ""].filter(Boolean).join(" ");
    if (foot) app.appendChild(el("footer", { class: "foot", text: foot }));
    return main;
  }
  var mainEl, progEl;

  function setProgress(p) {
    var pct = Math.max(0, Math.min(100, Math.round(p * 100)));
    progEl.style.width = pct + "%";
    progEl.parentNode.setAttribute("aria-valuenow", String(pct));
  }

  function header(node, into) {
    var meta = el("div", { class: "scene-meta" });
    if (node.time) {
      var tm = tpl(typeof node.time === "string" ? node.time : (cond(node.time.if) ? node.time.then : node.time.else));
      meta.appendChild(el("span", { class: "clock" + (lastClock !== null && lastClock !== tm ? " tick" : ""), text: tm }));
      lastClock = tm;
    }
    if (node.label) meta.appendChild(el("span", { class: "scene-title", text: node.label }));
    if (meta.childNodes.length) into.appendChild(meta);
    if (node.title) into.appendChild(el("h2", { text: tpl(node.title) }));
  }

  function go(id) {
    var node = M.nodes[id];
    if (!node) throw new Error("Onbekende node " + id);
    state.current = id;
    if (node.type === "debrief") save({ done: true });
    else if (node.type !== "intro") save({ node: id, vars: state.vars, log: state.log, tried: state.tried });
    else if (!completedSent) clearSaved();
    mainEl.innerHTML = "";
    setProgress(node.type === "debrief" ? 1 : (node.step || 0) / (M.steps || 10));
    header(node, mainEl);
    renderBlocks(node.body, mainEl);
    var r = RENDER[node.type];
    r(node, mainEl, id);
    document.documentElement.setAttribute("data-node", id);
    enter(mainEl);
    try { window.scrollTo(0, 0); } catch (e) {}
    var h = mainEl.querySelector("h2");
    if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
  }

  function nextButton(label, onClick) {
    return el("div", { class: "actions" }, [el("button", { class: "btn", type: "button", text: label || u("verder"), onclick: onClick })]);
  }

  function quality(o) {
    if (o.quality) return o.quality;
    return o.points > 0 ? "good" : "bad";
  }
  var VERDICT = { good: u("goed"), mid: u("matig"), bad: u("fout") };

  var RENDER = {
    intro: function (node, into) {
      into.appendChild(nextButton(node.button || u("start"), function () { go(resolveNext(node.next)); }));
    },
    info: function (node, into) {
      if (node.feedback) into.appendChild(el("div", { class: "feedback " + (node.feedbackType || "info") }, [el("p", { html: node.feedback })]));
      if (node.set) Object.assign(state.vars, node.set);
      if (node.inc) for (var k in node.inc) state.vars[k] = (state.vars[k] || 0) + node.inc[k];
      into.appendChild(nextButton(node.button, function () { go(resolveNext(node.next)); }));
    },
    choice: function (node, into, id) {
      if (node.question) into.appendChild(el("p", { class: "question", id: "q-" + id, html: tpl(node.question) }));
      var list = el("div", { class: "options", role: "group", "aria-labelledby": "q-" + id });
      var fbBox = el("div");
      var buttons = node.options.map(function (o, i) {
        var key = String.fromCharCode(65 + i);
        var b = el("button", { class: "opt", type: "button", "data-key": key }, [el("span", { class: "key", "aria-hidden": "true", text: key }), el("span", { html: o.label })]);
        b.addEventListener("click", function () {
          buttons.forEach(function (x) { x.disabled = true; x.classList.add("dim"); });
          b.classList.remove("dim"); b.classList.add("chosen");
          var q = quality(o);
          var first = !state.tried[id];
          state.tried[id] = true;
          /* Een punt telt alleen bij de eerste poging op een scherm. */
          if (first) state.vars.Punten += o.points || 0;
          if (o.set) Object.assign(state.vars, o.set);
          state.log.push({ node: node.title, choice: o.label, q: q });
          b.classList.add("pick-" + q);
          var fb = el("div", { class: "feedback appear " + q, role: "status" }, [el("div", { class: "verdict", text: o.verdict || VERDICT[q] }), el("p", { html: o.feedback })]);
          fbBox.appendChild(fb);
          if (o.retry) fbBox.appendChild(nextButton(u("opnieuwProberen"), function () { go(id); }));
          else fbBox.appendChild(nextButton(o.button || node.button, function () { go(resolveNext(o.next || node.next)); }));
          fb.scrollIntoView && fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
          fbBox.querySelector(".btn").focus({ preventScroll: true });
        });
        list.appendChild(b);
        return b;
      });
      into.appendChild(list);
      into.appendChild(fbBox);
    },
    /* Meerdere kaartjes kiezen, daarna controleren. */
    pick: function (node, into, id) {
      if (node.question) into.appendChild(el("p", { class: "question", id: "q-" + id, html: tpl(node.question) }));
      var n = node.count;
      var status = el("p", { class: "hint", "aria-live": "polite" });
      var list = el("div", { class: "options", role: "group", "aria-labelledby": "q-" + id });
      var chosen = [];
      var check = el("button", { class: "btn", type: "button", text: node.checkLabel || u("controleer"), disabled: "disabled" });
      var items = node.options.map(function (o, i) {
        var key = String.fromCharCode(65 + i);
        var b = el("button", { class: "opt", type: "button", "aria-pressed": "false" }, [el("span", { class: "key", "aria-hidden": "true", text: key }), el("span", { html: o.label })]);
        b.addEventListener("click", function () {
          var at = chosen.indexOf(i);
          if (at >= 0) chosen.splice(at, 1); else if (chosen.length < n) chosen.push(i); else return;
          b.setAttribute("aria-pressed", at >= 0 ? "false" : "true");
          upd();
        });
        list.appendChild(b);
        return b;
      });
      function upd() {
        status.textContent = u("gekozen").replace("{x}", chosen.length).replace("{n}", n);
        if (chosen.length === n) check.removeAttribute("disabled"); else check.setAttribute("disabled", "disabled");
      }
      upd();
      into.appendChild(list);
      into.appendChild(status);
      var act = el("div", { class: "actions" }, [check]);
      into.appendChild(act);
      var fbBox = el("div");
      into.appendChild(fbBox);
      check.addEventListener("click", function () {
        var right = 0, wrong = 0;
        items.forEach(function (b, i) {
          var o = node.options[i], sel = chosen.indexOf(i) >= 0;
          b.disabled = true;
          if (sel && o.correct) right++;
          if (sel && !o.correct) wrong++;
          if (o.correct) { b.classList.add("is-good"); b.appendChild(el("span", { class: "tag", text: sel ? u("juistGekozen") : u("hoortErbij") })); }
          else if (sel) { b.classList.add("is-bad"); b.appendChild(el("span", { class: "tag", text: u("hoortErNietBij") })); }
          else b.classList.add("dim");
          if (sel && o.feedback) b.appendChild(el("span", { class: "tag", style: "font-weight:400;color:inherit", text: o.feedback }));
        });
        act.remove();
        if (node.var) state.vars[node.var] = right;
        var full = right === node.options.filter(function (o) { return o.correct; }).length && wrong === 0;
        if (full && node.bonus) state.vars.Punten += node.bonus;
        var q = full ? "good" : (right > 0 ? "mid" : "bad");
        if (node.bonus) state.log.push({ node: node.title, choice: right + " van " + n + " juist", q: q });
        fbBox.appendChild(el("div", { class: "feedback " + (node.bonus ? q : "info"), role: "status" }, [
          el("div", { class: "verdict", text: node.bonus ? u("aantalJuist").replace("{x}", right).replace("{n}", n) : u("uitleg") }),
          el("p", { html: full ? node.feedbackFull : node.feedbackPartial })]));
        fbBox.appendChild(nextButton(node.button, function () { go(resolveNext(node.next)); }));
        fbBox.querySelector(".btn").focus({ preventScroll: true });
      });
    },
    checklist: function (node, into) {
      var list = el("div", { class: "options" });
      var boxes = [];
      var btnWrap = nextButton(node.button, function () { go(resolveNext(node.next)); });
      var btn = btnWrap.querySelector(".btn");
      btn.setAttribute("disabled", "disabled");
      var hint = el("p", { class: "hint", "aria-live": "polite" });
      node.items.forEach(function (t, i) {
        var cb = el("input", { type: "checkbox", id: "c" + i });
        var lab = el("label", { class: "check", for: "c" + i }, [cb, el("span", { html: t })]);
        cb.addEventListener("change", function () {
          lab.classList.toggle("done", cb.checked);
          var all = boxes.every(function (b) { return b.checked; });
          if (all) btn.removeAttribute("disabled"); else btn.setAttribute("disabled", "disabled");
          hint.textContent = all ? u("allesAangevinkt") : u("vinkAlles");
        });
        boxes.push(cb);
        list.appendChild(lab);
      });
      hint.textContent = u("vinkAlles");
      into.appendChild(list); into.appendChild(hint); into.appendChild(btnWrap);
    },
    debrief: function (node, into) {
      sendComplete();
      if (M.maxPoints) {
        var pts = state.vars.Punten, numEl = el("div", { class: "num", "aria-hidden": "true", text: "0 / " + M.maxPoints });
        var bar = el("span");
        into.appendChild(el("div", { class: "score" }, [
          el("div", { class: "num-wrap" }, [numEl, el("span", { class: "sr", text: pts + " / " + M.maxPoints }),
            el("div", { class: "meter", "aria-hidden": "true" }, [bar])]),
          el("div", { text: tpl(node.scoreText || u("score")) })]));
        countUp(numEl, pts, " / " + M.maxPoints);
        var pct = Math.round(100 * pts / M.maxPoints) + "%";
        if (REDUCED) bar.style.width = pct; else setTimeout(function () { bar.style.width = pct; }, 60);
      }
      if (node.extra) renderBlocks(node.extra, into);
      if (node.learn) {
        into.appendChild(el("h2", { text: node.learnTitle || u("leerpunten"), style: "font-size:18px" }));
        into.appendChild(el("ol", { class: "learn" }, node.learn.map(function (t) { return el("li", { html: t }); })));
      }
      if (state.log.length) {
        var d = el("details", { class: "review" }, [el("summary", { text: u("bekijkKeuzes") })]);
        d.appendChild(el("ol", null, state.log.map(function (l) {
          return el("li", null, [el("span", { class: "q-" + l.q, text: VERDICT[l.q] + ". " }), el("span", { html: (l.node ? l.node + ": " : "") + l.choice })]);
        })));
        into.appendChild(d);
      }
      if (node.after) into.appendChild(el("p", { class: "hint", html: node.after }));
      into.appendChild(el("div", { class: "actions" }, [el("button", { class: "btn secondary", type: "button", text: u("opnieuw"), onclick: function () { clearSaved(); reset(); go(M.start); } })]));
    }
  };

  function resumePrompt(saved) {
    mainEl.innerHTML = "";
    var node = M.nodes[saved.node];
    setProgress((node.step || 0) / (M.steps || 10));
    document.documentElement.setAttribute("data-node", "hervatten");
    var h = el("h2", { text: u("hervatTitel"), tabindex: "-1" });
    mainEl.appendChild(h);
    mainEl.appendChild(el("p", { text: u("hervatTekst").replace("{scherm}", node.label || node.title) }));
    mainEl.appendChild(el("div", { class: "actions" }, [
      el("button", { class: "btn", type: "button", text: u("hervatVerder"), onclick: function () {
        state.vars = saved.vars; state.log = saved.log || []; state.tried = saved.tried || {};
        go(saved.node);
      } }),
      el("button", { class: "btn secondary", type: "button", text: u("hervatOpnieuw"), onclick: function () { clearSaved(); reset(); go(M.start); } })
    ]));
    h.focus({ preventScroll: true });
  }

  function boot() {
    reset();
    mainEl = shell();
    progEl = app.querySelector(".progress span");
    document.title = M.code + " " + M.title;
    var saved = load();
    if (saved && saved.done) {
      /* Al eerder afgerond: afronding opnieuw doorgeven en vers beginnen. */
      sendComplete();
      go(M.start);
      mainEl.insertBefore(el("p", { class: "note", text: u("alAfgerond") }), mainEl.querySelector(".actions"));
    } else if (saved && saved.node && M.nodes[saved.node]) {
      resumePrompt(saved);
    } else {
      go(M.start);
    }
  }
  window.SCENARIO = { go: go, state: function () { return state; } };
  boot();
})();

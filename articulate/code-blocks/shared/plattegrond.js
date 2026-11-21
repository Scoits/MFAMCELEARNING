/* Tikopdracht op een plattegrond voor een Rise 360 Code Block.
   Structuur in window.MODULE, tekst in window.TEXT (tekst.<taal>.json), knopteksten in window.UI.
   Afronding: als alle opdrachten goed zijn, stuurt de module
   window.parent.postMessage({ type: 'complete' }, '*'), de afrondingsmelding van Rise.
   Hervatten: de stand wordt per browser bewaard in localStorage; zonder opslag werkt de module gewoon. */
(function () {
  "use strict";
  var M = window.MODULE;
  var UI = window.UI || {};
  function u(k) { return k in UI ? UI[k] : k; }
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
  var task = 0, completedSent = false, mainEl, progEl;
  var KEY = "drtc-" + M.id + "-" + (M.version || "1");
  function save(d) { try { window.localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
  function load() { try { var v = window.localStorage.getItem(KEY); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function clearSaved() { try { window.localStorage.removeItem(KEY); } catch (e) {} }

  var SIGNS = {
    eerstehulp: '<svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><rect width="40" height="40" rx="3" fill="#1b7a3d"/><path d="M15 7h10v8h8v10h-8v8H15v-8H7V15h8z" fill="#fff"/></svg>',
    aed: '<svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><rect width="40" height="40" rx="3" fill="#1b7a3d"/><path d="M20 33C8 25 5 19 5 14a7.5 7.5 0 0 1 15-1.5A7.5 7.5 0 0 1 35 14c0 5-3 11-15 19z" fill="#fff"/><path d="M22 10l-6 11h5l-3 9 7-12h-5l3-8z" fill="#1b7a3d"/></svg>'
  };

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
  function sign(kind) {
    if (kind === "brancard") return el("span", { class: "sign brancard", "aria-hidden": "true", text: M.map.signs.brancard.text });
    return el("span", { class: "sign", html: SIGNS[kind] });
  }
  function blocks(list, into) {
    (list || []).forEach(function (b) {
      if (typeof b === "string") into.appendChild(el("p", { html: b }));
      else if (b && b.list) into.appendChild(el("ul", { class: "plain" }, b.list.map(function (t) { return el("li", { html: t }); })));
    });
  }
  function sendComplete() {
    if (completedSent) return;
    completedSent = true;
    try { window.parent.postMessage({ type: "complete" }, "*"); } catch (e) {}
    document.documentElement.setAttribute("data-complete", "true");
  }
  function setProgress(p) { progEl.style.width = Math.round(p * 100) + "%"; }
  function focusHeading() {
    try { window.scrollTo(0, 0); } catch (e) {}
    var h = mainEl.querySelector("h2"); if (h) h.focus({ preventScroll: true });
  }
  function actions(btns) { return el("div", { class: "actions" }, btns); }
  function button(text, onclick, secondary) { return el("button", { class: "btn" + (secondary ? " secondary" : ""), type: "button", text: text, onclick: onclick }); }

  function shell() {
    app.innerHTML = "";
    app.appendChild(el("header", { class: "top" }, [
      el("div", { class: "logo" }, [el("img", { src: window.DRTC_LOGO || "logo.png", alt: u("logo") })]),
      el("div", { class: "titles" }, [el("div", { class: "code", text: M.code }), el("h1", { text: M.title })]),
      M.badge ? el("span", { class: "badge", text: M.badge }) : null
    ]));
    app.appendChild(el("div", { class: "progress", role: "progressbar", "aria-label": u("voortgang"), "aria-valuemin": "0", "aria-valuemax": "100" }, [el("span")]));
    mainEl = el("main", { class: "main", tabindex: "-1" });
    app.appendChild(mainEl);
    var foot = [M.footer, M.version ? u("versie") + " " + M.version : ""].filter(Boolean).join(" ");
    app.appendChild(el("footer", { class: "foot", text: foot }));
    progEl = app.querySelector(".progress span");
  }

  function legend() {
    return el("div", { class: "legend-map" }, ["eerstehulp", "aed", "brancard"].map(function (k) {
      return el("span", null, [sign(k), document.createTextNode(M.map.signs[k].legend)]);
    }));
  }

  function intro(note) {
    mainEl.innerHTML = "";
    setProgress(0);
    document.documentElement.setAttribute("data-node", "intro");
    if (!completedSent) clearSaved();
    mainEl.appendChild(el("h2", { text: M.intro.title, tabindex: "-1" }));
    blocks(M.intro.body, mainEl);
    if (note) mainEl.appendChild(el("p", { class: "note", text: note }));
    mainEl.appendChild(legend());
    mainEl.appendChild(actions([button(u("start"), function () { task = 0; showTask(); })]));
    focusHeading();
  }

  function resumePrompt(saved) {
    mainEl.innerHTML = "";
    setProgress(saved.task / M.tasks.length);
    document.documentElement.setAttribute("data-node", "hervatten");
    mainEl.appendChild(el("h2", { text: u("hervatTitel"), tabindex: "-1" }));
    mainEl.appendChild(el("p", { text: u("hervatTekst").replace("{scherm}", M.tasks[saved.task].prompt) }));
    mainEl.appendChild(actions([
      button(u("hervatVerder"), function () { task = saved.task; showTask(); }),
      button(u("hervatOpnieuw"), function () { clearSaved(); intro(); }, true)
    ]));
    focusHeading();
  }

  function showTask() {
    var t = M.tasks[task];
    save({ task: task });
    mainEl.innerHTML = "";
    setProgress(task / M.tasks.length);
    document.documentElement.setAttribute("data-node", "task" + (task + 1));
    var count = u("opdracht").replace("{x}", task + 1).replace("{n}", M.tasks.length);
    mainEl.appendChild(el("h2", { tabindex: "-1", class: "task" }, [
      el("span", { class: "count", text: count }), el("span", { class: "sr", text: ": " }), el("span", { class: "prompt", text: t.prompt })
    ]));
    mainEl.appendChild(el("ul", { class: "found", "aria-label": u("gevondenLijst") }, M.tasks.map(function (x, i) {
      return el("li", { class: i < task ? "ok" : "", text: (i < task ? u("gevonden") + ": " : "") + x.name });
    })));

    var deck = el("div", { class: "deck", role: "group", "aria-label": M.map.label });
    var fbBox = el("div", { "aria-live": "polite" });
    var buttons = {};
    M.zones.forEach(function (z) {
      var label = z.label.replace(/­/g, "") + (z.sign ? ", " + M.map.signs[z.sign].spoken : "");
      var b = el("button", { class: "room" + (z.corridor ? " corridor" : ""), type: "button", "data-zone": z.key, "aria-label": label },
        [el("span", { text: z.label }), z.sign ? sign(z.sign) : null]);
      b.style.gridArea = z.key;
      M.tasks.forEach(function (x, i) { if (i < task && x.target === z.key) b.classList.add("was-found"); });
      b.addEventListener("click", function () { tap(z, b, t, buttons, fbBox); });
      buttons[z.key] = b;
      deck.appendChild(b);
    });
    var hull = el("div", { class: "hull" }, [deck, el("span", { class: "ship-label bow", "aria-hidden": "true", text: M.map.bow })]);
    mainEl.appendChild(el("div", { class: "ship-wrap" }, [hull, el("span", { class: "ship-label stern", "aria-hidden": "true", text: M.map.stern })]));
    mainEl.appendChild(legend());
    mainEl.appendChild(fbBox);
    focusHeading();
  }

  function tap(z, b, t, buttons, fbBox) {
    Object.keys(buttons).forEach(function (k) {
      var x = buttons[k]; x.classList.remove("is-bad");
      var tag = x.querySelector(".rtag"); if (tag && !x.classList.contains("is-good")) tag.remove();
    });
    fbBox.innerHTML = "";
    if (z.key === t.target) {
      Object.keys(buttons).forEach(function (k) { buttons[k].disabled = true; });
      b.classList.add("is-good");
      b.appendChild(el("span", { class: "rtag", text: u("juist") }));
      fbBox.appendChild(el("div", { class: "feedback good", role: "status" }, [el("div", { class: "verdict", text: u("gevonden") }), el("p", { text: t.good })]));
      var last = task === M.tasks.length - 1;
      fbBox.appendChild(actions([button(last ? u("afronden") : u("volgendeOpdracht"), function () { if (last) end(); else { task++; showTask(); } })]));
      fbBox.querySelector(".btn").focus({ preventScroll: true });
    } else {
      b.classList.add("is-bad");
      b.appendChild(el("span", { class: "rtag", text: u("nietHier") }));
      fbBox.appendChild(el("div", { class: "feedback bad", role: "status" }, [el("div", { class: "verdict", text: u("probeerHetOpnieuw") }), el("p", { text: t.wrong[z.key] || t.wrong._ })]));
    }
    if (fbBox.scrollIntoView) fbBox.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function end() {
    save({ done: true });
    mainEl.innerHTML = "";
    setProgress(1);
    document.documentElement.setAttribute("data-node", "end");
    sendComplete();
    mainEl.appendChild(el("h2", { text: M.end.title, tabindex: "-1" }));
    blocks(M.end.body, mainEl);
    if (M.end.after) mainEl.appendChild(el("p", { class: "hint", text: M.end.after }));
    mainEl.appendChild(actions([button(u("opnieuw"), function () { clearSaved(); intro(); }, true)]));
    focusHeading();
  }

  document.title = M.code + " " + M.title;
  shell();
  var saved = load();
  if (saved && saved.done) { sendComplete(); intro(u("alAfgerondOnderdeel")); }
  else if (saved && typeof saved.task === "number" && M.tasks[saved.task]) resumePrompt(saved);
  else intro();
})();

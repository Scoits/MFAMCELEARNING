/* Tikopdracht op een plattegrond voor een Rise 360 Code Block.
   De inhoud staat in window.MODULE (zie modules/MFA-L01-I01/data.js).
   Afronding: als alle opdrachten goed zijn, stuurt de module
   window.parent.postMessage({ type: 'complete' }, '*'). */
(function () {
  "use strict";
  var M = window.MODULE;
  var app = document.getElementById("app");
  var task, found, completedSent = false, mainEl, progEl;

  var SIGNS = {
    eerstehulp: '<svg viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="3" fill="#1b7a3d"/><path d="M15 7h10v8h8v10h-8v8H15v-8H7V15h8z" fill="#fff"/></svg>',
    aed: '<svg viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="3" fill="#1b7a3d"/><path d="M20 33C8 25 5 19 5 14a7.5 7.5 0 0 1 15-1.5A7.5 7.5 0 0 1 35 14c0 5-3 11-15 19z" fill="#fff"/><path d="M22 10l-6 11h5l-3 9 7-12h-5l3-8z" fill="#1b7a3d"/></svg>'
  };
  var SIGN_TEXT = { eerstehulp: "teken eerste hulp", aed: "teken AED", brancard: "aanduiding brancard" };

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
    if (kind === "brancard") return el("span", { class: "sign brancard", "aria-hidden": "true", text: "BRANCARD" });
    return el("span", { class: "sign", html: SIGNS[kind] });
  }
  function blocks(list, into) {
    list.forEach(function (b) {
      if (typeof b === "string") into.appendChild(el("p", { html: b }));
      else if (b.list) into.appendChild(el("ul", { class: "plain" }, b.list.map(function (t) { return el("li", { html: t }); })));
    });
  }
  function sendComplete() {
    if (completedSent) return;
    completedSent = true;
    try { window.parent.postMessage({ type: "complete" }, "*"); } catch (e) {}
    document.documentElement.setAttribute("data-complete", "true");
  }
  function setProgress(p) { progEl.style.width = Math.round(p * 100) + "%"; }

  function shell() {
    app.innerHTML = "";
    app.appendChild(el("header", { class: "top" }, [
      el("div", { class: "logo" }, [el("img", { src: window.DRTC_LOGO || "logo.png", alt: "De Ruyter Training & Consultancy" })]),
      el("div", { class: "titles" }, [el("div", { class: "code", text: M.code }), el("h1", { text: M.title })]),
      M.badge ? el("span", { class: "badge", text: M.badge }) : null
    ]));
    app.appendChild(el("div", { class: "progress" }, [el("span")]));
    mainEl = el("main", { class: "main", tabindex: "-1" });
    app.appendChild(mainEl);
    if (M.footer) app.appendChild(el("footer", { class: "foot", text: M.footer }));
    progEl = app.querySelector(".progress span");
  }

  function intro() {
    mainEl.innerHTML = "";
    setProgress(0);
    document.documentElement.setAttribute("data-node", "intro");
    mainEl.appendChild(el("h2", { text: M.intro.title, tabindex: "-1" }));
    blocks(M.intro.body, mainEl);
    mainEl.appendChild(legend());
    mainEl.appendChild(el("div", { class: "actions" }, [el("button", { class: "btn", type: "button", text: "Start", onclick: function () { task = 0; found = []; showTask(); } })]));
  }

  function legend() {
    return el("div", { class: "legend-map" }, [
      el("span", null, [sign("eerstehulp"), document.createTextNode("Eerste hulp, medische uitrusting")]),
      el("span", null, [sign("aed"), document.createTextNode("AED")]),
      el("span", null, [sign("brancard"), document.createTextNode("Plaats van de brancard")])
    ]);
  }

  function showTask() {
    var t = M.tasks[task];
    mainEl.innerHTML = "";
    setProgress(task / M.tasks.length);
    document.documentElement.setAttribute("data-node", "task" + (task + 1));
    var h = el("h2", { tabindex: "-1", class: "sr", text: "Opdracht " + (task + 1) + " van " + M.tasks.length + ": " + t.prompt });
    mainEl.appendChild(h);
    mainEl.appendChild(el("div", { class: "task", "aria-hidden": "true" }, [
      el("span", { class: "count", text: "Opdracht " + (task + 1) + " van " + M.tasks.length }),
      el("span", { class: "prompt", text: t.prompt })
    ]));
    mainEl.appendChild(el("ul", { class: "found", "aria-label": "Gevonden" }, M.tasks.map(function (x, i) {
      var name = x.prompt.replace(/^Waar vind je (de )?/, "").replace(/\?$/, "");
      return el("li", { class: i < task ? "ok" : "", text: (i < task ? "Gevonden: " : "") + name });
    })));

    var deck = el("div", { class: "deck", role: "group", "aria-label": "Plattegrond OEFENSCHIP A, bovenaanzicht hoofddek" });
    var fbBox = el("div", { "aria-live": "polite" });
    var buttons = {};
    M.zones.forEach(function (z) {
      var label = z.label + (z.sign ? ", met " + SIGN_TEXT[z.sign] : "");
      var b = el("button", { class: "room" + (z.corridor ? " corridor" : ""), type: "button", "data-zone": z.key, "aria-label": label },
        [el("span", { text: z.label }), z.sign ? sign(z.sign) : null]);
      b.style.gridArea = z.key;
      M.tasks.forEach(function (x, i) { if (i < task && x.target === z.key) b.classList.add("was-found"); });
      b.addEventListener("click", function () { tap(z, b, t, buttons, fbBox); });
      buttons[z.key] = b;
      deck.appendChild(b);
    });
    var hull = el("div", { class: "hull" }, [deck, el("span", { class: "ship-label bow", "aria-hidden": "true", text: "boeg" })]);
    mainEl.appendChild(el("div", { class: "ship-wrap" }, [hull, el("span", { class: "ship-label stern", "aria-hidden": "true", text: "achterschip" })]));
    mainEl.appendChild(legend());
    mainEl.appendChild(fbBox);
    try { window.scrollTo(0, 0); } catch (e) {}
    h.focus({ preventScroll: true });
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
      b.appendChild(el("span", { class: "rtag", text: "Juist" }));
      found.push(z.key);
      fbBox.appendChild(el("div", { class: "feedback good", role: "status" }, [el("div", { class: "verdict", text: "Gevonden" }), el("p", { text: t.good })]));
      var last = task === M.tasks.length - 1;
      fbBox.appendChild(el("div", { class: "actions" }, [el("button", { class: "btn", type: "button", text: last ? "Afronden" : "Volgende opdracht", onclick: function () {
        if (last) end(); else { task++; showTask(); }
      } })]));
      fbBox.querySelector(".btn").focus({ preventScroll: true });
    } else {
      b.classList.add("is-bad");
      b.appendChild(el("span", { class: "rtag", text: "Niet hier" }));
      fbBox.appendChild(el("div", { class: "feedback bad", role: "status" }, [el("div", { class: "verdict", text: "Probeer het opnieuw" }), el("p", { text: t.wrong[z.key] || t.wrong._ })]));
    }
    fbBox.scrollIntoView && fbBox.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function end() {
    mainEl.innerHTML = "";
    setProgress(1);
    document.documentElement.setAttribute("data-node", "end");
    sendComplete();
    mainEl.appendChild(el("h2", { text: M.end.title, tabindex: "-1" }));
    blocks(M.end.body, mainEl);
    if (M.end.after) mainEl.appendChild(el("p", { class: "hint", text: M.end.after }));
    mainEl.appendChild(el("div", { class: "actions" }, [el("button", { class: "btn secondary", type: "button", text: "Opnieuw", onclick: intro })]));
    try { window.scrollTo(0, 0); } catch (e) {}
    mainEl.querySelector("h2").focus({ preventScroll: true });
  }

  document.title = M.code + " " + M.title;
  shell();
  intro();
})();

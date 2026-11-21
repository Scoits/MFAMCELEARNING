/* Welkomstanimatie voor de e-learning van DRTC, als Rise 360 Code Block.
   Een korte film in hoofdstukken: per hoofdstuk een geanimeerde tekening (SVG) met titel en uitleg.
   Structuur in window.MODULE (hoofdstukken met een scene), tekst in window.TEXT, knoppen in window.UI.
   Speelt vanzelf af zodra het blok in beeld is, met pauze, vorige, volgende en overslaan.
   Bij de systeeminstelling Minder beweging speelt niets vanzelf en staan de tekeningen stil.
   Afronding: bij het laatste hoofdstuk window.parent.postMessage({ type: 'complete' }, '*'). */
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

  var REDUCED = false;
  try { REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  var LOGO = window.DRTC_LOGO || "logo.png";
  var app = document.getElementById("app");
  var idx = 0, playing = false, timer = null, startedAt = 0, remaining = 0, duration = 0, completedSent = false, everStarted = false;
  var stage, pips, eyebrow, titleEl, textEl, prevB, playB, nextB, skipB, againB;

  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k === "text") e.textContent = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    (children || []).forEach(function (c) { if (c) e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return e;
  }
  function sendComplete() {
    if (completedSent) return;
    completedSent = true;
    try { window.parent.postMessage({ type: "complete" }, "*"); } catch (e) {}
    document.documentElement.setAttribute("data-complete", "true");
  }

  /* ---------- Tekeningen ---------- */
  var W = 640, H = 320;
  function wave(y, amp, len, cls, fill) {
    var d = "M0 " + y;
    for (var x = 0; x < W * 2; x += len) d += " q" + len / 4 + " " + -amp + " " + len / 2 + " 0 t" + len / 2 + " 0";
    d += " V" + H + " H0 Z";
    return '<path class="wave ' + cls + '" d="' + d + '" fill="' + fill + '"/>';
  }
  function ship(x, y, cls) {
    return '<g class="' + cls + '" transform="translate(' + x + " " + y + ')"><g class="bob">' +
      '<path d="M0 40 L170 40 L155 66 L14 66 Z" fill="#203658"/>' +
      '<rect x="14" y="58" width="141" height="4" fill="#f0a443"/>' +
      '<rect x="92" y="14" width="56" height="26" rx="2" fill="#fff"/>' +
      '<rect x="98" y="20" width="9" height="7" fill="#203658"/><rect x="112" y="20" width="9" height="7" fill="#203658"/><rect x="126" y="20" width="9" height="7" fill="#203658"/>' +
      '<rect x="62" y="22" width="26" height="18" fill="#e9eef4"/>' +
      '<rect x="66" y="2" width="14" height="22" fill="#203658"/><rect x="66" y="8" width="14" height="5" fill="#f0a443"/>' +
      '<rect x="128" y="0" width="3" height="14" fill="#203658"/>' +
      "</g></g>";
  }
  function logoCard(x, y, cls) {
    return '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="190" height="62" rx="10" fill="#fff"/>' +
      '<image href="' + LOGO + '" x="' + (x + 22) + '" y="' + (y + 8) + '" width="146" height="46" preserveAspectRatio="xMidYMid meet"/></g>';
  }
  function sea(extra, shipX, shipCls) {
    return '<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14284a"/><stop offset="1" stop-color="#2f5d8f"/></linearGradient></defs>' +
      '<rect width="' + W + '" height="' + H + '" fill="url(#sky)"/>' +
      '<circle class="sun" cx="540" cy="70" r="24" fill="#f0a443"/>' +
      '<g class="stars" fill="#fff"><circle cx="80" cy="40" r="1.5"/><circle cx="160" cy="80" r="1"/><circle cx="300" cy="30" r="1.5"/><circle cx="420" cy="60" r="1"/><circle cx="610" cy="130" r="1"/></g>' +
      wave(228, 10, 160, "w1", "#2a7bb0") + ship(shipX, 176, shipCls) + wave(246, 9, 120, "w2", "#0b8fc4") + wave(270, 7, 90, "w3", "#00a1db") + extra;
  }
  function deviceScreen(x, y, w, h, cls) {
    return '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="3" fill="#fff"/>' +
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h * 0.18 + '" rx="3" fill="#203658"/>' +
      '<rect class="ln" x="' + (x + w * 0.1) + '" y="' + (y + h * 0.32) + '" width="' + w * 0.8 + '" height="' + Math.max(3, h * 0.07) + '" rx="2" fill="#c9d6e4"/>' +
      '<rect class="ln" x="' + (x + w * 0.1) + '" y="' + (y + h * 0.48) + '" width="' + w * 0.6 + '" height="' + Math.max(3, h * 0.07) + '" rx="2" fill="#c9d6e4"/>' +
      '<rect class="pill" x="' + (x + w * 0.1) + '" y="' + (y + h * 0.68) + '" width="' + w * 0.36 + '" height="' + Math.max(5, h * 0.14) + '" rx="' + Math.max(2.5, h * 0.07) + '" fill="#00a1db"/></g>';
  }
  var SCENES = {
    zee: function () { return sea(logoCard(225, 38, "logo-card"), 235, "ship sail"); },
    start: function () { return sea(logoCard(225, 38, "logo-card calm"), 235, "ship"); },
    route: function () {
      return '<rect width="' + W + '" height="' + H + '" fill="#eef4f9"/>' +
        '<g class="pop" style="--d:0"><rect x="70" y="90" width="150" height="100" rx="8" fill="#203658"/>' + deviceScreen(80, 100, 130, 80, "") + '<path d="M50 194 h190 l-14 12 h-162 z" fill="#2c4a78"/></g>' +
        '<path class="draw dashed" d="M240 150 C320 70 380 230 450 150" fill="none" stroke="#00a1db" stroke-width="4" stroke-linecap="round" pathLength="1"/>' +
        '<g class="pop" style="--d:3"><rect x="450" y="100" width="130" height="110" fill="#203658"/><path d="M440 102 L515 62 L590 102 Z" fill="#2c4a78"/>' +
        '<rect x="470" y="125" width="22" height="22" fill="#fff"/><rect x="538" y="125" width="22" height="22" fill="#fff"/><rect x="500" y="160" width="30" height="50" fill="#f0a443"/>' +
        '<rect x="503" y="122" width="24" height="24" rx="3" fill="#1b7a3d"/><path d="M512 126h6v7h7v6h-7v7h-6v-7h-7v-6h7z" fill="#fff"/>' +
        '<line x1="590" y1="62" x2="590" y2="20" stroke="#203658" stroke-width="3"/><path class="flag" d="M590 22 h30 l-6 9 l6 9 h-30 z" fill="#f0a443"/></g>' +
        '<rect x="0" y="210" width="' + W + '" height="110" fill="#d6e4f0"/>';
    },
    les: function () {
      var s = '<rect width="' + W + '" height="' + H + '" fill="#eef4f9"/><rect x="170" y="26" width="300" height="8" rx="4" fill="#d5dce5"/><rect class="fill" x="170" y="26" width="300" height="8" rx="4" fill="#00a1db"/>';
      var cols = ["#ffffff", "#e5f5fb", "#ffffff", "#e7f4ec"];
      for (var i = 0; i < 4; i++) {
        s += '<g class="slide" style="--d:' + i + '"><rect x="170" y="' + (50 + i * 52) + '" width="300" height="42" rx="8" fill="' + cols[i] + '" stroke="#d5dce5"/>' +
          '<rect x="186" y="' + (63 + i * 52) + '" width="' + (150 + (i % 2) * 60) + '" height="7" rx="3" fill="#c9d6e4"/><rect x="186" y="' + (76 + i * 52) + '" width="110" height="7" rx="3" fill="#dfe6ee"/></g>';
      }
      s += '<circle class="pop" style="--d:5" cx="440" cy="227" r="13" fill="#1d7a46"/><path class="draw" style="--dd:1.5s" d="M433 227 l5 5 l9 -10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" pathLength="1"/>';
      s += '<g class="pulse"><rect x="250" y="268" width="140" height="34" rx="17" fill="#203658"/><rect x="290" y="282" width="60" height="6" rx="3" fill="#fff"/></g>';
      return s;
    },
    scenario: function () {
      var s = '<rect width="' + W + '" height="' + H + '" fill="#14284a"/><circle cx="560" cy="56" r="20" fill="#f3e2b8"/><circle cx="569" cy="49" r="18" fill="#14284a"/>';
      var ys = [80, 150, 220], ks = ["A", "B", "C"];
      s += '<circle class="pop" style="--d:0" cx="110" cy="150" r="22" fill="#00a1db"/>';
      ys.forEach(function (y, i) {
        s += '<path class="draw" style="--dd:' + (0.4 + i * 0.25) + 's" d="M132 150 C220 150 230 ' + y + ' 300 ' + y + '" fill="none" stroke="#5f86b5" stroke-width="3" pathLength="1"/>' +
          '<g class="pop" style="--d:' + (3 + i) + '"><circle cx="320" cy="' + y + '" r="20" fill="#fff"/><text x="320" y="' + (y + 6) + '" text-anchor="middle" font-size="17" font-weight="700" fill="#203658" font-family="Segoe UI, Arial, sans-serif">' + ks[i] + "</text></g>";
      });
      s += '<path class="draw good" style="--dd:2.2s" d="M340 150 C420 150 440 150 510 150" fill="none" stroke="#3fbf7f" stroke-width="4" pathLength="1"/><circle class="pop" style="--d:12" cx="530" cy="150" r="20" fill="#3fbf7f"/>';
      s += '<path class="ecg" d="M0 280 h150 l12 -24 l14 46 l12 -40 l8 18 h120 l12 -24 l14 46 l12 -40 l8 18 h150 l12 -24 l14 46 l12 -40 l8 18 h150" fill="none" stroke="#3fbf7f" stroke-width="2.5" pathLength="1"/>';
      return s;
    },
    tijd: function () {
      var s = '<rect width="' + W + '" height="' + H + '" fill="#eef4f9"/><circle cx="190" cy="160" r="86" fill="#fff" stroke="#203658" stroke-width="6"/>';
      for (var i = 0; i < 12; i++) { var a = i * Math.PI / 6; s += '<line x1="' + (190 + Math.sin(a) * 70) + '" y1="' + (160 - Math.cos(a) * 70) + '" x2="' + (190 + Math.sin(a) * 78) + '" y2="' + (160 - Math.cos(a) * 78) + '" stroke="#203658" stroke-width="' + (i % 3 ? 2 : 4) + '"/>'; }
      s += '<line class="hand-h" x1="190" y1="160" x2="190" y2="118" stroke="#203658" stroke-width="6" stroke-linecap="round"/><line class="hand-m" x1="190" y1="160" x2="190" y2="96" stroke="#00a1db" stroke-width="4" stroke-linecap="round"/><circle cx="190" cy="160" r="6" fill="#f0a443"/>';
      s += '<rect x="330" y="150" width="250" height="14" rx="7" fill="#d5dce5"/><rect class="fill-a" x="330" y="150" width="250" height="14" rx="7" fill="#00a1db"/>';
      s += '<g class="mark"><path d="M432 116 h20 v28 l-10 -8 l-10 8 z" fill="#f0a443"/></g>';
      return s;
    },
    apparaat: function () {
      return '<rect width="' + W + '" height="' + H + '" fill="#eef4f9"/>' +
        '<g class="pop" style="--d:0"><rect x="50" y="80" width="230" height="146" rx="8" fill="#203658"/>' + deviceScreen(60, 90, 210, 126, "") + '<path d="M30 230 h270 l-16 14 h-238 z" fill="#2c4a78"/></g>' +
        '<g class="pop" style="--d:2"><rect x="320" y="70" width="140" height="186" rx="12" fill="#203658"/>' + deviceScreen(330, 84, 120, 158, "") + "</g>" +
        '<g class="pop" style="--d:4"><rect x="490" y="104" width="86" height="152" rx="12" fill="#203658"/>' + deviceScreen(497, 118, 72, 124, "") + "</g>";
    },
    praktijk: function () {
      var days = M.praktijkdagen || 1, s = '<rect width="' + W + '" height="' + H + '" fill="#eef4f9"/>';
      var n = days + 2, cw = 120, gap = 22, x0 = (W - (n * cw + (n - 1) * gap)) / 2;
      s += '<line class="draw" style="--dd:.2s" x1="' + (x0 + cw / 2) + '" y1="160" x2="' + (x0 + (n - 1) * (cw + gap) + cw / 2) + '" y2="160" stroke="#9db4cc" stroke-width="4" pathLength="1"/>';
      for (var i = 0; i < n; i++) {
        var x = x0 + i * (cw + gap), kind = i === 0 ? "online" : i === 1 ? "toets" : "dag";
        var band = kind === "online" ? "#00a1db" : kind === "toets" ? "#f0a443" : "#203658";
        s += '<g class="pop" style="--d:' + (i * 2 + 1) + '"><rect x="' + x + '" y="95" width="' + cw + '" height="130" rx="10" fill="#fff" stroke="#d5dce5"/><rect x="' + x + '" y="95" width="' + cw + '" height="26" rx="10" fill="' + band + '"/><rect x="' + x + '" y="111" width="' + cw + '" height="10" fill="' + band + '"/>';
        if (kind === "online") s += '<rect x="' + (x + 30) + '" y="140" width="60" height="40" rx="4" fill="#203658"/><rect x="' + (x + 35) + '" y="145" width="50" height="30" fill="#e5f5fb"/><rect x="' + (x + 22) + '" y="182" width="76" height="6" rx="3" fill="#2c4a78"/>';
        else if (kind === "toets") s += '<rect x="' + (x + 38) + '" y="136" width="44" height="58" rx="4" fill="#fff" stroke="#203658" stroke-width="3"/><path d="M' + (x + 47) + ' 152 h26 M' + (x + 47) + ' 164 h26 M' + (x + 47) + ' 176 h16" stroke="#9db4cc" stroke-width="4"/><path class="draw" style="--dd:' + (1.2 + i * .3) + 's" d="M' + (x + 62) + ' 186 l6 6 l12 -14" fill="none" stroke="#1d7a46" stroke-width="4" stroke-linecap="round" pathLength="1"/>';
        else s += '<rect x="' + (x + 44) + '" y="140" width="32" height="32" rx="4" fill="#1b7a3d"/><path d="M' + (x + 56) + ' 145h8v9h9v8h-9v9h-8v-9h-9v-8h9z" fill="#fff"/><rect x="' + (x + 30) + '" y="184" width="60" height="7" rx="3" fill="#c9d6e4"/>';
        s += "</g>";
      }
      return s;
    }
  };

  /* ---------- Film ---------- */
  function words(s) { return String(s || "").split(/\s+/).filter(Boolean).length; }
  function chapterTime(c) { return Math.max(7000, Math.min(20000, 3000 + words(c.title + " " + c.text) * 420)); }

  function shell() {
    app.innerHTML = "";
    app.classList.add("welkom");
    app.appendChild(el("header", { class: "top" }, [
      el("div", { class: "logo" }, [el("img", { src: LOGO, alt: u("logo") })]),
      el("div", { class: "titles" }, [el("div", { class: "code", text: M.code }), el("h1", { text: M.title })]),
      M.badge ? el("span", { class: "badge", text: M.badge }) : null
    ]));
    var main = el("main", { class: "main" });
    stage = el("div", { class: "stage", "aria-hidden": "true" });
    pips = el("div", { class: "pips", "aria-hidden": "true" }, M.chapters.map(function () { return el("span", null, [el("i")]); }));
    eyebrow = el("div", { class: "eyebrow" });
    titleEl = el("h2", { tabindex: "-1" });
    textEl = el("p", { class: "lead" });
    var live = el("div", { class: "words", "aria-live": "polite" }, [eyebrow, titleEl, textEl]);
    prevB = el("button", { class: "btn secondary", type: "button", text: u("welkomVorige"), onclick: function () { show(idx - 1, true); } });
    playB = el("button", { class: "btn secondary", type: "button", onclick: toggle });
    nextB = el("button", { class: "btn", type: "button", text: u("welkomVolgende"), onclick: function () { show(idx + 1, true); } });
    againB = el("button", { class: "btn secondary", type: "button", text: u("welkomOpnieuw"), onclick: function () { show(0, false); play(); } });
    skipB = el("button", { class: "link", type: "button", text: u("welkomOverslaan"), onclick: function () { show(M.chapters.length - 1, true); againB.focus({ preventScroll: true }); } });
    main.appendChild(stage); main.appendChild(pips); main.appendChild(live);
    main.appendChild(el("div", { class: "actions" }, [prevB, playB, nextB, againB, skipB]));
    app.appendChild(main);
    var foot = [M.footer, M.version ? u("versie") + " " + M.version : ""].filter(Boolean).join(" ");
    app.appendChild(el("footer", { class: "foot", text: foot }));
  }

  function setPips() {
    Array.prototype.forEach.call(pips.children, function (p, i) {
      p.className = i < idx ? "done" : i === idx ? "now" : "";
      var bar = p.firstChild;
      bar.style.transition = "none";
      bar.style.width = i < idx ? "100%" : "0%";
    });
  }
  function runPip(ms) {
    var bar = pips.children[idx].firstChild;
    var cur = bar.style.width;
    bar.style.transition = "none"; bar.style.width = cur || "0%";
    void bar.offsetWidth;
    bar.style.transition = "width " + ms + "ms linear";
    bar.style.width = "100%";
  }
  function freezePip() {
    var bar = pips.children[idx].firstChild;
    var w = bar.getBoundingClientRect().width, total = bar.parentNode.getBoundingClientRect().width;
    bar.style.transition = "none"; bar.style.width = (total ? (100 * w / total) : 0) + "%";
  }

  function show(i, manual) {
    i = Math.max(0, Math.min(M.chapters.length - 1, i));
    clearTimeout(timer);
    idx = i;
    var c = M.chapters[i];
    stage.innerHTML = '<svg viewBox="0 0 ' + W + " " + H + '" preserveAspectRatio="xMidYMid slice" focusable="false">' + SCENES[c.scene]() + "</svg>";
    stage.setAttribute("data-scene", c.scene);
    eyebrow.textContent = u("welkomHoofdstuk").replace("{x}", i + 1).replace("{n}", M.chapters.length);
    titleEl.textContent = c.title;
    textEl.textContent = c.text;
    document.documentElement.setAttribute("data-node", "h" + (i + 1));
    var words = titleEl.parentNode;
    words.classList.remove("enter"); void words.offsetWidth; words.classList.add("enter");
    setPips();
    var last = i === M.chapters.length - 1;
    if (last) { sendComplete(); pips.children[i].firstChild.style.width = "100%"; }
    prevB.disabled = i === 0;
    nextB.hidden = last;
    skipB.hidden = last;
    againB.hidden = !last;
    playB.hidden = last || REDUCED;
    duration = remaining = chapterTime(c);
    if (manual && playing) { pause(); }
    else if (playing && !last) schedule();
    else if (last) { playing = false; }
    updatePlay();
  }
  function schedule() {
    clearTimeout(timer);
    startedAt = Date.now();
    runPip(remaining);
    timer = setTimeout(function () { remaining = 0; show(idx + 1, false); }, remaining);
  }
  function play() {
    if (REDUCED) return;
    everStarted = true;
    if (idx === M.chapters.length - 1) return;
    playing = true; schedule(); updatePlay();
    stage.classList.remove("paused");
  }
  function pause() {
    if (!playing) return;
    playing = false; clearTimeout(timer);
    remaining = Math.max(800, remaining - (Date.now() - startedAt));
    freezePip(); updatePlay();
    stage.classList.add("paused");
  }
  function toggle() { if (playing) pause(); else play(); }
  function updatePlay() { playB.textContent = playing ? u("welkomPauze") : u("welkomAfspelen"); }

  document.title = M.code + " " + M.title;
  shell();
  show(0, false);
  /* Pas starten als het blok in beeld komt; in Rise staat het blok vaak lager op de pagina. */
  if (!REDUCED) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && !everStarted) { show(0, false); play(); io.disconnect(); }
        });
      }, { threshold: 0.4 });
      io.observe(stage);
    } else play();
  }
  window.WELKOM = { show: show, state: function () { return { idx: idx, playing: playing }; } };
})();

/* Meagan Swenson: portfolio scene.
   All page content lives in index.html. This script only adds the altitude
   HUD, the parallax scenery and a few small interactions. Elements are built
   with DOM methods (no inline style attributes) so the page can run under a
   strict Content-Security-Policy. */
"use strict";

const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const doc = document.documentElement;
const rootStyle = doc.style;
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------------- content */

$("#yr").textContent = new Date().getFullYear();

/* "Show all" toggle on long job lists */
$$(".job .more").forEach((b) =>
  b.addEventListener("click", () => {
    const ul = b.previousElementSibling,
      open = !ul.classList.toggle("collapsed");
    b.setAttribute("aria-expanded", open);
    b.textContent = open ? "Show fewer ▴" : `Show all ${ul.children.length} ▾`;
    requestAnimationFrame(refresh);
  }),
);

/* ---------------------------------------------------------- altitude data */

/* HUD captions, shown from the given km upwards */
const CAPS = [
  [0, "All the weather happens down here. Bring a jacket."],
  [0.8, "Geese territory. They fly in formation and honk at every blocker. Very agile."],
  [1.8, "You're now higher than any mountain in the Netherlands. Admittedly, the bar is 322 m."],
  [
    5,
    "Air pressure is half of sea level up here. Roughly the oxygen level of a three-hour status meeting.",
  ],
  [15, "Welcome to the ozone layer, Earth's original sunscreen. No need to reapply."],
  [30, "Air pressure is about 1% of sea level here. Every bag of chips you packed just exploded."],
  [45, "Weather balloons usually pop before this point. Let's take a moment of silence."],
  [60, "Heading into the coldest layer of the atmosphere. Coffee is no longer optional."],
  [75, "Meteors burn up around here, which is still more graceful than most Friday deployments."],
  [90, 'Still technically the atmosphere. Technically. Like "it works on my machine."'],
  [
    100,
    "Past the Kármán line: astronaut, by some definitions. Pippi Longstocking remains unimpressed.",
  ],
];
const LAYERS = [
  [0, "Troposphere"],
  [12, "Stratosphere"],
  [50, "Mesosphere"],
  [85, "Thermosphere"],
  [100, "Outer space"],
];
/* card accent colour per layer */
const LAYER_COLOURS = ["#8fd0f5", "#5b8de0", "#7a6be0", "#b07ae8", "#e0c3ff"];
const layerIdx = (km) => (km < 12 ? 0 : km < 50 ? 1 : km < 85 ? 2 : km < 100 ? 3 : 4);

/* sky gradient stops: [scroll progress, top rgb, bottom rgb] */
const STOPS = [
  [0, [120, 190, 235], [214, 236, 247]],
  [0.12, [38, 78, 155], [68, 112, 188]],
  [0.4, [20, 40, 100], [40, 70, 140]],
  [0.7, [10, 18, 52], [24, 40, 88]],
  [1, [3, 5, 14], [10, 14, 32]],
];
const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));

/* approximate air temperature (°C) at altitude h (km) */
const temp = (h) => {
  if (h < 11) return 15 - 6.5 * h;
  if (h < 20) return -56.5;
  if (h < 32) return -56.5 + (h - 20);
  if (h < 47) return -44.5 + 2.8 * (h - 32);
  if (h < 51) return -2.5;
  if (h < 71) return -2.5 - 2.8 * (h - 51);
  if (h < 85) return -58.5 - 2 * (h - 71);
  if (h < 90) return -86.5;
  return -86.5 + 1.2 * (h - 90);
};

/* altitude curve: spreads the climb out so objects are evenly spaced down the page */
const CURVE = [
  [0, 0],
  [0.1, 1],
  [0.3, 6],
  [0.5, 11],
  [0.82, 92],
  [1, 104],
];
const kmAt = (p) => {
  for (let i = 1; i < CURVE.length; i++) {
    const [a, b] = [CURVE[i - 1], CURVE[i]];
    if (p <= b[0]) return a[1] + ((b[1] - a[1]) * (p - a[0])) / (b[0] - a[0]);
  }
  return 104;
};
const pAt = (km) => {
  for (let i = 1; i < CURVE.length; i++) {
    const [a, b] = [CURVE[i - 1], CURVE[i]];
    if (km <= b[1]) return a[0] + ((b[0] - a[0]) * (km - a[1])) / (b[1] - a[1]);
  }
  return 1;
};

/* ---------------------------------------------------------------- scenery */

/* stars */
const stars = $("#stars");
for (let i = 0; i < 90; i++) {
  const s = document.createElement("i");
  s.style.left = Math.random() * 100 + "%";
  s.style.top = Math.random() * 100 + "%";
  s.style.opacity = 0.3 + Math.random() * 0.7;
  stars.append(s);
}

/* floating objects. Markup only (no style attributes) so it is CSP-safe */
const img = (name, w, h, cls = "") =>
  `<img${cls ? ` class="${cls}"` : ""} src="images/${name}.webp" alt="" width="${w}" height="${h}" loading="lazy" decoding="async">`;
const ART = {
  skydiver: img("skydiver", 300, 314),
  wballoon:
    '<div class="wbx">' +
    img("weather-balloon", 260, 315, "wbt") +
    '<svg class="burst" viewBox="0 0 260 315" aria-hidden="true"><g fill="#f4f6f9" stroke="#c3cdd9" stroke-width="2"><path d="M70 110l-34-22 14 38z"/><path d="M196 96l40-24-16 40z"/><path d="M56 196l-40 8 34 16z"/><path d="M206 200l40 4-30 20z"/><path d="M122 64l4-36 16 32z"/><path d="M146 236l-8 34 22-26z"/></g><text x="130" y="172" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="52" fill="#ff7a2f" stroke="#fff" stroke-width="8" paint-order="stroke">POP!</text><path d="M84 296q46-60 92 0z" fill="#f58a2e"/><path d="M88 296l42 19M172 296l-42 19M130 262v53" stroke="#8a94a5" stroke-width="2"/></svg>' +
    img("weather-balloon-payload", 260, 203, "wbb") +
    "</div>",
  balloon: img("hot-air-balloon", 300, 430),
  birds: img("birds", 520, 324),
  jet: img("jet", 520, 313),
  sat0: img("satellite-0", 340, 270),
  sat1: img("satellite-1", 340, 531),
  sat2: img("satellite-2", 340, 259),
  sat3: img("satellite-3", 340, 344),
  sat4: img("satellite-4", 340, 334),
};

/* [km, art, x %, width px, horizontal drift vw, vertical drift px] */
const OBJS = [
  [0.5, "balloon", 66, 115, 4],
  [1, "birds", 72, 240, -30],
  [11, "jet", 66, 250, 14],
  [4, "skydiver", 86, 120, -3, 90],
  [33, "wballoon", 88, 100, -2, 300],
  [92, "sat2", 91, 130, -3],
  /* extra satellites are placed by scroll progress rather than km */
  ...[
    [0.635, "sat0", 8, 110, 3],
    [0.69, "sat3", 8, 110, 3],
    [0.75, "sat1", 92, 95, -3],
    [0.88, "sat4", 8, 105, 3],
    [0.95, "sat0", 92, 95, -3],
  ].map(([p, ...rest]) => [kmAt(p), ...rest]),
];

let seed = 11;
const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;

/* CSS sizes these images with height: auto, so give them an explicit aspect
   ratio from their width/height attributes before they lazy-load */
const lockRatio = (el) =>
  (el.style.aspectRatio = `${el.getAttribute("width")} / ${el.getAttribute("height")}`);

const objEls = OBJS.map(([km, art, x, w, dx, dy = 40]) => {
  const f = document.createElement("figure");
  f.className = `obj ${art.replace(/\d$/, "")} ${art}`;
  f.innerHTML = ART[art];
  f.querySelectorAll("img").forEach(lockRatio);
  f.dataset.p = pAt(km);
  f.dataset.dx = dx;
  f.dataset.dy = dy;
  f.style.setProperty("--x", x.toFixed(1) + "%");
  f.style.setProperty("--w", Math.round(w) + "px");
  f.style.setProperty("--dl", (-rnd() * 6).toFixed(2) + "s");
  const behind = art === "birds" || art === "jet" || (art.startsWith("sat") && innerWidth < 1260);
  (behind ? $("#behind") : $("#objs")).append(f);
  return f;
});

/* drifting background clouds */
const CLOUDS = { 0: [520, 271], 2: [520, 215], 4: [439, 351], 5: [283, 190] };
const CLOUD_PICK = [0, 2, 4, 5, 0, 2, 4, 0];
let cloudsWidth = 0;
function buildClouds() {
  const max = doc.scrollHeight - innerHeight,
    top = 70,
    bottom = pAt(30) * max + innerHeight * 0.6,
    n = Math.round((bottom - top) / 230) + 5,
    r = Math.random,
    frag = document.createDocumentFragment();
  let lastX = [];
  for (let i = 0; i < n; i++) {
    const depth = 0.35 + r() * 0.65,
      ck = CLOUD_PICK[Math.floor(r() * 8)],
      w = (90 + 300 * depth) * (ck === 5 ? 0.75 : 1);
    let x;
    for (let t = 0; t < 6; t++) {
      x = -10 + r() * 104;
      if (lastX.every((v) => Math.abs(v - x) > 18)) break;
    }
    lastX = [...lastX.slice(-2), x];
    /* not lazy: the same four small files are reused everywhere, and the
       first clouds are on screen straight away */
    const c = document.createElement("img");
    c.decoding = "async";
    c.alt = "";
    c.width = CLOUDS[ck][0];
    c.height = CLOUDS[ck][1];
    lockRatio(c);
    c.src = `images/cloud-${ck}.webp`;
    c.className = "bgc" + (r() < 0.5 ? " flip" : "") + (depth < 0.55 ? " far" : "");
    Object.assign(c.style, {
      left: x.toFixed(1) + "vw",
      top: (top + ((i + r() * 0.9) * (bottom - top)) / n).toFixed(0) + "px",
      width: w.toFixed(0) + "px",
      opacity: (0.45 + depth * 0.5).toFixed(2),
    });
    c.style.setProperty("--d", (50 + r() * 90).toFixed(0) + "s");
    c.style.setProperty("--dl", (-r() * 60).toFixed(0) + "s");
    c.style.setProperty("--dx", ((r() < 0.5 ? -1 : 1) * (20 + r() * 60)).toFixed(0) + "px");
    frag.append(c);
  }
  $("#bgclouds").replaceChildren(frag);
}

/* ruler tick labels (positions are percentages, so they never need updating) */
$("#ruler").append(
  ...[0, 5, 10, 50, 100].map((k) => {
    const i = document.createElement("i");
    i.textContent = k;
    i.style.top = (pAt(k) * 100).toFixed(2) + "%";
    return i;
  }),
);

/* atmosphere boundary lines */
const BOUNDS = [
  [8.8, "Everest summit · 8.8 km"],
  [12, "Tropopause · 12 km"],
  [50, "Stratopause · 50 km"],
  [85, "Mesopause · 85 km"],
  [100, "Kármán line · 100 km"],
];
const boundEls = BOUNDS.map(([, label]) => {
  const d = document.createElement("div"),
    s = document.createElement("span");
  d.className = "bnd";
  s.textContent = label;
  d.append(s);
  return d;
});
$("#bounds").append(...boundEls);

/* noctilucent cloud wisps around the mesosphere */
const nlc = document.createElement("div");
nlc.className = "nlc";
[
  [4, 30, 46, 80],
  [38, 70, 40, 70],
  [62, 20, 44, 90],
  [20, 150, 38, 60],
  [70, 170, 34, 66],
].forEach(([x, y, w, h], i) => {
  const wisp = document.createElement("div");
  wisp.className = "wisp";
  Object.assign(wisp.style, {
    left: x + "%",
    top: y + "px",
    width: w + "vw",
    height: h + "px",
    animationDelay: -i * 3 + "s",
  });
  nlc.append(wisp);
});
$("#frontfx").append(nlc);

/* ----------------------------------------------------- layout (on resize) */

const meteors = $("#meteors"),
  moon = $("#moon"),
  grass = $("#grass"),
  cards = $$(".card").filter((c) => !c.closest("#space")),
  floors = $$("[data-floor]");
let grassH = 0;

function placeMeteors() {
  const h = $("#space h2"),
    range = document.createRange();
  range.selectNodeContents(h);
  const r = range.getBoundingClientRect(),
    W = doc.clientWidth;
  let left = r.right + scrollX + 24,
    w = Math.min(340, W - left - 30),
    top = r.top + scrollY - w * 0.05;
  if (w < 200) {
    /* no room beside the heading: sit above the section label instead */
    const tag = $("#space .tag").getBoundingClientRect();
    w = Math.min(W * 0.5, 220);
    left = W - w - 8;
    top = tag.top + scrollY - w * (531 / 760) - 6;
  }
  Object.assign(meteors.style, { width: w + "px", left: left + "px", top: top + "px" });
}

function place() {
  const max = doc.scrollHeight - innerHeight,
    docY = (el) => el.getBoundingClientRect().top + scrollY;

  placeMeteors();
  /* only reshuffle clouds when the width changes, not when a mobile
     browser's address bar resizes the viewport during scrolling */
  if (doc.clientWidth !== cloudsWidth) {
    cloudsWidth = doc.clientWidth;
    buildClouds();
  }

  /* boundary lines snap to the nearest gap between sections */
  const gaps = $$("main .floor").map((f) => docY(f) + 6),
    snap = (km) => {
      const y = pAt(km) * max + innerHeight * 0.42;
      return gaps.reduce((a, b) => (Math.abs(b - y) < Math.abs(a - y) ? b : a), gaps[0]);
    };
  boundEls.forEach((el, i) => (el.style.top = snap(BOUNDS[i][0]).toFixed(0) + "px"));

  const skillsTag = $("#skills .tag");
  nlc.style.top = ((skillsTag ? docY(skillsTag) + 10 : snap(85)) - 150).toFixed(0) + "px";

  /* cards take on the material of the layer they sit in */
  cards.forEach((c) => {
    const y = docY(c) + c.offsetHeight / 2,
      li = layerIdx(kmAt(clamp01((y - innerHeight / 2) / max)));
    c.classList.toggle("t1", li === 1);
    c.classList.toggle("t2", li === 2);
    c.classList.toggle("t3", li >= 3);
    c.style.setProperty("--acc", c.classList.contains("lime") ? "#8ac800" : LAYER_COLOURS[li]);
  });

  objEls.forEach((f) => (f.style.top = f.dataset.p * max + innerHeight * 0.42 + "px"));
  const balloon = $(".obj.balloon"),
    jet = $(".obj.jet"),
    hp = $('[data-floor="01 · HP"]');
  if (jet && hp) jet.style.top = docY(hp) + 10 + "px";
  if (balloon) balloon.style.top = docY($("#stats")) - balloon.offsetHeight + 30 + "px";

  /* cache geometry so the scroll handler never has to read layout for these */
  objEls.forEach((f) => {
    f._top = f.offsetTop;
    f._h = f.offsetHeight;
  });
  grassH = grass.offsetHeight;
}

/* -------------------------------------------------------- HUD (on scroll) */

const sky = $("#sky"),
  read = $("#read"),
  altText = $("#alt").firstChild,
  layerEl = $("#layer"),
  capEl = $("#cap"),
  ptr = $("#ptr"),
  ruler = $("#ruler"),
  tempEl = $("#temp"),
  floorEl = $("#flr"),
  statEl = $("#stat"),
  badge = $("#badge");
const LIGHT_HALO = "rgba(255, 255, 255, 0.55)",
  DARK_HALO = "rgba(4, 10, 28, 0.6)",
  INK = "#10233a";
let lastY = scrollY,
  idle;

new IntersectionObserver(([en]) => badge.classList.toggle("on", !en.isIntersecting), {
  rootMargin: "-40px 0px 0px 0px",
}).observe($("#lobby h1"));

/* is most of this element sitting over a light (not yet dark-glass) card? */
const overLightCard = (r) => {
  const midY = r.top + r.height / 2;
  return cards.some((c) => {
    if (c.classList.contains("t2") || c.classList.contains("t3")) return false;
    const q = c.getBoundingClientRect();
    return (
      q.top <= midY &&
      q.bottom >= midY &&
      Math.min(q.right, r.right) - Math.max(q.left, r.left) > r.width * 0.4
    );
  });
};

function tick() {
  /* read everything first ... */
  const max = doc.scrollHeight - innerHeight,
    p = max > 0 ? clamp01(scrollY / max) : 0,
    readOver = overLightCard(read.getBoundingClientRect()),
    badgeOver = overLightCard(badge.getBoundingClientRect());
  let floor = "Pre-launch";
  for (const x of floors)
    if (x.getBoundingClientRect().top < innerHeight * 0.5) floor = x.dataset.floor;

  /* ... then write */
  let k = 1;
  while (k < STOPS.length - 1 && p > STOPS[k][0]) k++;
  const a = STOPS[k - 1],
    b = STOPS[k],
    t = (p - a[0]) / (b[0] - a[0]);
  sky.style.background = `linear-gradient(rgb(${mix(a[1], b[1], t)}),rgb(${mix(a[2], b[2], t)}))`;
  stars.style.opacity = clamp01((p - 0.5) / 0.3);

  const f = clamp01((p - 0.04) / 0.05),
    fg = `rgb(${mix([16, 35, 58], [242, 246, 255], f)})`;
  rootStyle.setProperty("--fg", fg);
  rootStyle.setProperty("--halo", f < 0.5 ? LIGHT_HALO : DARK_HALO);
  ruler.style.color = fg;
  read.style.color = readOver ? INK : fg;
  read.style.setProperty("--halo", readOver ? LIGHT_HALO : "");
  badge.style.color = badgeOver ? INK : fg;
  badge.style.setProperty("--halo", badgeOver ? LIGHT_HALO : "");

  const km = kmAt(p);
  altText.nodeValue = km.toFixed(1).padStart(5, "0");
  tempEl.textContent = Math.round(temp(km)).toString().replace("-", "−") + " °C";
  floorEl.textContent = floor;
  layerEl.textContent = LAYERS.findLast((l) => km >= l[0])[1];
  capEl.textContent = CAPS.findLast((c) => km >= c[0])[1];

  const dy = scrollY - lastY;
  lastY = scrollY;
  statEl.textContent =
    p < 0.002 ? "Ground level" : p > 0.998 ? "In orbit" : dy < 0 ? "Descending" : "Climbing";
  clearTimeout(idle);
  idle = setTimeout(() => {
    if (p > 0.002 && p < 0.998) statEl.textContent = "Holding";
  }, 700);

  read.style.top = Math.max(innerWidth <= 820 ? 12 : 16, grassH * 0.61 + 14 - scrollY) + "px";
  ptr.style.top = `calc(24px + ${p.toFixed(4)} * (100vh - 52px))`;
  scenery(p);
}

/* moon, meteors and parallax drift of the floating objects */
function scenery(p) {
  const e = clamp01((p - 0.82) / 0.18);
  moon.classList.toggle("show", p > 0.6);
  moon.style.transform = `translateY(calc(100% - ${e.toFixed(3)} * min(100%, 36vh)))`;
  moon.style.opacity = Math.min(1, e * 5);

  const me = clamp01((p - 0.86) / 0.14);
  meteors.style.opacity = me.toFixed(2);
  meteors.style.transform = `translate(${((1 - me) * 140).toFixed(1)}px,${(-(1 - me) * 90).toFixed(1)}px)`;

  objEls.forEach((f) => {
    const y = f._top - scrollY + f._h / 2;
    f.style.opacity = f.classList.contains("jet") ? "" : clamp01((y - 110) / 150).toFixed(2);
    if (still) return;
    const t = Math.max(-1.6, Math.min(1.6, (y - innerHeight / 2) / innerHeight));
    f.style.translate = `${(t * f.dataset.dx).toFixed(2)}vw ${(t * f.dataset.dy).toFixed(1)}px`;
    if (f.classList.contains("wballoon")) {
      const r = clamp01(y / innerHeight);
      f.style.setProperty("--s", (0.7 + 0.6 * (1 - r)).toFixed(3));
      f.classList.toggle("popped", r < 0.3);
    }
  });
}

/* ------------------------------------------------------- hero interactions */

{
  const line = $("#sline"),
    base = line.innerHTML,
    cursor = '<span class="cur"></span>';
  $$(".console .sw").forEach((b) =>
    b.addEventListener("click", () => {
      const on = !b.classList.contains("on");
      b.classList.toggle("on", on);
      b.setAttribute("aria-checked", on);
      const msg = on ? b.dataset.on : b.dataset.off;
      line.innerHTML = msg ? msg + cursor : base;
    }),
  );
  const lever = $(".console .lever");
  lever.addEventListener("click", () => {
    lever.classList.add("pulled");
    line.innerHTML = "Launch sequence started. Climbing..." + cursor;
    setTimeout(() => $("#stats").scrollIntoView({ behavior: still ? "auto" : "smooth" }), 450);
    setTimeout(() => {
      lever.classList.remove("pulled");
      line.innerHTML = base;
    }, 2600);
  });
}

/* count-up stats and gauges */
const counter = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      counter.unobserve(en.target);
      const b = en.target,
        n = +b.dataset.n,
        suf = b.dataset.suf || "",
        pre = b.dataset.pre || "";
      if (still) return;
      const gauge = b.parentNode.querySelector(".gauge .val"),
        needle = b.parentNode.querySelector(".gauge line"),
        t0 = performance.now();
      (function step(now) {
        const k = Math.min(1, (now - t0) / 1300),
          ease = 1 - Math.pow(1 - k, 3);
        b.textContent = pre + Math.round(n * ease) + suf;
        const g = +gauge.dataset.g * ease,
          ang = Math.PI * (1 - g);
        gauge.style.strokeDashoffset = (157.08 * (1 - g)).toFixed(2);
        needle.setAttribute("x2", (60 + 44 * Math.cos(ang)).toFixed(1));
        needle.setAttribute("y2", (60 - 44 * Math.sin(ang)).toFixed(1));
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    }),
  { threshold: 0.6 },
);
$$(".stat b[data-n]").forEach((b) => counter.observe(b));

/* ------------------------------------------------------------------ wiring */

function refresh() {
  place();
  tick();
}

let ticking = false;
addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      tick();
    });
  },
  { passive: true },
);

let resizeTimer;
addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(refresh, 150);
});
addEventListener("load", refresh);
refresh();

/* a note for whoever opens DevTools */
console.log("%cLooking under the hood? 👀", "font:700 16px sans-serif;color:#8ac800");
console.log(
  "I'd like that in a colleague. Hand-built in plain HTML, CSS & JavaScript.\nLet's talk: swens2005@yahoo.com",
);

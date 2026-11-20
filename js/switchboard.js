/* Switchboard: turns the list of lines into a tablist and the project cards
   into its tab panels (WAI-ARIA tabs pattern, automatic activation).
   Without JavaScript the lines stay plain links to the cards, and every card
   shows. Loaded in <head> without defer, so the class below is set before
   the first paint; everything else waits for the DOM. */

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("lines");
  const rec = document.getElementById("rec");
  const recText = document.getElementById("rec-text");
  if (!list || !rec || !recText) return;

  const tabs = [...list.querySelectorAll("a.line")];
  const paneOf = (tab) => document.getElementById(tab.hash.slice(1));
  const byHash = (hash) => tabs.find((t) => t.hash === hash);

  list.setAttribute("role", "tablist");
  list.setAttribute("aria-orientation", "vertical");
  for (const li of list.children) li.setAttribute("role", "presentation");
  for (const tab of tabs) {
    const pane = paneOf(tab);
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", pane.id);
    pane.setAttribute("role", "tabpanel");
    pane.setAttribute("aria-labelledby", tab.id);
  }

  function connect(tab, { focus = false, remember = false } = {}) {
    for (const t of tabs) {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      paneOf(t).hidden = !on;
    }
    rec.dataset.lamp = tab.dataset.lamp;
    recText.textContent = "Connected · " + tab.querySelector(".line-name").textContent;
    if (focus) tab.focus();
    // keep the address shareable without jumping the page
    if (remember) history.replaceState(null, "", tab.hash);
  }

  list.addEventListener("click", (e) => {
    const tab = e.target.closest("a.line");
    if (!tab) return;
    e.preventDefault();
    connect(tab, { remember: true });
  });

  list.addEventListener("keydown", (e) => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    // Enter follows the link (click above); Space should connect, not scroll
    if (e.key === " ") {
      e.preventDefault();
      connect(tabs[i], { remember: true });
      return;
    }
    const last = tabs.length - 1;
    const next = {
      ArrowDown: i === last ? 0 : i + 1,
      ArrowRight: i === last ? 0 : i + 1,
      ArrowUp: i === 0 ? last : i - 1,
      ArrowLeft: i === 0 ? last : i - 1,
      Home: 0,
      End: last,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    connect(tabs[next], { focus: true, remember: true });
  });

  // links elsewhere (or typed addresses) like /switchboard/#trajectory
  window.addEventListener("hashchange", () => {
    const tab = byHash(location.hash);
    if (tab) connect(tab);
  });

  // Mission Control, the newest live project, unless the address names another
  connect(byHash(location.hash) || tabs[0]);
  document.documentElement.classList.add("js-ready");

  // Hidden cards' pictures are lazy, so connecting a line showed an empty
  // tile for a moment. Once the page has loaded, fetch them in the background.
  const warm = () => {
    for (const img of document.querySelectorAll(".pane img[loading='lazy']")) img.loading = "eager";
  };
  if (document.readyState === "complete") warm();
  else window.addEventListener("load", warm, { once: true });
});

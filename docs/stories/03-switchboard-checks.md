# 03 Switchboard: checks

Build plan: https://claude.ai/artifact/6SxnWH8qqqcEf23RRG8cFb.

## Story

As Meagan, I want the Switchboard held to the CV site's bar by the same CI,
so a later one-line edit can't quietly break it.

## Acceptance criteria

- [x] CI validates `switchboard/index.html` with html-validate and
      syntax-checks `js/switchboard.js`.
- [x] `lighthouserc.json` audits `/switchboard/index.html`;
      accessibility, best practices and SEO score 100 (run locally first).
- [x] Keyboard pass: Tab reaches the skip link, the home link, then only
      the connected line, then the card's links; arrows, Home, End and
      Space connect lines; focus is always visible.
- [x] Screen reader pass (Chrome accessibility tree): one tablist named
      "Lines · 5", five tabs named with their status, the selected one
      marked, its panel named by the tab.
- [x] No console errors or CSP violations, locally and on the live site.

## Notes

- A real screen reader run (NVDA) is still deferred, as for Mission
  Control; the accessibility tree is the check for now.

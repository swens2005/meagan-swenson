# 02 Switchboard: the page

Build plan: https://claude.ai/artifact/6SxnWH8qqqcEf23RRG8cFb. Look: the
approved mock-up (https://claude.ai/artifact/AtrJTvEQMmgxxFTaEJwc2g), the
CV's top control panel in navy enamel with brass jacks.

## Story

As a visitor, I want to pick a project on a switchboard panel and see its
details on the console, by mouse, touch or keyboard, and still get every
project if JavaScript is off or I print the page.

## Acceptance criteria

- [ ] Served at codelaunch.nl/switchboard/ (`switchboard/index.html`;
      `/switchboard` redirects to it).
- [x] Plain HTML, CSS and JS, no build step. Own files:
      `css/switchboard.css`, `js/switchboard.js`. No inline scripts, no
      inline styles, no `style` attributes (CSP `style-src 'self'`).
- [x] The panel is a tablist (vertical): arrow keys move and connect,
      Home and End jump, only the connected line is in the tab order.
      Each project card sits in a tab panel.
- [x] Mission Control (the newest live project) is connected on load, so
      the console is never empty. A link to `#<project>` connects that
      line instead, and connecting a line updates the address.
- [x] Connecting a line seats a plug in its jack, lights its lamp and shows
      an arrow toward the console (down at phone width). No other motion;
      reduced motion turns transitions off.
- [x] Status is always written out next to the lamp; color is never the
      only signal.
- [ ] Without JavaScript the lines are links to each card and every card
      shows, one after another. Printed, every card shows and the panel
      hides.
- [x] 320 px wide with no sideways scroll; the lines sit above the console.
- [x] Every text color pair meets WCAG AA (4.5:1), lamp colors included.
- [x] Self-hosted fonts (the CV's three); the hero picture is not lazy,
      card pictures are.

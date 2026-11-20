# 01 Switchboard: content

Part of the Studio Redesign. Build plan: Claude Doc "Mission Control
Switchboard: Build Plan" (https://claude.ai/artifact/6SxnWH8qqqcEf23RRG8cFb).
Approved mock-up: https://claude.ai/artifact/AtrJTvEQMmgxxFTaEJwc2g.

## Story

As a hiring manager who got one link, I want every project Meagan builds on
one page, each with one sentence, what it proves, its stack, its status and
where to try it, so I get the whole picture in under a minute.

## Lineup (settled 19 Nov 2026)

Exactly five lines, in this order (the mock-up's order):

| Line | Status | Picture | Links |
| --- | --- | --- | --- |
| Mission Control | Live | its OG art (rocket at the tower) | Watch it fly, Take the controls, Source |
| Navigator · part of Mission Control | Live | its emblem on its starfield | Watch it fly, Source |
| Containment Breach | In progress | its OG art (the facility) | none yet: "dashboard and public repo to come" |
| Trajectory | Private | its OG art (the dusk arc) | none: no source link until its public demo exists |
| codelaunch.nl | Live | a real screenshot of the site | Climb it, Source |

Source: Mission Control and Navigator → github.com/swens2005/mission-control;
the CV → github.com/swens2005/meagan-swenson. Adroidea client work is a
footer link, not a line.

## Acceptance criteria

- [x] Each line has: name, status written out, one plain sentence, a
      "Proves" line, stack chips, a picture and its buttons.
- [x] Pictures are the approved final art until each redesign ships, then
      real screenshots. The CV line is already a real screenshot.
- [x] Pictures are WebP in `images/switchboard/`, 640 and 1200 px wide,
      16:9, under 120 KB each, with width and height set.
- [x] Buttons only link to things that exist today; there are no disabled
      or `#` links. Missing links are explained in a short note instead.
- [x] "Watch it fly" and "Take the controls" match the CV's Mission 05
      labels and URLs (`/mission-control/autopilot`, `/mission-control/login`).
- [x] All copy is US English.
- [x] The Star Search name appears nowhere.

## Notes

- The mock-up showed Navigator as "In progress"; story 42 in Mission
  Control shipped on 18 Nov, so it's Live (inside Mission Control).
- The mock-up's disabled buttons are replaced by notes (a link that goes
  nowhere is worse than no link).

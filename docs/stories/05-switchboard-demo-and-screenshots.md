# 05 Switchboard: Try the demo, and real screenshots

Follows story 01, which said two things would change later: Trajectory
gets a button once its public demo exists, and each line's picture is the
approved art until that project's redesign ships, then a real screenshot.
Both are true now (Trajectory story 70, Mission Control story 48).

## Story

As a visitor on the Switchboard, I want to try Trajectory and see what
Mission Control and Trajectory really look like, so I can judge the work.

## Acceptance criteria

- [x] Trajectory's line reads "Demo" and has a sky "Try the demo" button to
      `/trajectory-demo/login`. No source link: the real app runs on a real
      job search, so its repo stays private (Meagan, 24 Nov), and the note
      says so.
- [x] Mission Control's picture is a screenshot of the flight deck in a
      demo studio; Trajectory's is a screenshot of the demo's Jobs page.
      Never Meagan's real job search or a real client.
- [x] Both are WebP, 640 and 1200 px wide, 16:9, under 120 KB, with width
      and height set and alt text that says what the screen shows. New file
      names, so no browser keeps showing the old art.
- [ ] Checked on the live page at desktop and 320 px, console clean.

## Notes

- Navigator and Containment Breach keep their art: Navigator's emblem is
  its picture, and Containment Breach isn't built yet.
- The art stays in `studio-redesign/art/final/`.

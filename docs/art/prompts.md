# Art prompts

Approved by Meagan on 2026-11-19 (Studio Redesign, "Final art" on the
Redesign Art Board). Made in ChatGPT (Plus). Full-size originals live in
`studio-redesign/art/final/sb/`; this repo holds web sizes in
`images/switchboard/`: `jack-plug.webp` (320 px), `lamp-row.webp` (800 px)
and `og-base.jpg` (1200×630, the title is added when the Switchboard page
is built). The `docs/` folder is not deployed.

Made in ChatGPT (Plus) from 18 November 2026. Every prompt ends with the
shared style line. Files are WebP, longest side at most 1600 px, in
`art/final/<project>/`. "Alpha" means all four corners are fully
transparent (checked by `tools/grab-full.js`).

Style line (objects): *Pixar style 3D render, rich saturated colors,
glossy materials, crisp detail, soft studio lighting with a gentle rim
light. Isolated object, centered, on a transparent background (PNG with
alpha). No text, no letters, no logos, no people.*

Style line (scenes): *Pixar style 3D render, rich saturated colors,
glossy materials, crisp detail, soft cinematic lighting with a gentle rim
light. No text, no letters, no logos, no people.*

## Switchboard

Made in the same ChatGPT chat as the approved panel (`sb-1`). Replaces `sb-3` and `sb-4`, which had a painted checkerboard instead of transparency. No patch cords (decided 18 Nov): the connected line shows a plug seated in its jack.

| File | Prompt (before the style line) | Size | Alpha |
| --- | --- | --- | --- |
| `sb/jack-plug.webp` | Square: a close-up of one round brass-rimmed jack set into a small rounded square of navy blue enamel panel with four tiny brass screws, a small glowing lime green glass lamp above the jack, and a polished brass plug fully pushed into the jack with only a short stub of braided navy cable coming out of it, no long cable. *…on a real transparent background (PNG with alpha channel); do not draw a checkerboard pattern.* | 1254² | yes |
| `sb/lamp-row.webp` | Wide 16:9: a horizontal row of six round glass indicator lamps with polished brass bezels mounted on a long rounded navy blue enamel strip with small brass screws at each end, glowing from left to right: lime green, warm amber, bright phosphor green, starlight violet, sky blue, and one unlit clear glass. *Same no-checkerboard line.* | 1600×800 | yes |
| `sb/og.webp` | Wide 16:9: the same deep navy blue enamel switchboard panel as the first image in this chat, with no patch cables: a row of five brass-rimmed jacks, each with a glowing lamp (lime green, amber, phosphor green, violet, sky blue), one brass plug seated in the violet jack with only a short cable stub, brass screws in the corners, two chunky toggle switches. Panel in the right two thirds, slightly from the side; the left third a soft dark navy backdrop for a title. *Scene* | 1672×941 | no (scene) |

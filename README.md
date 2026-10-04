# codelaunch.nl

Portfolio site for Meagan Swenson, full-stack developer. It's plain HTML, CSS and JavaScript with no build step and no dependencies.

## How this site was built

A single-page portfolio in plain HTML, CSS and JavaScript, with no framework, no build step and no runtime dependencies. I planned and directed it and built it with an AI-assisted workflow: Claude Code as my pair programmer, with every change reviewed by me.

**The scene**

- Scroll progress maps to altitude through a piecewise curve (`kmAt` / `pAt` in `js/main.js`). That drives the sky gradient, the HUD readout, the atmosphere boundaries, the card materials (frosted, then dark glass) and the parallax objects.
- The scroll handler runs at most once per animation frame. It reads layout first and writes second, and object positions are cached on resize, so scrolling never forces a synchronous layout.
- Decorative layers are rebuilt only when the width changes, so a mobile browser's URL bar resizing the viewport doesn't reshuffle the clouds.
- `prefers-reduced-motion` turns off every animation and transition.

**Performance**

- Images are WebP where it helps. Below-the-fold images are lazy-loaded with explicit dimensions and aspect ratios (CLS 0), and the moon is only requested near the end of the climb.
- Self-hosted variable fonts are split into Latin and Latin-Extended subsets with `unicode-range`, and the two needed first are preloaded.
- LCP is about 2.2 s on a throttled mid-range phone over slow 4G.

**Security**

- A strict Content-Security-Policy (`default-src 'self'`, no `'unsafe-inline'`). There are no inline styles or scripts: JavaScript builds elements with DOM APIs and sets styles through the CSSOM, which CSP allows.
- `.htaccess` on LiteSpeed: HTTPS and canonical-host redirects in one hop, HSTS, `nosniff`, frame denial, referrer and permissions policies, and dotfile blocking.
- No cookies, no analytics and no third-party requests.

**Accessibility and SEO**

- Lighthouse 100 for accessibility, best practices and SEO on mobile and desktop, enforced in CI.
- Semantic heading order, a skip link, visible focus, accessible names that match visible labels, and switch roles on the toggles.
- All content is static HTML (crawlable, and readable without JavaScript), plus Person structured data, Open Graph tags, a sitemap, `robots.txt` and `llms.txt`.

**Responsive**

- Tested from 320 px to 1920 px. Fixes included phones laying out the page 750 px wide, because absolutely positioned decoration escaped the overflow clip until `body` became the containing block. Below 1440 px the HUD shrinks to a compact readout, and below 1100 px the ruler hides, so neither overlaps the 920 px content column.

**Delivery**

- GitHub Actions runs on every push and PR: html-validate, a JavaScript syntax check and Lighthouse CI (3 runs, with category assertions). Passing pushes to `main` deploy over FTPS. Actions are pinned to commit SHAs. See [Checks and deployment](#checks-and-deployment).

## Structure

```
index.html            page content (all text lives here)
css/style.css         styles, organized in numbered sections
js/main.js            altitude HUD, scenery and small interactions
images/               illustrations, photos and the social share image
fonts/                self-hosted variable fonts (SIL Open Font License)
.htaccess             HTTPS redirect, security headers, caching (Apache/LiteSpeed)
.github/workflows/    validation, Lighthouse and FTPS deploy (GitHub Actions)
robots.txt, sitemap.xml, llms.txt, favicon.ico, apple-touch-icon.png
meagan-swenson-cv.pdf downloadable CV
cv/                   script and photo that build the CV PDF (not deployed)
CLAUDE.md             conventions for AI assistants (not deployed)
```

## Running locally

Any static server works, for example:

```
python -m http.server 8000
```

Then open http://localhost:8000.

## Checks and deployment

GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) runs on every push and pull request:

1. Validates the HTML ([html-validate](https://html-validate.org/), config in `.htmlvalidate.json`).
2. Syntax-checks the JavaScript.
3. Runs Lighthouse three times (`lighthouserc.json`). Accessibility, best practices and SEO must score 100. Performance below 90 only gives a warning.

When a push to `main` passes, the changed files are uploaded into `public_html/` on Namecheap over FTPS (the folder is `SITE_DIR` in the workflow). Deploys need these repository secrets (Settings → Secrets and variables → Actions):

| Secret         | Value                                                                  |
| -------------- | ---------------------------------------------------------------------- |
| `FTP_SERVER`   | the server hostname from cPanel (e.g. `server123.web-hosting.com`); its TLS certificate matches, unlike `ftp.codelaunch.nl` |
| `FTP_USERNAME` | the cPanel FTP username (it logs in to the home folder, `/home/<user>`) |
| `FTP_PASSWORD` | that account's password                                                |

Until all three are set, the deploy step is skipped with a warning instead of failing.

## Editing notes

- **Language:** all content is written in United States English (color, organize, optimize). Proper names keep their official spelling.
- **Content:** jobs, skills and everything else are in `index.html`. To collapse a long job list, add `class="collapsed"` to the `<ul>`, `class="extra"` to the items to hide, and a `.more` button straight after the list. See Albert Heijn for an example.
- **CV:** `meagan-swenson-cv.pdf` is generated, so don't edit it directly. Its text lives in `cv/build_cv.py` and mirrors `index.html`; when you change content on the site, make the same change there and run `pip install reportlab` once, then `python cv/build_cv.py`.
- **Security policy:** `index.html` sets a strict Content-Security-Policy. Don't use inline `style="..."` attributes, inline `<script>` code or files from other domains, because the browser will block them. Put styles in `css/style.css` and code in `js/main.js`.
- **Images:** use WebP where possible, and always set `width` and `height` on `<img>`. Add `loading="lazy"` to anything below the first screen.
- **Updating the site:** change `lastmod` in `sitemap.xml`. If you change `images/og-image.jpg`, social networks may keep the old preview cached for a while.

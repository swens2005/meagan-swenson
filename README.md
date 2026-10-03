# codelaunch.nl

Portfolio site for Meagan Swenson, full-stack developer. It's plain HTML, CSS and JavaScript with no build step and no dependencies.

## Structure

```
index.html            page content (all text lives here)
css/style.css         styles, organised in numbered sections
js/main.js            altitude HUD, scenery and small interactions
images/               illustrations, photos and the social share image
fonts/                self-hosted variable fonts (SIL Open Font License)
.htaccess             HTTPS redirect, security headers, caching (Apache/LiteSpeed)
.github/workflows/    validation, Lighthouse and FTPS deploy (GitHub Actions)
robots.txt, sitemap.xml, llms.txt, favicon.ico, apple-touch-icon.png
meagan-swenson-cv.pdf downloadable CV
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

When a push to `main` passes, the changed files are uploaded to Namecheap over FTPS. Deploys need these repository secrets (Settings → Secrets and variables → Actions):

| Secret         | Value                                                                  |
| -------------- | ---------------------------------------------------------------------- |
| `FTP_SERVER`   | the server hostname from cPanel (e.g. `server123.web-hosting.com`); its TLS certificate matches, unlike `ftp.codelaunch.nl` |
| `FTP_USERNAME` | a dedicated cPanel FTP account whose directory is the site root        |
| `FTP_PASSWORD` | that account's password                                                |

Until all three are set, the deploy step is skipped with a warning instead of failing.

## Editing notes

- **Content:** jobs, skills and everything else are in `index.html`. To collapse a long job list, add `class="collapsed"` to the `<ul>`, `class="extra"` to the items to hide, and a `.more` button straight after the list. See Albert Heijn for an example.
- **Security policy:** `index.html` sets a strict Content-Security-Policy. Don't use inline `style="..."` attributes, inline `<script>` code or files from other domains, because the browser will block them. Put styles in `css/style.css` and code in `js/main.js`.
- **Images:** use WebP where possible, and always set `width` and `height` on `<img>`. Add `loading="lazy"` to anything below the first screen.
- **Updating the site:** change `lastmod` in `sitemap.xml`. If you change `images/og-image.jpg`, social networks may keep the old preview cached for a while.

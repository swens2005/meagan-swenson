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
robots.txt, sitemap.xml, llms.txt, favicon.ico, apple-touch-icon.png
meagan-swenson-cv.pdf downloadable CV
```

## Running locally

Any static server works, for example:

```
python -m http.server 8000
```

Then open http://localhost:8000.

## Editing notes

- **Content:** jobs, skills and everything else are in `index.html`. To collapse a long job list, add `class="collapsed"` to the `<ul>`, `class="extra"` to the items to hide, and a `.more` button straight after the list. See Albert Heijn for an example.
- **Security policy:** `index.html` sets a strict Content-Security-Policy. Don't use inline `style="..."` attributes, inline `<script>` code or files from other domains, because the browser will block them. Put styles in `css/style.css` and code in `js/main.js`.
- **Images:** use WebP where possible, and always set `width` and `height` on `<img>`. Add `loading="lazy"` to anything below the first screen.
- **Updating the site:** change `lastmod` in `sitemap.xml`. If you change `images/og-image.jpg`, social networks may keep the old preview cached for a while.

# Art.github.io

Static site (plain HTML/CSS/JS) hosted on GitHub Pages. No backend, no build step.

## Cache busting

GitHub Pages does not support custom HTTP headers (no `_headers` file), so
`Cache-Control` cannot be set directly. `styles.css` and `script.js` are
linked from `index.html` with a version query string:

```html
<link rel="stylesheet" href="styles.css?v=1">
<script src="script.js?v=1"></script>
```

**Whenever `styles.css` or `script.js` changes, bump the `?v=` number in
`index.html`** so browsers fetch the new version instead of a cached copy.

The other pages (`art.html`, `film.html`, `spiel.html`, `wort.html`) use
inline `<style>`/`<script>` blocks, not the shared files, so they don't need
versioning.

## Page-level no-cache

Editing the *text/content* of an HTML page (e.g. inline copy in `art.html`)
isn't helped by query-string versioning — the page itself is the thing that
needs to stay fresh, not a linked asset. Every page's `<head>` therefore
includes:

```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
```

This tells the browser to always revalidate that document instead of serving
a cached copy, so content edits show up on the next reload. Keep these tags
in any new page added to the site.

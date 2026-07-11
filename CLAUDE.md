# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single‑page static website hosted on GitHub Pages. The site consists of:

- `index.html` – the single‑page home/about/services/contact experience.
- `README.md` – original repository readme.
- `CLAUDE.md` – this file (for future Claude sessions).

## Development

There are no build steps or dependencies. To view the site locally, simply open `index.html` in a web browser.

## Deployment

The site is configured to be published on GitHub Pages from the `main` branch (the root of the repository). Pushes to `main` will automatically update the site.

## Code Style

- HTML: Use 2‑space indentation.
- CSS: Embedded in `<style>` tag; keep formatting consistent.
- Comments: Use HTML comments (`<!-- -->`) where needed.

## Known Considerations

- The page uses a simple, responsive layout with a fixed navigation bar.
- For a functional contact form, integrate a third‑party service (Formspree, Getform, etc.).
- Images or additional assets can be placed alongside `index.html` and referenced with relative paths.

## Claude Code Specifics

- When working on this repository, focus on maintaining the simplicity of the single‑page site.
- Avoid introducing complex build tools or frameworks unless explicitly requested.
- Ensure any changes remain compatible with GitHub Pages (static HTML, CSS, JavaScript).
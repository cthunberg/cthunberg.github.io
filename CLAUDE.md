# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a single-page static website for Thuned LLC, a virtual/fractional CISO and security consulting firm. The site includes:

- `index.html` – the main page with header/logo, navigation, about, services, call-to-action, contact, and footer.
- `logo.svg` – a simple shield logo used in the header.
- `README.md` – original repository readme.
- `CLAUDE.md` – this file (guidance for future Claude sessions).

## Development

There are no build steps or dependencies. To view the site locally:

1. Open `index.html` in any web browser.
2. Optionally, serve it with a local server (e.g., `python -m http.server`) to test relative links.

## Deployment

The site is configured to publish via GitHub Pages from the `main` branch (the repository root). Push changes to `main` and GitHub will automatically rebuild and deploy the site.

## Code Style

- HTML: 2-space indentation; semantic elements used where appropriate.
- CSS: Custom properties (variables) for colors; responsive layout with media queries.
- SVG: Simple logo; keep paths simple and scalable.
- Comments: Use HTML comments (`<!-- -->`) for explanations; avoid leaving debug code.

## Known Considerations

- The logo (`logo.svg`) is a basic shield icon; replace with a more refined brand mark if desired.
- For a functional contact form, integrate a third‑party service such as Formspree, Getform, or similar.
- Images or additional assets can be placed alongside `index.html` and referenced with relative paths.

## Claude Code Specifics

- When working on this repository, focus on maintaining the clean, professional appearance suitable for an infosec consulting business.
- Avoid adding heavy frameworks or build tools unless explicitly requested; the strength of this site is its simplicity and speed.
- Ensure any changes remain compatible with GitHub Pages (static HTML, CSS, JS, SVG).
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single‑page static website hosted on GitHub Pages for Thuned LLC, an information‑security consulting firm offering virtual/fractional CISO services. The site features a dark background with accent colors for a modern, professional look.

- `index.html` – the sole page containing all content (about, services, contact) with dark‑theme styling.
- `logo.svg` – simple white‑text logo used in the header.
- `README.md` – original repository readme.
- `CLAUDE.md` – this file (guidance for future Claude sessions).

## Development

There are no build steps or dependencies. To view the site locally, open `index.html` in a web browser.

## Deployment

The site is configured to publish via GitHub Pages from the `main` branch (the repository root). Push changes to `main` and GitHub will automatically rebuild and deploy the site.

## Code Style

- HTML: 2‑space indentation; semantic elements where appropriate.
- CSS: Uses CSS custom properties for colors; dark mode palette; responsive layout.
- SVG: Simple, scalable, white text on dark background.
- Comments: Use HTML comments (`<!-- -->`) for explanations; avoid leaving debug code.

## Known Considerations

- The design is dark‑themed; ensure any added images or assets have sufficient contrast.
- For a functional contact form, integrate a third‑party service (Formspree, Getform, etc.) while preserving the visual style.
- Additional assets (images, documents) can be placed alongside `index.html` and referenced with relative paths.

## Claude Code Specifics

- When working on this repository, focus on maintaining the dark, professional appearance suitable for an infosec consulting business.
- Avoid introducing heavy frameworks or build tools unless explicitly requested; the strength of the site is its simplicity and speed.
- Ensure any changes remain compatible with GitHub Pages (static HTML, CSS, JavaScript, SVG).
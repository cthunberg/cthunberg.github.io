# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single‑page static website hosted on GitHub Pages site for Thuned LLC, an information‑security consulting firm offering virtual/fractional CISO services.

- `index.html` – the sole page containing all content (about, services, contact) with a clean, professional design.
- `logo.svg` – a simple emblem used in the header.
- `README.md` – original repository readme.
- `CLAUDE.md` – this file (guidance for future Claude sessions).

## Development

There are no build steps or dependencies. To view the site locally, open `index.html` in a web browser.

## Deployment

The site is configured to publish via GitHub Pages from the `main` branch (the repository root). Push changes to `main` and GitHub will automatically rebuild and deploy the site.

## Code Style

- HTML: 2‑space indentation; semantic elements where appropriate.
- CSS: Custom properties for colors; responsive layout; keep formatting consistent.
- SVG: Keep the logo simple and scalable.
- Comments: Use HTML comments (`<!-- -->`) for explanations; avoid leaving debug code.

## Known Considerations

- The design is minimal and professional, suited for a security‑consulting brand.
- For a functional contact form, integrate a third‑party service (Formspree, Getform, etc.) while preserving the visual style.
- Additional assets (images, documents) can be placed alongside `index.html` and referenced with relative paths.

## Claude Code Specifics

- When working on this repository, focus on maintaining a clean, trustworthy appearance appropriate for an infosec consulting business.
- Avoid introducing heavy frameworks or build tools unless explicitly requested; the strength of the site is its simplicity and speed.
- Ensure any changes remain compatible with GitHub Pages (static HTML, CSS, JavaScript, SVG).
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single‑page static website hosted on GitHub Pages, designed with a Bauhaus aesthetic (primary colors, geometric shapes, sans‑serif typography). The site presents Thuned LLC, a virtual/fractional CISO and security consulting firm.

- `index.html` – the sole page containing all content (about, services, contact) and Bauhaus‑style design.
- `logo.svg` – simple Bauhaus‑inspired logo (red square, blue circle, yellow triangle) with the company name.
- `README.md` – original repository readme.
- `CLAUDE.md` – this file (for future Claude sessions).

## Development

There are no build steps or dependencies. To view the site locally, simply open `index.html` in a web browser.

## Deployment

The site is configured to be published on GitHub Pages from the `main` branch (the repository root). Pushes to `main` will automatically update the site.

## Code Style

- HTML: Use 2‑space indentation.
- CSS: Embedded in `<style>` tag; keep formatting consistent, use CSS variables for Bauhaus palette.
- SVG: Keep shapes simple, primary colors, and readable text.
- Comments: Use HTML comments (`<!-- -->`) where needed.

## Known Considerations

- The design follows Bauhaus principles: limited color palette (red, blue, yellow, black, white), geometric shapes, clear hierarchy.
- Ensure any added images or assets respect the same aesthetic (simple shapes, primary colors).
- For a functional contact form, integrate a third‑party service (Formspree, Getform, etc.) while preserving the visual style.

## Claude Code Specifics

- When working on this repository, focus on maintaining the Bauhaus‑inspired design and the simplicity of the single‑page site.
- Avoid introducing heavy frameworks or build tools unless explicitly requested.
- Keep any changes compatible with GitHub Pages (static HTML, CSS, JavaScript, SVG).
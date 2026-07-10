# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple static website hosted on GitHub Pages. The project consists of:
- `index.html`: The main HTML file.
- `README.md`: This file.

The HTML references `style.css` and `favicon.ico`, but these files are not present in the repository.

## Development

There are no build steps or dependencies. To view the site locally, simply open `index.html` in a web browser.

## Deployment

The site is configured to be published on GitHub Pages from the `main` branch (the root of the repository). Pushes to `main` will automatically update the site.

## Code Style

- HTML: Use 2-space indentation.
- CSS: Not present, but if added, use 2-space indentation.
- Comments: Use HTML comments (`<!-- -->`) for HTML and standard CSS comments for CSS.

## Known Issues

- The `style.css` and `favicon.ico` files referenced in `index.html` are missing. To fix, either create these files or remove the references from `index.html`.

## Claude Code Specifics

- When working on this repository, Claude Code should focus on maintaining the simplicity of the static site.
- Avoid introducing complex build tools or frameworks unless explicitly requested.
- Ensure any changes are compatible with GitHub Pages (static HTML, CSS, JavaScript).
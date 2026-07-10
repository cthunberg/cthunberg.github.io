# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static GitHub Pages site built with Jekyll using the `jekyll-theme-consulting` theme for Thuned LLC, an information security consulting company.

## Files & Directories

- `_config.yml` - Jekyll configuration
- `index.md` - Homepage content
- `about.md` - About page
- `services.md` - Services offered
- `contact.md` - Contact information
- `_posts/` - Blog posts (Markdown files)
- `CLAUDE.md` - This file (excluded from Jekyll processing)
- `README.md` - Original repository readme (excluded)

## Development

### Prerequisites

- Ruby (version compatible with Jekyll)
- Bundler (Ruby gem manager)

### Local Development

1. Install dependencies:
   ```bash
   bundle install
   ```

2. Serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

3. Open `http://localhost:4000` in your browser

### Building for Production

GitHub Pages automatically builds the site when you push to the `main` branch. To build locally for preview:

```bash
bundle exec jekyll build
```

The generated site will be in the `_site/` directory.

## Content Updates

- Update page content by editing the `.md` files in the root directory
- Add blog posts as Markdown files in `_posts/` with the format `YYYY-MM-DD-title.md`
- Front matter (YAML between triple dashes) at the top of each file controls layout and metadata

## Deployment

This site is configured to publish from the `main` branch root. Simply push changes to GitHub and GitHub Pages will automatically rebuild and deploy the site.

## Code Style

- Use 2-space indentation for Markdown and YAML
- Keep line lengths reasonable (< 100 characters) for readability
- Use descriptive filenames for blog posts

## Known Considerations

- The `jekyll-theme-consulting` theme provides built-in styling and layout
- For a functional contact form, integrate with a third-party service like Formspree or Getform
- Images and other assets can be placed in an `assets/` directory and referenced accordingly
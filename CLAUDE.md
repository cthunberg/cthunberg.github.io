# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository hosts a modern Web3.0-style website for Veridian Security, a blockchain and cryptocurrency security consulting firm. The site features a dark/space theme with electric accents, geometric shapes, and smooth animations while maintaining a professional focus on enterprise-grade blockchain security services.

The website includes:
- Responsive design for mobile, tablet, and desktop
- Interactive elements like wallet connection simulation
- Comprehensive service showcase for blockchain security offerings
- Contact form for client inquiries
- Optimized for GitHub Pages deployment

## Development

### Prerequisites
- No specialized tools required for basic HTML/CSS/JS development
- Modern web browser for testing
- Git for version control

### Common Commands
Since this is a static GitHub Pages site:
- **Local development**: Simply open `index.html` in a web browser
- **No build process**: Changes to HTML/CSS/JS files are visible immediately upon refresh
- **Testing**:
  - View in multiple browsers/devices for responsiveness testing
  - Use browser developer tools for debugging and inspection
  - Validate HTML/CSS with W3C validators if desired

### Available Scripts (in script.js)
The JavaScript file includes several initialized functions:
- `initAnimations()` - Scroll-based animations
- `initWalletConnection()` - Simulated wallet connection handler
- `initContactForm()` - Form validation and submission handling
- `initSmoothScroll()` - Smooth scrolling for anchor links
- `initFooterYear()` - Automatic year update in footer
- `initMobileMenu()` - Placeholder for mobile menu functionality

## Code Architecture & Structure

### Core Technologies
- **HTML5**: Semantic markup with proper sectioning elements
- **CSS3**: Modern styling with CSS variables, Flexbox, Grid, and animations
- **JavaScript**: Vanilla JS for interactivity (no frameworks)

### File Structure
```
.
├── index.html              # Main entry point
├── style.css               # All styling (responsive, animations, theme)
├── script.js               # Interactive components and animations
├── blue.png                # Existing asset (available for use)
├── smoke-0054.png          # Existing asset (available for use)
├── CLAUDE.md               # This file
└── README.md               # Project overview
```

### Key Components

#### 1. Design System (style.css)
- **Color Variables**: Web3.0 inspired palette with electric cyan primary (`#64ffda`)
- **Dark Theme**: Optimized for readability with proper contrast
- **Responsive Breakpoints**: Mobile (<768px), Tablet (768-992px), Desktop (>992px)
- **Animation Utilities**: Floating shapes, pulse effects, scroll animations
- **Component Styles**: Cards, buttons, forms, navigation, hero sections

#### 2. Interactivity (script.js)
- **Scroll Animations**: Elements animate into view on scroll
- **Wallet Connection**: Simulated MetaMask/WalletConnect interaction
- **Form Handling**: Validation, submission simulation, user feedback
- **Smooth Scrolling**: Native behavior for anchor links
- **Utility Functions**: Confetti effect, helper methods

#### 3. Content Sections
- **Hero**: Value proposition with call-to-action buttons
- **About**: Company overview and statistics
- **Services**: Six core security service offerings with icons
- **Approach**: Five-step security methodology
- **Resources**: Downloadable guides and reports
- **Contact**: Information form and wallet connection simulation
- **Footer**: Navigation, social links, and legal information

### Technical Considerations

#### Performance
- Minimal external dependencies (no frameworks)
- Efficient CSS with minimal repaints/reflows
- Optimized animations using transform and opacity
- Lazy-loading ready for future image implementation

#### Security
- No sensitive data collection without proper encryption
- Secure form handling patterns (would connect to secure backend)
- Content Security Policy ready for implementation
- Safe DOM manipulation practices

#### GitHub Pages Compatibility
- All static assets (HTML, CSS, JS, images)
- Relative paths for all internal links
- No server-side processing or databases
- Client-side only functionality

#### Accessibility
- Semantic HTML structure
- Proper color contrast ratios
- Keyboard navigable interface
- Focus management for interactive elements
- ARIA-ready structure for screen readers

## Customization Guide

### Modifying Branding
1. **Company Name**: Update in HTML (logo text, meta title, footer)
2. **Colors**: Modify CSS variables in `:root` selector
3. **Logo**: Replace SVG elements in `.logo` and `.footer-logo` classes
4. **Typography**: Adjust `font-family` in `:root` if needed

### Adding Content
1. **New Sections**: Follow existing section pattern in HTML
2. **Service Cards**: Duplicate `.service-card` in `.services-grid`
3. **Resources**: Add to `.resources-grid` following existing pattern
4. **Stats**: Modify `.about-stats` container

### Using Existing Assets
The repository includes two image files that can be incorporated:
- `blue.png` - Abstract blue texture
- `smoke-0054.png` - Smoky/gray texture

These could be used as:
- Background textures with opacity adjustments
- Decorative elements in sections
- Pattern overlays in hero or service sections
- Masking effects for unique visual treatments

## Deployment

### GitHub Pages
The site is configured for automatic deployment:
1. Push to `main` branch triggers GitHub Pages build
2. Site available at `https://cthunberg.github.io`
3. Custom domains configurable in repository settings

### Manual Deployment
1. Copy all files to web server root
2. Ensure `index.html` is the default document
3. Verify all relative paths resolve correctly
4. Test contact form with actual backend implementation

## Maintenance

### Updating Dependencies
This project has no external dependencies, so updates are not required.
If adding third-party libraries in future:
- Use version pinning
- Regular security audits
- Bundle analysis for performance

### Content Updates
1. Edit HTML files directly for structural changes
2. Modify CSS for styling adjustments
3. Update JavaScript for behavior changes
4. Replace images in root directory as needed
5. Test thoroughly after any changes

## Troubleshooting

### Common Issues
- **Styles not updating**: Hard refresh (Ctrl+F5/Cmd+Shift+R) to clear cache
- **JavaScript errors**: Check browser console for diagnostic information
- **Layout issues**: Verify responsive breakpoints in browser dev tools
- **Form not working**: Remember this is a demo - backend integration needed for actual submissions

### Performance Optimization
- Audit with Lighthouse in Chrome DevTools
- Consider image optimization/ WebP conversion
- Minify CSS/JS for production if file sizes become concern
- Implement lazy loading for below-content images

---
*This guide provides the foundation for maintaining and extending the Veridian Security Web3.0 website. Refer to the individual files for detailed implementation specifics.*
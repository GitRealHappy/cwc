# CWC Architectural Millwork Website

A modern, responsive Jekyll website for CWC Architectural Millwork featuring a video landing page and elegant left-side navigation. Built with Jekyll/JAMstack for easy content management and deployment.

## Features

- **Jekyll/JAMstack Architecture**: Static site generation for fast performance and easy deployment
- **Landing Page**: Full-screen intro video with "Enter Site" button
- **Responsive Design**: Left-side navigation on desktop, top navigation on mobile
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Built-in SEO with jekyll-seo-tag plugin
- **Easy Content Management**: Markdown-based content with YAML front matter
- **Collections Support**: Organized portfolio and services content

## Project Structure

```
cwc-millwork/
├── _config.yml              # Jekyll configuration
├── Gemfile                  # Ruby dependencies
├── index.md                 # Landing page
├── home.md                  # Main home page
├── about.md                 # About page
├── contact.md               # Contact page
├── _layouts/
│   ├── default.html         # Main layout template
│   └── landing.html         # Landing page layout
├── _includes/
│   └── navigation.html      # Navigation component
├── assets/
│   ├── css/
│   │   ├── main.css        # Main layout and navigation
│   │   ├── landing.css     # Landing page styles
│   │   └── home.css        # Home page specific styles
│   ├── js/
│   │   ├── main.js         # Main site functionality
│   │   └── landing.js      # Landing page functionality
│   ├── images/             # Logo, photos, graphics
│   └── videos/             # Intro video files
└── _sass/                  # Sass partials (optional)
```

## Setup Instructions

### 1. Install Jekyll

**macOS (using Homebrew):**
```bash
brew install ruby
gem install bundler jekyll
```

**Ubuntu/Debian:**
```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
echo 'export PATH="$HOME/.gem/ruby/X.X.0/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
gem install bundler jekyll
```

**Windows:**
Download and install [RubyInstaller](https://rubyinstaller.org/)

### 2. Install Dependencies

```bash
cd cwc-millwork
bundle install
```

### 3. Add Content Files

**Required Images:**
- Logo: `assets/images/logo.png`
- Hero image: `assets/images/hero-millwork.jpg`
- Service images: `assets/images/custom-cabinetry.jpg`, etc.
- Workshop images: `assets/images/workshop.jpg`

**Required Videos:**
- Place your intro video as `assets/videos/intro.mp4`
- Optionally add `assets/videos/intro.webm` for better browser support

### 4. Configure Site Settings

Edit `_config.yml` to update:
- Company information
- Contact details
- Social media handles
- SEO settings

### 5. Development Server

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to view your site.

For live reloading during development:
```bash
bundle exec jekyll serve --livereload
```

## Deployment Options

### GitHub Pages
1. Push your repository to GitHub
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

### Netlify
1. Connect your Git repository to Netlify
2. Build command: `bundle exec jekyll build`
3. Publish directory: `_site`

### Traditional Web Hosting
1. Run `bundle exec jekyll build`
2. Upload the `_site` folder contents to your web server

## Content Management

### Adding Pages
Create new `.md` files in the root directory with front matter:

```yaml
---
layout: default
title: "Page Title"
description: "Page description for SEO"
---

Your content here...
```

### Managing Navigation
Edit `_includes/navigation.html` to add/remove menu items.

### Site Configuration
Edit `_config.yml` to update global site settings like company info, phone numbers, etc.

### Custom Styling
- Add custom CSS to existing files in `assets/css/`
- Create new CSS files and reference them in page front matter:
  ```yaml
  custom_css: ["custom-page"]
  ```

## Collections (Future Features)

The site is configured for two collections:
- **Services** (`_services/`): Individual service pages
- **Portfolio** (`_portfolio/`): Portfolio project pages

Create these directories and add markdown files to populate galleries and detailed service pages.

## Video Recommendations

For optimal web performance:
- **Primary format**: MP4 (H.264 codec)
- **Secondary format**: WebM (VP9 codec) - optional
- **Resolution**: 1920x1080 max
- **File size**: <10MB for fast loading
- **Compression**: Balance quality vs. size

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Performance Features

- Static site generation for fast loading
- Automatic image optimization (when using plugins)
- Minified CSS and JS in production
- SEO-optimized markup
- Responsive images support

## Support & Maintenance

### Updating Content
- Edit markdown files for page content
- Update `_config.yml` for site-wide changes
- Add images to `assets/images/`

### Adding Blog/News
Uncomment and configure the jekyll-feed plugin, then create `_posts/` directory for blog posts.

### Custom Development
- Jekyll uses Liquid templating
- Sass support for advanced CSS
- Plugin ecosystem for extended functionality

## Technical Notes

- **Generator**: Jekyll 4.3+
- **Templating**: Liquid
- **Styling**: CSS3 with optional Sass
- **JavaScript**: Vanilla JS (no frameworks)
- **SEO**: jekyll-seo-tag plugin
- **Performance**: Static site generation
- **Deployment**: GitHub Pages, Netlify, or any static host

## Next Steps

1. Install Jekyll and dependencies
2. Add your logo, images, and video
3. Update `_config.yml` with your information
4. Customize content in markdown files
5. Test locally with `bundle exec jekyll serve`
6. Deploy to your preferred hosting platform

## Navigation Structure

The website includes the following pages:
- Home (home.html)
- About (about.html) - *to be created*
- Services (services.html) - *to be created*
- Portfolio (portfolio.html) - *to be created*
- Gallery (gallery.html) - *to be created*
- Contact (contact.html) - *to be created*

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Technical Notes

- Uses modern CSS Grid and Flexbox
- Intersection Observer API for scroll animations
- Mobile-first responsive design
- Semantic HTML5 structure
- No external dependencies (vanilla JavaScript)

## Contact

Update contact information in the navigation and create contact page as needed. 
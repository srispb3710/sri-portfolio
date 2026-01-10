# Sri Bhamidipati - Portfolio Website

A modern, responsive portfolio website built with Hugo static site generator.

## 🚀 Quick Start

### Local Development

1. **Install Hugo** (if not already installed):
   ```bash
   # macOS
   brew install hugo
   
   # Windows (with Chocolatey)
   choco install hugo-extended
   
   # Linux
   snap install hugo
   ```

2. **Run the development server**:
   ```bash
   hugo server -D
   ```

3. **Open in browser**: http://localhost:1313

### Build for Production

```bash
hugo --minify
```

The compiled site will be in the `public/` directory.

## 📁 Project Structure

```
portfolio-hugo/
├── hugo.yaml              # Site configuration
├── layouts/
│   ├── index.html         # Main page layout
│   └── partials/          # Reusable components
│       ├── header.html    # Navigation bar
│       ├── hero.html      # Hero section
│       ├── about.html     # About section
│       ├── experience.html # Experience section
│       ├── projects.html  # Projects section
│       ├── skills.html    # Skills & Coursework
│       ├── contact.html   # Contact section
│       ├── footer.html    # Footer
│       └── scripts.html   # JavaScript
├── data/                  # Content data files
│   ├── experience.yaml    # Work experience
│   ├── projects.yaml      # All 19 projects
│   └── skills.yaml        # Skills & coursework
├── content/
│   └── about.md           # About section content
└── static/
    ├── css/
    │   └── style.css      # All styles
    └── images/
        └── profile.jpg    # Profile photo
```

## ✏️ Updating Content

### Update Your Links

1. Open `hugo.yaml`
2. Update social links:
   ```yaml
   social:
     linkedin: "https://linkedin.com/in/YOUR-PROFILE"
     github: "https://github.com/YOUR-USERNAME"
     email: "your.email@example.com"
     resume: "URL-TO-YOUR-RESUME"
   ```

### Add/Edit Work Experience

Edit `data/experience.yaml`:

```yaml
experiences:
  - company: "Company Name"
    title: "Your Title"
    location: "City, State"
    period: "Month Year – Month Year"
    description: "Brief description"
    highlights:
      - "Achievement 1"
      - "Achievement 2"
```

### Add/Edit Projects

Edit `data/projects.yaml`:

```yaml
# Featured projects (top 6)
featured:
  - title: "Project Name"
    description: "Brief description"
    icon: "icon-name"  # Font Awesome icon
    github: "https://github.com/..."
    badges:
      - "Tag 1"
      - "Tag 2"

# All projects by track
tracks:
  trackname:
    name: "Track Display Name"
    projects:
      - title: "Project Title"
        description: "Description"
        github: "https://github.com/..."  # or url: "https://..."
        badges:
          - "Badge 1"
```

### Update Skills

Edit `data/skills.yaml`:

```yaml
skills:
  - title: "Category Name"
    items:
      - "Skill 1"
      - "Skill 2"
```

### Update About Section

Edit `content/about.md` in Markdown format.

## 🎨 Customization

### Colors

Edit `static/css/style.css` to change colors:

```css
:root {
    --color-accent-blue: #1976D2;  /* Main accent color */
    --color-bg-primary: #e8eaed;   /* Background color */
    /* ... more variables ... */
}
```

### Profile Photo

Replace `static/images/profile.jpg` with your photo.

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

1. Push code to GitHub
2. Go to https://netlify.com
3. "New site from Git" → Select your repository
4. Build settings:
   - Build command: `hugo --minify`
   - Publish directory: `public`
5. Deploy!

### Option 2: GitHub Pages

1. Create `.github/workflows/hugo.yml`:

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
      - run: hugo --minify
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

2. Push to GitHub
3. Enable GitHub Pages in repository settings

### Option 3: Vercel

1. Push code to GitHub
2. Import project at https://vercel.com
3. Vercel auto-detects Hugo
4. Deploy!

## 📝 Tips

- Test locally before deploying: `hugo server -D`
- Check links work: Click through every project and social link
- Test dark mode toggle
- Test on mobile (responsive design included)
- Update the baseURL in `hugo.yaml` before deploying

## 🐛 Troubleshooting

**Issue**: Site doesn't build
- Make sure Hugo is installed: `hugo version`
- Check for syntax errors in YAML files

**Issue**: Styles don't load
- Check that `static/css/style.css` exists
- Verify the CSS link in `layouts/index.html`

**Issue**: Profile photo doesn't show
- Ensure photo is at `static/images/profile.jpg`
- Check file permissions

## 📧 Support

For issues or questions, check the Hugo documentation at https://gohugo.io/documentation/

---

Good luck with your portfolio! 🎉

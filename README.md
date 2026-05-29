# STAR-KIN LABS — Website

**STAR-KIN LABS (OPC) PRIVATE LIMITED**  
[starkinlabs.com](https://starkinlabs.com)

---

## Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Rajdhani (display), DM Sans (body), JetBrains Mono (code)
- **Deployment**: Netlify (static export)

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
```

Output goes to `/out` — ready for Netlify or any static host.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles + CSS utilities
│   ├── not-found.tsx           # 404 page
│   ├── about/page.tsx          # About + Founder
│   ├── services/page.tsx       # All services
│   ├── projects/page.tsx       # Featured projects
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Individual posts
│   ├── careers/page.tsx        # Careers
│   ├── contact/page.tsx        # Contact form
│   ├── why-local-automation/   # Founder article
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── disclaimer/page.tsx
└── components/
    ├── layout/
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    └── sections/
        ├── HeroSection.tsx
        ├── ServicesSection.tsx
        ├── IndustriesSection.tsx
        ├── LabSection.tsx
        ├── ProjectsSection.tsx
        ├── WhyLocalSection.tsx
        ├── AboutSection.tsx
        ├── BlogPreviewSection.tsx
        └── CTASection.tsx

public/
├── assets/
│   ├── logo/           ← Add starkin-logo.png here
│   ├── founder/        ← Add founder.jpg here
│   ├── lab/            ← Add lab images here
│   ├── projects/       ← Add project images here
│   ├── blog/           ← Add blog post images here
│   └── industries/     ← Add industry images here
├── robots.txt
└── sitemap.xml
```

---

## Adding Images

### Logo
Place the company logo at:
```
public/assets/logo/starkin-logo.png
```
Then uncomment the `<Image>` tag in `src/components/layout/Navbar.tsx` and `src/components/sections/HeroSection.tsx`.

### Founder Photo
Place at:
```
public/assets/founder/founder.jpg
```
Uncomment the `<Image>` tag in `src/app/about/page.tsx` and `src/components/sections/AboutSection.tsx`.

### Lab Images
Add to `public/assets/lab/` with these filenames:
- `robotic-arm.jpg`
- `electronics-workstation.jpg`
- `3d-printing.jpg`
- `sensors.jpg`
- `control-systems.jpg`
- `embedded-dev.jpg`
- `prototype-assembly.jpg`
- `testing-rig.jpg`

### Project Images
Add to `public/assets/projects/`:
- `security-node.jpg`
- `robotic-workbench.jpg`
- `environment-controller.jpg`
- `ai-monitoring.jpg`
- `automation-dashboard.jpg`

### Blog Images
Add to `public/assets/blog/` matching slugs.

### Industry Images
Add to `public/assets/industries/`:
- `factory.jpg`, `workshop.jpg`, `education.jpg`, `agriculture.jpg`
- `retail.jpg`, `office.jpg`, `warehouse.jpg`, `residential.jpg`

---

## Netlify Deployment

1. Push to GitHub
2. Connect repo in Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

The `netlify.toml` is already configured.

---

## Contact Form

The contact form in `src/app/contact/page.tsx` is client-side ready.  
To wire it up, add one of:

- **Netlify Forms**: Add `data-netlify="true"` attribute to the `<form>` tag
- **Formspree**: POST to `https://formspree.io/f/YOUR_ID`
- **Custom API**: Replace the `handleSubmit` function with a `fetch` POST

---

## SEO

- Metadata defined per-page using Next.js `Metadata` API
- Open Graph tags configured in `src/app/layout.tsx`
- `robots.txt` and `sitemap.xml` in `/public`
- All pages have descriptive titles and descriptions

---

## Company Details

| Field | Value |
|-------|-------|
| Legal Name | STAR-KIN LABS (OPC) PRIVATE LIMITED |
| CIN | U58201PB2026OPC068447 |
| GSTIN | 03ABTCS8388J1ZF |
| Email | starkinlabs.official@gmail.com |
| Phone | +91 62843 58633 |
| Website | https://starkinlabs.com |
| Address | Annia Road, Amloh, Fatehgarh Sahib, Punjab, India — 147203 |

---

© STAR-KIN LABS (OPC) PRIVATE LIMITED. All Rights Reserved.

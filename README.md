# Tubros Hardware Co. Ltd — Official Website

A modern, production-grade website built with **React + Vite + Tailwind CSS**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
tubros-website/
├── public/
│   ├── images/          # All 49 product/project photos
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx   # Sticky nav with mobile hamburger
│   │   ├── Hero.jsx     # Full-screen hero section
│   │   ├── About.jsx    # Company info, values, mission/vision
│   │   ├── Services.jsx # Interactive service selector
│   │   ├── Products.jsx # Tabbed product catalog
│   │   ├── Gallery.jsx  # Masonry gallery with lightbox
│   │   ├── Contact.jsx  # Contact form + info
│   │   └── Footer.jsx   # Footer with CTA strip
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Tailwind + custom styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🎨 Design System

### Colors
| Variable         | Hex       | Usage                  |
|-----------------|-----------|------------------------|
| `brand-red`     | `#C8102E` | Primary CTA, accents   |
| `brand-green`   | `#006B3C` | Secondary accent       |
| `brand-navy`    | `#0A2463` | Deep accent            |
| `brand-orange`  | `#F4821F` | Warm highlight         |
| `brand-gold`    | `#D4A017` | Premium highlight      |

### Typography
- **Display**: Barlow Condensed (900, 700, 600 weights) — headlines & nav
- **Body**: Barlow (300, 400, 500, 700) — body text

---

## 📦 Sections

1. **Navbar** — Fixed, transparent on hero / opaque on scroll. Mobile hamburger menu.
2. **Hero** — Full screen with image grid background, animated entrance, stats row.
3. **About** — Company intro, image with accent, mission/vision cards, core values.
4. **Services** — Interactive list + detail panel with image, description, applications.
5. **Products** — Category tabs (Hand Tools, Power Tools, Safety, Measuring, Materials) with image slideshow and item grid.
6. **Gallery** — Masonry grid with category filters, lightbox with keyboard navigation.
7. **Contact** — Split layout with info cards + full enquiry form.
8. **Footer** — CTA strip, link columns, social links, copyright.

---

## 🌐 Deployment

### Netlify / Vercel
```bash
npm run build
# Deploy the /dist folder
```

### Nginx
Point root to `/dist` folder after running `npm run build`.

---

## 📞 Contact Details Used
- **Phone**: +255 704 421 264 / +255 789 602 364
- **Email**: tubroshardware2019@gmail.com / sales@tubroshardware.com
- **Address**: Prime Village Mall, P.O Box 260 Nateete, Kampala, Uganda
- **Website**: www.tubroshardware.com

# TheShop.com — Full-Stack E-commerce Storefront

A beautiful, production-ready e-commerce single-page application built with vanilla HTML, CSS, and JavaScript. No build step, no framework, no dependencies.

## ✨ Features

### Storefront
- **Hero carousel** with 4 themed slides, auto-rotation, progress-bar timing indicator, swipe/keyboard support
- **Product grid** with 100+ products across 8 categories (15+ per category)
- **Category pages** with filters, sort tabs, and product grid
- **Product detail pages** with image gallery, variants, specs table, and customer reviews
- **Account page** with sidebar navigation

### Shopping flow
- **Cart** with quantity controls, promo codes (try `WELCOME50` for 100% off)
- **Multi-step checkout** (Address → Shipping & Payment → Review)
- **6-digit OTP** screen with auto-advance
- **Order confirmation** page
- **Persistent state** via localStorage

### Design
- **Framer-Motion-inspired animations**: staggered reveals, scroll-triggered motion, smooth page transitions
- **Elegant typography** (Inter + Plus Jakarta Sans)
- **Teal/black/white design system**
- **Toast notifications** for every action
- **Floating label inputs**
- **Fully responsive** (desktop, tablet, mobile)
- **Reduced-motion support** for accessibility

## 📁 Project structure

```
theshop/
├── index.html              ← Main page (serve via HTTP)
├── index-standalone.html   ← Single-file build (works via file://)
├── css/
│   ├── styles.css          ← Design system & components
│   └── animations.css      ← Framer-Motion-inspired animations
├── js/
│   ├── data.js             ← Product catalog (100+ products, slides, reviews)
│   ├── animations.js       ← Motion library (reveal, scroll, etc.)
│   └── app.js              ← Router, state, rendering
├── package.json
└── README.md
```

## 🚀 Running locally

The app needs to be served from an HTTP server (not opened via `file://` — browsers block external resources on `file://` for security).

```bash
cd theshop
python3 -m http.server 8000
# Then open http://localhost:8000 in Chrome
```

Or use the npm script:

```bash
npm start
```

### Offline / single-file mode

If you want a single self-contained file (no server needed), use:

```bash
# Just open this file in your browser — no server required
open index-standalone.html
```

The standalone version bundles all CSS and JS inline, working from any browser with no dependencies.

## 🛒 Try the full flow

1. **Browse** the home page (carousel auto-rotates between 4 themed slides)
2. **Click any product** → view details with variants, reviews
3. **Pick a variant** (color/size) → Add to Cart
4. **Open the cart** from the header icon
5. **Apply promo code** `WELCOME50` → 100% off
6. **Continue to checkout** → fill the address form
7. **Continue** → enter a card number
8. **Continue** → review the order
9. **Pay** → enter any 6 digits → order confirmation

## 🎨 Design system

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#0f1a1f` | Buttons, headings |
| `--color-accent` | `#1ba7b4` | Highlights, links |
| `--color-bg-soft` | `#f1f5f5` | Page background |
| Display font | Plus Jakarta Sans | Headlines |
| Body font | Inter | Body, UI |

## 📊 What's included

- **100+ products** across 8 categories (Electronics, Fashion, Home, Beauty, Sports, Kids, Audio, Accessories)
- **15+ products per category** with realistic prices, ratings, and reviews
- **4 hero slides** with the redesigned "Special Mega Sales" featuring badge, subtitle, and dual CTAs
- **Progress-bar timing indicator** that fills over 5 seconds per slide
- **Smooth slide transitions** (700ms cubic-bezier ease) with no black gap between slides

## 🛠 Tech

- **HTML5** — semantic markup
- **CSS3** — modern features (grid, flexbox, custom properties, animations)
- **Vanilla JavaScript** — no frameworks, no build step
- **localStorage** for state persistence
- **IntersectionObserver** for scroll-triggered animations
- **CSS keyframe animations** for micro-interactions

---

Built with ❤️ by Arena.ai Agent Mode

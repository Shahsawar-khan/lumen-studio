# Lumen Studio — Interactive Business Website

A modern, fully responsive multi-page business website built with **pure HTML5, CSS3 and Vanilla JavaScript** — no frameworks, no libraries, no templates.

Built as **Task 02** of the Web Development Internship Program at **Devixo Solutions**.

---

## 🚀 Live Demo

🔗 **Live Site:** https://yourusername.github.io/lumen-studio/

---

## 📌 Project Overview

**Lumen Studio** is a fictional creative digital agency. This project demonstrates a complete multi-page business website with 10 interactive JavaScript features, modern UI/UX, and a consistent design system — built entirely from scratch.

The website consists of 5 interconnected pages (Home, About, Services, Portfolio, Contact) with a shared header, footer and design language.

---

## 🎯 Task Requirements — All Covered

| Requirement | Status |
|---|---|
| Multi-page website | ✅ 5 pages |
| HTML5 | ✅ Semantic markup |
| CSS3 | ✅ Flexbox, Grid, Custom Properties |
| Vanilla JavaScript | ✅ No frameworks |
| Responsive Design | ✅ Mobile, Tablet, Desktop |
| Modern UI/UX | ✅ Glassmorphism, animations |
| Consistent Color Scheme | ✅ Indigo + Amber palette |
| Organized Folder Structure | ✅ css/, js/, images/ |
| Bonus: GitHub Pages deployment | ✅ Live |

---

## ✨ 10 Interactive JavaScript Features

| # | Feature | Description |
|---|---|---|
| 1 | **Dark / Light Mode** | Theme toggle saved in `localStorage` |
| 2 | **Responsive Navigation** | Full-screen hamburger menu with auto-close |
| 3 | **Typing Animation** | Hero headline types 4 rotating phrases |
| 4 | **Animated Counters** | Numbers count up on scroll (IntersectionObserver) |
| 5 | **Testimonial Slider** | Auto-play + prev/next + dots + keyboard nav |
| 6 | **FAQ Accordion** | One-open-at-a-time with smooth expansion |
| 7 | **Portfolio Filter** | 5 categories with empty-state handling |
| 8 | **Form Validation** | Real-time + on-submit with error/success states |
| 9 | **Scroll-to-Top Button** | Appears after 400px, smooth scroll |
| 10 | **Scroll Reveal** | Fade-in animations on scroll |

**Task requirement: 6 features. Delivered: 10.**

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure |
| **CSS3** | Styling, Flexbox, Grid, animations |
| **JavaScript (ES6+)** | Interactivity, DOM manipulation |
| **Google Fonts** | Sora (headings) + DM Sans (body) |
| **CSS Variables** | Theme system (light + dark) |
| **IntersectionObserver API** | Scroll reveal + counter trigger |
| **localStorage API** | Theme persistence |

**No frameworks used.** No Bootstrap, no Tailwind, no jQuery, no React/Vue.

---

## 📁 Project Structure

```
lumen-studio/
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── portfolio.html          # Portfolio page
├── contact.html            # Contact page
├── README.md
├── css/
│   └── style.css           # Complete stylesheet
├── js/
│   └── main.js             # All JavaScript features
└── images/
    ├── hero.jpg
    ├── about.jpg
    ├── team-1.jpg
    ├── team-2.jpg
    ├── team-3.jpg
    ├── project-1.jpg
    ├── project-2.jpg
    ├── project-3.jpg
    ├── project-4.jpg
    ├── project-5.jpg
    └── project-6.jpg
```

---

## 📑 Pages Overview

### 1. Home (`index.html`)
- Hero section with typing animation
- Animated counters strip
- Services preview (6 cards)
- Featured work (bento layout)
- Testimonial slider
- CTA banner

### 2. About (`about.html`)
- Page hero
- Our Story section
- Core values (4 cards)
- Team members (3 cards)
- Milestone timeline (2018 → 2026)

### 3. Services (`services.html`)
- Page hero
- 6 detailed service cards with feature lists
- 4-step process section
- FAQ accordion (5 questions)

### 4. Portfolio (`portfolio.html`)
- Page hero
- Filterable project grid (9 items, 5 categories)
- Animated counters

### 5. Contact (`contact.html`)
- Contact information panel (5 methods)
- Validated contact form (7 fields)
- Map placeholder
- Social links

---

## 🎨 Design Approach

**Color Palette:**
- Primary: `#4f46e5` (Deep Indigo)
- Primary Dark: `#4338ca`
- Accent: `#f59e0b` (Warm Amber)
- Gradient: `linear-gradient(135deg, #4f46e5, #7c3aed, #f59e0b)`

**Typography:**
- Headings: **Sora** (weights 400–800)
- Body: **DM Sans** (weights 400–700)

**Layout System:**
- CSS Grid for section layouts
- Flexbox for component alignment
- Container max-width: 1200px
- Consistent vertical section padding

**Design Elements:**
- Glassmorphism navigation bar
- Animated background blobs in hero
- Gradient text and buttons
- Card hover lift effects
- Rounded corners (14px default)
- Soft drop shadows

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| 1200px | Small laptops |
| 1024px | Tablets landscape |
| 900px | Tablets portrait |
| 768px | Mobile (hamburger activates) |
| 480px | Small mobile |
| 360px | Extra small |

Tested on:
- Desktop (1920×1080)
- Laptop (1366×768)
- iPad (768×1024)
- iPhone 12 Pro (390×844)
- iPhone SE (375×667)

---

## 💻 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/lumen-studio.git
   ```

2. **Navigate into the folder**
   ```bash
   cd lumen-studio
   ```

3. **Open in browser**
   - Double-click `index.html`
   - OR use VS Code **Live Server** extension
   - OR run: `python -m http.server 8000` and open `http://localhost:8000`

**No installation. No build step. No dependencies.**

---

## 🚀 Deployment

This site is deployed on **GitHub Pages**.

To deploy your own copy:

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Source: `main` branch, `/ (root)` folder
4. Save — the site goes live at:
   `https://yourusername.github.io/lumen-studio/`

---

## 📸 Screenshots

### Desktop Views

| Page | Screenshot |
|---|---|
| Home | `screenshots/desktop-home.png` |
| Services | `screenshots/desktop-services.png` |
| Portfolio | `screenshots/desktop-portfolio.png` |
| Contact | `screenshots/desktop-contact.png` |

### Mobile Views

| View | Screenshot |
|---|---|
| Mobile Hero | `screenshots/mobile-home.png` |
| Mobile Menu Open | `screenshots/mobile-menu.png` |
| Mobile Contact Form | `screenshots/mobile-contact.png` |

### Dark Mode

| View | Screenshot |
|---|---|
| Dark Home | `screenshots/dark-mode-home.png` |
| Dark Services | `screenshots/dark-mode-services.png` |

---

## 📂 Detailed Feature Breakdown

### Dark Mode Toggle
- Sun/moon icon in the navbar
- Uses `localStorage` to remember preference
- Smooth CSS transitions on all elements

### Mobile Navigation
- Full-screen overlay menu
- Hamburger icon animates into an X
- Auto-closes when a link is clicked
- ESC key closes it

### Typing Animation
- Types 4 different phrases
- Delete-and-retype effect
- Natural timing with pauses

### Animated Counters
- Triggers when counters section enters viewport
- Uses `IntersectionObserver`
- Runs only once per page load

### Testimonial Slider
- Auto-plays every 6 seconds
- Previous/Next buttons
- Dot indicators (clickable)
- Keyboard arrow support
- Pauses on hover

### FAQ Accordion
- Click a question to expand
- Only one open at a time
- Smooth height transition
- First item opens by default

### Portfolio Filter
- Categories: All, Web, Branding, App, UI/UX
- Instant filtering without reload
- Empty state message when no match

### Form Validation
- Real-time validation on blur and input
- Visual error and success states
- Fields: Name, Email, Phone, Subject, Budget, Message
- Success message on valid submission

### Scroll-to-Top Button
- Appears after 400px scroll
- Smooth scroll to top
- Hover lift effect

### Scroll Reveal
- Sections fade in and slide up on scroll
- Uses `IntersectionObserver`
- Runs once per element

---

## 👨‍💻 Author

**Your Name**
Web Development Student
Your City, Pakistan

- **GitHub:** [@yourusername](https://github.com/yourusername)
- **LinkedIn:** [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- **Email:** your.email@example.com

---

## 🙏 Acknowledgements

- **Devixo Solutions** — for the internship opportunity
- **Google Fonts** — Sora & DM Sans typefaces
- Inspiration from modern SaaS and creative agency websites

---

## 📄 License

This project is open-source and available for learning purposes. Feel free to use it as a reference for your own portfolio.

---

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub — it means a lot!

---

## 📝 Notes

- All content (company name, team members, projects, testimonials) is fictional and created for demonstration purposes
- The contact form is front-end only and does not send actual emails
- Built as part of an internship task to demonstrate front-end development skills

---

**Built with ❤️ using HTML5, CSS3 & Vanilla JavaScript**
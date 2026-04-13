# Cuba Nica Chess Academy ♛

**Escuela virtual de ajedrez / Virtual Chess School**

A bilingual (Spanish / English) static website for Cuba Nica Chess Academy, built with plain HTML, CSS and JavaScript and designed to be deployed on GitHub Pages with zero dependencies.

---

## 🌐 Live site

> Deploy via **GitHub Pages** → Settings → Pages → Branch: `main` / root `/`

---

## 📁 Folder structure

```
Cuba-Nica-Chess/
├── index.html           Homepage: welcome, featured articles, resources, mission, CTA
├── blog.html            Blog articles and analysis
├── repertoires.html     Opening repertoire tables (White & Black, with tabs)
├── exercises.html       Tactical puzzles with hint/solution reveal
├── about.html           Mission, story, team, and audience overview
├── contact.html         Contact form (demo) + social links
├── train-with-ai.html   AI training placeholder + roadmap
│
├── css/
│   └── styles.css       Single stylesheet — dark elegant chess theme
│
├── js/
│   └── main.js          Language toggle (ES/EN), mobile nav, board renderer,
│                        contact form handler, toast notifications
│
└── images/              Static images and chess piece assets (add here)
```

---

## ✨ Features (Phase 1)

| Feature | Status |
|---|---|
| Dark elegant chess design | ✅ |
| Bilingual ES / EN toggle | ✅ |
| Responsive mobile layout | ✅ |
| Homepage with welcome, mission, resources, featured articles, CTA | ✅ |
| Blog page with sample articles | ✅ |
| Repertoire tables (White & Black tabs) | ✅ |
| Tactical exercises with hint / solution reveal | ✅ |
| About page with mission & team | ✅ |
| Contact form (client-side demo) | ✅ |
| "Train with AI" placeholder + roadmap | ✅ |
| Facebook CTA + membership notify button | ✅ |
| Comments marking future AI & chessboard integration points | ✅ |

---

## 🗺️ Roadmap

| Phase | Description |
|---|---|
| **Phase 1** *(current)* | Static site — HTML/CSS/JS, bilingual, responsive, GitHub Pages |
| **Phase 2** | [Chessboard.js](https://chessboardjs.com/) interactive board + PGN viewer (chess.js) |
| **Phase 3** | AI engine — [Stockfish.js](https://github.com/nmrugg/stockfish.js) WASM, adaptive exercises |
| **Phase 4** | Private member area — auth, progress tracking, premium content |

---

## 🔧 How to edit content

### Add a new blog article
1. Open `blog.html`
2. Copy an existing `<article class="article-card">` block
3. Update the title, excerpt, tag and date
4. Add the full article as a new HTML page and link to it

### Add a new repertoire line
1. Open `repertoires.html`
2. Add a `<tr>` row in the appropriate `<tbody>` (White or Black panel)
3. Fill in the opening name, variation, level and moves

### Add a new tactical exercise
1. Open `exercises.html`
2. Copy an existing `.exercise-card` block
3. Update the title, FEN, difficulty dots, hint and solution

### Add a translation key
1. Open `js/main.js`
2. Add the key/value pair in both `translations.es` and `translations.en`
3. Add `data-i18n="your.key"` to the HTML element

---

## 🤖 AI & Chessboard integration notes

Search for `TODO` comments in the source files to find all planned integration points:

- **`index.html`** — `#demo-board` → replace with `Chessboard('demo-board', { position:'start' })`
- **`exercises.html`** — `.exercise-card__board` divs → replace with Chessboard.js instances loaded with FEN
- **`train-with-ai.html`** — full Stockfish + Chessboard.js integration scaffold
- **`repertoires.html`** — PGN viewer integration points
- **`js/main.js`** → `renderDemoBoard()` function → replace with Chessboard.js
- **`contact.html`** → form `action` → connect to Formspree / Netlify Forms

---

## 🚀 Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set Source to **Deploy from branch**, branch `main`, folder `/`
4. Your site will be live at `https://<username>.github.io/<repo>/`

---

## 📋 Technologies used

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, CSS Grid, Flexbox, no frameworks
- **Vanilla JavaScript** — no build step, no npm, works offline
- **Google Fonts** — loaded via system fallback stack (no external requests in Phase 1)

---

## 📜 License

© 2025 Cuba Nica Chess Academy. All rights reserved.


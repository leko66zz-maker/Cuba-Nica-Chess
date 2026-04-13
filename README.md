# Cuba Nica Chess Academy

> **Disciplina hoy. Fuerza mañana.**

A bilingual (Spanish / English) static website for **Cuba Nica Chess Academy** — a virtual chess school focused on education, repertoires, exercises, and future AI-powered training.

Deployed on **GitHub Pages** | Built with **HTML, CSS, and vanilla JavaScript** only.

---

## 🗂 Project Structure

```
Cuba-Nica-Chess/
│
├── index.html              # Home — hero, features, article preview, CTA
├── articles.html           # Blog / Articles listing
├── repertoires.html        # Opening repertoires (White & Black)
├── training.html           # Exercise cards (tactics, endgames, strategy)
├── about.html              # Academy mission, values, why chess
├── contact.html            # Social links & contact form (prototype)
├── train-with-ai.html      # AI training placeholder + roadmap
│
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles — dark theme, responsive, components
│   ├── js/
│   │   └── main.js         # Bilingual system, mobile nav, future hooks
│   └── images/             # Images folder (add chess photos, diagrams here)
│
└── README.md               # This file
```

---

## 🌐 Bilingual System

Language is toggled via a **ES / EN** button in the navigation bar.

- HTML elements use `data-i18n="key"` attributes.
- All translations live in the `translations` object in `assets/js/main.js`.
- The selected language is saved in `localStorage` under the key `cnca-lang`.

**To add a new translated string:**

1. Add the element in HTML with `data-i18n="your.key"`:
   ```html
   <h2 data-i18n="section.title">Título por defecto</h2>
   ```
2. Add the key to both `es` and `en` objects in `assets/js/main.js`:
   ```js
   es: { "section.title": "Mi Título" },
   en: { "section.title": "My Title"  }
   ```

---

## 🚀 How to Publish on GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings → Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose **branch: `main`** (or your default branch) and **folder: `/ (root)`**.
5. Click **Save**. Your site will be live at:  
   `https://<your-username>.github.io/Cuba-Nica-Chess/`

> No build step required — everything is static HTML/CSS/JS.

---

## ✏️ How to Edit Content

### Add an article card
Copy an `<article class="article-card">` block in `articles.html` and fill in the new content. Add translations to both language objects in `main.js`.

### Add a repertoire line
Copy a `<tr>` row inside any `.moves-table` in `repertoires.html`.

### Add an exercise card
Copy an `<article class="exercise-card">` block in `training.html`.

### Change colors / theme
All design tokens (colors, spacing, typography) are CSS custom properties at the top of `assets/css/styles.css` inside `:root { ... }`.

---

## 🔮 Future Integration Points

The codebase has clearly marked placeholders for future features:

| Location | Placeholder | Future Feature |
|---|---|---|
| `repertoires.html` | `id="lichess-board-white"` | Lichess board (White repertoire) |
| `repertoires.html` | `id="lichess-board-black"` | Lichess board (Black repertoire) |
| `training.html` | `id="lichess-exercise-board"` | Lichess puzzle board |
| `main.js` → `initLichessBoard()` | TODO comment | Lichess pgn-viewer integration |
| `main.js` → `initAITrainer()` | TODO comment | Stockfish WASM / LLM AI trainer |
| `contact.html` → `<form>` | `action="#"` | Real form backend (Formspree, etc.) |

---

## 📋 Phase Roadmap

### ✅ Phase 1 — Base Site (current)
- [x] Dark elegant responsive theme
- [x] 7 HTML pages
- [x] Bilingual ES/EN toggle with localStorage
- [x] Mobile navigation (hamburger menu)
- [x] Home: hero, features, article preview, stats, CTA
- [x] Articles: 6 sample articles with tags
- [x] Repertoires: Italian Game, Ruy López, Sicilian Najdorf, French Defense tables
- [x] Training: 6 exercise cards (beginner → advanced) with CSS board previews
- [x] About: mission statement, values, why chess
- [x] Contact: social links, prototype contact form
- [x] Train with AI: coming-soon placeholder + visual roadmap
- [x] Lichess & AI integration placeholders with clear comments
- [x] GitHub Pages ready (no build step)

### 🔲 Phase 2 — Interactive Boards
- [ ] Embed Lichess pgn-viewer for repertoire exploration
- [ ] Integrate Lichess daily puzzle via API
- [ ] Functional contact form (Formspree or similar)
- [ ] Individual article pages with full content
- [ ] Search / filter for articles and exercises

### 🔲 Phase 3 — Engine Analysis
- [ ] Stockfish WASM integration for game analysis
- [ ] Interactive exercise validation (right/wrong move feedback)
- [ ] PGN upload and review

### 🔲 Phase 4 — AI Trainer
- [ ] Conversational chess tutor (LLM-powered)
- [ ] Personalized training plans
- [ ] Progress tracking

---

## 🛠 Tech Stack

| Item | Choice |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Scripting | Vanilla JavaScript (ES6+) |
| Hosting | GitHub Pages |
| Future: boards | Lichess API / pgn-viewer |
| Future: engine | Stockfish WASM |
| Future: AI | OpenAI API or similar |

---

## 📄 License

MIT — free to use and adapt for educational purposes.

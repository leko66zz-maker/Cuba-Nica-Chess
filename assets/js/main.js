/* ============================================================
   Cuba Nica Chess Academy — main.js
   Bilingual toggle (ES/EN) | Mobile nav | Phase 1
   ============================================================ */

// -------------------------------------------------------
// TRANSLATIONS
// Add new keys here as the site grows.
// Future: load from JSON file or CMS API.
// -------------------------------------------------------
const translations = {
  es: {
    // Navigation
    "nav.home":          "Inicio",
    "nav.articles":      "Artículos",
    "nav.repertoires":   "Repertorios",
    "nav.training":      "Entrenamientos",
    "nav.about":         "Nosotros",
    "nav.contact":       "Contacto",
    "nav.ai":            "Entrenar con IA",

    // Home — Hero
    "home.eyebrow":      "Academia de Ajedrez",
    "home.title":        "Cuba Nica Chess Academy",
    "home.slogan":       "Disciplina hoy. Fuerza mañana.",
    "home.desc":         "Una escuela virtual de ajedrez dedicada a formar jugadores disciplinados, creativos y apasionados. Repertorios, ejercicios y guía experta para todos los niveles.",
    "home.cta.primary":  "Ver Repertorios",
    "home.cta.secondary":"Ir a Entrenamientos",

    // Home — Features
    "feat.title":        "¿Por qué entrenar con nosotros?",
    "feat.sub":          "Metodología sólida, contenido de calidad y una comunidad apasionada.",
    "feat1.title":       "Repertorios Estructurados",
    "feat1.desc":        "Aperturas cuidadosamente elegidas para construir una base sólida y coherente.",
    "feat2.title":       "Ejercicios Prácticos",
    "feat2.desc":        "Táctica, finales y posición. Ejercicios adaptados a cada nivel.",
    "feat3.title":       "Artículos & Análisis",
    "feat3.desc":        "Artículos educativos sobre conceptos clave, estrategia y partidas maestras.",
    "feat4.title":       "Bilingüe (ES / EN)",
    "feat4.desc":        "Todo el contenido disponible en español e inglés para una audiencia global.",

    // Home — Articles preview
    "home.articles.title": "Artículos Recientes",
    "home.articles.sub":   "Aprendizaje profundo para jugadores de todos los niveles.",
    "home.articles.more":  "Ver todos los artículos",

    // Home — CTA banner
    "home.cta2.title":   "¿Listo para mejorar tu juego?",
    "home.cta2.desc":    "Explora nuestros repertorios, practica tus tácticas y únete a la academia.",
    "home.cta2.btn":     "Empezar ahora",

    // Articles
    "art.title":         "Artículos & Blog",
    "art.sub":           "Estrategia, táctica, historias y consejos de entrenamiento.",
    "art1.tag":          "Aperturas",
    "art1.title":        "Por qué 1.e4 es la mejor apertura para principiantes",
    "art1.body":         "La jugada 1.e4 abre el camino para los alfiles y la dama, domina el centro e inicia el desarrollo rápido. En este artículo exploramos sus principios fundamentales.",
    "art1.read":         "Leer artículo",
    "art2.tag":          "Táctica",
    "art2.title":        "La horquilla de caballo: el arma táctica más versátil",
    "art2.body":         "Aprende a identificar y ejecutar bifurcaciones de caballo con ejercicios prácticos y ejemplos de partidas maestras.",
    "art2.read":         "Leer artículo",
    "art3.tag":          "Finales",
    "art3.title":        "Rey y peón contra rey: domina el cuadrado",
    "art3.body":         "El 'cuadrado del rey' es uno de los conceptos más importantes en los finales de peones. Una guía paso a paso para dominarlo.",
    "art3.read":         "Leer artículo",
    "art4.tag":          "Estrategia",
    "art4.title":        "Cómo usar los peones aislados a tu favor",
    "art4.body":         "Los peones aislados no son siempre una debilidad. Con la iniciativa correcta pueden convertirse en una poderosa fuerza de ataque.",
    "art4.read":         "Leer artículo",
    "art5.tag":          "Historia",
    "art5.title":        "Capablanca y la eternidad del juego posicional",
    "art5.body":         "José Raúl Capablanca fue el primer campeón mundial de América Latina. Su estilo cristalino sigue siendo fuente de inspiración para generaciones de jugadores.",
    "art5.read":         "Leer artículo",
    "art6.tag":          "Pedagogía",
    "art6.title":        "Enseñar ajedrez a niños: principios y metodología",
    "art6.body":         "Guía para educadores y padres que quieren introducir el ajedrez de manera efectiva, divertida y progresiva.",
    "art6.read":         "Leer artículo",

    // Repertoires
    "rep.title":         "Repertorios",
    "rep.sub":           "Aperturas seleccionadas para construir una base sólida. Próximamente con tablero Lichess interactivo.",
    "rep.white.title":   "Con Blancas — Sistema 1.e4",
    "rep.white.desc":    "Aperturas agresivas y sólidas para empujar el peón de rey.",
    "rep.black.title":   "Con Negras — Respuestas Sólidas",
    "rep.black.desc":    "Sistemas defensivos que conducen a posiciones activas.",
    "rep.ph.title":      "Tablero Interactivo — Próximamente",
    "rep.ph.desc":       "Aquí se integrará un tablero Lichess para explorar las variantes de forma interactiva.",
    "rep.th.move":       "Jugada",
    "rep.th.notation":   "Notación",
    "rep.th.name":       "Nombre / Variante",
    "rep.th.notes":      "Notas",

    // Training
    "tr.title":          "Entrenamientos",
    "tr.sub":            "Ejercicios tácticos, estratégicos y de finales para todos los niveles.",
    "tr.e1.title":       "Jaque mate en 2",
    "tr.e1.desc":        "Las blancas juegan y dan jaque mate en 2 movimientos. Busca el sacrificio.",
    "tr.e2.title":       "Bifurcación de caballo",
    "tr.e2.desc":        "El caballo puede atacar al rey y la dama simultáneamente. ¿Cuál es la jugada?",
    "tr.e3.title":       "Activar el rey en el final",
    "tr.e3.desc":        "En este final de peones, el rey debe avanzar a tiempo. Encuentra el camino correcto.",
    "tr.e4.title":       "La clavada decisiva",
    "tr.e4.desc":        "Usa el alfil para clavar el caballo al rey. Un ejercicio clásico de táctica.",
    "tr.e5.title":       "Peón pasado en la séptima",
    "tr.e5.desc":        "Promueve el peón a dama con la técnica correcta. Timing es todo.",
    "tr.e6.title":       "Posición de zugzwang",
    "tr.e6.desc":        "Cualquier jugada del adversario empeora su posición. ¿Cómo llegar al zugzwang?",
    "tr.level.beg":      "Principiante",
    "tr.level.int":      "Intermedio",
    "tr.level.adv":      "Avanzado",
    "tr.moves":          "movs.",
    "tr.min":            "min",

    // About
    "ab.title":          "Sobre Nosotros",
    "ab.sub":            "Nuestra misión, valores y el equipo detrás de la academia.",
    "ab.mission.h":      "Nuestra Misión",
    "ab.mission.p1":     "Cuba Nica Chess Academy nació de la pasión por el ajedrez y la convicción de que este juego puede transformar vidas. Creemos que el ajedrez enseña disciplina, pensamiento crítico, paciencia y creatividad — habilidades esenciales para cualquier área de la vida.",
    "ab.mission.p2":     "Nuestra academia virtual reúne lo mejor de las tradiciones cubana y nicaragüense del ajedrez, ofreciendo una plataforma educativa accesible para jugadores de todos los niveles, desde niños que dan sus primeros pasos hasta adultos que buscan mejorar su nivel de competencia.",
    "ab.values.title":   "Nuestros Valores",
    "ab.v1.title":       "Disciplina",
    "ab.v1.desc":        "El progreso real requiere práctica constante y estudio sistemático.",
    "ab.v2.title":       "Creatividad",
    "ab.v2.desc":        "El ajedrez es un arte. Fomentamos el pensamiento original y la belleza táctica.",
    "ab.v3.title":       "Comunidad",
    "ab.v3.desc":        "El ajedrez une culturas, generaciones y fronteras. Somos una familia.",
    "ab.v4.title":       "Excelencia",
    "ab.v4.desc":        "Buscamos siempre el mejor movimiento — en el tablero y en la vida.",

    // Contact
    "ct.title":          "Contacto",
    "ct.sub":            "Conéctate con la academia. Estamos en varias plataformas.",
    "ct.form.title":     "Envíanos un mensaje",
    "ct.form.name":      "Nombre completo",
    "ct.form.email":     "Correo electrónico",
    "ct.form.subject":   "Asunto",
    "ct.form.message":   "Mensaje",
    "ct.form.btn":       "Enviar mensaje",
    "ct.form.notice":    "Este formulario es un prototipo. La funcionalidad de envío se añadirá en la Fase 2.",

    // Train with AI
    "ai.badge":          "Próximamente",
    "ai.title":          "Entrena con Inteligencia Artificial",
    "ai.desc":           "Una experiencia de entrenamiento personalizada con IA estará disponible muy pronto. Análisis en tiempo real, sugerencias adaptativas y mucho más.",
    "ai.cs.title":       "Esta función está en desarrollo",
    "ai.cs.desc":        "Estamos construyendo una plataforma de entrenamiento impulsada por IA. Mientras tanto, explora nuestros repertorios y ejercicios manuales.",
    "ai.cs.btn":         "Ver Entrenamientos",
    "ai.tl.title":       "Hoja de ruta",
    "ai.tl.p1.title":    "Fase 1 — Sitio base ✓",
    "ai.tl.p1.desc":     "Estructura del sitio, repertorios, artículos y ejercicios.",
    "ai.tl.p2.title":    "Fase 2 — Tablero Lichess",
    "ai.tl.p2.desc":     "Integración de tablero interactivo via Lichess API.",
    "ai.tl.p3.title":    "Fase 3 — Motor de análisis",
    "ai.tl.p3.desc":     "Integración de Stockfish para análisis de partidas.",
    "ai.tl.p4.title":    "Fase 4 — IA conversacional",
    "ai.tl.p4.desc":     "Asistente de entrenamiento personalizado con LLM.",

    // Footer
    "ft.desc":           "Academia virtual de ajedrez con metodología sólida, repertorios y ejercicios para todos los niveles.",
    "ft.nav":            "Navegación",
    "ft.resources":      "Recursos",
    "ft.follow":         "Síguenos",
    "ft.copy":           "© 2024 Cuba Nica Chess Academy. Todos los derechos reservados.",
    "ft.phase":          "Fase 1 — En desarrollo",
  },

  en: {
    // Navigation
    "nav.home":          "Home",
    "nav.articles":      "Articles",
    "nav.repertoires":   "Repertoires",
    "nav.training":      "Training",
    "nav.about":         "About",
    "nav.contact":       "Contact",
    "nav.ai":            "Train with AI",

    // Home — Hero
    "home.eyebrow":      "Chess Academy",
    "home.title":        "Cuba Nica Chess Academy",
    "home.slogan":       "Discipline today. Strength tomorrow.",
    "home.desc":         "A virtual chess school dedicated to shaping disciplined, creative, and passionate players. Repertoires, exercises, and expert guidance for all levels.",
    "home.cta.primary":  "View Repertoires",
    "home.cta.secondary":"Go to Training",

    // Home — Features
    "feat.title":        "Why train with us?",
    "feat.sub":          "Solid methodology, quality content and a passionate community.",
    "feat1.title":       "Structured Repertoires",
    "feat1.desc":        "Carefully chosen openings to build a solid, coherent foundation.",
    "feat2.title":       "Practical Exercises",
    "feat2.desc":        "Tactics, endgames and positional play. Exercises tailored to every level.",
    "feat3.title":       "Articles & Analysis",
    "feat3.desc":        "Educational articles on key concepts, strategy, and master games.",
    "feat4.title":       "Bilingual (ES / EN)",
    "feat4.desc":        "All content available in Spanish and English for a global audience.",

    // Home — Articles preview
    "home.articles.title": "Recent Articles",
    "home.articles.sub":   "Deep learning for players of all levels.",
    "home.articles.more":  "See all articles",

    // Home — CTA banner
    "home.cta2.title":   "Ready to improve your game?",
    "home.cta2.desc":    "Explore our repertoires, practice your tactics and join the academy.",
    "home.cta2.btn":     "Get started",

    // Articles
    "art.title":         "Articles & Blog",
    "art.sub":           "Strategy, tactics, stories and training tips.",
    "art1.tag":          "Openings",
    "art1.title":        "Why 1.e4 is the best opening for beginners",
    "art1.body":         "The move 1.e4 opens lines for the bishops and queen, controls the center and starts rapid development. In this article we explore its fundamental principles.",
    "art1.read":         "Read article",
    "art2.tag":          "Tactics",
    "art2.title":        "The knight fork: the most versatile tactical weapon",
    "art2.body":         "Learn to identify and execute knight forks with practical exercises and examples from master games.",
    "art2.read":         "Read article",
    "art3.tag":          "Endgames",
    "art3.title":        "King and pawn vs king: mastering the square",
    "art3.body":         "The 'king's square' is one of the most important concepts in pawn endgames. A step-by-step guide to mastering it.",
    "art3.read":         "Read article",
    "art4.tag":          "Strategy",
    "art4.title":        "How to use isolated pawns to your advantage",
    "art4.body":         "Isolated pawns are not always a weakness. With the right initiative they can become a powerful attacking force.",
    "art4.read":         "Read article",
    "art5.tag":          "History",
    "art5.title":        "Capablanca and the eternity of positional play",
    "art5.body":         "José Raúl Capablanca was Latin America's first world chess champion. His crystal-clear style remains an inspiration for generations of players.",
    "art5.read":         "Read article",
    "art6.tag":          "Pedagogy",
    "art6.title":        "Teaching chess to children: principles and methodology",
    "art6.body":         "A guide for educators and parents who want to introduce chess in an effective, fun, and progressive way.",
    "art6.read":         "Read article",

    // Repertoires
    "rep.title":         "Repertoires",
    "rep.sub":           "Selected openings to build a solid foundation. Interactive Lichess board coming soon.",
    "rep.white.title":   "With White — 1.e4 System",
    "rep.white.desc":    "Aggressive and solid openings pushing the king's pawn.",
    "rep.black.title":   "With Black — Solid Answers",
    "rep.black.desc":    "Defensive systems that lead to active positions.",
    "rep.ph.title":      "Interactive Board — Coming Soon",
    "rep.ph.desc":       "A Lichess board will be embedded here to explore variations interactively.",
    "rep.th.move":       "Move",
    "rep.th.notation":   "Notation",
    "rep.th.name":       "Name / Variation",
    "rep.th.notes":      "Notes",

    // Training
    "tr.title":          "Training",
    "tr.sub":            "Tactical, strategic and endgame exercises for all levels.",
    "tr.e1.title":       "Checkmate in 2",
    "tr.e1.desc":        "White plays and checkmates in 2 moves. Look for the sacrifice.",
    "tr.e2.title":       "Knight fork",
    "tr.e2.desc":        "The knight can attack the king and queen simultaneously. What is the move?",
    "tr.e3.title":       "Activate the king in the endgame",
    "tr.e3.desc":        "In this pawn endgame, the king must advance in time. Find the correct path.",
    "tr.e4.title":       "The decisive pin",
    "tr.e4.desc":        "Use the bishop to pin the knight to the king. A classic tactical exercise.",
    "tr.e5.title":       "Passed pawn on the seventh",
    "tr.e5.desc":        "Promote the pawn to queen with the correct technique. Timing is everything.",
    "tr.e6.title":       "Zugzwang position",
    "tr.e6.desc":        "Any move by the opponent worsens their position. How do you reach zugzwang?",
    "tr.level.beg":      "Beginner",
    "tr.level.int":      "Intermediate",
    "tr.level.adv":      "Advanced",
    "tr.moves":          "moves",
    "tr.min":            "min",

    // About
    "ab.title":          "About Us",
    "ab.sub":            "Our mission, values and the team behind the academy.",
    "ab.mission.h":      "Our Mission",
    "ab.mission.p1":     "Cuba Nica Chess Academy was born from a passion for chess and the conviction that this game can transform lives. We believe chess teaches discipline, critical thinking, patience and creativity — essential skills for any area of life.",
    "ab.mission.p2":     "Our virtual academy brings together the best of Cuban and Nicaraguan chess traditions, offering an accessible educational platform for players of all levels, from children taking their first steps to adults seeking to improve their competitive level.",
    "ab.values.title":   "Our Values",
    "ab.v1.title":       "Discipline",
    "ab.v1.desc":        "Real progress requires consistent practice and systematic study.",
    "ab.v2.title":       "Creativity",
    "ab.v2.desc":        "Chess is an art. We foster original thinking and tactical beauty.",
    "ab.v3.title":       "Community",
    "ab.v3.desc":        "Chess unites cultures, generations and borders. We are a family.",
    "ab.v4.title":       "Excellence",
    "ab.v4.desc":        "We always seek the best move — on the board and in life.",

    // Contact
    "ct.title":          "Contact",
    "ct.sub":            "Connect with the academy. We are on several platforms.",
    "ct.form.title":     "Send us a message",
    "ct.form.name":      "Full name",
    "ct.form.email":     "Email address",
    "ct.form.subject":   "Subject",
    "ct.form.message":   "Message",
    "ct.form.btn":       "Send message",
    "ct.form.notice":    "This form is a prototype. Send functionality will be added in Phase 2.",

    // Train with AI
    "ai.badge":          "Coming Soon",
    "ai.title":          "Train with Artificial Intelligence",
    "ai.desc":           "A personalized AI training experience will be available very soon. Real-time analysis, adaptive suggestions and much more.",
    "ai.cs.title":       "This feature is under development",
    "ai.cs.desc":        "We are building an AI-powered training platform. In the meantime, explore our repertoires and manual exercises.",
    "ai.cs.btn":         "View Training",
    "ai.tl.title":       "Roadmap",
    "ai.tl.p1.title":    "Phase 1 — Base site ✓",
    "ai.tl.p1.desc":     "Site structure, repertoires, articles and exercises.",
    "ai.tl.p2.title":    "Phase 2 — Lichess board",
    "ai.tl.p2.desc":     "Interactive board integration via Lichess API.",
    "ai.tl.p3.title":    "Phase 3 — Analysis engine",
    "ai.tl.p3.desc":     "Stockfish integration for game analysis.",
    "ai.tl.p4.title":    "Phase 4 — Conversational AI",
    "ai.tl.p4.desc":     "Personalised training assistant with LLM.",

    // Footer
    "ft.desc":           "Virtual chess academy with solid methodology, repertoires and exercises for all levels.",
    "ft.nav":            "Navigation",
    "ft.resources":      "Resources",
    "ft.follow":         "Follow Us",
    "ft.copy":           "© 2024 Cuba Nica Chess Academy. All rights reserved.",
    "ft.phase":          "Phase 1 — In development",
  }
};

// -------------------------------------------------------
// LANGUAGE SYSTEM
// -------------------------------------------------------
const LANG_KEY = 'cnca-lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'es';

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang]?.[key];
    if (text !== undefined) {
      // For inputs with placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Update lang-toggle button states
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update <html lang> attribute
  document.documentElement.lang = lang;
}

function initLangToggle() {
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTranslations(btn.dataset.lang);
    });
  });
}

// -------------------------------------------------------
// MOBILE NAVIGATION
// -------------------------------------------------------
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const expanded = navLinks.classList.contains('open');
    toggle.setAttribute('aria-expanded', expanded);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on nav link click (mobile)
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// -------------------------------------------------------
// ACTIVE NAV LINK
// -------------------------------------------------------
function highlightActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === path || (path === '' && href === 'index.html'));
  });
}

// -------------------------------------------------------
// SMOOTH SCROLL for anchor links
// -------------------------------------------------------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// -------------------------------------------------------
// CONTACT FORM — placeholder handler
// Phase 2: Replace with actual form submission (Formspree, Netlify, etc.)
// -------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = currentLang === 'es' ? '✓ Enviado (demo)' : '✓ Sent (demo)';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}

// -------------------------------------------------------
// FUTURE LICHESS INTEGRATION POINT
// Phase 2: Initialize Lichess board embed here.
// See: https://lichess.org/developers
// Example: load lichess iframe or use lichess-pgn-viewer npm package
// -------------------------------------------------------
function initLichessBoard() {
  // TODO (Phase 2): Embed Lichess board for repertoire exploration
  // const container = document.getElementById('lichess-board');
  // if (!container) return;
  // LichessPgnViewer(container, { pgn: '...' });
}

// -------------------------------------------------------
// FUTURE AI INTEGRATION POINT
// Phase 3/4: Connect to chess AI / LLM API here.
// Example: Stockfish WASM, OpenAI API, or custom backend
// -------------------------------------------------------
function initAITrainer() {
  // TODO (Phase 3): Initialize Stockfish WASM engine
  // TODO (Phase 4): Initialize AI chat / training assistant
}

// -------------------------------------------------------
// INIT
// -------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initLangToggle();
  applyTranslations(currentLang);
  initMobileNav();
  highlightActiveNav();
  initSmoothScroll();
  initContactForm();
  initLichessBoard();
  initAITrainer();
});

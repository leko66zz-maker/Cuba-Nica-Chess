/**
 * Cuba Nica Chess Academy — Main JavaScript
 * Phase 1: Static site helpers
 *
 * Contents:
 *  1. Language toggle (ES / EN)
 *  2. Mobile navigation
 *  3. Active nav link highlighting
 *  4. Demo chess board renderer
 *  5. Contact form demo handler
 *  6. Toast notifications
 *
 * TODO (Phase 2+):
 *  - Replace renderDemoBoard() with Chessboard.js integration
 *  - Add Stockfish.js for AI analysis
 *  - Add PGN viewer / move-by-move replay
 *  - Add private member authentication
 */

'use strict';

/* ============================================================
   1. LANGUAGE TOGGLE
   ============================================================ */

/**
 * All translatable strings are stored here.
 * Add new keys as needed when expanding content.
 *
 * TODO (Phase 2): Pull translations from a JSON file or API
 *                 to support easier content management.
 */
const translations = {
  es: {
    /* Navbar */
    'nav.home':          'Inicio',
    'nav.blog':          'Blog',
    'nav.repertoires':   'Repertorios',
    'nav.exercises':     'Ejercicios',
    'nav.ai':            'Entrena con IA',
    'nav.about':         'Nosotros',
    'nav.contact':       'Contacto',

    /* Hero */
    'hero.badge':        'Escuela Virtual de Ajedrez',
    'hero.title':        'Aprende ajedrez con <em>pasión</em> y propósito',
    'hero.subtitle':     'Cuba Nica Chess Academy: formación seria, repertorios probados y ejercicios interactivos para jugadores de todos los niveles.',
    'hero.cta.primary':  'Explorar recursos',
    'hero.cta.secondary':'Conoce nuestra misión',

    /* Mission */
    'mission.badge':     'Nuestra misión',
    'mission.title':     'Educación ajedrecística para todos',
    'mission.p1':        'Cuba Nica Chess Academy nace de la pasión por el ajedrez y el compromiso con la educación. Nuestra misión es ofrecer una enseñanza seria, accesible y de alta calidad a niños, padres, escuelas y jugadores de toda la comunidad hispanohablante.',
    'mission.p2':        'En la fase 1 ponemos los cimientos: contenido de calidad, repertorios probados y ejercicios seleccionados. En fases futuras incorporaremos inteligencia artificial, estudio interactivo y una comunidad privada de miembros.',
    'mission.quote':     '"El ajedrez es la gimnasia de la mente."',
    'mission.quote.attr':'— Blaise Pascal',
    'mission.val1':      'Rigor',
    'mission.val2':      'Accesibilidad',
    'mission.val3':      'Inspiración',
    'mission.val4':      'Comunidad',

    /* Training resources */
    'resources.badge':   'Recursos',
    'resources.title':   'Materiales de entrenamiento',
    'resources.subtitle':'Todo lo que necesitas para mejorar tu juego.',
    'resources.r1.title':'Repertorios de aperturas',
    'resources.r1.desc': 'Sistemas sólidos para blancas y negras seleccionados por nuestros entrenadores.',
    'resources.r2.title':'Ejercicios tácticos',
    'resources.r2.desc': 'Desde mate en uno hasta combinaciones complejas con tablero interactivo.',
    'resources.r3.title':'Artículos del Blog',
    'resources.r3.desc': 'Análisis de partidas, estrategia, psicología y cultura del ajedrez.',
    'resources.r4.title':'Entrena con IA',
    'resources.r4.desc': 'Próximamente: análisis con Stockfish y ejercicios adaptativos.',
    'resources.r4.soon': 'Próximamente',

    /* Featured Article */
    'featured.badge':    'Artículo destacado',
    'featured.title':    'Del blog',
    'featured.subtitle': 'Análisis, estrategia y cultura ajedrecística.',
    'featured.readmore': 'Leer artículo',

    /* CTA */
    'cta.title':         '¡Únete a nuestra comunidad!',
    'cta.subtitle':      'Síguenos en Facebook para recibir las últimas publicaciones, partidas y noticias de la academia. La membresía privada llega pronto.',
    'cta.facebook':      'Seguir en Facebook',
    'cta.notify':        'Avísame cuando llegue la membresía',

    /* Footer */
    'footer.tagline':    'Escuela virtual de ajedrez para toda la comunidad hispanohablante.',
    'footer.nav':        'Navegación',
    'footer.social':     'Redes',
    'footer.copy':       '© 2025 Cuba Nica Chess Academy. Todos los derechos reservados.',

    /* Blog */
    'blog.badge':        'Blog',
    'blog.title':        'Artículos y análisis',
    'blog.subtitle':     'Contenido educativo sobre ajedrez, estrategia y cultura.',
    'blog.filter.all':   'Todos',
    'blog.filter.strategy': 'Estrategia',
    'blog.filter.openings': 'Aperturas',
    'blog.filter.endgames': 'Finales',
    'blog.filter.culture':  'Cultura',

    /* Repertoires */
    'rep.badge':         'Repertorios',
    'rep.title':         'Aperturas recomendadas',
    'rep.subtitle':      'Sistemas probados para blancas y negras.',
    'rep.white':         'Con blancas',
    'rep.black':         'Con negras',

    /* Exercises */
    'ex.badge':          'Ejercicios',
    'ex.title':          'Tácticas y finales',
    'ex.subtitle':       'Entrena tu cálculo y visión táctica.',
    'ex.hint':           'Ver pista',
    'ex.solution':       'Ver solución',
    'ex.board.label':    'Tablero interactivo próximamente',

    /* About */
    'about.badge':       'Nosotros',
    'about.title':       'Sobre la academia',
    'about.subtitle':    'Quiénes somos y qué nos mueve.',

    /* Contact */
    'contact.badge':     'Contacto',
    'contact.title':     'Escríbenos',
    'contact.subtitle':  'Preguntas, sugerencias o colaboraciones — estamos disponibles.',
    'contact.name':      'Nombre completo',
    'contact.email':     'Correo electrónico',
    'contact.subject':   'Asunto',
    'contact.message':   'Mensaje',
    'contact.send':      'Enviar mensaje',
    'contact.sent':      '¡Mensaje recibido! Te respondemos pronto.',

    /* AI */
    'ai.badge':          'Próximamente',
    'ai.title':          'Entrena con Inteligencia Artificial',
    'ai.desc':           'Estamos preparando un motor de IA que analizará tus partidas, identificará tus puntos débiles y propondrá ejercicios personalizados.',
    'ai.f1':             'Análisis de partidas con Stockfish',
    'ai.f2':             'Ejercicios adaptativos según tu nivel',
    'ai.f3':             'Tablero interactivo con variantes',
    'ai.f4':             'Seguimiento de tu progreso',
    'ai.notify':         'Avísame cuando esté disponible',
  },

  en: {
    /* Navbar */
    'nav.home':          'Home',
    'nav.blog':          'Blog',
    'nav.repertoires':   'Repertoires',
    'nav.exercises':     'Exercises',
    'nav.ai':            'Train with AI',
    'nav.about':         'About',
    'nav.contact':       'Contact',

    /* Hero */
    'hero.badge':        'Virtual Chess School',
    'hero.title':        'Learn chess with <em>passion</em> and purpose',
    'hero.subtitle':     'Cuba Nica Chess Academy: serious training, proven repertoires and interactive exercises for players of all levels.',
    'hero.cta.primary':  'Explore resources',
    'hero.cta.secondary':'Learn our mission',

    /* Mission */
    'mission.badge':     'Our mission',
    'mission.title':     'Chess education for everyone',
    'mission.p1':        'Cuba Nica Chess Academy was born from a passion for chess and a commitment to education. Our mission is to offer serious, accessible, high-quality teaching to children, parents, schools and players across the Spanish-speaking chess community.',
    'mission.p2':        'In Phase 1 we lay the foundations: quality content, proven repertoires and curated exercises. In future phases we will incorporate artificial intelligence, interactive study tools and a private members community.',
    'mission.quote':     '"Chess is the gymnasium of the mind."',
    'mission.quote.attr':'— Blaise Pascal',
    'mission.val1':      'Rigour',
    'mission.val2':      'Accessibility',
    'mission.val3':      'Inspiration',
    'mission.val4':      'Community',

    /* Training resources */
    'resources.badge':   'Resources',
    'resources.title':   'Training materials',
    'resources.subtitle':'Everything you need to improve your game.',
    'resources.r1.title':'Opening repertoires',
    'resources.r1.desc': 'Solid systems for White and Black selected by our coaches.',
    'resources.r2.title':'Tactical exercises',
    'resources.r2.desc': 'From mate-in-one to complex combinations with an interactive board.',
    'resources.r3.title':'Blog articles',
    'resources.r3.desc': 'Game analysis, strategy, psychology and chess culture.',
    'resources.r4.title':'Train with AI',
    'resources.r4.desc': 'Coming soon: Stockfish analysis and adaptive exercises.',
    'resources.r4.soon': 'Coming soon',

    /* Featured Article */
    'featured.badge':    'Featured article',
    'featured.title':    'From the blog',
    'featured.subtitle': 'Analysis, strategy and chess culture.',
    'featured.readmore': 'Read article',

    /* CTA */
    'cta.title':         'Join our community!',
    'cta.subtitle':      'Follow us on Facebook for the latest posts, games and academy news. Private membership is coming soon.',
    'cta.facebook':      'Follow on Facebook',
    'cta.notify':        'Notify me when membership opens',

    /* Footer */
    'footer.tagline':    'Virtual chess school for the entire Spanish-speaking community.',
    'footer.nav':        'Navigation',
    'footer.social':     'Social',
    'footer.copy':       '© 2025 Cuba Nica Chess Academy. All rights reserved.',

    /* Blog */
    'blog.badge':        'Blog',
    'blog.title':        'Articles & Analysis',
    'blog.subtitle':     'Educational content on chess, strategy and culture.',
    'blog.filter.all':   'All',
    'blog.filter.strategy': 'Strategy',
    'blog.filter.openings': 'Openings',
    'blog.filter.endgames': 'Endgames',
    'blog.filter.culture':  'Culture',

    /* Repertoires */
    'rep.badge':         'Repertoires',
    'rep.title':         'Recommended openings',
    'rep.subtitle':      'Proven systems for White and Black.',
    'rep.white':         'With White',
    'rep.black':         'With Black',

    /* Exercises */
    'ex.badge':          'Exercises',
    'ex.title':          'Tactics & Endgames',
    'ex.subtitle':       'Train your calculation and tactical vision.',
    'ex.hint':           'Show hint',
    'ex.solution':       'Show solution',
    'ex.board.label':    'Interactive board coming soon',

    /* About */
    'about.badge':       'About',
    'about.title':       'About the academy',
    'about.subtitle':    'Who we are and what drives us.',

    /* Contact */
    'contact.badge':     'Contact',
    'contact.title':     'Get in touch',
    'contact.subtitle':  'Questions, suggestions or collaborations — we are here.',
    'contact.name':      'Full name',
    'contact.email':     'Email address',
    'contact.subject':   'Subject',
    'contact.message':   'Message',
    'contact.send':      'Send message',
    'contact.sent':      'Message received! We\'ll get back to you soon.',

    /* AI */
    'ai.badge':          'Coming soon',
    'ai.title':          'Train with Artificial Intelligence',
    'ai.desc':           'We are building an AI engine that will analyse your games, identify your weaknesses and suggest personalised exercises.',
    'ai.f1':             'Game analysis powered by Stockfish',
    'ai.f2':             'Adaptive exercises based on your level',
    'ai.f3':             'Interactive board with variations',
    'ai.f4':             'Progress tracking',
    'ai.notify':         'Notify me when it\'s available',
  }
};

/* Current language — read from localStorage or default to 'es' */
let currentLang = localStorage.getItem('cnca-lang') || 'es';

/**
 * Translate all elements that carry a [data-i18n] attribute.
 * Supports innerHTML so that <em> tags in values work correctly.
 */
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  /* Update placeholder attributes */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  /* Update lang attribute on <html> */
  document.documentElement.lang = lang;

  /* Sync lang toggle buttons */
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('cnca-lang', lang);
  applyTranslations(lang);
}

/* ============================================================
   2. MOBILE NAVIGATION
   ============================================================ */
function initMobileNav() {
  const toggle = document.querySelector('.navbar__toggle');
  const menu   = document.querySelector('.navbar__menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    /* Animate hamburger lines */
    toggle.classList.toggle('is-open', isOpen);
  });

  /* Close menu when a link is clicked */
  menu.querySelectorAll('.navbar__link').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('is-open');
    });
  });
}

/* ============================================================
   3. ACTIVE NAV LINK
   ============================================================ */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   4. DEMO CHESS BOARD RENDERER
   TODO: Replace with Chessboard.js
         e.g. Chessboard('board', { position: 'start', ... })
   ============================================================ */

/**
 * Render a minimal decorative chess board inside a container.
 * @param {string} containerId - ID of the target element
 * @param {string} [fen] - Unused in Phase 1; reserved for Chessboard.js
 */
function renderDemoBoard(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  /* Unicode chess pieces for demonstration */
  const startPosition = [
    ['♜','♞','♝','♛','♚','♝','♞','♜'],
    ['♟','♟','♟','♟','♟','♟','♟','♟'],
    [ '','', '','', '','', '',''],
    [ '','', '','', '','', '',''],
    [ '','', '','', '','', '',''],
    [ '','', '','', '','', '',''],
    ['♙','♙','♙','♙','♙','♙','♙','♙'],
    ['♖','♘','♗','♕','♔','♗','♘','♖'],
  ];

  container.classList.add('chessboard-placeholder');
  container.innerHTML = '';

  startPosition.forEach(function (row, r) {
    row.forEach(function (piece, c) {
      const sq = document.createElement('div');
      sq.classList.add('chessboard-placeholder__sq');
      sq.classList.add((r + c) % 2 === 0 ? 'chessboard-placeholder__sq--light' : 'chessboard-placeholder__sq--dark');
      sq.textContent = piece;
      container.appendChild(sq);
    });
  });
}

/* ============================================================
   5. CONTACT FORM DEMO HANDLER
   TODO (Phase 2): Replace with a real form backend (Formspree,
                   Netlify Forms, or a custom API endpoint).
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const msgEl = document.getElementById('form-success');
    if (msgEl) {
      msgEl.style.display = 'block';
    }
    const t = translations[currentLang];
    showToast(t ? t['contact.sent'] : 'Message sent!');
    form.reset();
  });
}

/* ============================================================
   6. TOAST NOTIFICATIONS
   ============================================================ */
function showToast(message, duration) {
  duration = duration || 4000;
  let toast = document.getElementById('cnca-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cnca-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._hideTimeout);
  toast._hideTimeout = setTimeout(function () {
    toast.classList.remove('show');
  }, duration);
}

/* ============================================================
   7. MEMBERSHIP NOTIFY (placeholder)
   TODO (Phase 2): Connect to a mailing list / backend service
   ============================================================ */
function initNotifyButtons() {
  document.querySelectorAll('[data-action="notify"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const t = translations[currentLang];
      const msg = currentLang === 'es'
        ? '¡Gracias! Te avisaremos cuando la membresía esté disponible.'
        : 'Thanks! We\'ll notify you when membership opens.';
      showToast(msg);
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  /* Language buttons */
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  applyTranslations(currentLang);
  initMobileNav();
  highlightActiveNavLink();
  initContactForm();
  initNotifyButtons();

  /* Render demo board if present (home page) */
  renderDemoBoard('demo-board');
});

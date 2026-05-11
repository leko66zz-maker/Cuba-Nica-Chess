/**
 * Tests for assets/js/main.js
 *
 * Covers:
 *  - highlightActiveNavLink() — active navigation link highlighting
 *  - toggleMobileMenu()
 *  - initSmoothScroll() — smooth scroll behaviour
 *  - Placeholder functions: initLichessIntegration, initAIChat, trackPageView
 */

'use strict';

const main = require('../assets/js/main.js');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Build a minimal nav with anchor elements and attach it to document.body.
 * Returns the list of created <a> elements.
 */
function buildNav(hrefs) {
  document.body.innerHTML = '';
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  hrefs.forEach((href) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', href);
    a.textContent = href;
    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  document.body.appendChild(nav);
  return Array.from(nav.querySelectorAll('a'));
}

// ---------------------------------------------------------------------------
// Active navigation link highlighting
// ---------------------------------------------------------------------------

describe('highlightActiveNavLink()', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('adds "active" class to the link whose href matches the current page', () => {
    const links = buildNav(['index.html', 'training.html', 'articles.html']);
    main.highlightActiveNavLink('/training.html');

    expect(links[0].classList.contains('active')).toBe(false);
    expect(links[1].classList.contains('active')).toBe(true);
    expect(links[2].classList.contains('active')).toBe(false);
  });

  test('does not add "active" class when no link matches the current page', () => {
    const links = buildNav(['index.html', 'training.html', 'articles.html']);
    main.highlightActiveNavLink('/contact.html');

    links.forEach((link) => {
      expect(link.classList.contains('active')).toBe(false);
    });
  });

  test('adds "active" to index.html link when pathname is the root "/"', () => {
    const links = buildNav(['index.html', 'training.html']);
    main.highlightActiveNavLink('/');

    expect(links[0].classList.contains('active')).toBe(true);
    expect(links[1].classList.contains('active')).toBe(false);
  });

  test('adds "active" to "/" link when pathname is the root "/"', () => {
    const links = buildNav(['/', 'training.html']);
    main.highlightActiveNavLink('/');

    expect(links[0].classList.contains('active')).toBe(true);
    expect(links[1].classList.contains('active')).toBe(false);
  });

  test('adds "active" to index.html link when pathname is empty', () => {
    const links = buildNav(['index.html', 'about.html']);
    main.highlightActiveNavLink('');

    expect(links[0].classList.contains('active')).toBe(true);
    expect(links[1].classList.contains('active')).toBe(false);
  });

  test('removes "active" class from links that no longer match', () => {
    const links = buildNav(['index.html', 'about.html']);
    // Pre-mark the wrong link active
    links[0].classList.add('active');

    main.highlightActiveNavLink('/about.html');

    expect(links[0].classList.contains('active')).toBe(false);
    expect(links[1].classList.contains('active')).toBe(true);
  });

  test('handles multiple nav links with the same href gracefully', () => {
    const links = buildNav(['articles.html', 'articles.html', 'training.html']);
    main.highlightActiveNavLink('/articles.html');

    expect(links[0].classList.contains('active')).toBe(true);
    expect(links[1].classList.contains('active')).toBe(true);
    expect(links[2].classList.contains('active')).toBe(false);
  });

  test('works when there are no nav links (empty nav)', () => {
    buildNav([]);
    expect(() => main.highlightActiveNavLink('/index.html')).not.toThrow();
  });

  test('highlights all pages that have nav links (repertoires, about, contact)', () => {
    const pages = ['repertoires.html', 'about.html', 'contact.html'];
    const allHrefs = ['index.html', 'repertoires.html', 'about.html', 'contact.html'];

    pages.forEach((page) => {
      const links = buildNav(allHrefs);
      main.highlightActiveNavLink(`/${page}`);

      const activeLinks = links.filter((l) => l.classList.contains('active'));
      expect(activeLinks).toHaveLength(1);
      expect(activeLinks[0].getAttribute('href')).toBe(page);

      document.body.innerHTML = '';
    });
  });
});

// ---------------------------------------------------------------------------
// toggleMobileMenu
// ---------------------------------------------------------------------------

describe('toggleMobileMenu()', () => {
  beforeEach(() => {
    document.body.innerHTML = '<nav></nav>';
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('hides nav when it is currently visible (display "block")', () => {
    const nav = document.querySelector('nav');
    nav.style.display = 'block';

    main.toggleMobileMenu();

    expect(nav.style.display).toBe('none');
  });

  test('shows nav when it is currently hidden (display "none")', () => {
    const nav = document.querySelector('nav');
    nav.style.display = 'none';

    main.toggleMobileMenu();

    expect(nav.style.display).toBe('block');
  });

  test('toggles nav visibility back and forth multiple times', () => {
    const nav = document.querySelector('nav');
    nav.style.display = 'block';

    main.toggleMobileMenu(); // → none
    expect(nav.style.display).toBe('none');

    main.toggleMobileMenu(); // → block
    expect(nav.style.display).toBe('block');

    main.toggleMobileMenu(); // → none
    expect(nav.style.display).toBe('none');
  });

  test('treats default (no inline style) as visible and hides nav', () => {
    const nav = document.querySelector('nav');
    // No inline display style — default is not "none", so toggle should hide it
    main.toggleMobileMenu();
    expect(nav.style.display).toBe('none');
  });
});

// ---------------------------------------------------------------------------
// Smooth scroll (initSmoothScroll)
// ---------------------------------------------------------------------------

describe('initSmoothScroll()', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('calls scrollIntoView on the target element when a valid anchor is clicked', () => {
    const a = document.createElement('a');
    a.setAttribute('href', '#section1');
    document.body.appendChild(a);

    const target = document.createElement('div');
    target.id = 'section1';
    const scrollIntoViewMock = jest.fn();
    target.scrollIntoView = scrollIntoViewMock;
    document.body.appendChild(target);

    main.initSmoothScroll();
    a.click();

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  test('does not prevent default when href is exactly "#"', () => {
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    document.body.appendChild(a);

    main.initSmoothScroll();

    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    a.dispatchEvent(clickEvent);

    expect(clickEvent.defaultPrevented).toBe(false);
  });

  test('does not throw when target element does not exist in the DOM', () => {
    const a = document.createElement('a');
    a.setAttribute('href', '#nonexistent');
    document.body.appendChild(a);

    main.initSmoothScroll();

    expect(() => a.click()).not.toThrow();
  });

  test('does not call scrollIntoView when target element is missing', () => {
    const scrollIntoViewMock = jest.fn();
    // Attach mock to a different element that is NOT the target
    const unrelated = document.createElement('div');
    unrelated.scrollIntoView = scrollIntoViewMock;
    document.body.appendChild(unrelated);

    const a = document.createElement('a');
    a.setAttribute('href', '#ghost');
    document.body.appendChild(a);

    main.initSmoothScroll();
    a.click();

    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });

  test('does not intercept non-hash links', () => {
    const a = document.createElement('a');
    a.setAttribute('href', 'about.html');
    document.body.appendChild(a);

    main.initSmoothScroll();

    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    a.dispatchEvent(clickEvent);

    expect(clickEvent.defaultPrevented).toBe(false);
  });

  test('handles multiple anchor links on the same page independently', () => {
    const a1 = document.createElement('a');
    a1.setAttribute('href', '#first');
    const a2 = document.createElement('a');
    a2.setAttribute('href', '#second');
    document.body.appendChild(a1);
    document.body.appendChild(a2);

    const t1 = document.createElement('div');
    t1.id = 'first';
    const t2 = document.createElement('div');
    t2.id = 'second';
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    t1.scrollIntoView = mock1;
    t2.scrollIntoView = mock2;
    document.body.appendChild(t1);
    document.body.appendChild(t2);

    main.initSmoothScroll();

    a1.click();
    expect(mock1).toHaveBeenCalledTimes(1);
    expect(mock2).not.toHaveBeenCalled();

    a2.click();
    expect(mock2).toHaveBeenCalledTimes(1);
    expect(mock1).toHaveBeenCalledTimes(1);
  });

  test('prevents default on a valid hash anchor click', () => {
    const a = document.createElement('a');
    a.setAttribute('href', '#mySection');
    document.body.appendChild(a);

    const target = document.createElement('div');
    target.id = 'mySection';
    target.scrollIntoView = jest.fn();
    document.body.appendChild(target);

    main.initSmoothScroll();

    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    a.dispatchEvent(clickEvent);

    expect(clickEvent.defaultPrevented).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Placeholder functions
// ---------------------------------------------------------------------------

describe('Placeholder / future integration functions', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('initLichessIntegration logs a placeholder message', () => {
    main.initLichessIntegration();
    expect(console.log).toHaveBeenCalledWith(
      'Lichess integration placeholder - to be implemented in Phase 2'
    );
  });

  test('initLichessIntegration returns undefined', () => {
    expect(main.initLichessIntegration()).toBeUndefined();
  });

  test('initAIChat logs a placeholder message', () => {
    main.initAIChat();
    expect(console.log).toHaveBeenCalledWith(
      'AI chat placeholder - to be implemented in Phase 2'
    );
  });

  test('initAIChat returns undefined', () => {
    expect(main.initAIChat()).toBeUndefined();
  });

  test('trackPageView logs a placeholder message', () => {
    main.trackPageView();
    expect(console.log).toHaveBeenCalledWith(
      'Analytics placeholder - to be implemented in Phase 2'
    );
  });

  test('trackPageView returns undefined', () => {
    expect(main.trackPageView()).toBeUndefined();
  });

  test('each placeholder function can be called multiple times without error', () => {
    expect(() => {
      main.initLichessIntegration();
      main.initLichessIntegration();
      main.initAIChat();
      main.initAIChat();
      main.trackPageView();
      main.trackPageView();
    }).not.toThrow();

    expect(console.log).toHaveBeenCalledTimes(6);
  });
});


/* ===================================
   Cuba Nica Chess Academy - Main JavaScript
   =================================== */

// Active navigation link highlighting
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');
  
  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Handle index.html and root path
    if ((currentPage === '' || currentPage === '/') && (href === 'index.html' || href === '/')) {
      link.classList.add('active');
    } else if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
  const nav = document.querySelector('nav');
  if (nav.style.display === 'none') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}

// Smooth scroll for anchors
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// Future Lichess integration - placeholder
// This section will be expanded to integrate with Lichess API
function initLichessIntegration() {
  // TODO: Add Lichess API integration here
  console.log('Lichess integration placeholder - to be implemented in Phase 2');
}

// Future AI chat integration - placeholder
// This section will be expanded to add AI chess coaching
function initAIChat() {
  // TODO: Add AI chat functionality here
  console.log('AI chat placeholder - to be implemented in Phase 2');
}

// Analytics placeholder
function trackPageView() {
  // TODO: Add Google Analytics or similar tracking
  console.log('Analytics placeholder - to be implemented in Phase 2');
}

// Initialize on page load
window.addEventListener('load', function () {
  // Active link highlighting is already done in DOMContentLoaded
  // Other initialization code can go here
});

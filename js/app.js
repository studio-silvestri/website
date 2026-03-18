/**
 * Studio Silvestri — app.js
 * Vanilla JS only, no dependencies
 */

(function () {
  'use strict';

  var HEADER_HEIGHT = 70;

  /* ============================================================
     1. Hamburger toggle + full-screen nav overlay
     ============================================================ */
  var hamburger = document.querySelector('.hamburger');
  var navOverlay = document.querySelector('.nav-overlay');

  function openMenu() {
    if (!hamburger || !navOverlay) return;
    hamburger.classList.add('active');
    navOverlay.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Menu schliessen');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!hamburger || !navOverlay) return;
    hamburger.classList.remove('active');
    navOverlay.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Menu öffnen');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      if (navOverlay && navOverlay.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  /* ============================================================
     2. Dropdown toggle on mobile (click-based)
        On desktop, hover is handled by CSS
     ============================================================ */
  var dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      // Only handle click toggle on mobile (hamburger visible)
      if (window.innerWidth <= 768) {
        e.preventDefault();
        var parent = toggle.closest('.nav-dropdown');
        if (parent) {
          parent.classList.toggle('open');
        }
      }
    });
  });

  /* ============================================================
     3. Close menu on outside click
     ============================================================ */
  document.addEventListener('click', function (e) {
    if (!hamburger || !navOverlay) return;
    if (!navOverlay.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  /* ============================================================
     4. Close menu on ESC key
     ============================================================ */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      closeMenu();
    }
  });

  /* ============================================================
     5. Close overlay when a nav link is clicked
     ============================================================ */
  if (navOverlay) {
    var overlayLinks = navOverlay.querySelectorAll('a');
    overlayLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });
  }

  /* ============================================================
     6. Active nav link — match current URL pathname
     ============================================================ */
  var currentPath = window.location.pathname.replace(/\/$/, '');
  var navLinks = document.querySelectorAll('.nav-menu a, .nav-overlay a');

  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href) return;

    // Normalize href for comparison
    var linkPath = href.replace(/\/$/, '').split('?')[0];

    // Check exact match or index
    if (
      linkPath === currentPath ||
      (currentPath === '' && (linkPath === '/index.html' || linkPath === 'index.html')) ||
      (currentPath.endsWith('/index.html') && linkPath === '') ||
      linkPath === currentPath + '/index.html'
    ) {
      link.classList.add('active');
    }

    // Match current page filename
    var currentFile = currentPath.split('/').pop();
    var linkFile = linkPath.split('/').pop();
    if (currentFile && linkFile && currentFile === linkFile && currentFile !== '') {
      link.classList.add('active');
    }
  });

  /* ============================================================
     7. Smooth scroll for anchor links (offset by header height)
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      closeMenu();

      var top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ============================================================
     8. Pre-select service from URL query param (?service=...)
        Used by sidebar CTA links on service pages
     ============================================================ */
  var params = new URLSearchParams(window.location.search);
  var serviceParam = params.get('service');
  if (serviceParam) {
    var serviceSelect = document.getElementById('service');
    if (serviceSelect) {
      var options = serviceSelect.querySelectorAll('option');
      options.forEach(function (opt) {
        if (opt.value.toLowerCase().indexOf(serviceParam.toLowerCase()) !== -1) {
          serviceSelect.value = opt.value;
        }
      });
    }
  }

})();

/**
 * Studio Silvestri — Main JavaScript
 * Vanilla JS, no dependencies
 */

(function () {
  'use strict';

  const HEADER_HEIGHT = 70;

  /* ============================================================
     1. Hamburger Menu Toggle
     ============================================================ */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      hamburger.setAttribute('aria-label', isOpen ? 'Menu schliessen' : 'Menu öffnen');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Menu öffnen');
      }
    });
  }

  /* ============================================================
     6. Close mobile menu when a link is clicked
     ============================================================ */
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (mobileMenu) mobileMenu.classList.remove('open');
      if (hamburger) {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Menu öffnen');
      }
    });
  });

  /* ============================================================
     2. Smooth scroll for all anchor links (offset by header height)
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ============================================================
     3. Active nav link on scroll using IntersectionObserver
     ============================================================ */
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-' + (HEADER_HEIGHT + 10) + 'px 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ============================================================
     4. Form validation with client-side checks
     ============================================================ */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    const fields = {
      name: {
        el: document.getElementById('name'),
        errorEl: document.getElementById('name-error'),
        validate: function (val) {
          if (!val || val.trim().length < 2) return 'Bitte gib deinen Namen ein (mind. 2 Zeichen).';
          return null;
        }
      },
      email: {
        el: document.getElementById('email'),
        errorEl: document.getElementById('email-error'),
        validate: function (val) {
          if (!val || !val.trim()) return 'Bitte gib deine E-Mail-Adresse ein.';
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(val.trim())) return 'Bitte gib eine gültige E-Mail-Adresse ein.';
          return null;
        }
      },
      service: {
        el: document.getElementById('service'),
        errorEl: document.getElementById('service-error'),
        validate: function (val) {
          if (!val || val === '' || val === 'Bitte wählen') return 'Bitte wähle einen Bereich aus.';
          return null;
        }
      },
      nachricht: {
        el: document.getElementById('nachricht'),
        errorEl: document.getElementById('nachricht-error'),
        validate: function (val) {
          if (!val || val.trim().length < 10) return 'Bitte schreib uns eine Nachricht (mind. 10 Zeichen).';
          return null;
        }
      },
      consent: {
        el: document.getElementById('consent'),
        errorEl: document.getElementById('consent-error'),
        validate: function () {
          var el = document.getElementById('consent');
          if (!el || !el.checked) return 'Bitte stimme den Datenschutzhinweisen zu.';
          return null;
        }
      }
    };

    // Show/clear error for a single field
    function showFieldError(fieldKey, message) {
      var field = fields[fieldKey];
      if (!field) return;
      if (message) {
        field.el.classList.add('error');
        if (field.errorEl) field.errorEl.textContent = message;
      } else {
        field.el.classList.remove('error');
        if (field.errorEl) field.errorEl.textContent = '';
      }
    }

    // Real-time validation on blur
    Object.keys(fields).forEach(function (key) {
      var field = fields[key];
      if (!field.el) return;

      field.el.addEventListener('blur', function () {
        var error = field.validate(field.el.value);
        showFieldError(key, error);
      });

      field.el.addEventListener('input', function () {
        if (field.el.classList.contains('error')) {
          var error = field.validate(field.el.value);
          showFieldError(key, error);
        }
      });
    });

    // Submit handler
    contactForm.addEventListener('submit', function (e) {
      var hasErrors = false;

      Object.keys(fields).forEach(function (key) {
        var field = fields[key];
        if (!field.el) return;
        var error = field.validate(field.el.value);
        showFieldError(key, error);
        if (error) hasErrors = true;
      });

      if (hasErrors) {
        e.preventDefault();
        // Scroll to first error
        var firstError = contactForm.querySelector('.error');
        if (firstError) {
          var top = firstError.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT - 20;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      }
      // If no errors, the form submits normally to formsubmit.co
    });
  }

  /* ============================================================
     5. Handle ?success=true in URL → show success message
     ============================================================ */
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('success') === 'true') {
    var successMsg = document.getElementById('success-message');
    if (successMsg) {
      successMsg.classList.remove('hidden');
    }

    // Hide the form fields if success
    if (contactForm) {
      var formElements = contactForm.querySelectorAll('.form-group, .form-row, button[type="submit"]');
      formElements.forEach(function (el) {
        el.style.display = 'none';
      });
    }

    // Scroll to contact section
    var kontaktSection = document.getElementById('kontakt');
    if (kontaktSection) {
      setTimeout(function () {
        var top = kontaktSection.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }, 300);
    }

    // Clean URL without reloading
    if (window.history && window.history.replaceState) {
      var cleanUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }

})();

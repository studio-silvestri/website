/**
 * Studio Silvestri — scroll-animations.js
 * Scroll fade-in via IntersectionObserver + count-up for hero stats
 * No external libraries. Respects prefers-reduced-motion.
 */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
     1. Scroll fade-in — fade-up on enter viewport
     ============================================================ */

  if (!reducedMotion && 'IntersectionObserver' in window) {

    var observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    };

    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    function observeElement(el, delaySeconds) {
      el.classList.add('anim-fade-up');
      if (delaySeconds) {
        el.style.transitionDelay = delaySeconds + 's';
      }
      fadeObserver.observe(el);
    }

    // Section headers
    document.querySelectorAll('.section-header').forEach(function (el) {
      observeElement(el, 0);
    });

    // Service cards — staggered
    document.querySelectorAll('.services-grid .service-card').forEach(function (el, i) {
      observeElement(el, (i * 0.08).toFixed(2));
    });

    // Stat items — staggered
    document.querySelectorAll('.stats-grid .stat-item').forEach(function (el, i) {
      observeElement(el, (i * 0.1).toFixed(2));
    });

    // About grid
    document.querySelectorAll('.about-grid').forEach(function (el) {
      observeElement(el, 0);
    });

    // Quote card
    document.querySelectorAll('.quote-card').forEach(function (el) {
      observeElement(el, 0.1);
    });

    // Vision blocks — staggered
    document.querySelectorAll('.vision-grid .vision-block').forEach(function (el, i) {
      observeElement(el, (i * 0.12).toFixed(2));
    });

    // Profile card
    document.querySelectorAll('.profile-card').forEach(function (el) {
      observeElement(el, 0);
    });

    // Value tags — staggered (lighter)
    document.querySelectorAll('.values-grid .value-tag').forEach(function (el, i) {
      observeElement(el, (Math.min(i * 0.04, 0.4)).toFixed(2));
    });

    // Contact grid
    document.querySelectorAll('.contact-grid').forEach(function (el) {
      observeElement(el, 0);
    });

    // Related service cards
    document.querySelectorAll('.related-grid .service-card').forEach(function (el, i) {
      observeElement(el, (i * 0.1).toFixed(2));
    });
  }

  /* ============================================================
     2. Count-up animation for hero stats and main stats section
     ============================================================ */

  function parseStatValue(text) {
    // Extracts numeric part and suffix (e.g. "10+" → { num: 10, suffix: '+' })
    var match = text.trim().match(/^(\d+)(.*)$/);
    if (!match) return null;
    return { num: parseInt(match[1], 10), suffix: match[2] || '' };
  }

  function animateCountUp(el, target, suffix, duration) {
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
      el.textContent = current + (progress < 1 ? '' : suffix);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  function setupCountUps(selector) {
    var elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    if (reducedMotion) {
      // No animation — just ensure text is visible
      return;
    }

    if (!('IntersectionObserver' in window)) return;

    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var parsed = parseStatValue(el.getAttribute('data-count-target') || el.textContent);
        if (!parsed) return;
        animateCountUp(el, parsed.num, parsed.suffix, 1200);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });

    elements.forEach(function (el) {
      var parsed = parseStatValue(el.textContent);
      if (!parsed) return;
      // Store original value
      el.setAttribute('data-count-target', el.textContent.trim());
      // Start from zero
      el.textContent = '0';
      countObserver.observe(el);
    });
  }

  // Hero stats (small stat badges in hero section)
  setupCountUps('.hero-stat strong');

  // Main stats section
  setupCountUps('.stat-item strong');

}());

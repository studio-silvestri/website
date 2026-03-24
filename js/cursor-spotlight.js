/**
 * Studio Silvestri — cursor-spotlight.js
 * Subtle warm cursor glow effect — desktop only, performance-optimised
 */
(function () {
  'use strict';

  // Only on devices that support hover (desktop), skip on reduced-motion
  if (!window.matchMedia('(hover: hover)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var el = document.createElement('div');
  el.id = 'cursor-spotlight';
  document.body.appendChild(el);

  var targetX = -1000;
  var targetY = -1000;
  var currentX = -1000;
  var currentY = -1000;
  var rafId = null;
  var isRunning = false;

  // Smooth follow factor — lower = slower / more fluid
  var LERP = 0.09;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function tick() {
    currentX = lerp(currentX, targetX, LERP);
    currentY = lerp(currentY, targetY, LERP);
    el.style.transform = 'translate(' + currentX + 'px, ' + currentY + 'px)';
    rafId = requestAnimationFrame(tick);
  }

  function start() {
    if (isRunning) return;
    isRunning = true;
    el.style.opacity = '1';
    rafId = requestAnimationFrame(tick);
  }

  function stop() {
    isRunning = false;
    el.style.opacity = '0';
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  document.addEventListener('mousemove', function (e) {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!isRunning) start();
  });

  document.addEventListener('mouseleave', stop);
  document.addEventListener('mouseenter', function (e) {
    targetX = e.clientX;
    targetY = e.clientY;
    start();
  });
}());

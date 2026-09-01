(function () {
  'use strict';

  var hasAnime = typeof window.anime === 'function';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── 01 / Hero Load Choreography ────────────────────────────────
  function initHeroAnimation() {
    if (hasAnime && !reducedMotion) {
      try {
        window.anime.timeline({
          easing: 'easeOutExpo',
          duration: 900
        })
        .add({
          targets: '.hero-title',
          opacity: [0.3, 1],
          translateY: [16, 0],
          duration: 700
        })
        .add({
          targets: '.hero-lead',
          opacity: [0.3, 1],
          translateY: [12, 0],
          duration: 600
        }, '-=500')
        .add({
          targets: '.hero-actions .btn',
          opacity: [0.3, 1],
          translateY: [10, 0],
          delay: window.anime.stagger(80),
          duration: 500
        }, '-=400')
        .add({
          targets: '.ledger-track .chain-node',
          opacity: [0.4, 1],
          translateY: [10, 0],
          delay: window.anime.stagger(50),
          duration: 500
        }, '-=350');

        // Continuous energy ripple across the 8-stage chain
        var chainNodes = document.querySelectorAll('.ledger-track .chain-node');
        if (chainNodes.length) {
          window.anime({
            targets: chainNodes,
            borderColor: [
              { value: 'rgba(41, 151, 255, 0.4)', duration: 400, easing: 'easeOutQuad' },
              { value: 'rgba(255, 255, 255, 0.08)', duration: 600, easing: 'easeInQuad' }
            ],
            delay: window.anime.stagger(180),
            loop: true,
            autoplay: true,
            endDelay: 3500
          });
        }
      } catch (e) {
        console.warn('Hero animation fallback:', e);
      }
    }
  }

  // Execute hero animation immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroAnimation);
  } else {
    initHeroAnimation();
  }

  // ── 02 / Reliable Scroll Reveal ───────────────────────────────
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ── 03 / Interactive Card Micro-Physics (Anime.js) ─────────────
  if (hasAnime && !reducedMotion) {
    var hoverCards = document.querySelectorAll('.problem-card, .value-card, .trust-card, .spec-card, .flow-card, .diff-card');
    hoverCards.forEach(function (card) {
      card.addEventListener('mouseenter', function () {
        window.anime.remove(card);
        window.anime({
          targets: card,
          translateY: -4,
          duration: 200,
          easing: 'easeOutQuad'
        });
      });
      card.addEventListener('mouseleave', function () {
        window.anime.remove(card);
        window.anime({
          targets: card,
          translateY: 0,
          duration: 300,
          easing: 'easeOutElastic(1, 0.8)'
        });
      });
    });
  }

  // ── 04 / Mobile Nav Toggle ────────────────────────────────────
  var toggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      mobileNav.classList.toggle('is-open');
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileNav.classList.remove('is-open'); });
    });
  }

  // ── 05 / Apple Ambient Fluid Wave Canvas ───────────────────────
  var canvas = document.getElementById('bgWave');
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var width = 0;
    var height = 0;
    var time = 0;
    var animId = null;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    window.addEventListener('resize', resize);
    resize();

    // 4 harmonic wave layers
    var waves = [
      { y: 0.45, amp: 55, freq: 0.0018, speed: 0.008, colorA: 'rgba(41, 151, 255, 0.14)', colorB: 'rgba(0, 0, 0, 0)' },
      { y: 0.52, amp: 70, freq: 0.0014, speed: 0.006, colorA: 'rgba(48, 209, 88, 0.09)', colorB: 'rgba(0, 0, 0, 0)' },
      { y: 0.58, amp: 85, freq: 0.0011, speed: 0.004, colorA: 'rgba(94, 92, 230, 0.08)', colorB: 'rgba(0, 0, 0, 0)' },
      { y: 0.65, amp: 60, freq: 0.0022, speed: 0.007, colorA: 'rgba(41, 151, 255, 0.06)', colorB: 'rgba(0, 0, 0, 0)' }
    ];

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (var w = 0; w < waves.length; w++) {
        var wave = waves[w];
        var baseY = height * wave.y;

        ctx.beginPath();
        ctx.moveTo(0, height);

        for (var x = 0; x <= width; x += 12) {
          var y =
            baseY +
            Math.sin(x * wave.freq + time * wave.speed * 60 + w) * wave.amp +
            Math.cos(x * wave.freq * 0.5 + time * wave.speed * 40) * (wave.amp * 0.4);
          if (x === 0) {
            ctx.lineTo(0, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        var grad = ctx.createLinearGradient(0, baseY - wave.amp, 0, height);
        grad.addColorStop(0, wave.colorA);
        grad.addColorStop(1, wave.colorB);

        ctx.fillStyle = grad;
        ctx.fill();
      }

      if (!reducedMotion) {
        time += 0.015;
        animId = requestAnimationFrame(draw);
      }
    }

    draw();

    // Pause when tab hidden to save battery & CPU
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        if (animId) cancelAnimationFrame(animId);
      } else {
        if (!reducedMotion) {
          animId = requestAnimationFrame(draw);
        }
      }
    });
  }
})();

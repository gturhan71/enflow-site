(function () {
  'use strict';

  // ── Scroll Reveal ──────────────────────────────────────────────
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ── One-Click Command Copy ────────────────────────────────────
  var copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      if (!text) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          var span = btn.querySelector('span');
          var orig = span ? span.textContent : '';
          if (span) span.textContent = 'Kopyalandı!';
          btn.classList.add('is-copied');
          setTimeout(function () {
            if (span) span.textContent = orig;
            btn.classList.remove('is-copied');
          }, 2000);
        });
      }
    });
  });

  // ── Mobile Nav Toggle ──────────────────────────────────────────
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

  // ── Apple Ambient Fluid Wave Canvas ────────────────────────────
  var canvas = document.getElementById('bgWave');
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var width = 0;
    var height = 0;
    var time = 0;
    var animId = null;

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    window.addEventListener('resize', resize);
    resize();

    // 4 harmonic wave layers: [baseYRatio, amplitude, wavelength, speed, colorStopA, colorStopB]
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

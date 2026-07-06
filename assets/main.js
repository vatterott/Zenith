/**
 * Zenith – Landing Page Interactions
 * Scroll reveal · Header state · Mobile nav · Screenshot tabs
 * Lightbox · Bento spotlight · Chat demo loop · Counter animation
 */
(function () {
  'use strict';

  /* ─── Header scroll state ─────────────────────────────────── */
  const header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ─── Mobile nav drawer ───────────────────────────────────── */
  const burger = document.querySelector('.nav-burger');
  const drawer = document.querySelector('.nav-drawer');
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      burger.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    drawer.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        drawer.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      })
    );
  }

  /* ─── Scroll reveal ───────────────────────────────────────── */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('revealed'));
  }

  /* ─── Stat counters ───────────────────────────────────────── */
  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;
    const dur = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('de-DE');
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const cio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          cio.unobserve(e.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(el => cio.observe(el));
  }

  /* ─── Bento spotlight (mouse-follow glow) ─────────────────── */
  document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ─── Screenshot tabs ─────────────────────────────────────── */
  const tabs = document.querySelectorAll('.shot-tab');
  const shots = document.querySelectorAll('.shot-stage img');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const idx = tab.getAttribute('data-shot');
      shots.forEach(img => img.classList.toggle('active', img.getAttribute('data-shot') === idx));
    });
  });

  /* ─── Lightbox ────────────────────────────────────────────── */
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox ? lightbox.querySelector('img') : null;
  const lbCap = lightbox ? lightbox.querySelector('.lightbox-caption') : null;

  window.openLightbox = function (src, caption) {
    if (!lightbox || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = caption || '';
    if (lbCap) lbCap.textContent = caption || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) closeLightbox();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  }

  /* ─── Hero chat demo loop ─────────────────────────────────── */
  const demoChat = document.getElementById('demo-chat');
  if (demoChat) {
    const scenarios = [
      {
        q: { en: 'Find all documents for my 2025 tax return', de: 'Finde alle Dokumente für die Steuererklärung 2025' },
        a: {
          en: 'I found <span class="hl">14 tax-relevant documents</span> for 2025: 3 invoices, 2 donation receipts, insurance statements and your trade tax assessment.',
          de: 'Ich habe <span class="hl">14 steuerrelevante Dokumente</span> für 2025 gefunden: 3 Rechnungen, 2 Spendenquittungen, Versicherungsbescheide und Ihren Gewerbesteuerbescheid.'
        },
        chips: ['invoice_2025_03.pdf', 'donation_rcpt.pdf', '+12']
      },
      {
        q: { en: 'When does my liability insurance expire?', de: 'Wann läuft meine Haftpflichtversicherung ab?' },
        a: {
          en: 'Your policy expires on <span class="hl">March 31, 2026</span>. Notice period: 3 months. I have added the deadline to your calendar.',
          de: 'Ihre Police endet am <span class="hl">31. März 2026</span>. Kündigungsfrist: 3 Monate. Ich habe die Frist in Ihren Kalender eingetragen.'
        },
        chips: ['policy_2023.pdf', '📅 Calendar']
      },
      {
        q: { en: 'Summarize the maintenance contract with Müller GmbH', de: 'Fasse den Wartungsvertrag mit der Müller GmbH zusammen' },
        a: {
          en: 'The contract covers <span class="hl">quarterly maintenance</span> of 4 machines, response time 24h, annual cost 8,400 €. Runs until Dec 2026.',
          de: 'Der Vertrag umfasst die <span class="hl">quartalsweise Wartung</span> von 4 Maschinen, Reaktionszeit 24h, Jahreskosten 8.400 €. Laufzeit bis Dez 2026.'
        },
        chips: ['contract_mueller.pdf', 'Müller GmbH']
      }
    ];
    let sIdx = 0;
    const docIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>';

    function currentLang() {
      return (window.zenithLang && window.zenithLang.get) ? window.zenithLang.get() : 'en';
    }

    function playScenario() {
      const s = scenarios[sIdx];
      const lang = currentLang();
      demoChat.innerHTML = '';

      const user = document.createElement('div');
      user.className = 'msg msg-user';
      user.textContent = s.q[lang] || s.q.en;
      demoChat.appendChild(user);

      const typing = document.createElement('div');
      typing.className = 'msg msg-ai';
      typing.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>';
      demoChat.appendChild(typing);

      setTimeout(() => {
        typing.innerHTML = (s.a[lang] || s.a.en) +
          '<div class="src-chips">' +
          s.chips.map(c => '<span class="src-chip">' + (c.startsWith('📅') || c.startsWith('+') ? '' : docIcon) + c + '</span>').join('') +
          '</div>';
      }, 1600);

      sIdx = (sIdx + 1) % scenarios.length;
      setTimeout(playScenario, 8200);
    }
    playScenario();
  }

  /* ─── FAQ: close others on open ───────────────────────────── */
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        document.querySelectorAll('.faq-item[open]').forEach(other => {
          if (other !== item) other.open = false;
        });
      }
    });
  });
})();

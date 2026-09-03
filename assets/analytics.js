/**
 * Privacy-conscious engagement tracking for myzenith.org.
 * Does nothing until assets/analytics-config.js is explicitly enabled.
 */
(function () {
  'use strict';

  var config = window.ZENITH_ANALYTICS;
  var hostname = window.location.hostname.toLowerCase();
  var isProductionHost = hostname === config?.siteDomain || hostname === 'www.' + config?.siteDomain;

  if (!config || !config.enabled || !config.scriptSrc || !isProductionHost) return;

  // Respect browser-level privacy signals even though Plausible is cookieless.
  if (navigator.globalPrivacyControl === true || navigator.doNotTrack === '1') return;

  window.plausible = window.plausible || function () {
    (window.plausible.q = window.plausible.q || []).push(arguments);
  };
  window.plausible.init = window.plausible.init || function (options) {
    window.plausible.o = options || {};
  };

  window.plausible.init({
    outboundLinks: true,
    fileDownloads: true,
    formSubmissions: true
  });

  var script = document.createElement('script');
  script.async = true;
  script.src = config.scriptSrc;
  script.setAttribute('data-zenith-analytics', 'plausible');
  document.head.appendChild(script);

  function send(eventName, properties) {
    window.plausible(eventName, properties ? { props: properties } : undefined);
  }

  function surfaceFor(element) {
    var section = element.closest('section[id]');
    if (section) return section.id;
    if (element.closest('.site-header')) return 'header';
    if (element.closest('footer')) return 'footer';
    return 'page';
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href') || '';
    if (/indiegogo\.com/i.test(href)) {
      send('Indiegogo CTA', { surface: surfaceFor(link) });
      return;
    }

    if (href === '#pitch-video') {
      send('Pitch Intent', { surface: surfaceFor(link) });
      return;
    }

    if (/^mailto:/i.test(href)) {
      send('Contact Intent', { surface: surfaceFor(link) });
    }
  });

  var pitchVideo = document.querySelector('#pitch-video video');
  if (pitchVideo) {
    var videoStarted = false;
    var videoCompleted = false;

    pitchVideo.addEventListener('play', function () {
      if (videoStarted) return;
      videoStarted = true;
      send('Pitch Video Start');
    });

    pitchVideo.addEventListener('ended', function () {
      if (videoCompleted) return;
      videoCompleted = true;
      send('Pitch Video Complete');
    });
  }

  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      send('Contact Form Submit');
    }, { capture: true });
  }
})();

/* ── Ballotly Theme Toggle ─────────────────────────────── */
var BLY_THEME = (function () {
  var LIGHT = 'theme-light2';
  var KEY   = 'bly_theme';

  function applyTheme(theme) {
    document.body.classList.remove(LIGHT, 'theme-light3', 'theme-dark2', 'theme-dark3');
    if (theme === 'light') document.body.classList.add(LIGHT);
    localStorage.setItem(KEY, theme);

    var isDark = (theme === 'dark');
    var sun  = document.querySelector('.bly-tt-sun');
    var moon = document.querySelector('.bly-tt-moon');
    var pill = document.getElementById('bly-tt-pill');
    if (sun)  sun.classList.toggle('active', !isDark);
    if (moon) moon.classList.toggle('active',  isDark);
    if (pill) pill.classList.toggle('is-light', !isDark);
  }

  function toggle() {
    var cur = localStorage.getItem(KEY) || 'dark';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  }

  // Apply on load (avoids flash)
  var saved = localStorage.getItem(KEY) || 'dark';
  document.addEventListener('DOMContentLoaded', function() {
    applyTheme(saved);
  });
  // Also apply immediately in case DOM already ready
  if (document.readyState !== 'loading') applyTheme(saved);

  return { toggle: toggle, apply: applyTheme };
})();

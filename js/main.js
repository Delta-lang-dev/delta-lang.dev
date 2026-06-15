// Delta Lang — main.js

// ── Demo tabs ─────────────────────────────────────────────────────────────

const tabs = document.querySelectorAll('.demo-tab');
const panels = document.querySelectorAll('.demo-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`[data-panel="${target}"]`)?.classList.add('active');
  });
});

// ── Copy install command ──────────────────────────────────────────────────

const copyBtn = document.getElementById('copyInstall');
const installCmd = document.getElementById('installCmd');

if (copyBtn && installCmd) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(installCmd.textContent).then(() => {
      copyBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
      setTimeout(() => {
        copyBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
      }, 1500);
    });
  });
}

// ── Mobile nav ────────────────────────────────────────────────────────────

const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ── Sticky nav shadow ─────────────────────────────────────────────────────

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
}, { passive: true });

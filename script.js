(function () {
  'use strict';

  const root        = document.documentElement;
  const progress    = document.getElementById('progress');
  const backToTop   = document.querySelector('.back-to-top');
  const toast       = document.querySelector('.toast');
  const tocLinks    = document.querySelectorAll('.toc-list a');
  const headings    = document.querySelectorAll('main.document h2[id]');

  /* ----------------------------------------------------- 1. TEMA */
  function setTheme(theme) {
    root.dataset.theme = theme;
    try { localStorage.setItem('carta:theme', theme); } catch (_) {}
  }
  function toggleTheme() { setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'); }

  /* ----------------------------------------------------- 2. FONTE */
  let scale = parseFloat(getComputedStyle(root).getPropertyValue('--font-scale')) || 1;
  function setScale(v) {
    scale = Math.round(Math.max(0.8, Math.min(1.4, v)) * 100) / 100;
    root.style.setProperty('--font-scale', scale);
    try { localStorage.setItem('carta:font-scale', scale); } catch (_) {}
  }

  /* ----------------------------------------------------- 3. TOAST */
  let toastTimer;
  function showToast(msg, ms = 2200) {
    toast.textContent = msg;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), ms);
  }

  /* ----------------------------------------------------- 4. COPIAR LINK */
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; } 
    catch (_) {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      let ok = false; try { ok = document.execCommand('copy'); } catch (_) {}
      document.body.removeChild(ta); return ok;
    }
  }

  headings.forEach(h => {
    const a = document.createElement('a');
    a.className = 'heading-anchor'; a.href = '#' + h.id; a.textContent = '#';
    a.setAttribute('aria-label', 'Copiar link'); a.title = 'Copiar link';
    a.addEventListener('click', async (e) => {
      e.preventDefault();
      const url = location.origin + location.pathname + location.search + '#' + h.id;
      const ok = await copyText(url);
      showToast(ok ? 'Link copiado' : 'Erro ao copiar');
      history.replaceState(null, '', '#' + h.id);
      h.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    h.appendChild(a);
  });

  /* ----------------------------------------------------- 5. SCROLL E PROGRESSO */
  const linkMap = new Map();
  tocLinks.forEach(a => {
    const id = a.getAttribute('href').slice(1);
    if (id) linkMap.set(id, a);
  });

  let ticking = false;
  function updateProgress() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    progress.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + '%';
  }
  function updateActiveSection() {
    if (!headings.length) return;
    const offset = window.innerHeight * 0.3;
    let currentId = headings[0].id;
    headings.forEach(h => { if (h.getBoundingClientRect().top <= offset) currentId = h.id; });
    linkMap.forEach((a, id) => { a.classList.toggle('active', id === currentId); });
  }
  function updateBackToTop() {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateProgress(); updateActiveSection(); updateBackToTop(); ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ----------------------------------------------------- 6. CONTROLE DE MÚSICA */
  const music = document.getElementById('bg-music');
  const btnMusic = document.getElementById('btn-music');
  const iconPlay = btnMusic.querySelector('.icon-music-play');
  const iconPause = btnMusic.querySelector('.icon-music-pause');

  if (btnMusic && music) {
    btnMusic.addEventListener('click', () => {
      if (music.paused) {
        music.play();
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
        btnMusic.classList.add('is-playing');
        showToast('Música ativada');
      } else {
        music.pause();
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
        btnMusic.classList.remove('is-playing');
        showToast('Música pausada');
      }
    });
  }

  /* ----------------------------------------------------- 7. BOTÕES E TECLADO */
  document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switch (btn.dataset.action) {
        case 'theme': toggleTheme(); break;
        case 'font-up': setScale(scale + 0.1); break;
        case 'font-down': setScale(scale - 0.1); break;
        case 'print': window.print(); break;
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
    switch (e.key) {
      case 't': case 'T': toggleTheme(); e.preventDefault(); break;
      case '+': case '=': setScale(scale + 0.1); e.preventDefault(); break;
      case '-': case '_': setScale(scale - 0.1); e.preventDefault(); break;
      case 'p': case 'P': window.print(); e.preventDefault(); break;
      case 'Escape': setScale(1); break;
    }
  });

  /* ----------------------------------------------------- 8. ESTADO INICIAL */
  if (!root.dataset.theme) root.dataset.theme = 'dark';
  onScroll();
})(); 

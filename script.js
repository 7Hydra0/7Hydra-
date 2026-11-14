(function () {
  'use strict';

  const root        = document.documentElement;
  const progress    = document.getElementById('progress');
  const backToTop   = document.querySelector('.back-to-top');
  const toast       = document.querySelector('.toast');
  const tocLinks    = document.querySelectorAll('.toc-list a');
  const headings    = document.querySelectorAll('main.document h2[id]');

  /* ----------------------------------------------------- 1. TELA DE ENTRADA E MÚSICA */
  const music = document.getElementById('bg-music');
  const telaEntrada = document.getElementById('tela-entrada');
  const btnEntrar = document.getElementById('btn-entrar');
  const btnMusic = document.getElementById('btn-music');
  
  if (btnMusic && music) {
    const iconPlay = btnMusic.querySelector('.icon-music-play');
    const iconPause = btnMusic.querySelector('.icon-music-pause');

    function updateMusicUI(isPlaying) {
      if (isPlaying) {
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
        btnMusic.classList.add('is-playing');
      } else {
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
        btnMusic.classList.remove('is-playing');
      }
    }

    music.volume = 1.0; // Volume máximo

    // O evento de clique no botão "Entrar" quebra o bloqueio do navegador
    btnEntrar.addEventListener('click', () => {
      // Esconde a tela de entrada
      telaEntrada.classList.add('hidden');
      
      // Toca a música
      music.play().then(() => {
        updateMusicUI(true);
      }).catch(err => {
        console.log("Erro ao tocar áudio:", err);
      });
    });

    // Controle manual do botão Play/Pause na barra
    btnMusic.addEventListener('click', (e) => {
      e.stopPropagation(); 
      if (music.paused) {
        music.play();
        updateMusicUI(true);
        showToast('Música ativada');
      } else {
        music.pause();
        updateMusicUI(false);
        showToast('Música pausada');
      }
    });
  }

  /* ----------------------------------------------------- 2. TEMA */
  function setTheme(theme) {
    root.dataset.theme = theme;
    try { localStorage.setItem('carta:theme', theme); } catch (_) {}
  }
  function toggleTheme() { setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'); }

  /* ----------------------------------------------------- 3. FONTE */
  let scale = parseFloat(getComputedStyle(root).getPropertyValue('--font-scale')) || 1;
  function setScale(v) {
    scale = Math.round(Math.max(0.8, Math.min(1.4, v)) * 100) / 100;
    root.style.setProperty('--font-scale', scale);
    try { localStorage.setItem('carta:font-scale', scale); } catch (_) {}
  }

  /* ----------------------------------------------------- 4. TOAST */
  let toastTimer;
  function showToast(msg, ms = 2200) {
    toast.textContent = msg;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), ms);
  }

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

  /* ----------------------------------------------------- 6. BOTÕES E TECLADO */
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

  /* ----------------------------------------------------- 7. ESTADO INICIAL */
  if (!root.dataset.theme) root.dataset.theme = 'dark';
  onScroll();
})();

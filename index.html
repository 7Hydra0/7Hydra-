/* ==========================================================================
   CARTA INSTITUCIONAL — CSS + camada interativa
   ========================================================================== */

/* ---------------------------------------------------------------- 1. TOKENS */
:root {
  /* Cores (modo claro) */
  --azul-senado: #00305c;
  --azul-escuro: #00213d;
  --azul-pale:   #eef3f7;
  --verde:       #00824a;
  --texto:       #232323;
  --texto-2:     #4d4d4d;
  --borda:       #d5dce3;
  --papel:       #ffffff;
  --surface-blur: rgba(255, 255, 255, 0.9);
  --shadow-float: 0 4px 20px rgba(0, 0, 0, 0.08);
  --btn-primary-bg: #00305c;
  --btn-primary-fg: #ffffff;

  /* Tipografia fluida com fator de escala do usuário */
  --font-scale: 1;
  --serif: "Times New Roman", "Liberation Serif", Georgia, serif;
  --sans:  "Helvetica Neue", Arial, "Liberation Sans", sans-serif;

  --fs-corpo:      calc(clamp(11pt, 0.35vw + 10pt, 12.5pt) * var(--font-scale));
  --fs-ementa:     calc(clamp(9.5pt, 0.25vw + 9pt, 10.5pt) * var(--font-scale));
  --fs-titulo:     calc(clamp(13pt, 0.9vw + 10pt, 15.5pt)  * var(--font-scale));
  --fs-secao:      calc(clamp(10pt, 0.3vw + 9.2pt, 11pt)   * var(--font-scale));
  --fs-instituicao:calc(clamp(13pt, 2vw + 8pt, 19pt)      * var(--font-scale));
  --fs-marca:      calc(clamp(24pt, 4vw, 42pt)            * var(--font-scale));
  --fs-lema:       calc(clamp(10pt, 0.35vw + 9pt, 12pt)   * var(--font-scale));

  --respiro: clamp(1.25rem, 4vw, 2.5rem);
  --recuo: 1.75em;

  color-scheme: light;
}

/* Modo escuro */
:root[data-theme="dark"] {
  --azul-senado: #7cb6e8;
  --azul-escuro: #1a4d80;
  --azul-pale:   #1a2735;
  --verde:       #4fd394;
  --texto:       #e8ecf0;
  --texto-2:     #a5adb8;
  --borda:       #2a3440;
  --papel:       #0f1620;
  --surface-blur: rgba(15, 22, 32, 0.9);
  --shadow-float: 0 4px 20px rgba(0, 0, 0, 0.4);
  --btn-primary-bg: #7cb6e8;
  --btn-primary-fg: #0f1620;

  color-scheme: dark;
}

/* ------------------------------------------------------------------ 2. BASE */
*, *::before, *::after { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: 2rem;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

body {
  margin: 0;
  min-height: 100vh;
  background: var(--papel);
  color: var(--texto);
  font-family: var(--serif);
  font-size: var(--fs-corpo);
  line-height: 1.6;
  font-kerning: normal;
  font-variant-ligatures: common-ligatures;
  text-rendering: optimizeLegibility;
  hyphens: auto;
  overflow-wrap: break-word;
  transition: background-color .25s, color .25s;
}

::selection { background: var(--azul-senado); color: var(--papel); }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}

/* ---------------------------------------------------------- 3. PROGRESS BAR */
.progress {
  position: fixed;
  inset: 0 0 auto 0;
  height: 3px;
  width: 0%;
  background: var(--verde);
  z-index: 100;
  transition: width .08s linear;
}

/* -------------------------------------------------------------- 4. TOOLBAR */
.toolbar {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: .25rem;
  padding: .35rem;
  background: var(--surface-blur);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--borda);
  border-radius: 999px;
  box-shadow: var(--shadow-float);
  z-index: 50;
}

.tool-btn {
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--texto);
  cursor: pointer;
  transition: background-color .2s, color .2s;
}

.tool-btn:hover  { background: var(--azul-pale); color: var(--azul-senado); }
.tool-btn:focus-visible { outline: 2px solid var(--azul-senado); outline-offset: 2px; }

.icon { width: 1.1rem; height: 1.1rem; }

.font-icon { font-family: var(--serif); font-weight: 700; line-height: 1; }
.font-icon.is-small { font-size: .8rem; }
.font-icon.is-large { font-size: 1.05rem; }

[data-theme="light"] .icon-sun  { display: none; }
[data-theme="dark"]  .icon-moon { display: none; }

/* ------------------------------------------------------------- 5. LAYOUT */
.page-header,
.layout {
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.page-header { padding-top: clamp(1.25rem, 3vw, 2rem); }

.layout {
  display: grid;
  grid-template-columns: 210px minmax(0, 1fr);
  gap: 2.5rem;
  padding-bottom: 4rem;
}

/* ------------------------------------------------------------- 6. MASTHEAD */
.masthead {
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  border-top: 8px solid var(--azul-senado);
  border-bottom: 4px solid var(--verde);
  margin: 0;
}

.masthead td { vertical-align: middle; padding: 14px 12px; }

.masthead .mark {
  width: 15%;
  text-align: center;
  color: var(--azul-senado);
  font-family: Georgia, var(--serif);
  font-size: var(--fs-marca);
  font-weight: 700;
  line-height: 1;
  border-right: 1px solid var(--borda);
  hyphens: manual;
}

.masthead .institution {
  width: 85%;
  text-align: left;
  padding-inline-start: clamp(12px, 2.5vw, 25px);
  color: var(--azul-senado);
  font-family: var(--sans);
  font-size: var(--fs-instituicao);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: .04em;
  hyphens: manual;
}

.masthead .institution small {
  display: block;
  margin-top: .35em;
  color: var(--texto-2);
  font-size: clamp(8pt, .55em, 10pt);
  font-weight: 400;
  letter-spacing: .01em;
  line-height: 1.3;
}

/* ------------------------------------------------------------------ 7. TOC */
.toc {
  position: sticky;
  top: 2rem;
  align-self: start;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  padding-inline-end: .5rem;
}

.toc-title {
  margin: 0 0 .75rem;
  padding: 0;
  background: none;
  border: 0;
  color: var(--texto-2);
  font-family: var(--sans);
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
}

.toc-list {
  margin: 0;
  padding: 0;
  list-style: none;
  border-inline-start: 1px solid var(--borda);
}

.toc-list li { margin: 0; }

.toc-list a {
  display: block;
  padding: .4rem 0 .4rem .85rem;
  margin-inline-start: -1px;
  border-inline-start: 2px solid transparent;
  color: var(--texto-2);
  text-decoration: none;
  font-family: var(--sans);
  font-size: .82rem;
  line-height: 1.35;
  transition: color .2s, border-color .2s;
}

.toc-list a:hover  { color: var(--azul-senado); }
.toc-list a.active {
  color: var(--azul-senado);
  border-inline-start-color: var(--verde);
  font-weight: 600;
}

/* ------------------------------------------------------------ 8. CONTEÚDO */
.doc-title {
  margin: 0 0 clamp(1.5rem, 4vw, 2.25rem);
  padding-bottom: .9rem;
  border-bottom: 2px solid var(--azul-senado);
  color: var(--azul-senado);
  font-family: var(--sans);
  font-size: var(--fs-titulo);
  font-weight: 700;
  letter-spacing: .06em;
  line-height: 1.3;
  text-align: center;
  text-transform: uppercase;
  text-wrap: balance;
  hyphens: manual;
}

.summary {
  width: min(65%, 52ch);
  margin: 0 0 1.5rem auto;
  padding: .9rem 1.15rem;
  background: var(--azul-pale);
  border-inline-start: 4px solid var(--azul-senado);
  color: var(--texto-2);
  font-family: var(--sans);
  font-size: var(--fs-ementa);
  line-height: 1.55;
  text-align: justify;
  break-inside: avoid;
}

p {
  margin: 0 0 .85em;
  text-align: justify;
  text-indent: var(--recuo);
  orphans: 3;
  widows: 3;
  text-wrap: pretty;
}

.clause { margin: 0 0 .55em; }

h2 {
  position: relative;
  margin: clamp(1.75rem, 4vw, 2.25rem) 0 .8rem;
  padding: .55rem 2.5rem .55rem .85rem;
  background: var(--azul-pale);
  border-inline-start: 5px solid var(--azul-senado);
  border-bottom: 1px solid var(--borda);
  color: var(--azul-senado);
  font-family: var(--sans);
  font-size: var(--fs-secao);
  font-weight: 700;
  letter-spacing: .05em;
  line-height: 1.35;
  text-align: left;
  text-transform: uppercase;
  hyphens: manual;
  break-after: avoid;
  break-inside: avoid;
}

.heading-anchor {
  position: absolute;
  inset-inline-end: .4rem;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  color: var(--azul-senado);
  font-family: var(--sans);
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  opacity: 0;
  transition: opacity .2s, background-color .2s;
}

h2:hover .heading-anchor,
.heading-anchor:focus-visible { opacity: 1; }

.heading-anchor:hover { background: var(--borda); }

/* ------------------------------------------------------------- 9. ENCERRAMENTO */
.motto {
  margin: clamp(2rem, 5vw, 3rem) 0 0;
  padding: 1.25rem 1rem;
  border-top: 3px solid var(--azul-senado);
  border-bottom: 5px solid var(--verde);
  color: var(--azul-senado);
  font-family: var(--sans);
  font-size: var(--fs-lema);
  font-weight: 700;
  letter-spacing: .08em;
  line-height: 1.9;
  text-align: center;
  text-indent: 0;
  hyphens: manual;
  break-inside: avoid;
}

/* -------------------------------------------------------- 10. BACK TO TOP */
.back-to-top {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--btn-primary-bg);
  color: var(--btn-primary-fg);
  cursor: pointer;
  box-shadow: var(--shadow-float);
  opacity: 0;
  transform: translateY(12px);
  pointer-events: none;
  transition: opacity .25s, transform .25s;
  z-index: 40;
}

.back-to-top svg { width: 1.25rem; height: 1.25rem; }
.back-to-top.visible { opacity: 1; transform: translateY(0); pointer-events: auto; }
.back-to-top:hover   { transform: translateY(-2px); }
.back-to-top:focus-visible { outline: 2px solid var(--verde); outline-offset: 3px; }

/* ---------------------------------------------------------------- 11. TOAST */
.toast {
  position: fixed;
  left: 50%;
  bottom: 1.75rem;
  transform: translate(-50%, 12px);
  padding: .65rem 1.25rem;
  border-radius: 999px;
  background: var(--azul-escuro);
  color: #fff;
  font-family: var(--sans);
  font-size: .85rem;
  font-weight: 500;
  letter-spacing: .02em;
  box-shadow: var(--shadow-float);
  opacity: 0;
  pointer-events: none;
  transition: opacity .25s, transform .25s;
  z-index: 60;
}

.toast.visible { opacity: 1; transform: translate(-50%, 0); }

/* ---------------------------------------------------------- 12. RESPONSIVO */
@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .toc {
    position: static;
    max-height: none;
    padding: 0 0 1rem;
    border-bottom: 1px solid var(--borda);
  }

  .toc-list {
    display: flex;
    flex-wrap: wrap;
    gap: .25rem .5rem;
    border: 0;
  }

  .toc-list li { margin: 0; }

  .toc-list a {
    padding: .35rem .65rem;
    margin: 0;
    border: 1px solid var(--borda);
    border-radius: 999px;
    font-size: .78rem;
  }

  .toc-list a.active {
    background: var(--azul-senado);
    color: var(--papel);
    border-color: var(--azul-senado);
  }
}

@media (max-width: 700px) {
  :root { --recuo: 1.5em; }

  .toolbar { top: auto; bottom: 1rem; right: 1rem; }
  .back-to-top { bottom: 4.5rem; }

  .masthead .mark { border-right: 0; }
  .masthead .institution { padding-inline-start: 6px; }

  .summary { width: 100%; margin-inline-start: 0; }

  h2 { padding-inline-end: .85rem; }
  .heading-anchor { display: none; }
}

/* ------------------------------------------------------------- 13. IMPRESSÃO */
@page { size: A4; margin: 22mm 20mm 20mm; }

@media print {
  :root {
    --fs-corpo:       11pt;
    --fs-ementa:      10pt;
    --fs-titulo:      14pt;
    --fs-secao:       10.5pt;
    --fs-instituicao: 17pt;
    --fs-marca:       36pt;
    --fs-lema:        11pt;
  }

  html, body { background: #fff; }

  .progress,
  .toolbar,
  .toc,
  .back-to-top,
  .toast,
  .heading-anchor { display: none; }

  .page-header,
  .layout {
    max-width: none;
    padding: 0;
  }

  .layout { display: block; }

  .masthead,
  .summary,
  h2,
  .motto,
  .doc-title {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  .masthead  { break-inside: avoid; break-after: avoid; }
  .doc-title { break-after: avoid; }
  .summary   { break-inside: avoid; }
  .motto     { break-inside: avoid; break-before: avoid; }

  p, .clause { orphans: 3; widows: 3; }
}

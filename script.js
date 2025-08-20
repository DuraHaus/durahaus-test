// Year
document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
});

// Theme + logo swap
(function(){
  const root = document.documentElement;
  const logo = document.getElementById('logo');
  if (!logo) return;

  const stored = localStorage.getItem('dh-theme');
  const pref = stored || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  function setTheme(t){
    root.setAttribute('data-theme', t);
    localStorage.setItem('dh-theme', t);
    const darkSrc = logo.getAttribute('data-src-dark');
    const lightSrc = logo.getAttribute('data-src-light');
    if (t === 'dark' && darkSrc){ logo.src = darkSrc; logo.style.filter=''; }
    else if (t === 'light' && lightSrc){ logo.src = lightSrc; logo.style.filter=''; }
    else {
      // Fallback invert if only one asset exists
      logo.style.filter = t==='light' ? 'invert(1) brightness(0.05)' : 'none';
    }
  }
  setTheme(pref);

  document.getElementById('themeToggle')?.addEventListener('click', ()=>{
    setTheme(root.getAttribute('data-theme')==='dark' ? 'light' : 'dark');
  });
})();

// Drawer (menu)
(function(){
  const drawer = document.getElementById('drawer');
  const menuBtn = document.getElementById('menuBtn');
  if(!drawer || !menuBtn) return;
  const open = ()=>{ drawer.classList.add('open'); drawer.setAttribute('aria-hidden','false'); menuBtn.setAttribute('aria-expanded','true'); }
  const close = ()=>{ drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true'); menuBtn.setAttribute('aria-expanded','false'); }
  menuBtn.addEventListener('click', open);
  drawer.querySelectorAll('[data-close], .shade').forEach(el=> el.addEventListener('click', close));
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); });
})();

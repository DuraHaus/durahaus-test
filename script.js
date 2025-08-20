// Theme toggle
const toggle = document.querySelector('#theme-toggle, #theme-toggle-mobile');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
  });
}

// Quote modal
const modal = document.getElementById('quote-modal');
document.querySelectorAll('.quote-btn, .btn.dark, .btn.big').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    modal.classList.remove('hidden');
  });
});
modal.querySelector('.close').addEventListener('click', ()=> modal.classList.add('hidden'));

// Before/after slider
const range = document.querySelector('.slider input');
const after = document.querySelector('.slider .after');
if (range && after){
  range.addEventListener('input', e => {
    after.style.clipPath = `inset(0 ${100 - e.target.value}% 0 0)`;
  });
}

// ===== BURGER =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) burger.addEventListener('click', () => {
    const open = nav.classList.toggle('active');
    burger.textContent = open ? '✕' : '☰';
});

// ===== МОДАЛЬДАР (жалпы) =====
function openModal(id) { const m = document.getElementById(id); if (m) m.classList.add('active'); }
function closeModals() { document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active')); }

document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => openModal(b.dataset.open)));
document.querySelectorAll('.modal').forEach(m => m.addEventListener('click', e => {
    if (e.target === m || e.target.closest('[data-close]')) closeModals();
}));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModals(); });

// ===== TOAST ХАБАРЛАМА =====
function showToast(text) {
    let t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('data-dyn', ''); document.body.appendChild(t); }
    t.textContent = text;
    t.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => t.classList.remove('show'), 2800);
}

// HTML қауіпсіздігі (XSS-тен қорғау)
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

// ===== ТЕГІН САБАҚҚА ЖАЗЫЛУ ФОРМАСЫ =====
const modalForm = document.getElementById('modalForm');
if (modalForm) modalForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('modalName').value.trim();
    modalForm.reset();
    closeModals();
    showToast(t('Рақмет, {n}! Жақын арада хабарласамыз 🎉', { n: name }));
});

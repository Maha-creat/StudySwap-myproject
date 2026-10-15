const CATS = { frontend: 'Frontend', backend: 'Backend', design: 'Дизайн', python: 'Python' };
const ICONS = { frontend: '💻', backend: '⚙️', design: '🎨', python: '🐍' };
const defaultCourses = [
    { id: 1, title: 'HTML & CSS негіздері', category: 'frontend', price: 'Тегін', level: 'Бастапқы', duration: '4 апта', desc: 'Сайт жасаудың алғашқы қадамдары: семантика, Flexbox, Grid, адаптивті верстка.' },
    { id: 2, title: 'JavaScript толық курс', category: 'frontend', price: '25 000 ₸', level: 'Орта', duration: '8 апта', desc: 'ES6+, DOM, асинхронды код, localStorage және нақты шағын жобалар.' },
    { id: 3, title: 'Node.js және Express', category: 'backend', price: '30 000 ₸', level: 'Орта', duration: '6 апта', desc: 'REST API жасау, маршруттар, middleware және дерекқормен жұмыс.' },
    { id: 4, title: 'Figma-да UI/UX дизайн', category: 'design', price: '20 000 ₸', level: 'Бастапқы', duration: '5 апта', desc: 'Интерфейс дизайны, компоненттер, прототип және дизайн-жүйе.' },
    { id: 5, title: 'React практикум', category: 'frontend', price: '35 000 ₸', level: 'Жоғары', duration: '8 апта', desc: 'Компоненттер, hooks, күй басқару және толық жоба.' },
    { id: 6, title: 'Python', category: 'python', price: '10 000 ₸', level: 'Бастапқы', duration: '6 апта', desc: 'Python негіздері: айнымалылар, функциялар, ООП және автоматтандыру.' },
];
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch { return d; } };
let custom = load('studyswap_custom', []);
let enrolled = load('studyswap_enrolled', []); // [{id,title}]
const allCourses = () => [...defaultCourses, ...custom];
const isEnrolled = id => enrolled.some(c => c.id === id);

const grid = document.getElementById('coursesGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

function renderCourses(list) {
    if (!grid) return;
    if (!list.length) { grid.innerHTML = `<p class="empty">${t('Курс табылмады 😔')}</p>`; return; }
    grid.innerHTML = list.map(c => `
        <article class="card course ${isEnrolled(c.id) ? 'enrolled' : ''}" data-id="${c.id}" tabindex="0" role="button" aria-label="${esc(t(c.title))} курсын ашу">
            <div class="course__top">
                <div class="card__icon">${ICONS[c.category] || '📚'}</div>
                ${isEnrolled(c.id) ? '<span class="badge badge--ok">' + t('✓ Жазылдың') + '</span>' : ''}
            </div>
            <span class="badge" style="align-self:flex-start">${esc(t(CATS[c.category] || c.category))}</span>
            <h3 class="card__title">${esc(t(c.title))}</h3>
            <p class="muted">${esc(t(c.duration || '—'))} · ${esc(t(c.level || 'Бастапқы'))}</p>
            <div class="course__foot"><span class="price">${esc(t(c.price))}</span><span class="more">${t('Толығырақ →')}</span></div>
        </article>`).join('');
}

function filterCourses() {
    const q = searchInput.value.toLowerCase().trim();
    const cat = categoryFilter.value;
    renderCourses(allCourses().filter(c =>
        c.title.toLowerCase().includes(q) && (cat === 'all' || c.category === cat)));
}

// ===== КУРСТЫ БАСҚАНДА — ТОЛЫҚ АҚПАРАТ =====
let currentId = null;
function openCourse(id) {
    const c = allCourses().find(x => x.id === id);
    if (!c) return;
    currentId = id;
    document.getElementById('courseBody').innerHTML = `
        <div class="card__icon">${ICONS[c.category] || '📚'}</div>
        <h2>${esc(t(c.title))}</h2>
        <div class="meta"><span class="badge">${esc(t(CATS[c.category] || c.category))}</span>
        <span class="badge">⏱ ${esc(t(c.duration || '—'))}</span><span class="badge">📶 ${esc(t(c.level || 'Бастапқы'))}</span></div>
        <p class="muted">${esc(t(c.desc || 'Сипаттама жақында қосылады.'))}</p>
        <p style="margin-top:14px">${t('Бағасы:')} <strong class="price">${esc(t(c.price))}</strong></p>`;
    const btn = document.getElementById('enrollBtn');
    btn.textContent = isEnrolled(id) ? t('Жазылымнан шығу') : t('Курсқа жазылу');
    btn.className = 'btn ' + (isEnrolled(id) ? 'btn--danger' : 'btn--primary');
    openModal('courseModal');
}

if (grid) {
    grid.addEventListener('click', e => { const a = e.target.closest('.course'); if (a) openCourse(+a.dataset.id); });
    grid.addEventListener('keydown', e => {
        const a = e.target.closest('.course');
        if (a && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openCourse(+a.dataset.id); }
    });
}

document.getElementById('enrollBtn')?.addEventListener('click', () => {
    const c = allCourses().find(x => x.id === currentId);
    if (isEnrolled(currentId)) { enrolled = enrolled.filter(x => x.id !== currentId); showToast(t('Жазылым тоқтатылды')); }
    else { enrolled.push({ id: c.id, title: c.title }); showToast(t('✅ «{n}» курсына жазылдың!', { n: t(c.title) })); }
    localStorage.setItem('studyswap_enrolled', JSON.stringify(enrolled));
    closeModals();
    filterCourses();
});

// ===== ЖАҢА КУРС ҚОСУ (prompt орнына форма) =====
document.getElementById('addCourseForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    const title = f.cTitle.value.trim();
    if (title.length < 2) { showToast(t('Курс аты тым қысқа')); return; }
    custom.push({ id: Date.now(), title, category: f.cCategory.value, price: f.cPrice.value.trim() || 'Тегін',
        level: 'Бастапқы', duration: '—', desc: 'Қолданушы қосқан курс.' });
    localStorage.setItem('studyswap_custom', JSON.stringify(custom));
    f.reset(); closeModals(); filterCourses();
    showToast(t('Курс қосылды 🎉'));
});

if (searchInput) searchInput.addEventListener('input', filterCourses);
if (categoryFilter) categoryFilter.addEventListener('change', filterCourses);
filterCourses();

window.addEventListener('langchange', () => {
    filterCourses();
    if (document.getElementById('courseModal').classList.contains('active')) openCourse(currentId);
});

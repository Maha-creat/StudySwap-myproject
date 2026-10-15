const profileForm = document.getElementById('profileForm');
const savedInfo = document.getElementById('savedInfo');
const KEY = 'studyswap_profile';

function showSaved(data, title) {
    let enrolled = [];
    try { enrolled = JSON.parse(localStorage.getItem('studyswap_enrolled')) || []; } catch {}
    savedInfo.innerHTML = `
        <strong>✅ ${t(title)}</strong><br>
        ${t('Аты:')} ${esc(data.name)}<br>Email: ${esc(data.email)}
        ${data.bio ? `<br>${t('Өзі туралы')}: ${esc(data.bio)}` : ''}
        <hr style="margin:12px 0;border:none;border-top:1px solid var(--border)">
        <strong>${t('📚 Менің курстарым:')}</strong>
        ${enrolled.length ? `<ul>${enrolled.map(c => `<li>${esc(c.title)}</li>`).join('')}</ul>`
            : '<p class="muted">'+t('Әзірге жазылған курс жоқ.')+' <a href="courses.html" style="color:var(--primary);font-weight:600">'+t('Курстарды қарау →')+'</a></p>'}`;
}

function loadProfile() {
    let data = null;
    try { data = JSON.parse(localStorage.getItem(KEY)); } catch {}
    if (!data) return;
    userName.value = data.name || ''; userEmail.value = data.email || ''; userBio.value = data.bio || '';
    showSaved(data, 'Сақталған профиль');
}

function validateForm(name, email) {
    let ok = true;
    nameError.textContent = ''; emailError.textContent = '';
    userName.classList.remove('invalid'); userEmail.classList.remove('invalid');
    if (name.length < 2) { nameError.textContent = t('Аты кемінде 2 әріптен тұруы керек'); userName.classList.add('invalid'); ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { emailError.textContent = t('Email форматы дұрыс емес'); userEmail.classList.add('invalid'); ok = false; }
    return ok;
}

if (profileForm) {
    profileForm.addEventListener('submit', e => {
        e.preventDefault();
        const data = { name: userName.value.trim(), email: userEmail.value.trim(), bio: userBio.value.trim() };
        if (!validateForm(data.name, data.email)) return;
        localStorage.setItem(KEY, JSON.stringify(data));
        showSaved(data, 'Профиль сақталды!');
        showToast(t('Профиль сақталды ✅'));
    });
    loadProfile();
}

window.addEventListener('langchange', () => {
    if (!profileForm) return;
    nameError.textContent = ''; emailError.textContent = '';
    let d = null; try { d = JSON.parse(localStorage.getItem(KEY)); } catch {}
    if (d) showSaved(d, 'Сақталған профиль');
});

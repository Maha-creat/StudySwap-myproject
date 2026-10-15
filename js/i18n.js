// ===== ТІЛ АУЫСТЫРҒЫШ: ҚАЗ / РУС / ENG + ҚАРАҢҒЫ ТАҚЫРЫП =====
const ROWS = [
['Басты','Главная','Home'],['Курстар','Курсы','Courses'],['Профиль','Профиль','Profile'],
['StudySwap KZ — Онлайн курстар','StudySwap KZ — Онлайн-курсы','StudySwap KZ — Online courses'],
['Курстар — StudySwap KZ','Курсы — StudySwap KZ','Courses — StudySwap KZ'],
['Профиль — StudySwap KZ','Профиль — StudySwap KZ','Profile — StudySwap KZ'],
['🚀 IT курстар платформасы','🚀 Платформа IT-курсов','🚀 IT courses platform'],
['Білім — болашаққа','Знания —','Knowledge —'],['инвестиция','инвестиция в будущее','an investment in the future'],
['Заманауи IT мамандықтарын үйрен. 100+ курс, тәжірибелі мұғалімдер.','Осваивай современные IT-профессии. 100+ курсов, опытные преподаватели.','Learn modern IT skills. 100+ courses, experienced teachers.'],
['Тегін сабаққа жазылу','Записаться на бесплатный урок','Sign up for a free lesson'],
['Курстарды қарау','Смотреть курсы','Browse courses'],
['курс','курсов','courses'],['студент','студентов','students'],['тәлімгер','наставников','mentors'],['рейтинг','рейтинг','rating'],
['Неге біз?','Почему мы?','Why us?'],
['Оқуды қызықты әрі нәтижелі ететін үш себеп','Три причины, которые делают обучение интересным и результативным','Three reasons that make learning fun and effective'],
['Практика','Практика','Practice'],['Тек теория емес — нақты жобалар жасайсың.','Не только теория — ты делаешь реальные проекты.','Not just theory — you build real projects.'],
['Тәлімгерлер','Наставники','Mentors'],['Әр студентке жеке тәлімгер бекітіледі.','За каждым студентом закрепляется личный наставник.','Every student gets a personal mentor.'],
['Сертификат','Сертификат','Certificate'],['Курс біткен соң сертификат аласың.','После окончания курса ты получишь сертификат.','You get a certificate after finishing the course.'],
['Бүгін бастауға дайынсың ба?','Готов начать сегодня?','Ready to start today?'],['Алғашқы сабақ — тегін.','Первый урок — бесплатно.','The first lesson is free.'],['Жазылу','Записаться','Sign up'],
['© 2026 StudySwap KZ. Барлық құқықтар қорғалған.','© 2026 StudySwap KZ. Все права защищены.','© 2026 StudySwap KZ. All rights reserved.'],
['Атыңыз бен emailіңізді қалдырыңыз, біз хабарласамыз.','Оставьте имя и email, мы свяжемся с вами.','Leave your name and email and we will contact you.'],
['Атыңыз','Ваше имя','Your name'],['Жіберу','Отправить','Send'],['Жабу','Закрыть','Close'],['Мәзірді ашу','Открыть меню','Open menu'],
['Онлайн оқу иллюстрациясы','Иллюстрация онлайн-обучения','Online learning illustration'],
['Рақмет, {n}! Жақын арада хабарласамыз 🎉','Спасибо, {n}! Скоро свяжемся с вами 🎉','Thank you, {n}! We will contact you soon 🎉'],
['Барлық курстар','Все курсы','All courses'],
['Курсты басып, толық ақпаратын көр және жазыл','Нажми на курс, узнай подробности и запишись','Click a course to see details and enroll'],
['🔍 Курс атын іздеу...','🔍 Поиск курса...','🔍 Search courses...'],['Іздеу','Поиск','Search'],['Санат','Категория','Category'],
['Барлық санаттар','Все категории','All categories'],['Дизайн','Дизайн','Design'],['+ Курс қосу','+ Добавить курс','+ Add course'],
['Жаңа курс қосу','Добавить новый курс','Add a new course'],['Курс аты','Название курса','Course name'],['Санаты','Категория','Category'],
['Бағасы','Цена','Price'],['Тегін','Бесплатно','Free'],['Қосу','Добавить','Add'],
['Жеке профиль','Личный профиль','Personal profile'],['Деректерің браузерде сақталады','Данные хранятся в твоём браузере','Your data is saved in your browser'],
['Аты-жөні','Имя и фамилия','Full name'],['Мысалы: Айдос Нұрлан','Например: Айдос Нурлан','Example: Aidos Nurlan'],['Өзі туралы','О себе','About me'],['Сақтау','Сохранить','Save'],
['Аты кемінде 2 әріптен тұруы керек','Имя должно содержать минимум 2 буквы','Name must be at least 2 letters'],
['Email форматы дұрыс емес','Неверный формат email','Invalid email format'],
['Профиль сақталды ✅','Профиль сохранён ✅','Profile saved ✅'],['Сақталған профиль','Сохранённый профиль','Saved profile'],['Профиль сақталды!','Профиль сохранён!','Profile saved!'],
['Аты:','Имя:','Name:'],['📚 Менің курстарым:','📚 Мои курсы:','📚 My courses:'],
['Әзірге жазылған курс жоқ.','Пока нет записанных курсов.','No enrolled courses yet.'],['Курстарды қарау →','Смотреть курсы →','Browse courses →'],
['Курс табылмады 😔','Курс не найден 😔','No courses found 😔'],['✓ Жазылдың','✓ Записан','✓ Enrolled'],['Толығырақ →','Подробнее →','Details →'],['Бағасы:','Цена:','Price:'],
['Курсқа жазылу','Записаться на курс','Enroll in course'],['Жазылымнан шығу','Отписаться','Leave course'],
['Жазылым тоқтатылды','Запись отменена','Enrollment cancelled'],['✅ «{n}» курсына жазылдың!','✅ Ты записан на курс «{n}»!','✅ You enrolled in «{n}»!'],
['Курс аты тым қысқа','Название слишком короткое','Course name is too short'],['Курс қосылды 🎉','Курс добавлен 🎉','Course added 🎉'],
['Бастапқы','Начальный','Beginner'],['Орта','Средний','Intermediate'],['Жоғары','Продвинутый','Advanced'],
['4 апта','4 недели','4 weeks'],['5 апта','5 недель','5 weeks'],['6 апта','6 недель','6 weeks'],['8 апта','8 недель','8 weeks'],
['Сипаттама жақында қосылады.','Описание скоро появится.','Description coming soon.'],['Қолданушы қосқан курс.','Курс, добавленный пользователем.','Course added by a user.'],
['HTML & CSS негіздері','Основы HTML и CSS','HTML & CSS basics'],['JavaScript толық курс','Полный курс JavaScript','Complete JavaScript course'],
['Node.js және Express','Node.js и Express','Node.js and Express'],['Figma-да UI/UX дизайн','UI/UX-дизайн в Figma','UI/UX design in Figma'],['React практикум','Практикум по React','React workshop'],
['Сайт жасаудың алғашқы қадамдары: семантика, Flexbox, Grid, адаптивті верстка.','Первые шаги в создании сайтов: семантика, Flexbox, Grid, адаптивная вёрстка.','First steps in web development: semantics, Flexbox, Grid, responsive layout.'],
['ES6+, DOM, асинхронды код, localStorage және нақты шағын жобалар.','ES6+, DOM, асинхронный код, localStorage и реальные мини-проекты.','ES6+, DOM, async code, localStorage and real mini-projects.'],
['REST API жасау, маршруттар, middleware және дерекқормен жұмыс.','Создание REST API, маршруты, middleware и работа с базой данных.','Building REST APIs, routes, middleware and working with databases.'],
['Интерфейс дизайны, компоненттер, прототип және дизайн-жүйе.','Дизайн интерфейсов, компоненты, прототипы и дизайн-система.','Interface design, components, prototypes and design systems.'],
['Компоненттер, hooks, күй басқару және толық жоба.','Компоненты, hooks, управление состоянием и полноценный проект.','Components, hooks, state management and a full project.'],
['Python негіздері: айнымалылар, функциялар, ООП және автоматтандыру.','Основы Python: переменные, функции, ООП и автоматизация.','Python basics: variables, functions, OOP and automation.']];
const DICT = { ru: {}, en: {} };
ROWS.forEach(r => { DICT.ru[r[0]] = r[1]; DICT.en[r[0]] = r[2]; });
const LANGS = { kk: 'ҚАЗ', ru: 'РУС', en: 'ENG' };
let lang = localStorage.getItem('studyswap_lang') || 'kk';
if (!LANGS[lang]) lang = 'kk';

function t(key, vars) {
    let s = (DICT[lang] && DICT[lang][key]) || key;
    if (vars) for (const k in vars) s = s.replace('{' + k + '}', () => vars[k]);
    return s;
}

const origTitle = document.title;
function applyStatic() {
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(n => {
        if (n.parentElement.closest('script,style,textarea,[data-dyn]')) return;
        if (n.__kk === undefined) {
            const m = n.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
            n.__kk = (m[2] in DICT.ru) ? m[2] : null; n.__p = [m[1], m[3]];
        }
        if (n.__kk !== null) n.nodeValue = n.__p[0] + t(n.__kk) + n.__p[1];
    });
    document.querySelectorAll('[placeholder],[aria-label]').forEach(el => {
        if (el.closest('[data-dyn]')) return;
        ['placeholder', 'aria-label'].forEach(a => {
            if (!el.hasAttribute(a)) return;
            if (el['__' + a] === undefined) el['__' + a] = el.getAttribute(a);
            el.setAttribute(a, t(el['__' + a]));
        });
    });
    document.title = t(origTitle);
}

// ===== Header-ге батырмалар қосу =====
const tools = document.createElement('div');
tools.className = 'tools';
tools.innerHTML = Object.keys(LANGS).map(l => `<button class="chip" data-lang="${l}">${LANGS[l]}</button>`).join('')
    + '<button class="chip" id="themeBtn" aria-label="Theme">🌙</button>';
document.querySelector('.header__inner').appendChild(tools);

function setLang(l) {
    lang = l; localStorage.setItem('studyswap_lang', l);
    document.documentElement.lang = l;
    tools.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
    applyStatic();
    window.dispatchEvent(new Event('langchange'));
}
tools.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

function setTheme(m) {
    document.documentElement.dataset.theme = m;
    localStorage.setItem('studyswap_theme', m);
    document.getElementById('themeBtn').textContent = m === 'dark' ? '☀️' : '🌙';
}
document.getElementById('themeBtn').addEventListener('click', () =>
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
setTheme(localStorage.getItem('studyswap_theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
setLang(lang);

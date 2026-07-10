/* UniAtlas — Career Guidance quiz: questions, categories & scoring */

const CAREER_QUESTIONS = [
  {
    id: 'q1',
    q: { ru: 'В свободное время тебе интереснее:', en: 'In your free time, you\'d rather:', kz: 'Бос уақытыңда саған қызығы:' },
    hint: { ru: '', en: '', kz: '' },
    options: [
      { value: 'tech', emoji: '🔧', label: { ru: 'Разбирать, как устроены гаджеты и технологии', en: 'Figure out how gadgets and tech work', kz: 'Гаджеттер мен технологияның қалай жұмыс істейтінін білу' } },
      { value: 'science', emoji: '🧪', label: { ru: 'Проводить эксперименты, узнавать необычные факты', en: 'Run experiments, learn unusual facts', kz: 'Тәжірибе жасау, ерекше деректерді білу' } },
      { value: 'creative', emoji: '🎨', label: { ru: 'Рисовать, снимать видео, писать истории', en: 'Draw, shoot video, write stories', kz: 'Сурет салу, видео түсіру, әңгіме жазу' } },
      { value: 'social', emoji: '💬', label: { ru: 'Общаться и помогать друзьям с их проблемами', en: 'Talk and help friends with their problems', kz: 'Достарыңмен сөйлесіп, мәселелерін шешуге көмектесу' } },
    ],
  },
  {
    id: 'q2',
    q: { ru: 'В групповом проекте тебе комфортнее всего:', en: 'In a group project, you feel most comfortable:', kz: 'Топтық жобада саған ең ыңғайлысы:' },
    hint: { ru: '', en: '', kz: '' },
    options: [
      { value: 'enterprising', emoji: '🚀', label: { ru: 'Придумывать идею и договариваться с людьми', en: 'Coming up with the idea and negotiating', kz: 'Идея ойлап, адамдармен келісу' } },
      { value: 'organizing', emoji: '📋', label: { ru: 'Считать бюджет, следить за сроками и деталями', en: 'Tracking budget, deadlines and details', kz: 'Бюджетті есептеп, мерзім мен детальді бақылау' } },
      { value: 'tech', emoji: '⚙️', label: { ru: 'Разрабатывать техническое решение', en: 'Building the technical solution', kz: 'Техникалық шешім әзірлеу' } },
      { value: 'creative', emoji: '🖌️', label: { ru: 'Оформлять и презентовать результат творчески', en: 'Designing and presenting it creatively', kz: 'Нәтижені шығармашылықпен безендіру және таныстыру' } },
    ],
  },
  {
    id: 'q3',
    q: { ru: 'Какой школьный предмет тебе даётся легче и интереснее?', en: 'Which school subject comes easiest and is most interesting?', kz: 'Қай мектеп пәні саған оңай әрі қызық?' },
    hint: { ru: '', en: '', kz: '' },
    options: [
      { value: 'tech', emoji: '➗', label: { ru: 'Математика и информатика', en: 'Math and computer science', kz: 'Математика және информатика' } },
      { value: 'science', emoji: '🔬', label: { ru: 'Биология, химия, физика', en: 'Biology, chemistry, physics', kz: 'Биология, химия, физика' } },
      { value: 'enterprising', emoji: '💹', label: { ru: 'Экономика и обществознание', en: 'Economics and social studies', kz: 'Экономика және қоғамтану' } },
      { value: 'social', emoji: '📚', label: { ru: 'Литература, история, языки', en: 'Literature, history, languages', kz: 'Әдебиет, тарих, тілдер' } },
    ],
  },
  {
    id: 'q4',
    q: { ru: 'Что мотивирует тебя больше всего в будущей работе?', en: 'What motivates you most in a future job?', kz: 'Болашақ жұмыста сені ең көп не итермелейді?' },
    hint: { ru: '', en: '', kz: '' },
    options: [
      { value: 'creative', emoji: '✨', label: { ru: 'Выражать себя и вдохновлять других', en: 'Expressing yourself and inspiring others', kz: 'Өзіңді көрсету және басқаларды шабыттандыру' } },
      { value: 'social', emoji: '🤝', label: { ru: 'Помогать людям решать их проблемы', en: 'Helping people solve their problems', kz: 'Адамдарға мәселелерін шешуге көмектесу' } },
      { value: 'enterprising', emoji: '📈', label: { ru: 'Строить бизнес и зарабатывать', en: 'Building a business and earning', kz: 'Бизнес құру және табыс табу' } },
      { value: 'organizing', emoji: '🗂️', label: { ru: 'Порядок, структура и надёжность процессов', en: 'Order, structure and reliable processes', kz: 'Тәртіп, құрылым және сенімді процестер' } },
    ],
  },
  {
    id: 'q5',
    q: { ru: 'Как тебе комфортнее узнавать новое?', en: 'How do you prefer to learn new things?', kz: 'Жаңа нәрсені қалай білгің келеді?' },
    hint: { ru: '', en: '', kz: '' },
    options: [
      { value: 'science', emoji: '🔭', label: { ru: 'Через эксперименты и исследования', en: 'Through experiments and research', kz: 'Тәжірибе мен зерттеу арқылы' } },
      { value: 'organizing', emoji: '📖', label: { ru: 'Через чёткие инструкции и структурированные курсы', en: 'Through clear instructions and structured courses', kz: 'Нақты нұсқаулық пен құрылымдық курстар арқылы' } },
      { value: 'tech', emoji: '🛠️', label: { ru: 'Через практику — собрать и разобрать самому', en: 'Hands-on — building and taking things apart', kz: 'Тәжірибе арқылы — өзің құрастырып, бөлшектеп' } },
      { value: 'creative', emoji: '🖼️', label: { ru: 'Через истории, образы и визуальные примеры', en: 'Through stories, images and visual examples', kz: 'Әңгіме, бейне және визуалды мысалдар арқылы' } },
    ],
  },
  {
    id: 'q6',
    q: { ru: 'Что для тебя важнее всего в будущей профессии?', en: 'What matters most to you in a future profession?', kz: 'Болашақ мамандықта саған ең маңыздысы не?' },
    hint: { ru: '', en: '', kz: '' },
    options: [
      { value: 'social', emoji: '❤️', label: { ru: 'Работать с людьми и помогать им', en: 'Working with people and helping them', kz: 'Адамдармен жұмыс істеп, оларға көмектесу' } },
      { value: 'enterprising', emoji: '👑', label: { ru: 'Влияние, лидерство и рост', en: 'Influence, leadership and growth', kz: 'Ықпал, көшбасшылық және өсу' } },
      { value: 'organizing', emoji: '🧱', label: { ru: 'Стабильность и чёткие правила игры', en: 'Stability and clear rules of the game', kz: 'Тұрақтылық және ойынның нақты ережелері' } },
      { value: 'science', emoji: '🌌', label: { ru: 'Постоянные открытия и новые знания', en: 'Constant discovery and new knowledge', kz: 'Үздіксіз жаңалық ашу және жаңа білім' } },
    ],
  },
];

const CAREER_DATA = {
  tech: {
    icon: '💻', tone: 'tone-violet',
    title: { ru: 'Инженерия и IT', en: 'Engineering & IT', kz: 'Инженерия және IT' },
    blurb: {
      ru: 'Тебе интересно, как устроены технологии и как их создавать — от приложений до роботов. Точность и логика — твоя сила.',
      en: 'You\'re drawn to how technology works and how to build it — from apps to robots. Precision and logic are your strengths.',
      kz: 'Технологияның қалай жұмыс істейтіні және оны қалай жасау керегі саған қызық — қосымшадан роботқа дейін. Дәлдік пен логика — сенің күшің.',
    },
    professions: {
      ru: ['Разработчик ПО', 'Дата-сайентист', 'Инженер-робототехник', 'Специалист по кибербезопасности'],
      en: ['Software Engineer', 'Data Scientist', 'Robotics Engineer', 'Cybersecurity Analyst'],
      kz: ['Бағдарламалық жасақтама әзірлеуші', 'Дата-сайентист', 'Робототехника инженері', 'Киберқауіпсіздік маманы'],
    },
  },
  science: {
    icon: '🔬', tone: 'tone-teal',
    title: { ru: 'Наука и исследования', en: 'Science & Research', kz: 'Ғылым және зерттеу' },
    blurb: {
      ru: 'Тебя тянет разбираться, как устроен мир, ставить вопросы и искать ответы через исследование и эксперимент.',
      en: 'You\'re pulled toward understanding how the world works — asking questions and finding answers through research and experiments.',
      kz: 'Әлемнің қалай құрылғанын түсінуге, сұрақ қоюға және оған зерттеу мен тәжірибе арқылы жауап табуға ұмтыласың.',
    },
    professions: {
      ru: ['Биотехнолог', 'Эколог-исследователь', 'Физик-исследователь', 'Аналитик данных в науке'],
      en: ['Biotech Researcher', 'Environmental Scientist', 'Research Physicist', 'Research Data Analyst'],
      kz: ['Биотехнолог', 'Эколог-зерттеуші', 'Физик-зерттеуші', 'Ғылымдағы деректер аналитигі'],
    },
  },
  creative: {
    icon: '🎨', tone: 'tone-pink',
    title: { ru: 'Творчество и медиа', en: 'Creative & Media', kz: 'Шығармашылық және медиа' },
    blurb: {
      ru: 'Ты мыслишь образами и историями — тебе важно создавать и выражать себя через визуальное, текст или дизайн.',
      en: 'You think in images and stories — creating and expressing yourself through visuals, text or design matters to you.',
      kz: 'Ойың бейнелер мен әңгімелерден тұрады — өзіңді визуал, мәтін немесе дизайн арқылы көрсету саған маңызды.',
    },
    professions: {
      ru: ['UX/UI-дизайнер', 'Режиссёр / контент-мейкер', 'Архитектор', 'Геймдизайнер'],
      en: ['UX/UI Designer', 'Filmmaker / Content Creator', 'Architect', 'Game Designer'],
      kz: ['UX/UI дизайнер', 'Режиссёр / контент-мейкер', 'Сәулетші', 'Геймдизайнер'],
    },
  },
  social: {
    icon: '🤝', tone: 'tone-yellow',
    title: { ru: 'Люди и социальная сфера', en: 'People & Social Impact', kz: 'Адамдар және әлеуметтік сала' },
    blurb: {
      ru: 'Тебе важно быть рядом с людьми, слышать их и помогать решать реальные проблемы — от здоровья до образования.',
      en: 'Being close to people, listening and helping solve real problems — from health to education — matters most to you.',
      kz: 'Адамдардың қасында болу, оларды тыңдау және нақты мәселелерін шешуге көмектесу — денсаулықтан білімге дейін — саған маңызды.',
    },
    professions: {
      ru: ['Психолог', 'Врач', 'Педагог / EdTech-специалист', 'Социальный предприниматель'],
      en: ['Psychologist', 'Doctor', 'Teacher / EdTech Specialist', 'Social Entrepreneur'],
      kz: ['Психолог', 'Дәрігер', 'Педагог / EdTech маманы', 'Әлеуметтік кәсіпкер'],
    },
  },
  enterprising: {
    icon: '📈', tone: 'tone-violet',
    title: { ru: 'Бизнес и лидерство', en: 'Business & Leadership', kz: 'Бизнес және көшбасшылық' },
    blurb: {
      ru: 'Ты любишь брать инициативу, вести переговоры и строить что-то с нуля — бизнес и лидерство тебе близки.',
      en: 'You like taking initiative, negotiating and building things from scratch — business and leadership suit you.',
      kz: 'Бастама көтеруді, келіссөз жүргізуді және нөлден бірдеңе құруды жақсы көресің — бизнес пен көшбасшылық саған жақын.',
    },
    professions: {
      ru: ['Продукт-менеджер', 'Предприниматель', 'Маркетинг-стратег', 'Бизнес-консультант'],
      en: ['Product Manager', 'Entrepreneur', 'Marketing Strategist', 'Business Consultant'],
      kz: ['Продукт-менеджер', 'Кәсіпкер', 'Маркетинг-стратег', 'Бизнес-кеңесші'],
    },
  },
  organizing: {
    icon: '⚖️', tone: 'tone-teal',
    title: { ru: 'Право, финансы и структура', en: 'Law, Finance & Structure', kz: 'Құқық, қаржы және құрылым' },
    blurb: {
      ru: 'Тебе важны структура, порядок и надёжность — ты умеешь выстраивать процессы и доводить дело до конца по правилам.',
      en: 'Structure, order and reliability matter to you — you\'re good at building processes and following things through by the rules.',
      kz: 'Саған құрылым, тәртіп пен сенімділік маңызды — процестерді дұрыс құрып, ісін ережеге сай аяғына дейін жеткізе аласың.',
    },
    professions: {
      ru: ['Юрист', 'Финансовый аналитик', 'Специалист по гос. управлению', 'Логист / операционный менеджер'],
      en: ['Lawyer', 'Financial Analyst', 'Public Administration Specialist', 'Logistics / Operations Manager'],
      kz: ['Заңгер', 'Қаржы аналитигі', 'Мемлекеттік басқару маманы', 'Логистика / операциялық менеджер'],
    },
  },
};

function computeCareerResults(answers){
  const tally = {};
  Object.values(answers).forEach(v => { tally[v] = (tally[v] || 0) + 1; });
  const ranked = Object.keys(CAREER_DATA)
    .map(key => ({ key, count: tally[key] || 0 }))
    .sort((a, b) => b.count - a.count);
  const top = ranked.slice(0, 3).filter(r => r.count > 0);
  return top.map(r => ({
    key: r.key,
    data: CAREER_DATA[r.key],
    percent: Math.round((r.count / 6) * 100),
  }));
}

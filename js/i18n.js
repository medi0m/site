/* ==========================================================================
   Uniway — i18n dictionary & engine
   Add a new language by adding a new top-level key (e.g. "uz") with the
   same structure, then add it to LANGS below.
   ========================================================================== */

const LANGS = [
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'kz', label: 'Қазақша', short: 'KZ' },
];

const I18N = {
  ru: {
    'nav.home': 'Главная',
    'nav.uni': 'Подбор университета',
    'nav.career': 'Профориентация',
    'nav.projects': 'Проекты и волонтёрство',
    'nav.essay': 'Эссе',
    'nav.about': 'О нас',
    'nav.cta': 'Открыть бота',

    'common.free': 'Бесплатно',
    'common.next': 'Далее',
    'common.back': 'Назад',
    'common.start': 'Начать',
    'common.restart': 'Пройти заново',
    'common.seeResults': 'Показать результат',
    'common.openBot': 'Открыть в Telegram',
    'common.readMore': 'Подробнее',
    'common.minutes': 'Займёт 5–7 минут',

    'footer.tagline': 'Бесплатная платформа для поступления за границу без агентств. Сделано учениками для учеников.',
    'footer.product': 'Инструменты',
    'footer.company': 'О проекте',
    'footer.resources': 'Материалы',
    'footer.bot': 'Telegram-бот',
    'footer.mission': 'Наша миссия',
    'footer.rights': 'Все инструменты сайта бесплатны и всегда будут бесплатны.',

    'home.eyebrow': 'Бесплатно · Без агентств · Для 9–11 классов',
    'home.heroHtml': 'Поступи за границу <span class="grad">сам — без агентств</span>',
    'home.heroLead': 'Uniway — бесплатная платформа для учеников 9–11 классов: подбор университета, профориентация, помощь с проектами, волонтёрством и эссе. Всё, за что агентства берут тысячи долларов — теперь бесплатно и у тебя в руках.',
    'home.ctaPrimary': 'Пройти подбор университета',
    'home.ctaSecondary': 'Открыть Telegram-бота',
    'home.stat1n': '4', 'home.stat1l': 'инструмента для поступления',
    'home.stat2n': '100%', 'home.stat2l': 'бесплатно, без комиссий',
    'home.stat3n': '9–11', 'home.stat3l': 'классы школы',
    'home.cardTag': 'Результат подбора',
    'home.cardTitle': 'Твой профиль поступающего',
    'home.cardCountry': 'Нидерланды · Прикладная информатика',
    'home.cardMatch': 'совпадение',
    'home.miniM1': 'Тест занимает 6 минут',
    'home.miniM2': 'Персонально под тебя',

    'home.featEyebrow': 'Что внутри',
    'home.featTitle': 'Всё для поступления в одном месте',
    'home.featLead': 'Четыре инструмента, которые обычно продают агентства порознь и дорого — здесь бесплатно и сразу.',

    'home.f1title': 'Подбор университета',
    'home.f1desc': 'Ответь на вопросы про бюджет, интересы и цели — получи список стран и университетов, которые тебе реально подходят.',
    'home.f2title': 'Профориентация',
    'home.f2desc': 'Разберись, какая профессия и сфера тебе близки, прежде чем выбирать специальность и страну.',
    'home.f3title': 'Проекты и волонтёрство',
    'home.f3desc': 'Идеи проектов, олимпиад и волонтёрства, которые усилят портфолио — с фильтром по интересам.',
    'home.f4title': 'Помощь с эссе',
    'home.f4desc': 'Структура, чек-лист и частые ошибки — чтобы написать эссе, которое звучит как ты, а не как шаблон.',

    'home.whyEyebrow': 'Почему Uniway',
    'home.whyTitle': 'Агентства обещают многое. Мы даём результат.',
    'home.whyLead': 'Многие агентства берут деньги, но не доводят до цели: пропадают на середине пути, навязывают «удобные» им направления вместо тех, что подходят тебе, или просто исчезают после оплаты. Мы сами через это проходили — и сделали Uniway, чтобы у каждого был честный и бесплатный путь.',
    'home.cmp1bad_t': 'Агентства', 'home.cmp1bad_d': 'Скрытые платежи и комиссии почти на каждом шаге',
    'home.cmp1good_t': 'Uniway', 'home.cmp1good_d': '100% бесплатно, без скрытых условий и подписок',
    'home.cmp2bad_t': 'Готовые шаблоны эссе под копирку',
    'home.cmp2good_t': 'Помощь раскрыть твою историю, а не чужую',
    'home.cmp3bad_t': 'Продают направления, выгодные им',
    'home.cmp3good_t': 'Подбор на основе твоих интересов и бюджета',
    'home.cmp4bad_t': 'Пропадают после оплаты',
    'home.cmp4good_t': 'Бот и сайт всегда рядом — шаг за шагом',

    'home.stepsEyebrow': 'Как это работает',
    'home.stepsTitle': 'Четыре шага до заявки в университет',
    'home.s1t': 'Пройди тесты', 'home.s1d': 'Подбор университета и профориентация — 10 минут, честные результаты.',
    'home.s2t': 'Получи список', 'home.s2d': 'Страны, университеты и профессии, которые тебе подходят по бюджету и интересам.',
    'home.s3t': 'Собери портфолио', 'home.s3d': 'Проекты, волонтёрство и олимпиады из подборки под твою сферу.',
    'home.s4t': 'Напиши эссе и подай', 'home.s4d': 'Используй чек-лист и, если нужно, углуби план в Telegram-боте.',

    'home.ctaBandTitle': 'Готов сделать первый шаг?',
    'home.ctaBandLead': 'Пройди бесплатный тест прямо сейчас — результат увидишь через 6 минут, без регистрации.',

    'about.pageTitle': 'О нас',
    'about.pageLead': 'Uniway создан учениками, которые сами прошли через поступление за границу — и через агентства, которые не сдержали обещаний.',
    'about.storyEyebrow': 'Наша история',
    'about.storyTitle': 'Почему появился Uniway',
    'about.storyP1': 'Когда мы сами готовились к поступлению, мы обратились в агентство — заплатили немалую сумму и ждали помощи. В итоге агентство тянуло время, предлагало не те университеты, которые мы хотели с самого начала, а те, за которые получало комиссию, и почти не помогало с самим процессом.',
    'about.storyP2': 'Мы поняли, что большинству учеников из 9–11 классов не хватает не денег на агентство, а простого структурированного пути: понять себя, узнать варианты, собрать портфолио и грамотно подать документы. Всё это можно сделать самостоятельно — если есть правильные инструменты.',
    'about.storyP3': 'Так появился сначала Telegram-бот с персональным подбором, а затем и Uniway — сайт, где эти инструменты доступны каждому бесплатно, в удобном и современном формате.',
    'about.missionEyebrow': 'Миссия',
    'about.missionTitle': 'Сделать поступление за границу честным и доступным',
    'about.mission1t': 'Без посредников', 'about.mission1d': 'Ты сам управляешь процессом — мы даём инструменты, а не продаём решения.',
    'about.mission2t': 'Бесплатно навсегда', 'about.mission2d': 'Базовые инструменты сайта и бота останутся бесплатными для всех учеников.',
    'about.mission3t': 'Честная информация', 'about.mission3d': 'Рекомендации основаны на твоих ответах, а не на том, кто платит нам комиссию.',
    'about.tlEyebrow': 'Путь проекта',
    'about.tl1t': 'Личный опыт', 'about.tl1d': 'Столкнулись с недобросовестным агентством при поступлении и решили, что так быть не должно.',
    'about.tl2t': 'Telegram-бот', 'about.tl2d': 'Создали бота с персонализированным подбором университетов и профориентацией.',
    'about.tl3t': 'Сайт Uniway', 'about.tl3d': 'Собрали все инструменты в одном удобном и современном месте — с квизами, проектами и помощью с эссе.',
    'about.tl4t': 'Дальше — больше', 'about.tl4d': 'Планируем добавить больше языков, менторов-студентов и базу реальных историй поступления.',

    'essay.pageTitle': 'Помощь с эссе',
    'essay.pageLead': 'Структура, чек-лист и частые ошибки — чтобы твоё эссе звучало как ты, а не как шаблон из интернета.',
    'essay.structEyebrow': 'С чего начать',
    'essay.structTitle': 'Базовая структура сильного эссе',
    'essay.st1t': 'Зацепка', 'essay.st1d': 'Начни с конкретной сцены, момента или мысли — не с общих фраз вроде «с детства я мечтал».',
    'essay.st2t': 'Контекст', 'essay.st2d': 'Объясни, почему этот момент важен и как он связан с тем, кто ты есть.',
    'essay.st3t': 'Развитие', 'essay.st3d': 'Покажи, что ты сделал, что понял, как менялся — через действия, а не декларации.',
    'essay.st4t': 'Вывод', 'essay.st4d': 'Свяжи историю с будущим — почему это важно для того, кем ты хочешь стать.',
    'essay.checklistEyebrow': 'Проверь себя',
    'essay.checklistTitle': 'Частые вопросы и ошибки',
    'essay.q1t': 'Можно ли писать про неудачу?',
    'essay.q1a': 'Да, и это часто сильнее историй про успех. Важно показать не саму неудачу, а то, как ты из неё вышел и что изменилось в твоём мышлении.',
    'essay.q2t': 'Какие ошибки чаще всего портят эссе?',
    'essay.q2a': 'Самые частые: общие фразы без конкретики, пересказ резюме вместо истории, попытка впечатлить списком достижений, отсутствие личного голоса — текст мог бы написать кто угодно.',
    'essay.q3t': 'Сколько времени закладывать на эссе?',
    'essay.q3a': 'Минимум 3–4 недели: неделя на поиск темы и черновик, минимум 2–3 круга правок с перерывами, финальная вычитка на грамматику и стиль.',
    'essay.q4t': 'Можно ли использовать шаблоны из интернета?',
    'essay.q4a': 'Используй их только как ориентир по структуре, не по содержанию. Приёмная комиссия читает тысячи эссе и легко узнаёт шаблонные истории — цени свою уникальность.',
    'essay.q5t': 'Насколько личной должна быть тема?',
    'essay.q5a': 'Тема не обязана быть драматичной. Гораздо важнее — насколько глубоко и честно ты её раскрываешь, даже если это обычная, на первый взгляд, ситуация.',
    'essay.ctaTitle': 'Хочешь разбор своего эссе?',
    'essay.ctaLead': 'В Telegram-боте можно получить обратную связь и структурировать эссе шаг за шагом.',

    'projects.pageTitle': 'Проекты и волонтёрство',
    'projects.pageLead': 'Идеи, которые усилят портфолио: проекты, олимпиады, волонтёрство и стажировки. Отфильтруй по своей сфере.',
    'projects.filterAll': 'Все',
    'projects.note': 'Это стартовый список идей и форматов — ищи похожие возможности в своём городе или онлайн: локальные НКО, школьные олимпиады, университетские летние школы.',

    'uni.pageTitle': 'Подбор университета',
    'uni.pageLead': 'Ответь на 6 коротких вопросов про бюджет, интересы и цели — получи список стран и университетов, которые тебе подходят.',
    'uni.resultTitle': 'Похоже, тебе подойдут:',
    'uni.resultLead': 'Это стартовая точка для исследования, а не финальное решение — в Telegram-боте можно получить более глубокий и персональный разбор.',
    'uni.matchLabel': 'совпадение',

    'career.pageTitle': 'Профориентация',
    'career.pageLead': 'Ответь на 6 вопросов про свои интересы и сильные стороны — узнай, какие профессии и сферы тебе близки.',
    'career.resultTitle': 'Твоя сфера:',
    'career.resultLead': 'Профессии — это ориентир для дальнейшего исследования. Попробуй проекты и стажировки в этой сфере, чтобы проверить интерес на практике.',
  },

  en: {
    'nav.home': 'Home',
    'nav.uni': 'University Match',
    'nav.career': 'Career Guidance',
    'nav.projects': 'Projects & Volunteering',
    'nav.essay': 'Essay Help',
    'nav.about': 'About',
    'nav.cta': 'Open the bot',

    'common.free': 'Free',
    'common.next': 'Next',
    'common.back': 'Back',
    'common.start': 'Start',
    'common.restart': 'Retake',
    'common.seeResults': 'See results',
    'common.openBot': 'Open in Telegram',
    'common.readMore': 'Read more',
    'common.minutes': 'Takes 5–7 minutes',

    'footer.tagline': 'A free platform for studying abroad without agencies. Built by students, for students.',
    'footer.product': 'Tools',
    'footer.company': 'About',
    'footer.resources': 'Resources',
    'footer.bot': 'Telegram bot',
    'footer.mission': 'Our mission',
    'footer.rights': 'Every tool on this site is free — and always will be.',

    'home.eyebrow': 'Free · No agencies · For grades 9–11',
    'home.heroHtml': 'Get into a university abroad <span class="grad">yourself — no agencies</span>',
    'home.heroLead': 'Uniway is a free platform for grades 9–11: university matching, career guidance, help with projects, volunteering and essays. Everything agencies used to charge thousands of dollars for — now free and in your hands.',
    'home.ctaPrimary': 'Find my university',
    'home.ctaSecondary': 'Open Telegram bot',
    'home.stat1n': '4', 'home.stat1l': 'admission tools',
    'home.stat2n': '100%', 'home.stat2l': 'free, no fees',
    'home.stat3n': '9–11', 'home.stat3l': 'school grades',
    'home.cardTag': 'Match result',
    'home.cardTitle': 'Your applicant profile',
    'home.cardCountry': 'Netherlands · Applied Computer Science',
    'home.cardMatch': 'match',
    'home.miniM1': 'Test takes 6 minutes',
    'home.miniM2': 'Personalized for you',

    'home.featEyebrow': "What's inside",
    'home.featTitle': 'Everything for applying, in one place',
    'home.featLead': 'Four tools agencies usually sell separately and expensively — here, free and instant.',

    'home.f1title': 'University Match',
    'home.f1desc': 'Answer questions about budget, interests and goals — get a list of countries and universities that actually fit you.',
    'home.f2title': 'Career Guidance',
    'home.f2desc': 'Figure out which profession and field suit you before choosing a major and a country.',
    'home.f3title': 'Projects & Volunteering',
    'home.f3desc': 'Ideas for projects, olympiads and volunteering that strengthen your portfolio — filterable by interest.',
    'home.f4title': 'Essay Help',
    'home.f4desc': 'Structure, checklist and common mistakes — so your essay sounds like you, not a template.',

    'home.whyEyebrow': 'Why Uniway',
    'home.whyTitle': 'Agencies promise a lot. We deliver results.',
    'home.whyLead': "Many agencies take your money but don't deliver: they disappear halfway through, push majors that are convenient for them instead of right for you, or vanish after payment. We've been there — so we built Uniway to give everyone an honest, free path.",
    'home.cmp1bad_t': 'Agencies', 'home.cmp1bad_d': 'Hidden fees and commissions at almost every step',
    'home.cmp1good_t': 'Uniway', 'home.cmp1good_d': '100% free, no hidden terms or subscriptions',
    'home.cmp2bad_t': 'Copy-paste essay templates',
    'home.cmp2good_t': 'Help uncovering your story, not someone else\'s',
    'home.cmp3bad_t': 'Push majors that benefit them',
    'home.cmp3good_t': 'Matching based on your interests and budget',
    'home.cmp4bad_t': 'Disappear after payment',
    'home.cmp4good_t': 'The bot and site stay with you, step by step',

    'home.stepsEyebrow': 'How it works',
    'home.stepsTitle': 'Four steps to your university application',
    'home.s1t': 'Take the tests', 'home.s1d': 'University matching and career guidance — 10 minutes, honest results.',
    'home.s2t': 'Get your list', 'home.s2d': 'Countries, universities and professions that fit your budget and interests.',
    'home.s3t': 'Build your portfolio', 'home.s3d': 'Projects, volunteering and olympiads picked for your field.',
    'home.s4t': 'Write your essay & apply', 'home.s4d': 'Use the checklist and, if needed, go deeper in the Telegram bot.',

    'home.ctaBandTitle': 'Ready to take the first step?',
    'home.ctaBandLead': 'Take the free test right now — see your result in 6 minutes, no sign-up.',

    'about.pageTitle': 'About us',
    'about.pageLead': 'Uniway was built by students who went through studying-abroad applications themselves — and through agencies that broke their promises.',
    'about.storyEyebrow': 'Our story',
    'about.storyTitle': 'Why Uniway exists',
    'about.storyP1': "When we were preparing to apply, we went to an agency — paid a significant amount and waited for help. In the end, the agency stalled, pushed universities we never wanted instead of the ones we chose from the start, and barely helped with the process itself.",
    'about.storyP2': "We realized most students in grades 9–11 don't lack money for an agency — they lack a simple, structured path: understand yourself, learn your options, build a portfolio, and apply properly. All of this can be done independently, with the right tools.",
    'about.storyP3': 'That led first to a Telegram bot with personalized matching, and then to Uniway — a site where these tools are free for everyone, in a modern, easy-to-use format.',
    'about.missionEyebrow': 'Mission',
    'about.missionTitle': 'Make studying abroad honest and accessible',
    'about.mission1t': 'No middlemen', 'about.mission1d': "You stay in control of the process — we give you tools, not sell you decisions.",
    'about.mission2t': 'Free forever', 'about.mission2d': "The site's and bot's core tools will always stay free for students.",
    'about.mission3t': 'Honest information', 'about.mission3d': "Recommendations are based on your answers, not on who pays us a commission.",
    'about.tlEyebrow': 'Project timeline',
    'about.tl1t': 'Personal experience', 'about.tl1d': 'Ran into a dishonest agency while applying — and decided it shouldn\'t be this way.',
    'about.tl2t': 'Telegram bot', 'about.tl2d': 'Built a bot with personalized university matching and career guidance.',
    'about.tl3t': 'Uniway website', 'about.tl3d': 'Brought all the tools into one modern, convenient place — quizzes, projects and essay help.',
    'about.tl4t': "What's next", 'about.tl4d': 'Planning more languages, student mentors, and a library of real admission stories.',

    'essay.pageTitle': 'Essay Help',
    'essay.pageLead': 'Structure, checklist and common mistakes — so your essay sounds like you, not an internet template.',
    'essay.structEyebrow': 'Where to start',
    'essay.structTitle': 'The basic structure of a strong essay',
    'essay.st1t': 'Hook', 'essay.st1d': 'Start with a specific scene, moment or thought — not general phrases like "ever since I was a kid."',
    'essay.st2t': 'Context', 'essay.st2d': 'Explain why this moment matters and how it connects to who you are.',
    'essay.st3t': 'Growth', 'essay.st3d': 'Show what you did, what you understood, how you changed — through actions, not declarations.',
    'essay.st4t': 'Conclusion', 'essay.st4d': 'Connect the story to your future — why it matters for who you want to become.',
    'essay.checklistEyebrow': 'Check yourself',
    'essay.checklistTitle': 'Common questions and mistakes',
    'essay.q1t': 'Can I write about a failure?',
    'essay.q1a': "Yes, and it's often more powerful than a success story. Show not the failure itself, but how you moved through it and what changed in your thinking.",
    'essay.q2t': 'What mistakes ruin essays most often?',
    'essay.q2a': 'The most common: vague generalities with no specifics, retelling your resume instead of telling a story, trying to impress with a list of achievements, and no personal voice — anyone could have written it.',
    'essay.q3t': 'How much time should I budget for the essay?',
    'essay.q3a': 'At least 3–4 weeks: a week to find your topic and draft, at least 2–3 rounds of revisions with breaks in between, and a final pass for grammar and style.',
    'essay.q4t': 'Can I use templates from the internet?',
    'essay.q4a': "Use them only as a structural guide, never for content. Admissions officers read thousands of essays and spot templated stories instantly — your uniqueness is the point.",
    'essay.q5t': 'How personal does the topic need to be?',
    'essay.q5a': "The topic doesn't need to be dramatic. What matters far more is how deeply and honestly you explore it, even if it's an ordinary-seeming situation.",
    'essay.ctaTitle': 'Want feedback on your essay?',
    'essay.ctaLead': 'In the Telegram bot you can get feedback and structure your essay step by step.',

    'projects.pageTitle': 'Projects & Volunteering',
    'projects.pageLead': 'Ideas that strengthen your portfolio: projects, olympiads, volunteering and internships. Filter by your field.',
    'projects.filterAll': 'All',
    'projects.note': "This is a starting list of ideas and formats — look for similar opportunities in your city or online: local NGOs, school olympiads, university summer schools.",

    'uni.pageTitle': 'University Match',
    'uni.pageLead': 'Answer 6 short questions about budget, interests and goals — get a list of countries and universities that fit you.',
    'uni.resultTitle': 'You might be a good fit for:',
    'uni.resultLead': "This is a starting point for research, not a final decision — the Telegram bot can give you a deeper, personalized breakdown.",
    'uni.matchLabel': 'match',

    'career.pageTitle': 'Career Guidance',
    'career.pageLead': 'Answer 6 questions about your interests and strengths — discover which professions and fields suit you.',
    'career.resultTitle': 'Your field:',
    'career.resultLead': 'These professions are a starting point — try projects and internships in this field to test your interest in practice.',
  },

  kz: {
    'nav.home': 'Басты бет',
    'nav.uni': 'Университет таңдау',
    'nav.career': 'Кәсіп бағдары',
    'nav.projects': 'Жобалар мен еріктілер',
    'nav.essay': 'Эссе',
    'nav.about': 'Біз туралы',
    'nav.cta': 'Ботты ашу',

    'common.free': 'Тегін',
    'common.next': 'Келесі',
    'common.back': 'Артқа',
    'common.start': 'Бастау',
    'common.restart': 'Қайта тапсыру',
    'common.seeResults': 'Нәтижені көру',
    'common.openBot': 'Telegram-да ашу',
    'common.readMore': 'Толығырақ',
    'common.minutes': '5–7 минут алады',

    'footer.tagline': 'Агенттіксіз шетелге түсуге арналған тегін платформа. Оқушылар оқушылар үшін жасаған.',
    'footer.product': 'Құралдар',
    'footer.company': 'Жоба туралы',
    'footer.resources': 'Материалдар',
    'footer.bot': 'Telegram-бот',
    'footer.mission': 'Біздің миссия',
    'footer.rights': 'Сайттың барлық құралдары тегін және әрқашан тегін болады.',

    'home.eyebrow': 'Тегін · Агенттіксіз · 9–11 сынып үшін',
    'home.heroHtml': 'Шетелге <span class="grad">агенттіксіз өзің</span> түс',
    'home.heroLead': 'Uniway — 9–11 сынып оқушыларына арналған тегін платформа: университет таңдау, кәсіп бағдары, жобалар мен еріктілерге, эссеге көмек. Бұрын агенттіктер мыңдаған долларға сататын нәрсенің бәрі — енді тегін әрі өз қолыңда.',
    'home.ctaPrimary': 'Университет таңдауды бастау',
    'home.ctaSecondary': 'Telegram-ботты ашу',
    'home.stat1n': '4', 'home.stat1l': 'түсу құралы',
    'home.stat2n': '100%', 'home.stat2l': 'тегін, комиссиясыз',
    'home.stat3n': '9–11', 'home.stat3l': 'мектеп сыныбы',
    'home.cardTag': 'Таңдау нәтижесі',
    'home.cardTitle': 'Сенің үміткер профилің',
    'home.cardCountry': 'Нидерланды · Қолданбалы информатика',
    'home.cardMatch': 'сәйкестік',
    'home.miniM1': 'Тест 6 минут алады',
    'home.miniM2': 'Саған арналған',

    'home.featEyebrow': 'Ішінде не бар',
    'home.featTitle': 'Түсу үшін бәрі бір жерде',
    'home.featLead': 'Агенттіктер бөлек әрі қымбат сататын төрт құрал — мұнда тегін әрі бірден қолжетімді.',

    'home.f1title': 'Университет таңдау',
    'home.f1desc': 'Бюджет, қызығушылық пен мақсаттар туралы сұрақтарға жауап бер — саған шынымен сай келетін елдер мен университеттер тізімін ал.',
    'home.f2title': 'Кәсіп бағдары',
    'home.f2desc': 'Мамандық пен елді таңдамас бұрын, өзіңе қай кәсіп пен сала жақын екенін біл.',
    'home.f3title': 'Жобалар мен еріктілер',
    'home.f3desc': 'Портфолиоңды күшейтетін жобалар, олимпиадалар мен еріктілер идеялары — қызығушылық бойынша сүзгімен.',
    'home.f4title': 'Эссеге көмек',
    'home.f4desc': 'Құрылым, тексеру тізімі және жиі кездесетін қателер — эссең үлгі емес, өзің сияқты естілуі үшін.',

    'home.whyEyebrow': 'Неге Uniway',
    'home.whyTitle': 'Агенттіктер көп уәде береді. Біз нәтиже береміз.',
    'home.whyLead': 'Көптеген агенттіктер ақша алады, бірақ нәтижеге жеткізбейді: жол ортасында жоғалады, саған емес, өздеріне тиімді бағыттарды таңдатады немесе төлемнен кейін жай ғана байланыссыз қалады. Біз мұны бастан өткіздік — сондықтан әркімге адал әрі тегін жол ұсынатын Uniway жасадық.',
    'home.cmp1bad_t': 'Агенттіктер', 'home.cmp1bad_d': 'Дерлік әр қадамда жасырын төлемдер мен комиссиялар',
    'home.cmp1good_t': 'Uniway', 'home.cmp1good_d': '100% тегін, жасырын шарттарсыз',
    'home.cmp2bad_t': 'Көшірме эссе үлгілері',
    'home.cmp2good_t': 'Басқаның емес, өз тарихыңды ашуға көмек',
    'home.cmp3bad_t': 'Өздеріне тиімді бағыттарды сатады',
    'home.cmp3good_t': 'Қызығушылығың мен бюджетің негізінде таңдау',
    'home.cmp4bad_t': 'Төлемнен кейін жоғалады',
    'home.cmp4good_t': 'Бот пен сайт әрдайым қасыңда — қадам сайын',

    'home.stepsEyebrow': 'Бұл қалай жұмыс істейді',
    'home.stepsTitle': 'Университетке құжат тапсыруға дейінгі төрт қадам',
    'home.s1t': 'Тестерден өт', 'home.s1d': 'Университет таңдау мен кәсіп бағдары — 10 минут, адал нәтиже.',
    'home.s2t': 'Тізіміңді ал', 'home.s2d': 'Бюджетің мен қызығушылығыңа сай елдер, университеттер және мамандықтар.',
    'home.s3t': 'Портфолио жина', 'home.s3d': 'Саласыңа сай таңдалған жобалар, еріктілер мен олимпиадалар.',
    'home.s4t': 'Эссе жаз және тапсыр', 'home.s4d': 'Тексеру тізімін қолдан, қажет болса Telegram-ботта жоспарыңды тереңдет.',

    'home.ctaBandTitle': 'Алғашқы қадамға дайынсың ба?',
    'home.ctaBandLead': 'Тегін тестен қазір өт — нәтижені 6 минутта көресің, тіркелусіз.',

    'about.pageTitle': 'Біз туралы',
    'about.pageLead': 'Uniway-ды шетелге түсуді өздері бастан өткерген — және уәдесін орындамаған агенттіктерді көрген оқушылар жасады.',
    'about.storyEyebrow': 'Біздің тарих',
    'about.storyTitle': 'Uniway неге пайда болды',
    'about.storyP1': 'Түсуге дайындалып жүргенде біз агенттікке жүгіндік — біршама ақша төлеп, көмек күттік. Соңында агенттік уақытты созды, бастапқыда өзіміз таңдаған университеттердің орнына өздеріне комиссия әкелетіндерін ұсынды және процестің өзіне дерлік көмектеспеді.',
    'about.storyP2': 'Біз 9–11 сынып оқушыларының көбіне агенттікке ақша емес, қарапайым әрі құрылымды жол жетіспейтінін түсіндік: өзіңді тану, нұсқаларды білу, портфолио жинау және құжаттарды дұрыс тапсыру. Мұның бәрін дұрыс құралдар болса, өз бетінше жасауға болады.',
    'about.storyP3': 'Осылай алдымен жеке таңдау жасайтын Telegram-бот, содан кейін осы құралдар әркімге тегін қолжетімді заманауи Uniway сайты пайда болды.',
    'about.missionEyebrow': 'Миссия',
    'about.missionTitle': 'Шетелге түсуді адал әрі қолжетімді ету',
    'about.mission1t': 'Делдалсыз', 'about.mission1d': 'Процесті өзің басқарасың — біз шешім сатпаймыз, құрал береміз.',
    'about.mission2t': 'Мәңгі тегін', 'about.mission2d': 'Сайт пен боттың негізгі құралдары барлық оқушыларға тегін болып қалады.',
    'about.mission3t': 'Адал ақпарат', 'about.mission3d': 'Ұсыныстар бізге комиссия төлейтіндерге емес, сенің жауаптарыңа негізделеді.',
    'about.tlEyebrow': 'Жобаның жолы',
    'about.tl1t': 'Жеке тәжірибе', 'about.tl1d': 'Түсу кезінде адал емес агенттікке тап болдық — солай болмауы керек деп шештік.',
    'about.tl2t': 'Telegram-бот', 'about.tl2d': 'Университетті жеке таңдау мен кәсіп бағдары бар бот жасадық.',
    'about.tl3t': 'Uniway сайты', 'about.tl3d': 'Барлық құралды заманауи әрі ыңғайлы бір жерге жинадық — квиздер, жобалар және эссеге көмек.',
    'about.tl4t': 'Алдағы жоспар', 'about.tl4d': 'Көбірек тіл, студент-менторлар және нақты түсу тарихтарының қорын қосуды жоспарлаудамыз.',

    'essay.pageTitle': 'Эссеге көмек',
    'essay.pageLead': 'Құрылым, тексеру тізімі және жиі кездесетін қателер — эссең интернеттегі үлгі емес, өзің сияқты естілуі үшін.',
    'essay.structEyebrow': 'Неден бастау керек',
    'essay.structTitle': 'Күшті эссенің негізгі құрылымы',
    'essay.st1t': 'Ілмек', 'essay.st1d': 'Нақты сахнадан, сәттен немесе оймен баста — «балалық шағымнан бері армандаймын» деген жалпы сөзден емес.',
    'essay.st2t': 'Контекст', 'essay.st2d': 'Бұл сәттің неге маңызды екенін және ол сенің кім екеніңмен қалай байланысты екенін түсіндір.',
    'essay.st3t': 'Даму', 'essay.st3d': 'Не істегеніңді, нені түсінгеніңді, қалай өзгергеніңді — мәлімдеме емес, әрекет арқылы көрсет.',
    'essay.st4t': 'Қорытынды', 'essay.st4d': 'Тарихты болашағыңмен байланыстыр — бұл сенің кім болғың келетініне неге маңызды.',
    'essay.checklistEyebrow': 'Өзіңді тексер',
    'essay.checklistTitle': 'Жиі кездесетін сұрақтар мен қателер',
    'essay.q1t': 'Сәтсіздік туралы жазуға бола ма?',
    'essay.q1a': 'Иә, әрі бұл көбіне табыс тарихынан да күшті. Сәтсіздіктің өзін емес, одан қалай шыққаныңды және ойлауың қалай өзгергенін көрсету маңызды.',
    'essay.q2t': 'Эссені көбіне қандай қателер бұзады?',
    'essay.q2a': 'Ең жиі кездесетіндері: нақтылықсыз жалпы сөздер, тарих орнына резюмені қайталау, жетістіктер тізімімен әсер қалдыруға тырысу, жеке дауыстың болмауы — мұны кез келген адам жаза алар еді.',
    'essay.q3t': 'Эссеге қанша уақыт бөлу керек?',
    'essay.q3a': 'Кемінде 3–4 апта: тақырыпты табу мен қара нұсқаға бір апта, үзіліспен кемінде 2–3 түзету раунды, соңында грамматика мен стильді тексеру.',
    'essay.q4t': 'Интернеттегі үлгілерді қолдануға бола ма?',
    'essay.q4a': 'Оларды тек құрылым үшін бағдар ретінде қолдан, мазмұн үшін емес. Қабылдау комиссиясы мыңдаған эссе оқиды және үлгілі тарихты бірден таниды — өз бірегейлігіңді бағала.',
    'essay.q5t': 'Тақырып қаншалықты жеке болуы керек?',
    'essay.q5a': 'Тақырып драмалық болуы міндетті емес. Оны қаншалықты терең әрі адал ашатының әлдеқайда маңызды, тіпті бұл қарапайым жағдай болса да.',
    'essay.ctaTitle': 'Эссеңе талдау керек пе?',
    'essay.ctaLead': 'Telegram-ботта кері байланыс алып, эссеңді қадам сайын құрылымдауға болады.',

    'projects.pageTitle': 'Жобалар мен еріктілер',
    'projects.pageLead': 'Портфолиоңды күшейтетін идеялар: жобалар, олимпиадалар, еріктілер және тәжірибеден өту. Саласың бойынша сүзгі қой.',
    'projects.filterAll': 'Барлығы',
    'projects.note': 'Бұл — идеялар мен форматтардың бастапқы тізімі. Қалаңда немесе онлайн осындай мүмкіндіктерді іздеп көр: жергілікті ҮЕҰ, мектеп олимпиадалары, университеттің жазғы мектептері.',

    'uni.pageTitle': 'Университет таңдау',
    'uni.pageLead': 'Бюджет, қызығушылық пен мақсаттар туралы 6 қысқа сұраққа жауап бер — саған сай елдер мен университеттер тізімін ал.',
    'uni.resultTitle': 'Саған сай келуі мүмкін:',
    'uni.resultLead': 'Бұл — зерттеудің бастапқы нүктесі, түпкілікті шешім емес. Telegram-ботта тереңірек әрі жеке талдау алуға болады.',
    'uni.matchLabel': 'сәйкестік',

    'career.pageTitle': 'Кәсіп бағдары',
    'career.pageLead': 'Қызығушылығың мен мықты жақтарың туралы 6 сұраққа жауап бер — қай кәсіп пен сала саған жақын екенін біл.',
    'career.resultTitle': 'Сенің саласың:',
    'career.resultLead': 'Бұл кәсіптер — әрі қарай зерттеуге бағдар. Қызығушылығыңды тәжірибеде тексеру үшін осы салада жоба немесе тәжірибеден өтуге тырыс.',
  },
};

const BOT_USERNAME = 'admissions_ai_bot';
const BOT_URL = `https://t.me/${BOT_USERNAME}`;

function getLang(){
  return localStorage.getItem('uniway_lang') || 'ru';
}

function t(key){
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) ?? (I18N.ru[key] ?? key);
}

function applyTranslations(){
  const lang = getLang();
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = t(key);
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });

  document.querySelectorAll('.bot-link').forEach(el => { el.href = BOT_URL; });

  document.querySelectorAll('.lang-menu button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.querySelectorAll('.lang-btn .lang-short').forEach(el => {
    const found = LANGS.find(l => l.code === lang);
    el.textContent = found ? found.short : lang.toUpperCase();
  });

  document.dispatchEvent(new CustomEvent('uniway:langchange', { detail: { lang } }));
}

function setLanguage(lang){
  localStorage.setItem('uniway_lang', lang);
  applyTranslations();
}

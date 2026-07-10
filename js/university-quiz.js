/* ==========================================================================
   UniAtlas — University Match quiz: questions, dataset & scoring
   ========================================================================== */

const UNI_QUESTIONS = [
  {
    id: 'budget',
    q: { ru: 'Какой бюджет на обучение и жизнь в год у твоей семьи?', en: 'What is your family\'s yearly budget for tuition and living?', kz: 'Отбасыңның оқу мен тұрмысқа жылдық бюджеті қандай?' },
    hint: { ru: 'Примерно, в долларах США', en: 'Roughly, in US dollars', kz: 'Шамамен, АҚШ долларымен' },
    options: [
      { value: 'low', emoji: '🌱', label: { ru: 'До 5 000 $ — нужна почти полная стипендия', en: 'Under $5,000 — need a near-full scholarship', kz: '5 000 $-ға дейін — толыққа жақын стипендия керек' } },
      { value: 'mid', emoji: '💶', label: { ru: '5 000–15 000 $ в год', en: '$5,000–15,000 a year', kz: 'Жылына 5 000–15 000 $' } },
      { value: 'high', emoji: '💳', label: { ru: '15 000–30 000 $ в год', en: '$15,000–30,000 a year', kz: 'Жылына 15 000–30 000 $' } },
      { value: 'open', emoji: '💎', label: { ru: 'Свыше 30 000 $ — бюджет не ограничен', en: 'Over $30,000 — budget is flexible', kz: '30 000 $-дан жоғары — бюджет шектелмеген' } },
    ],
  },
  {
    id: 'field',
    q: { ru: 'Какое направление обучения тебе ближе всего?', en: 'Which field of study is closest to you?', kz: 'Саған қай оқу бағыты жақын?' },
    hint: { ru: 'Выбери то, что интереснее всего прямо сейчас', en: 'Pick whatever excites you the most right now', kz: 'Қазір ең қызықтысын таңда' },
    options: [
      { value: 'tech', emoji: '💻', label: { ru: 'Инженерия, IT, точные науки', en: 'Engineering, IT, hard sciences', kz: 'Инженерия, IT, дәл ғылымдар' } },
      { value: 'business', emoji: '📈', label: { ru: 'Бизнес, экономика, менеджмент', en: 'Business, economics, management', kz: 'Бизнес, экономика, менеджмент' } },
      { value: 'health', emoji: '🧬', label: { ru: 'Медицина и науки о жизни', en: 'Medicine and life sciences', kz: 'Медицина және өмір туралы ғылымдар' } },
      { value: 'creative', emoji: '🎨', label: { ru: 'Творчество, гуманитарные, дизайн', en: 'Creative, humanities, design', kz: 'Шығармашылық, гуманитарлық, дизайн' } },
    ],
  },
  {
    id: 'region',
    q: { ru: 'В каком регионе тебе интереснее всего учиться?', en: 'Which region excites you most for studying?', kz: 'Қай аймақта оқу саған қызық?' },
    hint: { ru: 'Учитывай визу, перелёты и культурную дистанцию', en: 'Consider visas, flights and cultural distance', kz: 'Виза, ұшу және мәдени қашықтықты ескер' },
    options: [
      { value: 'europe', emoji: '🇪🇺', label: { ru: 'Европа', en: 'Europe', kz: 'Еуропа' } },
      { value: 'namerica', emoji: '🗽', label: { ru: 'США / Канада', en: 'US / Canada', kz: 'АҚШ / Канада' } },
      { value: 'asia', emoji: '🏮', label: { ru: 'Азия', en: 'Asia', kz: 'Азия' } },
      { value: 'near', emoji: '🧭', label: { ru: 'Ближе к дому (СНГ, Турция, ОАЭ)', en: 'Closer to home (CIS, Turkey, UAE)', kz: 'Үйге жақынырақ (ТМД, Түркия, БАӘ)' } },
    ],
  },
  {
    id: 'scholarship',
    q: { ru: 'Насколько важна стипендия или грант?', en: 'How important is a scholarship or grant?', kz: 'Стипендия немесе грант қаншалықты маңызды?' },
    hint: { ru: '', en: '', kz: '' },
    options: [
      { value: 'critical', emoji: '🆘', label: { ru: 'Критично — без неё не поступлю', en: 'Critical — can\'t go without it', kz: 'Өте маңызды — онсыз түсе алмаймын' } },
      { value: 'nice', emoji: '🙂', label: { ru: 'Хотелось бы, но не обязательно', en: 'Would help, but not required', kz: 'Болса жақсы, бірақ міндетті емес' } },
      { value: 'no', emoji: '💪', label: { ru: 'Не важно, бюджет позволяет', en: 'Not important, budget allows it', kz: 'Маңызды емес, бюджет жетеді' } },
      { value: 'unsure', emoji: '🤔', label: { ru: 'Пока не знаю', en: 'Not sure yet', kz: 'Әзірге білмеймін' } },
    ],
  },
  {
    id: 'city',
    q: { ru: 'В каком городе тебе комфортнее жить и учиться?', en: 'What kind of city would you enjoy living and studying in?', kz: 'Қай қалада тұрып, оқу саған ыңғайлы?' },
    hint: { ru: '', en: '', kz: '' },
    options: [
      { value: 'big', emoji: '🌆', label: { ru: 'Большой мегаполис, движуха', en: 'A big, buzzing metropolis', kz: 'Үлкен, қарбалас мегаполис' } },
      { value: 'mid', emoji: '🏙️', label: { ru: 'Средний студенческий город', en: 'A mid-size student city', kz: 'Орташа студенттік қала' } },
      { value: 'quiet', emoji: '🌳', label: { ru: 'Тихое, спокойное место', en: 'A quiet, calm place', kz: 'Тыныш, жайбарақат орын' } },
      { value: 'any', emoji: '🤷', label: { ru: 'Не важно, главное — университет', en: 'Doesn\'t matter, the university is what counts', kz: 'Маңызды емес, басты нәрсе — университет' } },
    ],
  },
  {
    id: 'language',
    q: { ru: 'Как ты относишься к изучению нового языка ради учёбы?', en: 'How do you feel about learning a new language for your studies?', kz: 'Оқу үшін жаңа тіл үйренуге қалай қарайсың?' },
    hint: { ru: '', en: '', kz: '' },
    options: [
      { value: 'en_only', emoji: '🇬🇧', label: { ru: 'Хочу учиться только на английском', en: 'I want to study only in English', kz: 'Тек ағылшын тілінде оқығым келеді' } },
      { value: 'open_new', emoji: '🌍', label: { ru: 'Готов(а) учить новый язык ради бесплатного обучения', en: 'Open to learning a new language for free tuition', kz: 'Тегін оқу үшін жаңа тіл үйренуге дайынмын' } },
      { value: 'ru_ok', emoji: '🗣️', label: { ru: 'Комфортнее там, где понятен русский язык', en: 'More comfortable where Russian is understood', kz: 'Орыс тілі түсінікті жерде ыңғайлырақ' } },
      { value: 'any', emoji: '✨', label: { ru: 'Без разницы', en: 'Doesn\'t matter to me', kz: 'Айырмашылығы жоқ' } },
    ],
  },
];

const UNI_DATA = [
  {
    id: 'nl', flag: '🇳🇱', name: { ru: 'Нидерланды', en: 'Netherlands', kz: 'Нидерланды' },
    field: { ru: 'Прикладная информатика и бизнес', en: 'Applied Computer Science & Business', kz: 'Қолданбалы информатика және бизнес' },
    budgetFit: ['mid', 'high', 'open'], region: ['europe'], fields: ['tech', 'business'],
    scholarshipLevel: 'mid', cityTags: ['big', 'mid'], languageTag: 'en',
    examples: ['TU Delft', 'University of Amsterdam', 'Erasmus University Rotterdam'],
    blurb: {
      ru: 'Сильные программы по инженерии и бизнесу на английском, международная атмосфера и практико-ориентированное обучение.',
      en: 'Strong engineering and business programs taught in English, an international vibe and hands-on learning.',
      kz: 'Ағылшын тілінде оқытылатын мықты инженерия мен бизнес бағдарламалары, халықаралық орта және тәжірибеге бағытталған оқу.',
    },
  },
  {
    id: 'de', flag: '🇩🇪', name: { ru: 'Германия', en: 'Germany', kz: 'Германия' },
    field: { ru: 'Инженерия и технические науки', en: 'Engineering & Technical Sciences', kz: 'Инженерия және техникалық ғылымдар' },
    budgetFit: ['low', 'mid'], region: ['europe'], fields: ['tech', 'health', 'business'],
    scholarshipLevel: 'high', cityTags: ['big', 'mid'], languageTag: 'open_new',
    examples: ['TU Munich', 'RWTH Aachen', 'Humboldt University Berlin'],
    blurb: {
      ru: 'Государственные университеты почти без платы за обучение и сильная инженерная школа — но часто нужен немецкий язык.',
      en: 'Public universities with little to no tuition and a strong engineering tradition — though German is often required.',
      kz: 'Мемлекеттік университеттерде оқу ақысы дерлік жоқ, мықты инженерлік мектеп бар — бірақ көбіне неміс тілі қажет.',
    },
  },
  {
    id: 'tr', flag: '🇹🇷', name: { ru: 'Турция', en: 'Turkey', kz: 'Түркия' },
    field: { ru: 'Широкий выбор направлений', en: 'Wide range of majors', kz: 'Мамандықтардың кең таңдауы' },
    budgetFit: ['low', 'mid'], region: ['near'], fields: ['tech', 'business', 'health', 'creative'],
    scholarshipLevel: 'high', cityTags: ['big', 'mid'], languageTag: 'en',
    examples: ['Bilkent University', 'METU', 'Boğaziçi University'],
    blurb: {
      ru: 'Доступные цены, крупная государственная стипендия Türkiye Bursları и университеты мирового уровня в Анкаре и Стамбуле.',
      en: 'Affordable costs, the major Türkiye Bursları government scholarship, and world-class universities in Ankara and Istanbul.',
      kz: 'Қолжетімді баға, ірі мемлекеттік Türkiye Bursları стипендиясы және Анкара мен Стамбулдағы әлемдік деңгейдегі университеттер.',
    },
  },
  {
    id: 'hu', flag: '🇭🇺', name: { ru: 'Венгрия', en: 'Hungary', kz: 'Венгрия' },
    field: { ru: 'Медицина и технические науки', en: 'Medicine & Technical Sciences', kz: 'Медицина және техникалық ғылымдар' },
    budgetFit: ['low', 'mid'], region: ['europe'], fields: ['health', 'tech', 'business'],
    scholarshipLevel: 'high', cityTags: ['mid', 'big'], languageTag: 'en',
    examples: ['Semmelweis University', 'BME Budapest', 'Corvinus University'],
    blurb: {
      ru: 'Программа Stipendium Hungaricum покрывает обучение, проживание и страховку — особенно сильна медицина.',
      en: 'The Stipendium Hungaricum program covers tuition, housing and insurance — medicine is especially strong.',
      kz: 'Stipendium Hungaricum бағдарламасы оқу ақысын, тұрғын үй мен сақтандыруды қамтиды — медицина саласы әсіресе мықты.',
    },
  },
  {
    id: 'us', flag: '🇺🇸', name: { ru: 'США', en: 'United States', kz: 'АҚШ' },
    field: { ru: 'Любое направление', en: 'Any field', kz: 'Кез келген бағыт' },
    budgetFit: ['high', 'open'], region: ['namerica'], fields: ['business', 'creative', 'tech', 'health'],
    scholarshipLevel: 'mid', cityTags: ['big', 'mid', 'quiet'], languageTag: 'en',
    examples: ['Liberal arts colleges', 'State universities', 'Need-blind private universities'],
    blurb: {
      ru: 'Огромный выбор направлений и кампусов — от мегаполисов до маленьких городков, есть need-based стипендии в топ-вузах.',
      en: 'A huge range of majors and campuses — from big cities to small towns, with need-based aid at top schools.',
      kz: 'Мамандықтар мен кампустардың орасан таңдауы — мегаполистен кішкентай қалашыққа дейін, топ вуздарда қажеттілікке негізделген стипендиялар бар.',
    },
  },
  {
    id: 'uk', flag: '🇬🇧', name: { ru: 'Великобритания', en: 'United Kingdom', kz: 'Ұлыбритания' },
    field: { ru: 'Бизнес, право, творческие направления', en: 'Business, Law, Creative fields', kz: 'Бизнес, құқық, шығармашылық бағыттар' },
    budgetFit: ['high', 'open'], region: ['europe'], fields: ['business', 'creative', 'tech', 'health'],
    scholarshipLevel: 'mid', cityTags: ['big', 'mid'], languageTag: 'en',
    examples: ['Russell Group universities', '3-year Bachelor programs'],
    blurb: {
      ru: 'Короткие 3-летние бакалавриаты, престижные университеты и сильные программы по бизнесу, праву и творчеству.',
      en: 'Short 3-year bachelor\'s degrees, prestigious universities and strong programs in business, law and the creative arts.',
      kz: 'Қысқа 3 жылдық бакалавриат, беделді университеттер және бизнес, құқық пен шығармашылық бағыттардағы мықты бағдарламалар.',
    },
  },
  {
    id: 'kr', flag: '🇰🇷', name: { ru: 'Южная Корея', en: 'South Korea', kz: 'Оңтүстік Корея' },
    field: { ru: 'Технологии и креативные индустрии', en: 'Technology & Creative Industries', kz: 'Технологиялар және креативті индустрия' },
    budgetFit: ['low', 'mid'], region: ['asia'], fields: ['tech', 'creative', 'business'],
    scholarshipLevel: 'high', cityTags: ['big'], languageTag: 'en',
    examples: ['KAIST', 'Yonsei University', 'Korea University'],
    blurb: {
      ru: 'Технологичные университеты, щедрые стипендии и растущий интерес к креативным индустриям — дизайн, медиа, K-культура.',
      en: 'Tech-forward universities, generous scholarships and a growing scene in creative industries — design, media, K-culture.',
      kz: 'Технологиялық университеттер, мол стипендиялар және креативті индустрияның өсуі — дизайн, медиа, K-мәдениет.',
    },
  },
  {
    id: 'ae', flag: '🇦🇪', name: { ru: 'ОАЭ', en: 'UAE', kz: 'БАӘ' },
    field: { ru: 'Бизнес и технологии', en: 'Business & Technology', kz: 'Бизнес және технологиялар' },
    budgetFit: ['mid', 'high', 'open'], region: ['near', 'asia'], fields: ['business', 'tech'],
    scholarshipLevel: 'mid', cityTags: ['big'], languageTag: 'en',
    examples: ['NYU Abu Dhabi', 'American University of Sharjah'],
    blurb: {
      ru: 'Международный хаб с филиалами топовых университетов, включая NYU Abu Dhabi с полной need-based стипендией.',
      en: 'An international hub with branches of top universities, including NYU Abu Dhabi with full need-based aid.',
      kz: 'Топ университеттердің филиалдары бар халықаралық хаб, соның ішінде толық қажеттілікке негізделген стипендиясы бар NYU Abu Dhabi.',
    },
  },
  {
    id: 'cz', flag: '🇨🇿', name: { ru: 'Чехия', en: 'Czech Republic', kz: 'Чехия' },
    field: { ru: 'Медицина и технические науки', en: 'Medicine & Technical Sciences', kz: 'Медицина және техникалық ғылымдар' },
    budgetFit: ['low', 'mid'], region: ['europe'], fields: ['tech', 'health'],
    scholarshipLevel: 'high', cityTags: ['mid', 'big'], languageTag: 'open_new',
    examples: ['Charles University', 'Czech Technical University'],
    blurb: {
      ru: 'Обучение на чешском языке в государственных вузах бесплатное, сильные медицинские и технические программы.',
      en: 'Tuition is free for Czech-taught programs at public universities, with strong medical and technical programs.',
      kz: 'Мемлекеттік университеттерде чех тілінде оқу тегін, медициналық және техникалық бағдарламалар мықты.',
    },
  },
  {
    id: 'pl', flag: '🇵🇱', name: { ru: 'Польша', en: 'Poland', kz: 'Польша' },
    field: { ru: 'Широкий выбор направлений', en: 'Wide range of majors', kz: 'Мамандықтардың кең таңдауы' },
    budgetFit: ['low', 'mid'], region: ['europe', 'near'], fields: ['tech', 'business', 'health', 'creative'],
    scholarshipLevel: 'mid', cityTags: ['mid', 'big'], languageTag: 'en',
    examples: ['University of Warsaw', 'AGH University of Krakow'],
    blurb: {
      ru: 'Близко и культурно понятно, доступные цены и растущее число программ на английском языке.',
      en: 'Close by and culturally familiar, affordable costs, and a growing number of English-taught programs.',
      kz: 'Жақын әрі мәдени жағынан түсінікті, қолжетімді баға және ағылшын тіліндегі бағдарламалар саны артып келеді.',
    },
  },
];

function scoreUniversity(country, answers){
  let score = 0;
  if (country.budgetFit.includes(answers.budget)) score += 3;
  else {
    const tiers = ['low', 'mid', 'high', 'open'];
    const ai = tiers.indexOf(answers.budget);
    if (country.budgetFit.some(b => Math.abs(tiers.indexOf(b) - ai) === 1)) score += 1;
  }
  if (country.region.includes(answers.region)) score += 3;
  if (country.fields.includes(answers.field)) score += 3;

  if (answers.scholarship === 'critical' && country.scholarshipLevel === 'high') score += 3;
  else if (answers.scholarship === 'nice' && (country.scholarshipLevel === 'high' || country.scholarshipLevel === 'mid')) score += 2;
  else if (answers.scholarship === 'no') score += 1;
  else if (answers.scholarship === 'unsure') score += 1;

  if (answers.city === 'any' || country.cityTags.includes(answers.city)) score += 2;

  if (answers.language === 'en_only' && country.languageTag === 'en') score += 2;
  if (answers.language === 'open_new') score += country.languageTag === 'open_new' ? 3 : 1;
  if (answers.language === 'ru_ok' && country.region.includes('near')) score += 2;
  if (answers.language === 'any') score += 1;

  return score;
}

function computeUniResults(answers){
  const scored = UNI_DATA.map(c => ({ c, score: scoreUniversity(c, answers) }))
    .sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 4);
  const max = top[0].score || 1;
  return top.map(({ c, score }) => ({
    country: c,
    percent: Math.max(62, Math.min(98, Math.round((score / (max + 2)) * 100))),
  }));
}

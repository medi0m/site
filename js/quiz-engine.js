/* Shared quiz runner used by university-quiz.html and career-quiz.html */

function runQuiz(questions, opts){
  const root = document.getElementById('quiz-root');
  const answers = {};
  let idx = 0;

  function lang(){ return getLang(); }

  function render(){
    const q = questions[idx];
    const pct = Math.round((idx / questions.length) * 100);
    root.innerHTML = `
      <div class="quiz-progress">
        <div class="bar"><i style="width:${pct}%"></i></div>
        <span class="step-label">${idx + 1} / ${questions.length}</span>
      </div>
      <div class="quiz-question active">
        <h3>${q.q[lang()]}</h3>
        ${q.hint[lang()] ? `<p class="hint">${q.hint[lang()]}</p>` : ''}
        <div class="opt-grid">
          ${q.options.map(o => `
            <button type="button" class="opt${answers[q.id] === o.value ? ' selected' : ''}" data-value="${o.value}">
              <span class="emoji">${o.emoji}</span><span>${o.label[lang()]}</span>
            </button>`).join('')}
        </div>
      </div>
      <div class="quiz-nav">
        <button type="button" class="btn btn-ghost" id="q-back" ${idx === 0 ? 'disabled' : ''}>${t('common.back')}</button>
        <button type="button" class="btn btn-primary" id="q-next" ${answers[q.id] ? '' : 'disabled'}>
          ${idx === questions.length - 1 ? t('common.seeResults') : t('common.next')}
        </button>
      </div>
    `;

    root.querySelectorAll('.opt').forEach(btn => {
      btn.addEventListener('click', () => {
        answers[q.id] = btn.getAttribute('data-value');
        render();
      });
    });
    root.querySelector('#q-back').addEventListener('click', () => { if (idx > 0) { idx--; render(); } });
    root.querySelector('#q-next').addEventListener('click', () => {
      if (idx < questions.length - 1) { idx++; render(); }
      else opts.onComplete(answers);
    });
  }

  document.addEventListener('uniway:langchange', () => render());
  render();
}

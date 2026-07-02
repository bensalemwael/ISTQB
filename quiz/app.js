// Quiz ISTQB CTFL v4.0 — Application interactive
(() => {
  'use strict';

  const STATE = {
    questions: [],
    pool: [],
    session: [],          // questions sélectionnées pour la session
    current: 0,
    answers: {},          // questionId -> indexChoisi (selon ordre mélangé)
    optionMaps: {},       // questionId -> [indicesOriginaux mélangés]
    mode: 'training',
    timer: null,
    timeLeft: 0,
    startedAt: null,
  };

  const HISTORY_KEY = 'istqb-quiz-history-v1';

  // ---------- Utilitaires ----------
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(id) {
    $$('.screen').forEach(s => s.classList.remove('active'));
    $('#' + id).classList.add('active');
  }

  function fmtTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  // ---------- Chargement des questions ----------
  async function loadQuestions() {
    try {
      const r = await fetch('questions.json');
      const data = await r.json();
      STATE.questions = data.questions;
      updateStats();
      bindSetup();
      renderHistory();
    } catch (err) {
      $('#stats').innerHTML = `<strong style="color:var(--danger)">Erreur de chargement.</strong> Si vous ouvrez index.html directement (file://), utilisez plutôt un serveur local : <code>python -m http.server</code> dans le dossier <code>quiz/</code>.`;
      console.error(err);
    }
  }

  // ---------- Filtrage / configuration ----------
  function getSelectedChapters() {
    const all = $('input[name="chapter"][value="all"]').checked;
    if (all) return null; // null = tous
    const vals = $$('input[name="chapter"]:checked')
      .map(i => i.value)
      .filter(v => v !== 'all')
      .map(Number);
    return vals.length ? vals : null;
  }

  function getSelectedLevels() {
    return $$('input[name="level"]:checked').map(i => i.value);
  }

  function filteredPool() {
    const chapters = getSelectedChapters();
    const levels = getSelectedLevels();
    return STATE.questions.filter(q => {
      if (chapters && !chapters.includes(q.chapter)) return false;
      if (!levels.includes(q.level)) return false;
      return true;
    });
  }

  function updateStats() {
    const pool = filteredPool();
    const byCh = {};
    pool.forEach(q => { byCh[q.chapter] = (byCh[q.chapter] || 0) + 1; });
    const parts = Object.keys(byCh).sort().map(c => `Ch.${c}: ${byCh[c]}`);
    $('#stats').innerHTML = `<strong>${pool.length}</strong> questions disponibles avec vos filtres. ${parts.length ? '(' + parts.join(' · ') + ')' : ''}`;
    const countInput = $('#count');
    if (parseInt(countInput.value, 10) > pool.length) {
      countInput.value = pool.length;
    }
    countInput.max = pool.length;
  }

  function bindSetup() {
    // Gestion "Tous les chapitres"
    const allCb = $('input[name="chapter"][value="all"]');
    const otherCbs = $$('input[name="chapter"]').filter(i => i.value !== 'all');
    allCb.addEventListener('change', () => {
      if (allCb.checked) otherCbs.forEach(c => c.checked = false);
      updateStats();
    });
    otherCbs.forEach(c => c.addEventListener('change', () => {
      if (c.checked) allCb.checked = false;
      if (!otherCbs.some(o => o.checked)) allCb.checked = true;
      updateStats();
    }));

    $$('input[name="level"]').forEach(c => c.addEventListener('change', updateStats));

    // Mode examen
    $$('input[name="mode"]').forEach(r => r.addEventListener('change', () => {
      STATE.mode = $('input[name="mode"]:checked').value;
      const countFs = $('#count-fieldset');
      if (STATE.mode === 'exam') {
        $('#count').value = 40;
        $('#count').disabled = true;
        // En mode examen : tous les chapitres, tous niveaux
        $('input[name="chapter"][value="all"]').checked = true;
        otherCbs.forEach(c => c.checked = false);
        $$('input[name="level"]').forEach(c => c.checked = true);
        updateStats();
      } else {
        $('#count').disabled = false;
      }
    }));

    $('#start').addEventListener('click', startSession);
    $('#clear-history').addEventListener('click', () => {
      if (confirm('Effacer tout l\'historique ?')) {
        localStorage.removeItem(HISTORY_KEY);
        renderHistory();
      }
    });
  }

  // ---------- Démarrage de session ----------
  function startSession() {
    const pool = filteredPool();
    if (!pool.length) {
      alert('Aucune question avec ces filtres.');
      return;
    }
    let count = parseInt($('#count').value, 10) || 20;
    if (STATE.mode === 'exam') count = Math.min(40, pool.length);
    count = Math.min(count, pool.length);

    if (STATE.mode === 'exam') {
      // Distribution officielle CTFL v4.0 (Exam Structure Tables v1.3)
      const EXAM_DIST = { 1: 8, 2: 6, 3: 4, 4: 11, 5: 9, 6: 2 };
      const picked = [];
      Object.entries(EXAM_DIST).forEach(([ch, n]) => {
        const chPool = shuffle(pool.filter(q => q.chapter === Number(ch)));
        picked.push(...chPool.slice(0, n));
      });
      // Compléter si un chapitre manque de questions
      if (picked.length < count) {
        const ids = new Set(picked.map(q => q.id));
        picked.push(...shuffle(pool.filter(q => !ids.has(q.id))).slice(0, count - picked.length));
      }
      STATE.session = shuffle(picked);
    } else {
      STATE.session = shuffle(pool).slice(0, count);
    }
    STATE.current = 0;
    STATE.answers = {};
    STATE.optionMaps = {};
    STATE.startedAt = Date.now();

    // Préparer le mélange des réponses
    const shuffleAnswers = $('#shuffle-answers').checked;
    STATE.session.forEach(q => {
      const indices = q.options.map((_, i) => i);
      STATE.optionMaps[q.id] = shuffleAnswers ? shuffle(indices) : indices;
    });

    // Timer mode examen (60 min)
    if (STATE.mode === 'exam') {
      STATE.timeLeft = 60 * 60;
      $('#timer').hidden = false;
      updateTimer();
      STATE.timer = setInterval(() => {
        STATE.timeLeft--;
        updateTimer();
        if (STATE.timeLeft <= 0) {
          clearInterval(STATE.timer);
          finishSession();
        }
      }, 1000);
    } else {
      $('#timer').hidden = true;
    }

    showScreen('quiz');
    renderQuestion();
  }

  function updateTimer() {
    const el = $('#timer');
    el.textContent = '⏱ ' + fmtTime(STATE.timeLeft);
    el.classList.toggle('warning', STATE.timeLeft <= 300 && STATE.timeLeft > 60);
    el.classList.toggle('danger', STATE.timeLeft <= 60);
  }

  // ---------- Rendu d'une question ----------
  function renderQuestion() {
    const q = STATE.session[STATE.current];
    const total = STATE.session.length;
    const idx = STATE.current + 1;
    $('#qnum').textContent = `Question ${idx} / ${total}`;
    $('#progress-bar').style.width = `${(idx / total) * 100}%`;

    const optMap = STATE.optionMaps[q.id];
    const userAnswer = STATE.answers[q.id]; // index dans l'ordre mélangé
    const isAnswered = userAnswer !== undefined;
    const showFeedback = STATE.mode === 'training' && isAnswered;

    const chLabel = q.chapter === 0 ? 'Examen' : `Ch. ${q.chapter}`;

    const html = `
      <div class="q-tags">
        <span class="tag">${chLabel}</span>
        <span class="tag ${q.level.toLowerCase()}">${q.level}</span>
        <span class="tag">${q.id}</span>
      </div>
      <p class="q-text">${escapeHtml(q.question)}</p>
      <ul class="options">
        ${optMap.map((origIdx, displayIdx) => {
          const isSelected = userAnswer === displayIdx;
          const isCorrect = origIdx === q.answer;
          let cls = 'option';
          if (showFeedback) {
            cls += ' locked';
            if (isCorrect) cls += ' correct';
            else if (isSelected) cls += ' wrong';
          } else if (isSelected) {
            cls += ' selected';
          }
          return `<li class="${cls}" data-display="${displayIdx}">
            <input type="radio" name="opt" ${isSelected ? 'checked' : ''} ${showFeedback ? 'disabled' : ''}>
            <span>${escapeHtml(q.options[origIdx])}</span>
          </li>`;
        }).join('')}
      </ul>
      ${showFeedback ? `<div class="explanation">
        <strong>${optMap[userAnswer] === q.answer ? '✓ Correct' : '✗ Incorrect'}.</strong>
        ${escapeHtml(q.explanation)}
      </div>` : ''}
    `;
    $('#question-container').innerHTML = html;

    // Click handlers
    if (!showFeedback) {
      $$('.option').forEach(el => {
        el.addEventListener('click', () => selectOption(parseInt(el.dataset.display, 10)));
      });
    }

    // Boutons
    $('#prev').disabled = STATE.current === 0;
    const isLast = STATE.current === total - 1;
    $('#next').hidden = isLast;
    $('#finish').hidden = !isLast;
  }

  function selectOption(displayIdx) {
    const q = STATE.session[STATE.current];
    STATE.answers[q.id] = displayIdx;
    renderQuestion();
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  // ---------- Navigation ----------
  function nextQuestion() {
    if (STATE.current < STATE.session.length - 1) {
      STATE.current++;
      renderQuestion();
    }
  }
  function prevQuestion() {
    if (STATE.current > 0) {
      STATE.current--;
      renderQuestion();
    }
  }

  // ---------- Fin de session ----------
  function finishSession() {
    if (STATE.timer) clearInterval(STATE.timer);

    let correct = 0;
    const details = STATE.session.map(q => {
      const optMap = STATE.optionMaps[q.id];
      const userDisplayIdx = STATE.answers[q.id];
      const isCorrect = userDisplayIdx !== undefined && optMap[userDisplayIdx] === q.answer;
      if (isCorrect) correct++;
      return { q, userDisplayIdx, isCorrect, optMap };
    });

    const total = STATE.session.length;
    const pct = Math.round((correct / total) * 100);
    const pass = pct >= 65;
    const elapsed = Math.round((Date.now() - STATE.startedAt) / 1000);

    $('#score-summary').innerHTML = `
      <p class="score-label">Votre score</p>
      <div class="score-big ${pass ? 'pass' : 'fail'}">${pct}%</div>
      <p><strong>${correct} / ${total}</strong> bonnes réponses</p>
      <p>${pass ? '🎉 Vous avez atteint le seuil de 65% requis à l\'examen.' : '⚠️ En dessous du seuil de 65%. Continuez la révision !'}</p>
      <p class="score-label">Temps : ${fmtTime(elapsed)} ${STATE.mode === 'exam' ? '· Mode examen' : '· Mode entraînement'}</p>
    `;

    // Détail
    const detailHtml = details.map((d, i) => {
      const optMap = d.optMap;
      const userDisplayIdx = d.userDisplayIdx;
      const userText = userDisplayIdx !== undefined ? d.q.options[optMap[userDisplayIdx]] : '<em>Sans réponse</em>';
      const correctText = d.q.options[d.q.answer];
      return `<div class="result-item ${d.isCorrect ? 'correct' : 'wrong'}">
        <strong>Q${i + 1}.</strong> ${escapeHtml(d.q.question)}<br>
        <span class="score-label">Votre réponse : </span>${escapeHtml(userText)}<br>
        ${!d.isCorrect ? `<span class="score-label">Bonne réponse : </span><strong>${escapeHtml(correctText)}</strong><br>` : ''}
        <em style="color:var(--muted); font-size:0.9rem">${escapeHtml(d.q.explanation)}</em>
      </div>`;
    }).join('');
    $('#results-detail').innerHTML = `<h3>Détail des réponses</h3>${detailHtml}`;

    // Sauvegarder dans l'historique
    saveHistory({
      date: new Date().toISOString(),
      mode: STATE.mode,
      total,
      correct,
      pct,
      elapsed
    });

    // Stocker les erreurs pour le bouton "Refaire les erreurs"
    STATE.wrongIds = details.filter(d => !d.isCorrect).map(d => d.q.id);

    showScreen('results');
  }

  // ---------- Historique ----------
  function saveHistory(entry) {
    const hist = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    hist.unshift(entry);
    if (hist.length > 20) hist.length = 20;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(hist));
  }
  function renderHistory() {
    const hist = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    if (!hist.length) {
      $('#history').innerHTML = '<p class="history-empty">Aucune session enregistrée.</p>';
      return;
    }
    $('#history').innerHTML = hist.map(h => {
      const d = new Date(h.date);
      const dateStr = d.toLocaleDateString('fr-FR') + ' ' + d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
      const passClass = h.pct >= 65 ? 'pass' : 'fail';
      return `<div class="history-item">
        <span>${dateStr} · ${h.mode === 'exam' ? '🎓 Examen' : '📚 Entraînement'} · ${h.total} Q · ${fmtTime(h.elapsed)}</span>
        <strong class="${passClass}" style="color: ${h.pct >= 65 ? 'var(--success)' : 'var(--danger)'}">${h.pct}% (${h.correct}/${h.total})</strong>
      </div>`;
    }).join('');
  }

  // ---------- Refaire les erreurs ----------
  function retryWrong() {
    if (!STATE.wrongIds || !STATE.wrongIds.length) {
      alert('Aucune erreur à refaire !');
      return;
    }
    STATE.session = STATE.questions.filter(q => STATE.wrongIds.includes(q.id));
    STATE.session = shuffle(STATE.session);
    STATE.current = 0;
    STATE.answers = {};
    STATE.optionMaps = {};
    STATE.startedAt = Date.now();
    STATE.mode = 'training';

    STATE.session.forEach(q => {
      const indices = q.options.map((_, i) => i);
      STATE.optionMaps[q.id] = shuffle(indices);
    });

    $('#timer').hidden = true;
    showScreen('quiz');
    renderQuestion();
  }

  // ---------- Bindings globaux ----------
  document.addEventListener('DOMContentLoaded', () => {
    loadQuestions();

    $('#next').addEventListener('click', nextQuestion);
    $('#prev').addEventListener('click', prevQuestion);
    $('#finish').addEventListener('click', () => {
      if (STATE.mode === 'exam' || confirm('Terminer le quiz maintenant ?')) {
        finishSession();
      }
    });
    $('#restart').addEventListener('click', () => {
      if (STATE.timer) clearInterval(STATE.timer);
      showScreen('setup');
      renderHistory();
    });
    $('#retry-wrong').addEventListener('click', retryWrong);

    // Raccourcis clavier
    document.addEventListener('keydown', e => {
      if ($('#quiz').classList.contains('active')) {
        if (e.key === 'ArrowRight') nextQuestion();
        if (e.key === 'ArrowLeft') prevQuestion();
        // 1-4 → sélectionner option
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= 4) {
          const opts = $$('.option');
          if (opts[num - 1] && !opts[num - 1].classList.contains('locked')) {
            opts[num - 1].click();
          }
        }
      }
    });
  });
})();

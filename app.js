/**
 * DermaPrep — Lógica de aplicación
 * Funcionalidades:
 *  • Modos: Examen / Práctica / Repaso
 *  • Selección de capítulos por sección
 *  • Filtro por fuente (Bolognia / MIR / Todas)
 *  • Distribución de dificultad ajustable
 *  • Número configurable de preguntas (10/20/30/50/todas/custom)
 *  • Calificación con desglose por nivel y por capítulo
 *  • Temporizador y barra de progreso
 *  • Persistencia local de historial e indicadores
 */
'use strict';

const D = window.DERMAPREP_DATA;

/* ═════════════════ STATE ═════════════════ */
const state = {
  mode: 'exam',                                              // exam | practice | review
  source: 'all',                                             // all | bolognia | mir
  // Default selection: chapters present in the official temario AND that have questions available
  selectedChapters: (() => {
    const temarioCaps = new Set();
    (D.temario || []).forEach(t => (t.capitulos || []).forEach(c => temarioCaps.add(c)));
    const presentCaps = D.capitulos.filter(c => c.presente).map(c => c.num);
    return new Set(presentCaps.filter(n => temarioCaps.has(n)));
  })(),
  difficulty: { facil:40, medio:35, dificil:25 },
  totalQ: 20,
  exam: null,                                                // {questions, answers, graded, startTime}
  timerHandle: null,
};

/* ═════════════════ HELPERS ═════════════════ */
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const shuffle = arr => { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
const toast = (m,d=1800) => { const t=$('#toast'); t.textContent=m; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),d); };
const fmtTime = s => { const m=Math.floor(s/60),sec=s%60; return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`; };

/* ═════════════════ STORAGE ═════════════════ */
const STORAGE_KEY = 'dermaprep_history_v1';
const history = {
  load(){
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"exams":[],"answers":{}}'); }
    catch { return {exams:[], answers:{}}; }
  },
  save(d){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); } catch {} },
  addExam(score, total, byNivel, byCap, mode, timeSec){
    const d = this.load();
    d.exams.push({ date:Date.now(), score, total, pct:Math.round(score/total*100), byNivel, byCap, mode, timeSec });
    if (d.exams.length > 50) d.exams.splice(0, d.exams.length - 50);
    this.save(d);
  },
  recordAnswer(qid, correct){
    const d = this.load();
    if (!d.answers[qid]) d.answers[qid] = {ok:0, fail:0};
    if (correct) d.answers[qid].ok++; else d.answers[qid].fail++;
    this.save(d);
  },
  clear(){ this.save({exams:[], answers:{}}); }
};

/* ═════════════════ HEADER STATS ═════════════════ */
function renderHeader(){
  const presente = D.capitulos.filter(c => c.presente).length;
  $('#hStatQ').textContent = D.estadisticas.total;
  $('#hStatCh').textContent = `${presente}/${D.capitulos.length}`;
  $('#hStatImg').textContent = Object.keys(D.imagenes).length;
}

/* ═════════════════ SUMMARY ROW ═════════════════ */
function renderSummaryRow(){
  const e = D.estadisticas;
  $('#summaryRow').innerHTML = `
    <div class="summary-cell"><div class="n">${e.total}</div><div class="l">Preguntas totales</div></div>
    <div class="summary-cell"><div class="n" style="color:var(--green)">${e.facil}</div><div class="l">Fáciles</div></div>
    <div class="summary-cell"><div class="n" style="color:var(--amber)">${e.medio}</div><div class="l">Medias</div></div>
    <div class="summary-cell"><div class="n" style="color:var(--accent)">${e.dificil}</div><div class="l">Difíciles</div></div>
    <div class="summary-cell"><div class="n">${(e.porFuente['bolognia']||0)}</div><div class="l">Bolognia</div></div>
    <div class="summary-cell"><div class="n">${(e.porFuente['mir-2025']||0)+(e.porFuente['mir-2026']||0)+(e.porFuente['mir-2024']||0)}</div><div class="l">MIR oficial</div></div>
    <div class="summary-cell"><div class="n">${(e.porFuente['dermnet']||0)}</div><div class="l">DermNet</div></div>
  `;
}

/* ═════════════════ MODE SELECTOR ═════════════════ */
function bindModes(){
  $$('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
      $$('.mode-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.mode = card.dataset.mode;
    });
  });
}

/* ═════════════════ CHAPTER TREE ═════════════════ */
function buildChapterTree(){
  const root = $('#chapterTree');
  root.innerHTML = '';
  // Set of chapters present in the official temario
  const temarioChaptersSet = new Set();
  (D.temario || []).forEach(t => (t.capitulos || []).forEach(c => temarioChaptersSet.add(c)));

  D.secciones.forEach(sec => {
    const caps = D.capitulos.filter(c => c.seccion === sec.id);
    if (!caps.length) return;
    const hasQuestions = caps.some(c => state.selectedChapters.has(c.num) && D.preguntas.some(q => q.capitulo === c.num));
    const totalQinSec = caps.reduce((acc,c) => acc + (D.estadisticas.porCapitulo[c.num] || 0), 0);

    const wrap = document.createElement('div');
    wrap.className = 'sec-group' + (totalQinSec > 0 ? ' open' : '');
    wrap.style.setProperty('--sec-color', sec.color);
    wrap.innerHTML = `
      <div class="sec-title ${totalQinSec>0?'has-questions':'no-questions'}">
        Sección ${sec.id} · ${sec.nombre}
        <span class="sec-count">${totalQinSec || '—'}</span>
      </div>
      <div class="cap-list"></div>
    `;
    const list = wrap.querySelector('.cap-list');
    caps.forEach(c => {
      const qcount = D.estadisticas.porCapitulo[c.num] || 0;
      const id = `cap-${c.num}`;
      const disabled = !c.presente;
      const inTemario = temarioChaptersSet.has(c.num);
      const row = document.createElement('div');
      row.className = 'cap-item';
      row.innerHTML = `
        <input type="checkbox" id="${id}" data-cap="${c.num}"
               ${state.selectedChapters.has(c.num)?'checked':''}
               ${disabled?'disabled':''}>
        <label for="${id}" class="${disabled?'disabled':''}" title="${inTemario?'En el temario oficial':''}">
          ${inTemario?'<span class="temario-dot" title="En el temario oficial">●</span>':''}
          <span class="num">${String(c.num).padStart(2,'0')}</span>${c.titulo}
          ${qcount?`<span class="qcount">+${qcount}</span>`:''}
        </label>
      `;
      list.appendChild(row);
    });
    wrap.querySelector('.sec-title').addEventListener('click', () => wrap.classList.toggle('open'));
    root.appendChild(wrap);
  });
  root.addEventListener('change', e => {
    if (e.target.type === 'checkbox') {
      const cap = parseInt(e.target.dataset.cap);
      if (e.target.checked) state.selectedChapters.add(cap);
      else state.selectedChapters.delete(cap);
      updateAll();
    }
  });
}

function updateAll(){
  $('#capLabel').textContent = `${state.selectedChapters.size} sel.`;
  const available = countAvailableQuestions();
  $('#goSummary').textContent = `${available} pregunta${available===1?'':'s'} disponible${available===1?'':'s'} con los filtros actuales`;
  $('#generateBtn').disabled = available === 0;
}

function countAvailableQuestions(){
  return D.preguntas.filter(q => {
    if (!state.selectedChapters.has(q.capitulo)) return false;
    if (state.source === 'bolognia' && q.fuente !== 'bolognia') return false;
    if (state.source === 'mir' && !q.fuente.startsWith('mir-')) return false;
    if (state.source === 'dermnet' && q.fuente !== 'dermnet') return false;
    return true;
  }).length;
}

/* ═════════════════ QUICK CHAPTER BUTTONS ═════════════════ */
function bindChapterQuickButtons(){
  $$('#chapterTree').forEach(()=>{}); // noop
  $$('.cfg-section .qbtns button[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      const checks = $$('#chapterTree input[type=checkbox]:not(:disabled)');
      if (action === 'all') {
        checks.forEach(cb => { cb.checked = true; state.selectedChapters.add(parseInt(cb.dataset.cap)); });
      } else if (action === 'none') {
        checks.forEach(cb => { cb.checked = false; state.selectedChapters.delete(parseInt(cb.dataset.cap)); });
      } else if (action === 'invert') {
        checks.forEach(cb => {
          cb.checked = !cb.checked;
          const cap = parseInt(cb.dataset.cap);
          if (cb.checked) state.selectedChapters.add(cap); else state.selectedChapters.delete(cap);
        });
      } else if (action === 'mir-only') {
        const mirCaps = new Set(D.preguntas.filter(q => q.fuente.startsWith('mir-')).map(q => q.capitulo));
        checks.forEach(cb => {
          const cap = parseInt(cb.dataset.cap);
          cb.checked = mirCaps.has(cap);
          if (cb.checked) state.selectedChapters.add(cap); else state.selectedChapters.delete(cap);
        });
      } else if (action === 'temario-only') {
        // Only select chapters that are explicitly in the official temario
        const temarioCaps = new Set();
        (D.temario || []).forEach(t => (t.capitulos || []).forEach(c => temarioCaps.add(c)));
        checks.forEach(cb => {
          const cap = parseInt(cb.dataset.cap);
          cb.checked = temarioCaps.has(cap);
          if (cb.checked) state.selectedChapters.add(cap); else state.selectedChapters.delete(cap);
        });
      }
      updateAll();
    });
  });
}

/* ═════════════════ SOURCE FILTER ═════════════════ */
function bindSourceFilter(){
  $$('.src-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.src-pill').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      state.source = btn.dataset.src;
      const labels = { all:'Todas las fuentes', bolognia:'Solo Bolognia', mir:'Solo MIR oficial', dermnet:'Solo DermNet' };
      $('#srcLabel').textContent = labels[state.source];
      updateAll();
    });
  });
}

/* ═════════════════ NUMBER PRESETS ═════════════════ */
function bindNumberPresets(){
  $$('#numPresets button').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('#numPresets button').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const v = btn.dataset.n;
      state.totalQ = v === 'all' ? -1 : parseInt(v);
      $('#numLabel').textContent = v === 'all' ? 'Todas' : v;
      $('#numCustom').value = '';
    });
  });
  $('#numCustom').addEventListener('input', e => {
    const v = parseInt(e.target.value);
    if (v && v > 0) {
      $$('#numPresets button').forEach(b => b.classList.remove('on'));
      state.totalQ = v;
      $('#numLabel').textContent = String(v);
    }
  });
}

/* ═════════════════ DIFFICULTY ═════════════════ */
function bindDifficulty(){
  const els = { facil:$('#diffE'), medio:$('#diffM'), dificil:$('#diffD') };
  const lbls = { facil:$('#lblE'), medio:$('#lblM'), dificil:$('#lblD') };
  const bars = { facil:$('#barE'), medio:$('#barM'), dificil:$('#barD') };

  function set(changed, value){
    els[changed].value = value;
    const others = ['facil','medio','dificil'].filter(k => k !== changed);
    const remaining = 100 - parseInt(value);
    const prevTotal = parseInt(els[others[0]].value) + parseInt(els[others[1]].value);
    if (prevTotal <= 0) {
      els[others[0]].value = Math.floor(remaining/2);
      els[others[1]].value = remaining - parseInt(els[others[0]].value);
    } else {
      const v0 = Math.round(parseInt(els[others[0]].value) / prevTotal * remaining);
      els[others[0]].value = v0;
      els[others[1]].value = remaining - v0;
    }
    ['facil','medio','dificil'].forEach(k => {
      state.difficulty[k] = parseInt(els[k].value);
      lbls[k].textContent = els[k].value + '%';
      bars[k].style.flex = els[k].value;
    });
  }
  $('#diffE').addEventListener('input', e => set('facil', e.target.value));
  $('#diffM').addEventListener('input', e => set('medio', e.target.value));
  $('#diffD').addEventListener('input', e => set('dificil', e.target.value));

  // Presets
  $$('.cfg-section .qbtns button[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.dataset.preset;
      const presets = {
        all:  {facil:40, medio:35, dificil:25},
        easy: {facil:70, medio:25, dificil:5},
        exam: {facil:30, medio:40, dificil:30},
        hard: {facil:10, medio:30, dificil:60}
      };
      const v = presets[p];
      els.facil.value = v.facil; els.medio.value = v.medio; els.dificil.value = v.dificil;
      state.difficulty = {...v};
      ['facil','medio','dificil'].forEach(k => {
        lbls[k].textContent = v[k] + '%';
        bars[k].style.flex = v[k];
      });
    });
  });
}

/* ═════════════════ HISTORY DISPLAY ═════════════════ */
function renderHistory(){
  const d = history.load();
  const card = $('#progressCard');
  if (d.exams.length === 0) { card.classList.add('hidden'); return; }
  card.classList.remove('hidden');
  const avg = Math.round(d.exams.reduce((a,e)=>a+e.pct,0) / d.exams.length);
  const best = Math.max(...d.exams.map(e=>e.pct));
  const totalAnswered = Object.values(d.answers).reduce((a,v)=>a+v.ok+v.fail, 0);
  $('#histExams').textContent = d.exams.length;
  $('#histAvg').textContent = `${avg}%`;
  $('#histBest').textContent = `${best}%`;
  $('#histTotal').textContent = totalAnswered;
}
$('#clearHist').addEventListener('click', () => {
  if (confirm('¿Borrar todo el historial? Esto eliminará exámenes guardados y estadísticas locales.')) {
    history.clear();
    renderHistory();
    toast('Historial borrado');
  }
});

/* ═════════════════ EXAM GENERATION ═════════════════ */
$('#generateBtn').addEventListener('click', generateExam);

function generateExam(){
  if (!state.selectedChapters.size) { toast('Selecciona al menos un capítulo'); return; }

  // Filter pool
  let pool = D.preguntas.filter(q => {
    if (!state.selectedChapters.has(q.capitulo)) return false;
    if (state.source === 'bolognia' && q.fuente !== 'bolognia') return false;
    if (state.source === 'mir' && !q.fuente.startsWith('mir-')) return false;
    if (state.source === 'dermnet' && q.fuente !== 'dermnet') return false;
    return true;
  });

  if (!pool.length) { toast('No hay preguntas con los filtros actuales'); return; }

  const total = state.totalQ === -1 ? pool.length : Math.min(state.totalQ, pool.length);

  // Try to honor difficulty distribution
  const dist = state.difficulty;
  const targets = {
    facil:   Math.round(total * dist.facil / 100),
    medio:   Math.round(total * dist.medio / 100),
    dificil: 0
  };
  targets.dificil = total - targets.facil - targets.medio;

  const byNivel = {
    facil:   shuffle(pool.filter(q => q.nivel === 'facil')),
    medio:   shuffle(pool.filter(q => q.nivel === 'medio')),
    dificil: shuffle(pool.filter(q => q.nivel === 'dificil'))
  };

  let selected = [];
  ['facil','medio','dificil'].forEach(n => {
    selected = selected.concat(byNivel[n].slice(0, targets[n]));
  });

  // Fill remaining slots with any unused questions
  if (selected.length < total) {
    const used = new Set(selected.map(q => q.id));
    const extras = shuffle(pool.filter(q => !used.has(q.id)));
    selected = selected.concat(extras.slice(0, total - selected.length));
  }

  selected = shuffle(selected);
  state.exam = {
    questions: selected,
    answers: {},
    graded: false,
    practiceChecked: new Set(),       // for practice mode
    startTime: Date.now()
  };
  renderExam();
  startTimer();
}

/* ═════════════════ TIMER ═════════════════ */
function startTimer(){
  stopTimer();
  state.timerHandle = setInterval(() => {
    if (!state.exam || state.exam.graded) return;
    const s = Math.floor((Date.now() - state.exam.startTime) / 1000);
    $('#examTimer').textContent = fmtTime(s);
  }, 500);
}
function stopTimer(){
  if (state.timerHandle) { clearInterval(state.timerHandle); state.timerHandle = null; }
}

/* ═════════════════ EXAM RENDERING ═════════════════ */
function renderExam(){
  $('#viewHome').classList.add('hidden');
  $('#viewSummary').classList.add('hidden');
  $('#viewExam').classList.remove('hidden');
  window.scrollTo({top:0});

  const Q = state.exam.questions;
  const titles = { exam:'Examen', practice:'Modo práctica', review:'Repaso' };
  $('#examTitle').textContent = titles[state.mode];

  const caps = [...new Set(Q.map(q => q.capitulo))].length;
  $('#examMeta').textContent = `${Q.length} preguntas · ${caps} capítulo${caps===1?'':'s'} · ${state.mode==='practice'?'feedback inmediato':state.mode==='review'?'sin calificación':'calificación al final'}`;

  // Hide submit button in review mode
  $('#submitBtn').style.display = state.mode === 'review' ? 'none' : '';

  $('#progTxt').textContent = `0 / ${Q.length}`;

  const c = $('#questionsContainer');
  c.innerHTML = Q.map((q,i) => renderQuestion(q,i)).join('');

  bindQuestionInteractions();

  // In review mode, immediately show all answers
  if (state.mode === 'review') {
    Q.forEach(q => showExplanation(q, /*forceCorrect*/ null, /*reviewMode*/ true));
  }
}

function renderQuestion(q, idx){
  const cap = D.capitulos.find(c => c.num === q.capitulo);
  const nivelLbl = { facil:'Fácil', medio:'Medio', dificil:'Difícil' }[q.nivel];
  const isMir = q.fuente.startsWith('mir-');
  const isDermnet = q.fuente === 'dermnet';
  const srcLbl = isMir ? `MIR ${q.fuente.slice(4)}` : isDermnet ? 'DermNet' : 'Bolognia';
  const srcCls = isMir ? 'mir' : isDermnet ? 'dermnet' : '';

  const imgHTML = q.imagen && D.imagenes[q.imagen] ?
    `<div class="q-img"><img src="${D.imagenes[q.imagen].src}" alt="Figura clínica" loading="lazy"><div class="cap">${D.imagenes[q.imagen].caption}</div></div>` : '';

  let body = '';
  if (q.tipo === 'opcion_multiple') {
    body = `<div class="opts">` + q.opciones.map((op,i) => `
      <label class="opt">
        <input type="radio" name="q_${q.id}" value="${i}">
        <span class="letter">${String.fromCharCode(65+i)}.</span>
        <span class="text">${op}</span>
      </label>
    `).join('') + `</div>`;
  } else if (q.tipo === 'verdadero_falso') {
    body = `<div class="tf-opts">
      <label class="opt"><input type="radio" name="q_${q.id}" value="1" style="display:none"><span class="text">Verdadero</span></label>
      <label class="opt"><input type="radio" name="q_${q.id}" value="0" style="display:none"><span class="text">Falso</span></label>
    </div>`;
  } else if (q.tipo === 'asociacion') {
    const opciones = shuffle(q.pares.map(p => p.pareja));
    body = `<div class="assoc-list">` + q.pares.map((p,i) => `
      <div class="assoc-row">
        <div class="item">${p.item}</div>
        <div class="arrow">→</div>
        <select data-qid="${q.id}" data-idx="${i}">
          <option value="">— Seleccione —</option>
          ${opciones.map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>
      </div>
    `).join('') + `</div>`;
  } else if (q.tipo === 'desarrollo') {
    body = `<textarea class="dev-area" data-qid="${q.id}" placeholder="Escriba aquí su respuesta..."></textarea>`;
  }

  const practiceCheck = state.mode === 'practice' ?
    `<button class="check-btn" data-qid="${q.id}" data-action="check">Comprobar respuesta</button>` : '';

  return `
    <article class="q-card" id="qc-${q.id}">
      <div class="q-meta">
        <div class="left">
          <div class="qno serif">${String(idx+1).padStart(2,'0')}</div>
          <div>
            <div class="q-cap">Cap. ${q.capitulo} · ${cap ? cap.titulo : ''}</div>
            <div class="q-id">${q.id}</div>
          </div>
        </div>
        <div class="q-tags">
          <span class="tag-src ${srcCls}">${srcLbl}</span>
          <span class="tag-nivel ${q.nivel}">${nivelLbl}</span>
        </div>
      </div>
      ${imgHTML}
      <div class="q-text">${q.enunciado}</div>
      ${body}
      ${practiceCheck}
      <div class="explain" id="exp-${q.id}"></div>
    </article>
  `;
}

function bindQuestionInteractions(){
  // Radio buttons (option_multiple, true_false)
  $$('.opts input[type=radio], .tf-opts input[type=radio]').forEach(r => {
    r.addEventListener('change', e => {
      const qid = e.target.name.replace('q_','');
      state.exam.answers[qid] = parseInt(e.target.value);
      updateProgress();
      const card = e.target.closest('.q-card');
      card.querySelectorAll('.opt').forEach(o => o.classList.remove('selected'));
      e.target.closest('.opt').classList.add('selected');
    });
  });

  // Association
  $$('.assoc-row select').forEach(s => {
    s.addEventListener('change', e => {
      const qid = e.target.dataset.qid;
      const idx = e.target.dataset.idx;
      if (!state.exam.answers[qid]) state.exam.answers[qid] = {};
      state.exam.answers[qid][idx] = e.target.value;
      updateProgress();
    });
  });

  // Development
  $$('.dev-area').forEach(t => {
    t.addEventListener('input', e => {
      const qid = e.target.dataset.qid;
      state.exam.answers[qid] = e.target.value;
      updateProgress();
    });
  });

  // Practice check buttons
  $$('.check-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const qid = btn.dataset.qid;
      if (state.exam.practiceChecked.has(qid)) return;
      const q = state.exam.questions.find(x => x.id === qid);
      if (state.exam.answers[qid] === undefined || state.exam.answers[qid] === null || state.exam.answers[qid] === '') {
        toast('Selecciona una respuesta antes de comprobar');
        return;
      }
      state.exam.practiceChecked.add(qid);
      btn.disabled = true;
      btn.textContent = '✓ Comprobada';
      showExplanation(q);
    });
  });
}

function updateProgress(){
  const Q = state.exam.questions;
  let answered = 0;
  Q.forEach(q => {
    const a = state.exam.answers[q.id];
    if (a !== undefined && a !== null && a !== '') answered++;
  });
  $('#progBar').style.width = (answered / Q.length * 100) + '%';
  $('#progTxt').textContent = `${answered} / ${Q.length}`;
}

/* ═════════════════ GRADING & EXPLANATIONS ═════════════════ */
function evaluateQuestion(q){
  // Returns: { correct: boolean|null, userText: string }
  const a = state.exam.answers[q.id];
  if (q.tipo === 'opcion_multiple') {
    if (a === undefined) return { correct:false, userText:'Sin respuesta' };
    return { correct: a === q.correcta, userText: `${String.fromCharCode(65+a)}. ${q.opciones[a]}` };
  }
  if (q.tipo === 'verdadero_falso') {
    if (a === undefined) return { correct:false, userText:'Sin respuesta' };
    return { correct: !!a === q.respuesta, userText: !!a ? 'Verdadero' : 'Falso' };
  }
  if (q.tipo === 'asociacion') {
    const ans = a || {};
    let allOk = true;
    q.pares.forEach((p,i) => { if (ans[i] !== p.pareja) allOk = false; });
    const userText = q.pares.map((p,i) => `${p.item} → ${ans[i] || '∅'}`).join('; ');
    return { correct: allOk && Object.keys(ans).length === q.pares.length, userText };
  }
  if (q.tipo === 'desarrollo') {
    return { correct: null, userText: a || '(no respondida)' };
  }
  return { correct: false, userText: '' };
}

function showExplanation(q, forcedResult = null, reviewMode = false){
  const card = $('#qc-' + q.id);
  const exp = $('#exp-' + q.id);
  const res = forcedResult || evaluateQuestion(q);

  // Visual feedback on options
  if (q.tipo === 'opcion_multiple') {
    const a = state.exam.answers[q.id];
    card.querySelectorAll('.opt').forEach((opt,idx) => {
      opt.classList.remove('selected');
      opt.classList.add('locked');
      if (idx === q.correcta) opt.classList.add('correct');
      else if (idx === a) opt.classList.add('incorrect');
    });
  } else if (q.tipo === 'verdadero_falso') {
    const a = state.exam.answers[q.id];
    card.querySelectorAll('.tf-opts .opt').forEach((opt,idx) => {
      opt.classList.add('locked');
      const val = idx === 0;
      if (val === q.respuesta) opt.classList.add('correct');
      else if (a !== undefined && val === !!a) opt.classList.add('incorrect');
    });
  } else if (q.tipo === 'asociacion') {
    card.querySelectorAll('.assoc-row').forEach((row,idx) => {
      const sel = row.querySelector('select');
      sel.disabled = true;
      const expected = q.pares[idx].pareja;
      sel.style.borderColor = sel.value === expected ? 'var(--green)' : 'var(--accent)';
    });
  }

  let correctStr = '';
  if (q.tipo === 'opcion_multiple') correctStr = `<b>Respuesta correcta:</b> ${String.fromCharCode(65+q.correcta)}. ${q.opciones[q.correcta]}`;
  else if (q.tipo === 'verdadero_falso') correctStr = `<b>Respuesta correcta:</b> ${q.respuesta?'Verdadero':'Falso'}`;
  else if (q.tipo === 'asociacion') correctStr = `<b>Asociaciones correctas:</b><br>${q.pares.map(p=>`• ${p.item} → <i>${p.pareja}</i>`).join('<br>')}`;
  else if (q.tipo === 'desarrollo') correctStr = `<b>Respuesta esperada (autoevaluación):</b><br>${q.respuesta_esperada || ''}`;

  const icon = res.correct === true ? '✓' : res.correct === false ? '✗' : '✎';
  const cls = res.correct === true ? 'correct' : res.correct === false ? 'incorrect' : 'neutral';
  const head = reviewMode ? 'Modo repaso — respuesta correcta' :
               res.correct === true ? '¡Correcto!' :
               res.correct === false ? 'Incorrecto' :
               'Pregunta abierta — autoevalúese';

  exp.innerHTML = `
    <div class="head"><span class="icon">${icon}</span> ${head}</div>
    ${!reviewMode ? `<div class="ua"><b>Tu respuesta:</b> ${res.userText}</div>` : ''}
    <div class="ca">${correctStr}</div>
    <div class="why">${q.explicacion}</div>
  `;
  exp.className = `explain ${cls} show`;

  // Record stat (only if real answer attempted)
  if (res.correct !== null) history.recordAnswer(q.id, res.correct);
}

/* ═════════════════ FINAL SUBMIT ═════════════════ */
$('#submitBtn').addEventListener('click', () => {
  // Check if any answers
  const Q = state.exam.questions;
  const answered = Q.filter(q => {
    const a = state.exam.answers[q.id];
    return a !== undefined && a !== null && a !== '';
  }).length;
  if (answered === 0) { toast('Responde al menos una pregunta'); return; }
  if (answered < Q.length) {
    if (!confirm(`Has respondido ${answered} de ${Q.length} preguntas. ¿Calificar de todos modos?`)) return;
  }
  gradeExam();
});

$('#abandonBtn').addEventListener('click', () => {
  if (state.exam && !state.exam.graded) {
    if (!confirm('¿Volver al menú? Se perderá el progreso actual de este examen.')) return;
  }
  goHome();
});

function goHome(){
  stopTimer();
  state.exam = null;
  $('#viewHome').classList.remove('hidden');
  $('#viewExam').classList.add('hidden');
  $('#viewSummary').classList.add('hidden');
  window.scrollTo({top:0});
  renderHistory();
}

function gradeExam(){
  stopTimer();
  const Q = state.exam.questions;
  const ans = state.exam.answers;
  let correct = 0;
  const byNivel = { facil:{ok:0,t:0}, medio:{ok:0,t:0}, dificil:{ok:0,t:0} };
  const byCap = {};
  const wrongQuestions = [];

  Q.forEach(q => {
    byNivel[q.nivel].t++;
    byCap[q.capitulo] = byCap[q.capitulo] || {ok:0,t:0,titulo:(D.capitulos.find(c=>c.num===q.capitulo)||{}).titulo};
    byCap[q.capitulo].t++;
    const res = evaluateQuestion(q);
    if (!state.exam.practiceChecked.has(q.id)) showExplanation(q, res);
    if (res.correct === true) {
      correct++;
      byNivel[q.nivel].ok++;
      byCap[q.capitulo].ok++;
    } else if (res.correct === false) {
      wrongQuestions.push(q);
    }
  });

  state.exam.graded = true;
  const timeSec = Math.floor((Date.now() - state.exam.startTime) / 1000);
  history.addExam(correct, Q.length, byNivel, byCap, state.mode, timeSec);
  showSummary(correct, Q.length, byNivel, byCap, timeSec, wrongQuestions);
}

function showSummary(correct, total, byNivel, byCap, timeSec, wrongQuestions){
  const pct = Math.round(correct/total*100);
  const pass = pct >= 50;
  const verdictTexts = pct>=80?'Excelente desempeño':pct>=65?'Buen resultado':pct>=50?'Necesita reforzar algunos temas':'Recomendamos revisar el material';
  const grade = pct>=90?'Sobresaliente':pct>=80?'Notable alto':pct>=65?'Notable':pct>=50?'Aprobado':'Suspenso';

  // Sort capitulos by perf
  const capRows = Object.entries(byCap).map(([cap,d]) => ({
    cap, titulo:d.titulo, ok:d.ok, t:d.t, pct:Math.round(d.ok/d.t*100)
  })).sort((a,b) => a.pct - b.pct);

  $('#viewExam').classList.add('hidden');
  $('#viewSummary').classList.remove('hidden');
  $('#viewSummary').innerHTML = `
    <div class="summary">
      <h2 class="serif">${grade}</h2>
      <div class="verdict">${verdictTexts} · ${fmtTime(timeSec)} de duración</div>
      <div class="score serif ${pass?'pass':'fail'}">${pct}<span style="font-size:34px">%</span></div>
      <div class="score-label">Puntuación · ${correct} de ${total} correctas</div>

      <div class="summary-grid">
        <div><b style="color:var(--green)">${byNivel.facil.ok}/${byNivel.facil.t}</b><span>Fácil</span></div>
        <div><b style="color:var(--amber)">${byNivel.medio.ok}/${byNivel.medio.t}</b><span>Medio</span></div>
        <div><b style="color:var(--accent)">${byNivel.dificil.ok}/${byNivel.dificil.t}</b><span>Difícil</span></div>
        <div><b>${fmtTime(timeSec)}</b><span>Tiempo</span></div>
      </div>

      ${capRows.length > 1 ? `
        <div class="topic-perf">
          <h3 class="serif">Desempeño por capítulo</h3>
          <div class="topic-perf-list">
            ${capRows.map(r => `
              <div class="topic-row">
                <span class="topic-name">Cap. ${r.cap} · ${r.titulo || ''}</span>
                <div class="topic-bar ${r.pct<50?'bad':''}"><div style="width:${r.pct}%"></div></div>
                <span class="topic-pct">${r.ok}/${r.t}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="summary-actions">
        <button class="primary" id="newExamBtn">Nuevo examen</button>
        <button class="ghost" id="reviewWrongBtn">Repasar errores (${wrongQuestions.length})</button>
        <button class="ghost" id="printBtn">Imprimir resultado</button>
      </div>
    </div>
  `;
  $('#newExamBtn').addEventListener('click', goHome);
  $('#printBtn').addEventListener('click', () => window.print());
  $('#reviewWrongBtn').addEventListener('click', () => {
    if (!wrongQuestions.length) { toast('¡No tienes errores que repasar!'); return; }
    state.exam = {
      questions: wrongQuestions, answers: {}, graded: false,
      practiceChecked: new Set(), startTime: Date.now()
    };
    state.mode = 'review';
    renderExam();
  });
  window.scrollTo({top:0});
}

/* ═════════════════ PROGRESS VIEW ═════════════════ */
function openProgress(){
  $('#viewHome').classList.add('hidden');
  $('#viewExam').classList.add('hidden');
  $('#viewSummary').classList.add('hidden');
  $('#viewProgress').classList.remove('hidden');
  renderProgress();
  window.scrollTo({top:0});
}

function closeProgress(){
  $('#viewProgress').classList.add('hidden');
  $('#viewHome').classList.remove('hidden');
  renderHistory();
  window.scrollTo({top:0});
}

function renderProgress(){
  const d = history.load();
  const answers = d.answers || {};
  const exams = d.exams || [];

  // ───── Top stats ─────
  const totalAnswered = Object.values(answers).reduce((a,v) => a+v.ok+v.fail, 0);
  const totalCorrect = Object.values(answers).reduce((a,v) => a+v.ok, 0);
  const pctGlobal = totalAnswered ? Math.round(totalCorrect/totalAnswered*100) : 0;
  const uniqQuestionsSeen = Object.keys(answers).length;
  const totalBank = D.preguntas.length;
  const covPct = Math.round(uniqQuestionsSeen/totalBank*100);
  const avgExam = exams.length ? Math.round(exams.reduce((a,e) => a+e.pct, 0) / exams.length) : 0;
  const bestExam = exams.length ? Math.max(...exams.map(e => e.pct)) : 0;
  // Study days (unique dates)
  const days = new Set(exams.map(e => new Date(e.date).toDateString())).size;

  $('#progStatsGrid').innerHTML = `
    <div class="prog-stat-card accent"><b>${exams.length}</b><span class="lbl">Exámenes</span></div>
    <div class="prog-stat-card"><b>${totalAnswered}</b><span class="lbl">Respuestas</span></div>
    <div class="prog-stat-card ${pctGlobal>=70?'good':pctGlobal<50?'bad':''}"><b>${pctGlobal}%</b><span class="lbl">Acierto global</span></div>
    <div class="prog-stat-card good"><b>${avgExam}%</b><span class="lbl">Promedio exámenes</span></div>
    <div class="prog-stat-card good"><b>${bestExam}%</b><span class="lbl">Mejor exam</span></div>
    <div class="prog-stat-card"><b>${days}</b><span class="lbl">Días estudio</span></div>
    <div class="prog-stat-card"><b>${uniqQuestionsSeen}/${totalBank}</b><span class="lbl">Cobertura (${covPct}%)</span></div>
  `;

  // ───── Build per-chapter stats ─────
  // Aggregate ok/fail per chapter from all answers
  const perChapter = {};
  D.preguntas.forEach(q => {
    const stats = answers[q.id];
    if (!stats) return;
    if (!perChapter[q.capitulo]) {
      const cap = D.capitulos.find(c => c.num === q.capitulo);
      perChapter[q.capitulo] = {
        num: q.capitulo,
        titulo: cap ? cap.titulo : `Cap. ${q.capitulo}`,
        ok: 0, fail: 0, total: 0
      };
    }
    perChapter[q.capitulo].ok += stats.ok;
    perChapter[q.capitulo].fail += stats.fail;
    perChapter[q.capitulo].total += stats.ok + stats.fail;
  });

  const chapterStats = Object.values(perChapter)
    .filter(c => c.total > 0)
    .map(c => ({
      ...c,
      pct: Math.round(c.ok / c.total * 100)
    }));

  // Sort and split
  const topicsBad = chapterStats.filter(c => c.pct < 60).sort((a,b) => a.pct - b.pct);
  const topicsWarn = chapterStats.filter(c => c.pct >= 60 && c.pct < 80).sort((a,b) => a.pct - b.pct);
  const topicsGood = chapterStats.filter(c => c.pct >= 80).sort((a,b) => b.pct - a.pct);

  renderTopicList('#topicsBad', topicsBad, 'bad', 'Aún no has respondido lo suficiente para detectar temas a repasar. Haz algunos exámenes primero.');
  renderTopicList('#topicsWarn', topicsWarn, 'warn', '¡No tienes temas en progreso!');
  renderTopicList('#topicsGood', topicsGood, 'good', 'Sigue practicando para dominar más temas.');

  // ───── History list ─────
  $('#histCountInfo').textContent = `${exams.length} totales`;
  if (exams.length === 0) {
    $('#historyList').innerHTML = '<div class="empty-state">Aún no has completado ningún examen.</div>';
  } else {
    $('#historyList').innerHTML = [...exams].reverse().slice(0, 20).map(e => {
      const dt = new Date(e.date);
      const dateStr = `${dt.getDate()}/${dt.getMonth()+1}/${String(dt.getFullYear()).slice(2)} ${String(dt.getHours()).padStart(2,'0')}:${String(dt.getMinutes()).padStart(2,'0')}`;
      const modeLbl = { exam:'Examen', practice:'Práctica', review:'Repaso' }[e.mode] || 'Examen';
      const pctCls = e.pct >= 65 ? 'good' : e.pct < 50 ? 'bad' : '';
      return `<div class="history-row">
        <div class="date">${dateStr}</div>
        <div class="det"><span class="mode-tag">${modeLbl}</span> &nbsp; ${e.score}/${e.total} preguntas · ${fmtTime(e.timeSec||0)}</div>
        <div></div>
        <div class="pct ${pctCls}">${e.pct}%</div>
      </div>`;
    }).join('');
  }

  // ───── Quick action button state ─────
  const wrongCount = Object.values(answers).filter(v => v.fail > 0).length;
  const unseen = D.preguntas.length - Object.keys(answers).length;
  const btn = $('#reviewExamBtn');
  btn.disabled = wrongCount === 0 && unseen === 0;
  $('#quickAction .text p').textContent = `${wrongCount} preguntas falladas + ${unseen} sin responder disponibles`;
}

function renderTopicList(selector, topics, cls, emptyMsg){
  if (topics.length === 0) {
    $(selector).innerHTML = `<div class="empty-state">${emptyMsg}</div>`;
    return;
  }
  $(selector).innerHTML = topics.map(t => `
    <div class="topic-card">
      <div class="topic-info">
        <b>Cap. ${t.num} · ${t.titulo}</b>
        <span>${t.ok} aciertos / ${t.fail} fallos</span>
      </div>
      <div class="topic-stats">${t.ok}/${t.total}</div>
      <div class="topic-pct-bar ${cls}"><div style="width:${t.pct}%"></div></div>
      <div class="topic-pct-text ${cls}">${t.pct}%</div>
      <button class="study-btn" data-cap="${t.num}">Estudiar →</button>
    </div>
  `).join('');
  // Bind "Estudiar" buttons
  $(selector).querySelectorAll('.study-btn').forEach(b => {
    b.addEventListener('click', () => studyChapter(parseInt(b.dataset.cap)));
  });
}

function studyChapter(capNum){
  // Set up state: only this chapter, practice mode, 10 questions
  state.selectedChapters = new Set([capNum]);
  state.mode = 'practice';
  state.totalQ = 10;
  state.source = 'all';

  // Update UI to reflect
  $$('.mode-card').forEach(c => c.classList.remove('active'));
  document.querySelector('.mode-card[data-mode="practice"]')?.classList.add('active');

  closeProgress();
  generateExam();
}

/* ═════════════════ REVIEW EXAM (only wrong+unseen) ═════════════════ */
function startReviewExam(){
  const d = history.load();
  const answers = d.answers || {};
  const pool = D.preguntas.filter(q => {
    const a = answers[q.id];
    if (!a) return true;            // unseen
    if (a.fail > 0) return true;    // has been failed at some point
    return false;
  });
  if (!pool.length) { toast('No tienes preguntas pendientes ni falladas'); return; }

  const total = Math.min(20, pool.length);
  state.exam = {
    questions: shuffle(pool).slice(0, total),
    answers: {},
    graded: false,
    practiceChecked: new Set(),
    startTime: Date.now()
  };
  state.mode = 'practice';
  $$('.mode-card').forEach(c => c.classList.remove('active'));
  document.querySelector('.mode-card[data-mode="practice"]')?.classList.add('active');
  closeProgress();
  renderExam();
  startTimer();
}

/* ═════════════════ EXPORT / IMPORT PROGRESS ═════════════════ */
function exportProgress(){
  const d = history.load();
  const payload = {
    app: 'DermaPrep',
    version: 1,
    exportedAt: new Date().toISOString(),
    data: d
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const ts = new Date().toISOString().slice(0,10);
  a.href = url; a.download = `dermaprep-progreso-${ts}.json`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('Progreso exportado');
}

function importProgress(file){
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.data || !data.app || data.app !== 'DermaPrep') {
        toast('Archivo no válido'); return;
      }
      if (!confirm('Esto reemplazará tu historial actual con el del archivo. ¿Continuar?')) return;
      history.save(data.data);
      renderProgress();
      toast(`Progreso importado: ${(data.data.exams||[]).length} exámenes`);
    } catch (err) {
      toast('Error al leer el archivo');
    }
  };
  reader.readAsText(file);
}

/* ═════════════════ INIT ═════════════════ */
function init(){
  renderHeader();
  renderSummaryRow();
  bindModes();
  buildChapterTree();
  bindChapterQuickButtons();
  bindSourceFilter();
  bindNumberPresets();
  bindDifficulty();
  renderHistory();
  updateAll();

  // Progress view bindings
  $('#openProgressBtn')?.addEventListener('click', openProgress);
  $('#backFromProgressBtn')?.addEventListener('click', closeProgress);
  $('#exportProgressBtn')?.addEventListener('click', exportProgress);
  $('#importProgressBtn')?.addEventListener('click', () => $('#importFileInput').click());
  $('#importFileInput')?.addEventListener('change', (e) => {
    if (e.target.files[0]) importProgress(e.target.files[0]);
    e.target.value = '';
  });
  $('#resetProgressBtn')?.addEventListener('click', () => {
    if (confirm('¿Borrar TODO tu historial de estudio? Esta acción no se puede deshacer.')) {
      history.clear();
      renderProgress();
      toast('Historial borrado');
    }
  });
  $('#reviewExamBtn')?.addEventListener('click', startReviewExam);
}
init();

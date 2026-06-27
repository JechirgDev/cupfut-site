const QUESTIONS = [
  {
    question: '¿Qué selección ha ganado más Mundiales?',
    options: ['Argentina', 'Alemania', 'Brasil'],
    correct: 2,
  },
  {
    question: '¿Cuántos Mundiales ha ganado Argentina?',
    options: ['2', '3', '4'],
    correct: 1,
  },
  {
    question: '¿Cuál fue la sede del Mundial 2014?',
    options: ['Sudáfrica', 'Brasil', 'Rusia'],
    correct: 1,
  },
];

let currentQ = 0;
let answered = false;

function showWaitlist() {
  const form = document.getElementById('waitlistForm');
  if (form) form.classList.add('active');
}

function showResult() {
  document.getElementById('triviaWidget').style.display = 'none';
  const result = document.getElementById('triviaResult');
  result.classList.add('active');
}

function handleAnswer(index) {
  if (answered) return;
  answered = true;

  const buttons = document.querySelectorAll('.trivia-btn');
  const q = QUESTIONS[currentQ];
  const isCorrect = index === q.correct;

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    if (i === index && !isCorrect) btn.classList.add('wrong');
  });

  setTimeout(() => {
    if (currentQ < QUESTIONS.length - 1) {
      currentQ++;
      answered = false;
      buttons.forEach(btn => {
        btn.disabled = false;
        btn.className = 'trivia-btn';
      });
      const qEl = document.getElementById('triviaQuestion');
      if (qEl) qEl.textContent = QUESTIONS[currentQ].question;
      const opts = document.getElementById('triviaOptions');
      if (opts) {
        opts.innerHTML = QUESTIONS[currentQ].options
          .map((opt, i) => `<button class="trivia-btn" data-index="${i}">${opt}</button>`)
          .join('');
        opts.querySelectorAll('.trivia-btn').forEach(btn => {
          btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
        });
      }
    } else {
      showResult();
      setTimeout(showWaitlist, 600);
    }
  }, 800);
}

export function initTrivia() {
  const buttons = document.querySelectorAll('.trivia-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
  });

  const submitBtn = document.getElementById('waitlistSubmit');
  const emailInput = document.getElementById('waitlistEmail');
  const feedback = document.getElementById('waitlistFeedback');

  if (submitBtn && emailInput && feedback) {
    submitBtn.addEventListener('click', () => {
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        feedback.className = 'form-feedback error';
        feedback.textContent = 'Ingresa tu correo electrónico';
        return;
      }

      if (!emailRegex.test(email)) {
        feedback.className = 'form-feedback error';
        feedback.textContent = 'Correo electrónico inválido';
        return;
      }

      feedback.className = 'form-feedback success';
      feedback.textContent = '¡Te avisaremos cuando CupFut esté disponible!';
      emailInput.value = '';
      submitBtn.disabled = true;
      submitBtn.textContent = '✓ Registrado';
    });
  }
}

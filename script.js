// ============ NIKA GOURMET — BUILD YOUR POPCORN ============
const quizData = [
  {
    question: "What makes the perfect base for a gourmet stuffed popcorn?",
    options: [
      "Small, broken popcorn kernels",
      "Large, fully-popped fluffy kernels",
      "Burnt popcorn",
      "Raw popcorn"
    ],
    answer: 1
  },
  {
    question: "Which filling pairs perfectly with sweet gourmet popcorn?",
    options: [
      "Nutella with fresh strawberries",
      "Ketchup",
      "Mustard",
      "Mayonnaise"
    ],
    answer: 0
  },
  {
    question: "How do you keep gourmet popcorn crispy for longer?",
    options: [
      "Store in an airtight jar after cooling",
      "Leave it open in the fridge",
      "Sprinkle it with water",
      "Cover with a damp cloth"
    ],
    answer: 0
  },
  {
    question: "Which popcorn style is the signature base at Nika Gourmet?",
    options: [
      "Extra salty microwave popcorn",
      "Caramelized sweet popcorn",
      "Bacon-flavored salty popcorn",
      "Cheese popcorn"
    ],
    answer: 1
  },
  {
    question: "What is the best way to apply Nutella to gourmet popcorn?",
    options: [
      "Melted and gently drizzled",
      "Frozen in chunks",
      "Straight from the jar, cold",
      "Mixed with water"
    ],
    answer: 0
  },
  {
    question: "Which fruit is the classic pairing with Nutella stuffed popcorn?",
    options: [
      "Strawberry",
      "Onion",
      "Garlic",
      "Bell pepper"
    ],
    answer: 0
  },
  {
    question: "What topping adds that extra gourmet crunch?",
    options: [
      "Sprinkles or chopped nuts",
      "Tomato sauce",
      "Olive oil",
      "Vinegar"
    ],
    answer: 0
  },
  {
    question: "Which drink is the perfect match for Nutella gourmet popcorn?",
    options: [
      "Coffee or hot chocolate",
      "Lemon soda",
      "Tomato juice",
      "Sparkling water"
    ],
    answer: 0
  }
];

// Control variables
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let respostasUsuario = [];

// DOM elements
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMessage = document.getElementById('feedbackMessage');
const nextButton = document.getElementById('nextButton');
const progressBar = document.getElementById('progressBar');
const quizArea = document.getElementById('quizArea');
const resultScreen = document.getElementById('resultScreen');
const scoreText = document.getElementById('scoreText');
const restartButton = document.getElementById('restartButton');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

// ============ QUIZ FUNCTIONS ============

function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function loadQuestion() {
  answered = false;
  nextButton.disabled = true;
  feedbackMessage.textContent = '';

  const currentQuestion = quizData[currentQuestionIndex];
  questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  optionsContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.classList.add('option');
    button.setAttribute('data-index', index);
    
    button.innerHTML = `
      <span class="option-letter">${letters[index]}</span>
      <span>${option}</span>
    `;

    button.addEventListener('click', () => selectOption(index, button));
    optionsContainer.appendChild(button);
  });

  updateProgress();
}

function selectOption(selectedIndex, selectedButton) {
  if (answered) return;

  answered = true;
  const currentQuestion = quizData[currentQuestionIndex];
  const isCorrect = selectedIndex === currentQuestion.answer;

  respostasUsuario.push({
    pergunta: currentQuestion.question,
    escolhida: currentQuestion.options[selectedIndex],
    correta: currentQuestion.options[currentQuestion.answer],
    acertou: isCorrect
  });

  const allOptions = document.querySelectorAll('.option');
  allOptions.forEach(btn => {
    btn.classList.add('disabled');
    btn.disabled = true;
  });

  if (isCorrect) {
    selectedButton.classList.add('correct');
    score++;
    feedbackMessage.textContent = '✨ Lovely choice — that pairing is perfect!';
  } else {
    selectedButton.classList.add('wrong');
    feedbackMessage.textContent = `Hmm, not quite. The gourmet way would be: ${currentQuestion.options[currentQuestion.answer]}`;
    allOptions[currentQuestion.answer].classList.add('correct');
  }

  nextButton.disabled = false;
}

function nextQuestion() {
  if (!answered) return;

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizArea.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  
  const totalQuestions = quizData.length;
  const percentual = Math.round((score / totalQuestions) * 100);
  
  let mensagem = '';
  if (percentual === 100) {
    mensagem = 'A true Gourmet Connoisseur — every bite was perfection.';
  } else if (percentual >= 70) {
    mensagem = 'Beautifully done! Your order is almost flawless.';
  } else if (percentual >= 50) {
    mensagem = 'Not bad at all — a little more gourmet flair and you\'re there.';
  } else {
    mensagem = 'Time for another tasting session — let\'s refine that palate!';
  }
  
  scoreText.innerHTML = `<strong>${score} / ${totalQuestions}</strong>You scored ${percentual}% on your gourmet build.<br><br>${mensagem}`;

  progressBar.style.width = '100%';
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  answered = false;
  respostasUsuario = [];

  resultScreen.classList.add('hidden');
  quizArea.classList.remove('hidden');

  progressBar.style.width = '0%';
  loadQuestion();
}

// ============ THEME FUNCTIONS ============

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  
  themeIcon.textContent = isDark ? '☀️' : '🌙';
  
  try {
    localStorage.setItem('nikaGourmet-theme', isDark ? 'dark' : 'light');
  } catch (e) {}
}

function loadSavedTheme() {
  try {
    const savedTheme = localStorage.getItem('nikaGourmet-theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeIcon.textContent = '☀️';
    }
  } catch (e) {}
}

// ============ EVENT LISTENERS ============

nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);
themeToggle.addEventListener('click', toggleTheme);

// ============ INITIALIZATION ============

loadSavedTheme();
loadQuestion();

// ============ BANCO DE PERGUNTAS - PIPOCA & NUTELLA ============
const quizData = [
  {
    question: "Qual é o tamanho ideal da pipoca para receber recheio?",
    options: [
      "Pipoca bem pequena e quebrada",
      "Pipoca grande e bem estourada",
      "Pipoca queimada",
      "Pipoca crua"
    ],
    answer: 1
  },
  {
    question: "Qual recheio combina perfeitamente com pipoca doce?",
    options: [
      "Nutella com morango",
      "Catchup",
      "Mostarda",
      "Maionese"
    ],
    answer: 0
  },
  {
    question: "Como deixar a pipoca crocante por mais tempo?",
    options: [
      "Guardar em pote fechado após esfriar",
      "Deixar aberta na geladeira",
      "Molhar com água",
      "Cobrir com pano úmido"
    ],
    answer: 0
  },
  {
    question: "Qual tipo de pipoca é a base para pipocas recheadas?",
    options: [
      "Pipoca de micro-ondas com muito sal",
      "Pipoca doce caramelizada",
      "Pipoca salgada com bacon",
      "Pipoca com queijo"
    ],
    answer: 1
  },
  {
    question: "Qual a melhor forma de aplicar Nutella na pipoca?",
    options: [
      "Derretida e misturada delicadamente",
      "Congelada em pedaços",
      "Pura direto do pote sem aquecer",
      "Com muita água"
    ],
    answer: 0
  },
  {
    question: "Qual fruta combina com pipoca recheada de Nutella?",
    options: [
      "Morango",
      "Cebola",
      "Alho",
      "Pimentão"
    ],
    answer: 0
  },
  {
    question: "O que pode ser adicionado para dar crocância extra?",
    options: [
      "Granulado ou castanhas picadas",
      "Molho de tomate",
      "Azeite",
      "Vinagre"
    ],
    answer: 0
  },
  {
    question: "Qual bebida combina com pipoca doce de Nutella?",
    options: [
      "Café ou chocolate quente",
      "Refrigerante de limão",
      "Suco de tomate",
      "Água com gás"
    ],
    answer: 0
  }
];

// Variáveis de controle
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let respostasUsuario = [];

// Elementos do DOM
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

// ============ FUNÇÕES DO QUIZ ============

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
    feedbackMessage.textContent = '✅ Boa escolha! Essa combinação é perfeita!';
  } else {
    selectedButton.classList.add('wrong');
    feedbackMessage.textContent = `❌ Hmm, não é a melhor opção. O ideal seria: ${currentQuestion.options[currentQuestion.answer]}`;
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
    mensagem = '🍿 Uau! Você é um mestre da pipoca com Nutella!';
  } else if (percentual >= 70) {
    mensagem = '🍫 Muito bom! Seu pedido ficou quase perfeito!';
  } else if (percentual >= 50) {
    mensagem = '🍿 Nada mal! Mas dá pra melhorar o recheio!';
  } else {
    mensagem = '🍫 Precisa treinar mais na cozinha! Bora tentar de novo?';
  }
  
  scoreText.innerHTML = `Você acertou ${score} de ${totalQuestions} perguntas (${percentual}%)<br><br>${mensagem}`;

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

// ============ FUNÇÕES DE TEMA ============

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  
  themeIcon.textContent = isDark ? '☀️' : '🌙';
  
  try {
    localStorage.setItem('pipocaNutella-theme', isDark ? 'dark' : 'light');
  } catch (e) {
    // localStorage pode não estar disponível
  }
}

function loadSavedTheme() {
  try {
    const savedTheme = localStorage.getItem('pipocaNutella-theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeIcon.textContent = '☀️';
    }
  } catch (e) {
    // Ignora erros de localStorage
  }
}

// ============ EVENT LISTENERS ============

nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);
themeToggle.addEventListener('click', toggleTheme);

// ============ INICIALIZAÇÃO ============

loadSavedTheme();
loadQuestion();

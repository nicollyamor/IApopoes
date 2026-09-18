* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Roboto, system-ui, sans-serif;
}

/* Variáveis de tema */
:root {
  --bg-gradient-start: #6b3e1f;
  --bg-gradient-end: #c17f3a;
  --card-bg: #ffffff;
  --text-primary: #3b2314;
  --text-secondary: #7a5c43;
  --border-light: #f5e6d3;
  --progress-bg: #f0e0cc;
  --option-bg: #fdf8f2;
  --option-border: #e8d5bd;
  --option-hover-bg: #fbeed9;
  --option-hover-border: #d4a017;
  --button-bg: #8b4513;
  --button-hover: #6b3e1f;
  --button-disabled: #c9b29b;
  --score-bg: #fdf3e3;
  --correct-bg: #d4edda;
  --correct-border: #28a745;
  --correct-text: #155724;
  --wrong-bg: #f8d7da;
  --wrong-border: #dc3545;
  --wrong-text: #721c24;
  --footer-bg: #3b2314;
  --footer-text: #ffffff;
}

/* Tema escuro */
body.dark-theme {
  --bg-gradient-start: #1a0f08;
  --bg-gradient-end: #3b2314;
  --card-bg: #2b1a0f;
  --text-primary: #f5e6d3;
  --text-secondary: #c9a882;
  --border-light: #4a2f1d;
  --progress-bg: #4a2f1d;
  --option-bg: #3b2314;
  --option-border: #5c3a20;
  --option-hover-bg: #4a2f1d;
  --option-hover-border: #d4a017;
  --button-bg: #d4a017;
  --button-hover: #b8860b;
  --button-disabled: #5c3a20;
  --score-bg: #4a2f1d;
  --correct-bg: #14532d;
  --correct-border: #22c55e;
  --correct-text: #bbf7d0;
  --wrong-bg: #7f1d1d;
  --wrong-border: #ef4444;
  --wrong-text: #fecaca;
  --footer-bg: #1a0f08;
  --footer-text: #f5e6d3;
}

body {
  background: linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-end));
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 90px 20px 20px;
  transition: background 0.4s ease;
}

/* Botão de alternância de tema */
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: var(--card-bg);
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  z-index: 1000;
}

.theme-toggle:hover {
  transform: scale(1.1) rotate(15deg);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}

.theme-toggle:active {
  transform: scale(0.95);
}

.theme-icon {
  display: block;
  transition: transform 0.4s ease;
}

.quiz-container {
  background: var(--card-bg);
  max-width: 700px;
  width: 100%;
  border-radius: 32px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
  padding: 32px 28px;
  transition: all 0.3s ease, background 0.4s ease;
}

header {
  text-align: center;
  margin-bottom: 28px;
}

header h1 {
  font-size: 2.2rem;
  color: var(--text-primary);
  letter-spacing: -0.5px;
  margin-bottom: 6px;
  transition: color 0.3s ease;
}

header p {
  color: var(--text-secondary);
  font-size: 1rem;
  border-bottom: 2px solid var(--border-light);
  padding-bottom: 18px;
  transition: color 0.3s ease, border-color 0.3s ease;
}

/* Barra de progresso */
.progress {
  width: 100%;
  height: 8px;
  background: var(--progress-bg);
  border-radius: 20px;
  margin-bottom: 28px;
  overflow: hidden;
  transition: background 0.3s ease;
}

.progress-bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #8b4513, #d4a017);
  border-radius: 20px;
  transition: width 0.3s ease;
}

/* Container de perguntas */
.question-container {
  margin-bottom: 24px;
}

#questionText {
  font-size: 1.35rem;
  color: var(--text-primary);
  margin-bottom: 24px;
  font-weight: 600;
  line-height: 1.4;
  min-height: 3.5rem;
  transition: color 0.3s ease;
}

/* Opções */
.options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
}

.option {
  background: var(--option-bg);
  border: 2px solid var(--option-border);
  border-radius: 16px;
  padding: 16px 20px;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 12px;
}

.option:hover:not(:disabled) {
  background: var(--option-hover-bg);
  border-color: var(--option-hover-border);
  transform: translateY(-2px);
}

.option.correct {
  background: var(--correct-bg);
  border-color: var(--correct-border);
  color: var(--correct-text);
}

.option.wrong {
  background: var(--wrong-bg);
  border-color: var(--wrong-border);
  color: var(--wrong-text);
}

.option.disabled {
  cursor: not-allowed;
  opacity: 0.9;
}

.option-letter {
  background: var(--card-bg);
  width: 28px;
  height: 28px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: #8b4513;
  border: 1px solid var(--option-border);
  flex-shrink: 0;
  transition: background 0.3s ease, border-color 0.3s ease;
}

body.dark-theme .option-letter {
  color: #d4a017;
}

/* Feedback */
.feedback-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
}

#feedbackMessage {
  font-weight: 600;
  font-size: 1.1rem;
  min-height: 2.5rem;
  text-align: center;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

#nextButton, #restartButton {
  background: var(--button-bg);
  color: white;
  border: none;
  padding: 14px 36px;
  border-radius: 40px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
  width: 100%;
  max-width: 280px;
}

#nextButton:hover:not(:disabled), #restartButton:hover {
  background: var(--button-hover);
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(139, 69, 19, 0.4);
}

#nextButton:disabled {
  background: var(--button-disabled);
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}

/* Tela de resultado */
.result-screen {
  text-align: center;
  padding: 20px 0;
}

.result-screen h2 {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 16px;
  transition: color 0.3s ease;
}

#scoreText {
  font-size: 1.3rem;
  font-weight: 700;
  color: #8b4513;
  margin: 20px 0 28px;
  background: var(--score-bg);
  padding: 18px;
  border-radius: 20px;
  line-height: 1.5;
  transition: background 0.3s ease, color 0.3s ease;
}

body.dark-theme #scoreText {
  color: #d4a017;
}

.hidden {
  display: none;
}

/* Footer vertical com contatos */
.contact-footer {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 10px;
  background: var(--footer-bg);
  border-radius: 20px 0 0 20px;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.2);
  z-index: 999;
  transition: background 0.4s ease;
}

.contact-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 60px;
  padding: 10px 6px;
  color: var(--footer-text);
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(-4px);
}

.contact-link.whatsapp:hover {
  background: #25d366;
  color: white;
}

.contact-link.github:hover {
  background: #333;
  color: white;
}

.contact-link svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.contact-label {
  font-size: 0.65rem;
  text-align: center;
  line-height: 1.2;
}

/* Responsividade */
@media (max-width: 500px) {
  body {
    padding: 70px 10px 10px 10px;
  }

  .quiz-container {
    padding: 24px 18px;
  }

  header h1 {
    font-size: 1.8rem;
  }

  #questionText {
    font-size: 1.2rem;
  }

  .option {
    padding: 14px 16px;
    font-size: 1rem;
  }

  .theme-toggle {
    top: 12px;
    right: 12px;
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
  }

  /* Footer vira horizontal no mobile */
  .contact-footer {
    position: fixed;
    top: auto;
    bottom: 0;
    right: 0;
    left: 0;
    transform: none;
    flex-direction: row;
    justify-content: center;
    border-radius: 20px 20px 0 0;
    padding: 10px;
    gap: 8px;
  }

  .contact-link {
    width: 70px;
    padding: 8px 6px;
  }

  .contact-link:hover {
    transform: translateY(-4px);
  }
}

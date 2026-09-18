* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Nika Gourmet — Light */
  --bg-cream: #fdf6f0;
  --bg-blush: #f8e5e0;
  --bg-rose: #e8b4b8;
  --accent: #c97b84;
  --accent-deep: #8b4a52;
  --gold: #d4a373;
  --gold-soft: #e9c9a8;
  --chocolate: #4a2c2a;
  --text-primary: #3d2b2b;
  --text-secondary: #8a6f6f;
  --card-bg: #ffffff;
  --border-soft: #f0dcd6;
  --option-bg: #fffaf7;
  --option-border: #f0dcd6;
  --option-hover-bg: #fdf1ec;
  --option-hover-border: #c97b84;
  --correct-bg: #e3f2e3;
  --correct-border: #7aa874;
  --correct-text: #3d5c3a;
  --wrong-bg: #fbe4e4;
  --wrong-border: #d98b8b;
  --wrong-text: #7a3333;
  --footer-bg: #3d2b2b;
  --footer-text: #f8e5e0;
  --shadow-soft: 0 20px 45px -20px rgba(139, 74, 82, 0.35);
}

body.dark-theme {
  --bg-cream: #1a1210;
  --bg-blush: #2b1a18;
  --bg-rose: #4a2c2a;
  --accent: #e8a4a9;
  --accent-deep: #f0c5c8;
  --gold: #d4a373;
  --gold-soft: #b88a5e;
  --chocolate: #f8e5e0;
  --text-primary: #f5e6e0;
  --text-secondary: #b89998;
  --card-bg: #241816;
  --border-soft: #3d2b2b;
  --option-bg: #2b1a18;
  --option-border: #4a2c2a;
  --option-hover-bg: #3d2b2b;
  --option-hover-border: #e8a4a9;
  --correct-bg: #1f3a1f;
  --correct-border: #7aa874;
  --correct-text: #c8e6c8;
  --wrong-bg: #3d1f1f;
  --wrong-border: #d98b8b;
  --wrong-text: #f0c5c5;
  --footer-bg: #140d0c;
  --footer-text: #f5e6e0;
  --shadow-soft: 0 20px 45px -20px rgba(0, 0, 0, 0.6);
}

body {
  font-family: 'Poppins', system-ui, sans-serif;
  background: var(--bg-cream);
  background-image: 
    radial-gradient(circle at 15% 15%, var(--bg-blush) 0%, transparent 45%),
    radial-gradient(circle at 85% 85%, var(--bg-rose) 0%, transparent 50%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 100px 40px 40px;
  transition: background 0.5s ease, color 0.4s ease;
  position: relative;
  overflow-x: hidden;
}

/* Marca d'água decorativa */
body::before {
  content: "NIKA";
  position: fixed;
  bottom: -60px;
  left: -30px;
  font-family: 'Playfair Display', serif;
  font-size: 20rem;
  font-weight: 700;
  font-style: italic;
  color: var(--accent);
  opacity: 0.04;
  pointer-events: none;
  z-index: 0;
  letter-spacing: -0.05em;
}

/* Brand badge topo esquerdo */
.brand-badge {
  position: fixed;
  top: 24px;
  left: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  color: var(--text-secondary);
  z-index: 100;
  transition: color 0.3s ease;
}

.brand-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px rgba(201, 123, 132, 0.15);
  animation: pulse 2.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(201, 123, 132, 0.15); }
  50% { box-shadow: 0 0 0 8px rgba(201, 123, 132, 0.05); }
}

/* Theme toggle */
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--border-soft);
  background: var(--card-bg);
  color: var(--text-primary);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.theme-toggle:hover {
  transform: scale(1.08);
  border-color: var(--accent);
  box-shadow: 0 8px 20px rgba(201, 123, 132, 0.2);
}

.theme-toggle:active {
  transform: scale(0.95);
}

/* Container principal */
.quiz-container {
  background: var(--card-bg);
  max-width: 680px;
  width: 100%;
  border-radius: 36px;
  box-shadow: var(--shadow-soft);
  padding: 48px 44px 40px;
  position: relative;
  z-index: 1;
  border: 1px solid var(--border-soft);
  transition: all 0.4s ease;
}

header {
  text-align: center;
  margin-bottom: 32px;
}

.eyebrow {
  font-size: 0.7rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 12px;
  transition: color 0.3s ease;
}

header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  font-style: italic;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 300;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border-soft);
  transition: color 0.3s ease, border-color 0.3s ease;
}

/* Progresso */
.progress {
  width: 100%;
  height: 6px;
  background: var(--border-soft);
  border-radius: 20px;
  margin-bottom: 32px;
  overflow: hidden;
  transition: background 0.3s ease;
}

.progress-bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--accent), var(--gold));
  border-radius: 20px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Pergunta */
.question-container {
  margin-bottom: 24px;
}

#questionText {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 26px;
  line-height: 1.35;
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
  border: 1.5px solid var(--option-border);
  border-radius: 18px;
  padding: 16px 22px;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: 'Poppins', sans-serif;
}

.option:hover:not(:disabled) {
  background: var(--option-hover-bg);
  border-color: var(--option-hover-border);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px -8px rgba(201, 123, 132, 0.3);
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
  opacity: 0.85;
}

.option-letter {
  background: var(--card-bg);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--accent);
  border: 1.5px solid var(--border-soft);
  flex-shrink: 0;
  transition: all 0.3s ease;
}

body.dark-theme .option-letter {
  color: var(--accent);
}

/* Feedback */
.feedback-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 18px;
}

#feedbackMessage {
  font-weight: 500;
  font-size: 1rem;
  min-height: 2.5rem;
  text-align: center;
  color: var(--text-primary);
  font-style: italic;
  transition: color 0.3s ease;
}

#nextButton, #restartButton {
  background: var(--chocolate);
  color: var(--bg-cream);
  border: none;
  padding: 15px 40px;
  border-radius: 40px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;
  width: 100%;
  max-width: 300px;
}

#nextButton:hover:not(:disabled), #restartButton:hover {
  background: var(--accent-deep);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -10px rgba(139, 74, 82, 0.5);
}

#nextButton:disabled {
  background: var(--border-soft);
  color: var(--text-secondary);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

body.dark-theme #nextButton,
body.dark-theme #restartButton {
  color: var(--chocolate);
}

body.dark-theme #nextButton:disabled {
  color: var(--text-secondary);
}

/* Resultado */
.result-screen {
  text-align: center;
  padding: 12px 0;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.result-screen h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-style: italic;
  color: var(--text-primary);
  margin-bottom: 20px;
  transition: color 0.3s ease;
}

#scoreText {
  font-size: 1.05rem;
  font-weight: 400;
  color: var(--text-primary);
  margin: 20px 0 30px;
  background: var(--option-bg);
  border: 1px solid var(--border-soft);
  padding: 26px 22px;
  border-radius: 24px;
  line-height: 1.6;
  transition: all 0.3s ease;
}

#scoreText strong {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: var(--accent);
  display: block;
  margin-bottom: 8px;
}

.hidden {
  display: none;
}

/* Footer */
.contact-footer {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px 12px;
  background: var(--footer-bg);
  border-radius: 24px 0 0 24px;
  z-index: 999;
  transition: background 0.4s ease;
}

.contact-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 58px;
  padding: 10px 6px;
  color: var(--footer-text);
  text-decoration: none;
  border-radius: 14px;
  transition: all 0.3s ease;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.contact-link:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(-4px);
}

.contact-link.whatsapp:hover {
  background: #25d366;
  color: white;
}

.contact-link.github:hover {
  background: var(--accent);
  color: white;
}

.contact-link svg {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

/* Responsivo */
@media (max-width: 600px) {
  body {
    padding: 80px 14px 80px 14px;
  }

  .brand-badge {
    top: 18px;
    left: 18px;
    font-size: 0.65rem;
  }

  .quiz-container {
    padding: 36px 24px 30px;
    border-radius: 28px;
  }

  header h1 {
    font-size: 2.2rem;
  }

  #questionText {
    font-size: 1.25rem;
  }

  .option {
    padding: 14px 16px;
    font-size: 0.95rem;
  }

  .theme-toggle {
    top: 14px;
    right: 14px;
    width: 42px;
    height: 42px;
  }

  body::before {
    font-size: 10rem;
    bottom: -20px;
  }

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

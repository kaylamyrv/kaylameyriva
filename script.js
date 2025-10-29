// Form Kontak
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;
    document.getElementById(
      "formResult"
    ).textContent = `Terima kasih, ${nama}! Pesan kamu sudah kami terima.`;
    contactForm.reset();
  });
}

// Login simulasi
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const result = document.getElementById("loginResult");

    if (user === "siswa" && pass === "12345") {
      result.textContent = "✅ Login berhasil sebagai Siswa!";
    } else if (user === "guru" && pass === "admin") {
      result.textContent = "✅ Login berhasil sebagai Guru!";
    } else {
      result.textContent = "❌ Username atau password salah!";
    }
  });
}

// Quiz Interaktif
const startQuizBtn = document.getElementById("startQuiz");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");

const questions = [
  {
    question: "Apa ibu kota Indonesia?",
    options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
    correct: 0,
  },
  {
    question: "Berapa hasil dari 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1,
  },
  {
    question: "Planet apa yang terdekat dengan Matahari?",
    options: ["Venus", "Bumi", "Merkurius", "Mars"],
    correct: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;

if (startQuizBtn) {
  startQuizBtn.addEventListener("click", startQuiz);
}

function startQuiz() {
  quizContainer.classList.remove("hidden");
  startQuizBtn.classList.add("hidden");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  answersEl.innerHTML = "";
  resultEl.textContent = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(index));
    answersEl.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.correct) {
    score++;
    resultEl.textContent = "✅ Benar!";
  } else {
    resultEl.textContent =
      "❌ Salah! Jawaban yang benar: " +
      currentQuestion.options[currentQuestion.correct];
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(() => {
      showQuestion();
    }, 2000);
  } else {
    setTimeout(() => {
      showResult();
    }, 2000);
  }
}

function showResult() {
  questionEl.textContent = "";
  answersEl.innerHTML = "";
  resultEl.textContent = `Kuis selesai! Skor kamu: ${score}/${questions.length}`;
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Mulai Lagi";
  restartBtn.className = "btn-primary";
  restartBtn.addEventListener("click", () => {
    quizContainer.classList.add("hidden");
    startQuizBtn.classList.remove("hidden");
  });
  answersEl.appendChild(restartBtn);
}

// Animasi Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll("[data-animate]").forEach((el) => {
  observer.observe(el);
});

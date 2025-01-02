const header = document.getElementById("scrollHeader");
let lastScrollY = window.scrollY;
const hideTreshold = 100;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > hideTreshold && currentScrollY > lastScrollY) {
    // Wenn nach unten gescrollt wird, Header ausblenden
    header.style.transform = "translateY(-100%)";
  } else if (currentScrollY < lastScrollY || currentScrollY <= hideTreshold) {
    // Wenn nach oben gescrollt wird, Header einblenden
    header.style.transform = "translateY(0)";
  }

  lastScrollY = currentScrollY;
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdownLinks = document.querySelectorAll(".dropdown-link");
  const currentPath = window.location.pathname; // Holt den aktuellen Pfad der URL

  dropdownLinks.forEach((link) => {
    // Überprüfen, ob der Link eine gültige URL enthält und mit dem aktuellen Pfad übereinstimmt
    const linkPath = link.getAttribute("href");

    if (linkPath && currentPath.endsWith(linkPath)) {
      link.classList.add("active"); // Fügt die 'active'-Klasse hinzu
    } else {
      link.classList.remove("active"); // Entfernt 'active', falls nicht übereinstimmt
    }
  });
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // Nur wenn das Ziel ein interner Anker ist
    if (targetId.startsWith("#")) {
      e.preventDefault(); // Standard-Verhalten verhindern
      const targetElement = document.getElementById(targetId.substring(1));

      // Scrolle sanft zur Position des Ziels
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

const questions = [
    // Funktionsweise von Versicherungen
    {
    question: "Wie nennt man das Prinzip, bei dem die Prämien vieler Versicherter zur Deckung der Schäden weniger genutzt werden?",
    answers: [
    "Moral Hazard",
    "Kollektive Risikoübernahme",
    "Solidaritätsprinzip",
    "Selbstbehalt",
    ],
    correct: "Kollektive Risikoübernahme",
    },
    {
    question: "Was bedeutet Moral Hazard im Kontext von Versicherungen?",
    answers: [
    "Versicherungen sichern nur grosse Risiken ab.",
    "Versicherte neigen dazu, vorsichtiger zu handeln.",
    "Versicherte handeln weniger vorsichtig, weil die Versicherung Schäden deckt.",
    "Versicherungen erhöhen die Prämien, um höhere Kosten zu kompensieren.",
    ],
    correct: "Versicherte handeln weniger vorsichtig, weil die Versicherung Schäden deckt.",
    },
        // Krankenkasse
    {
    question: "Welche Leistungen deckt die obligatorische Grundversicherung in der Schweiz ab?",
    answers: [
    "Private Spitalaufenthalte",
    "Alternativmedizin",
    "Arztbesuche und Notfallbehandlungen",
    "Zahnbehandlungen",
    ],
    correct: "Arztbesuche und Notfallbehandlungen",
    },
    {
    question: "Welche Faktoren beeinflussen die Prämien der Grundversicherung?",
    answers: [
    "Gesundheitszustand und Einkommen",
    "Wohnort und Alter",
    "Beruf und Geschlecht",
    "Anzahl der Familienmitglieder",
    ],
    correct: "Wohnort und Alter",
    },
    {
    question: "Welche Franchise ist am besten geeignet für eine Person, welche nie zum Arzt gehen muss?",
    answers: [
    "CHF 300",
    "CHF 1'500",
    "CHF 2'500",
    "CHF 700",
    ],
    correct: "CHF 2'500",
    },
    {
    question: "Was ist die maximale Selbstbehaltssumme pro Jahr in der Grundversicherung?",
    answers: [
    "CHF 500",
    "CHF 700",
    "CHF 1'000",
    "CHF 2'500",
    ],
    correct: "CHF 700",
    },
    {
    question: "Wie kann man die Höhe der Prämie in der Grundversicherung reduzieren?",
    answers: [
    "Durch den Wechsel zur HMO- oder Telmed-Modell",
    "Durch Erhöhung der Selbstbehaltssumme",
    "Durch Kündigung der Zusatzversicherung",
    "Durch Wahl eines höheren Deckungsbetrags",
    ],
    correct: "Durch den Wechsel zur HMO- oder Telmed-Modell",
    },
    {
    question: "Warum können Krankenkassen Anträge auf Zusatzversicherungen ablehnen?",
    answers: [
    "Aufgrund bestehender Gesundheitsrisiken",
    "Wegen eines zu niedrigen Einkommens",
    "Weil die Grundversicherung verpflichtend ist",
    "Wegen mangelnder Zahlungsbereitschaft",
    ],
    correct: "Aufgrund bestehender Gesundheitsrisiken",
    },
    // Unfallversicherung
    {
    question: "Wer ist in der Schweiz obligatorisch gegen Berufsunfälle versichert?",
    answers: [
    "Alle Einwohner",
    "Arbeitnehmende",
    "Selbstständige",
    "Rentner",
    ],
    correct: "Arbeitnehmende",
    },
    {
    question: "Wie lange gilt der Versicherungsschutz der UVG nach dem letzten Arbeitstag?",
    answers: [
    "14 Tage",
    "31 Tage",
    "60 Tage",
    "90 Tage",
    ],
    correct: "31 Tage",
    },
    {
    question: "Welche Kosten übernimmt die Unfallversicherung?",
    answers: [
    "Franchise und Selbstbehalt",
    "Gesamte Heilbehandlungskosten ohne Selbstbehalt",
    "Nur die Hälfte der Behandlungskosten",
    "Kosten für Schönheitsoperationen",
    ],
    correct: "Gesamte Heilbehandlungskosten ohne Selbstbehalt",
    },
    {
    question: "Welche Prämie wird dem Arbeitnehmer direkt vom Lohn abgezogen?",
    answers: [
    "Berufsunfallversicherung",
    "Nichtberufsunfallversicherung",
    "Krankenversicherung",
    "Zusatzversicherung",
    ],
    correct: "Nichtberufsunfallversicherung",
    },
        // Privathaftpflichtversicherung
    {
    question: "Welches Schadensszenario wird typischerweise durch eine Privathaftpflichtversicherung gedeckt?",
    answers: [
    "Absichtliches Zerbrechen einer Vase",
    "Zerbrechen einer Vase bei Freunden",
    "Schäden an deinem eigenen Eigentum",
    "Kosten für einen Autounfall",
    ],
    correct: "Zerbrechen einer Vase bei Freunden",
    },
    {
    question: "Was beeinflusst die Prämienhöhe einer Privathaftpflichtversicherung?",
    answers: [
    "Gesundheitszustand",
    "Deckungssumme und Selbstbehalt",
    "Anzahl der Schadensfälle anderer Versicherter",
    "Art des Haushaltsgeräts",
    ],
    correct: "Deckungssumme und Selbstbehalt",
    },
      // Hausratversicherung
      {
        question: "Eine Hausratsversicherung übernimmt...?",
        answers: [
        "Schäden durch Unaufmerksamkeit",
        "Schäden durch Naturereignisse wie Überschwemmungen",
        "Schäden am Haus selbst",
        "Schäden durch mutwillige Zerstörung",
        ],
        correct: "Schäden durch Naturereignisse wie Überschwemmungen",
        },
        {
        question: "Welche Faktoren spielen bei der Höhe der Prämie einer Hausratsversicherung eine Rolle?",
        answers: [
        "Alter der versicherten Gegenstände",
        "Versicherungswert und Wohnort",
        "Anzahl der Bewohner im Haushalt",
        "Einkommen des Versicherten",
        ],
        correct: "Versicherungswert und Wohnort",
        },
        // Lebensversicherung
        {
            question: "Was ist der Hauptzweck einer Lebensversicherung?",
            answers: [
            "Absicherung gegen Berufsunfälle",
            "Finanzielle Absicherung der Angehörigen im Todesfall",
            "Finanzierung von Krankenbehandlungen",
            "Steuerliche Vorteile",
            ],
            correct: "Finanzielle Absicherung der Angehörigen im Todesfall",
            },
            {
            question: "Welche Form der Lebensversicherung beinhaltet einen Sparanteil?",
            answers: [
            "Risikolebensversicherung",
            "Kapitallebensversicherung",
            "Unfallversicherung",
            "Rentenversicherung",
            ],
            correct: "Kapitallebensversicherung",
            },
            {
            question: "Welche Leistung erbringt eine Risikolebensversicherung?",
            answers: [
            "Auszahlung des Sparanteils bei Vertragsende",
            "Zahlung eines festen Betrags im Todesfall",
            "Deckung der Behandlungskosten",
            "Auszahlung einer monatlichen Rente",
            ],
            correct: "Zahlung eines festen Betrags im Todesfall",
            },
            {
            question: "Welche Faktoren beeinflussen die Prämienhöhe einer Lebensversicherung?",
            answers: [
            "Alter und Gesundheitszustand",
            "Wohnort und Einkommen",
            "Beruf und Hobbys",
            "Familienstand",
            ],
            correct: "Alter und Gesundheitszustand",
            },
        // Motorfahrzeugversicherungen
        {
        question: "Welche Versicherung ist in der Schweiz für Motorfahrzeuge obligatorisch?",
        answers: [
        "Teilkaskoversicherung",
        "Haftpflichtversicherung",
        "Vollkaskoversicherung",
        "Insassenversicherung",
        ],
        correct: "Haftpflichtversicherung",
        },
        {
        question: "Was deckt die Haftpflichtversicherung für Motorfahrzeuge?",
        answers: [
        "Schäden am eigenen Fahrzeug",
        "Schäden an Dritten (Personen oder Sachen)",
        "Reparaturen am Motor",
        "Schäden durch Diebstahl",
        ],
        correct: "Schäden an Dritten (Personen oder Sachen)",
        },
        {
        question: "Für welche Schäden kommt die Teilkaskoversicherung auf?",
        answers: [
        "Schäden an anderen Fahrzeugen",
        "Schäden durch Diebstahl, Glasbruch oder Naturereignisse",
        "Schäden durch absichtliche Zerstörung",
        "Alle Reparaturkosten",
        ],
        correct: "Schäden durch Diebstahl, Glasbruch oder Naturereignisse",
        },
        {
        question: "Wann lohnt sich eine Vollkaskoversicherung besonders?",
        answers: [
        "Bei älteren Fahrzeugen",
        "Bei Neuwagen oder Leasingfahrzeugen",
        "Für Fahrzeuge ohne Wertverlust",
        "Für Fahrzeuge, die selten genutzt werden",
        ],
        correct: "Bei Neuwagen oder Leasingfahrzeugen",
        },
        {
        question: "Was ist der Unterschied zwischen Haftpflicht- und Kaskoversicherung?",
        answers: [
        "Die Haftpflichtversicherung deckt Schäden am eigenen Fahrzeug, die Kaskoversicherung Schäden an Dritten.",
        "Die Haftpflichtversicherung ist freiwillig, die Kaskoversicherung obligatorisch.",
        "Die Haftpflichtversicherung deckt Schäden an Dritten, die Kaskoversicherung Schäden am eigenen Fahrzeug.",
        "Es gibt keinen Unterschied.",
        ],
        correct: "Die Haftpflichtversicherung deckt Schäden an Dritten, die Kaskoversicherung Schäden am eigenen Fahrzeug.",
        },
        {
        question: "Welche Faktoren beeinflussen die Prämienhöhe der Motorfahrzeugversicherung?",
        answers: [
        "Fahrzeugtyp, Alter des Fahrers und Schadenhistorie",
        "Beruf des Fahrers und Grösse des Autos",
        "Anzahl der Insassen und Fahrzeugfarbe",
        "Wohnort des Fahrers und Anzahl der gefahrenen Kilometer",
        ],
        correct: "Fahrzeugtyp, Alter des Fahrers und Schadenhistorie",
        },
        {
        question: "Was wird unter dem Begriff 'Selbstbehalt' in der Motorfahrzeugversicherung verstanden?",
        answers: [
        "Der maximale Betrag, den die Versicherung zahlt.",
        "Der Anteil, den der Versicherte im Schadensfall selbst tragen muss.",
        "Eine zusätzliche Prämie für höhere Deckung.",
        "Ein Bonus für unfallfreies Fahren.",
        ],
        correct: "Der Anteil, den der Versicherte im Schadensfall selbst tragen muss.",
        },
        // Arbeitslosenversicherung
            {
            question: "Wer ist in der Schweiz obligatorisch in der Arbeitslosenversicherung versichert?",
            answers: [
            "Alle Arbeitnehmenden",
            "Nur Angestellte mit einem Jahreslohn über CHF 50'000",
            "Selbstständige",
            "Rentner",
            ],
            correct: "Alle Arbeitnehmenden",
            },
            {
            question: "Wie hoch ist der Prozentsatz des versicherten Lohns, den die Arbeitslosenversicherung in der Regel zahlt?",
            answers: [
            "50 % oder 70 %",
            "60 % oder 70 %",
            "70 % oder 80 %",
            "90 % oder 100 %",
            ],
            correct: "70 % oder 80 %",
            },
            ];

let currentQuestionIndex = 0;
let answersLog = Array(questions.length).fill(null);
let startTime = null;
let testEnded = false;
let stoppedTime = null;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const backToOverviewButton = document.getElementById("back-to-overview-btn");
const questionCounter = document.getElementById("question-counter");
const timerElement = document.getElementById("timer");
const resultsElement = document.getElementById("results");
const overviewElement = document.getElementById("overview");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleAnswersForQuestions() {
  questions.forEach((question) => {
    question.shuffledAnswers = [...question.answers];
    shuffleArray(question.shuffledAnswers); // Antworten mischen
  });
}

function startTimer() {
  startTime = new Date();
  setInterval(updateTimer, 1000);
}

function updateTimer() {
  const elapsed = Math.floor((new Date() - startTime) / 1000);
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  timerElement.textContent = `Zeit: ${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function showQuestion(index) {
  currentQuestionIndex = index;

  questionElement.textContent = questions[index].question;
  answerButtonsElement.innerHTML = "";
  questionCounter.textContent = `Frage: ${index + 1}/${questions.length}`;

  const selectedAnswer = answersLog[index];

  questions[index].shuffledAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");

    button.classList.remove("selected", "correct", "wrong");

    if (!testEnded) {
      if (selectedAnswer === answer) {
        button.classList.add("selected");
      }
      button.addEventListener("click", () => selectAnswer(index, button));
    } else {
      if (answer === questions[index].correct) {
        button.classList.add("correct");
      }
      if (answer === selectedAnswer && answer !== questions[index].correct) {
        button.classList.add("wrong");
      }
      button.disabled = true;
    }

    answerButtonsElement.appendChild(button);
  });

  prevButton.style.display = "block";
  nextButton.style.display = "block";
  backToOverviewButton.style.display = testEnded ? "none" : "block";
}

function selectAnswer(index, button) {
  answersLog[index] = button.textContent;

  Array.from(answerButtonsElement.children).forEach((btn) => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");
}

function showPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    showQuestion(currentQuestionIndex - 1);
  }
}
function showNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    showQuestion(currentQuestionIndex + 1);
  } else if (testEnded) {
    questionElement.style.display = "none";
    answerButtonsElement.style.display = "none";
    prevButton.style.display = "none";
    nextButton.style.display = "none";
    backToOverviewButton.style.display = "none";
    questionCounter.style.display = "none";
    timerElement.style.display = "none";
  } else {
    showOverview();
  }
}

let overviewInterval;

function updateOverviewTime() {
  if (!startTime) return;
  const elapsed = Math.floor((new Date() - startTime) / 1000);
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  const timeElement = document.querySelector("#overview p");
  if (timeElement) {
    timeElement.textContent = `Zeit: ${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  }
}

function showOverview() {
  if (testEnded) {
    // Wenn der Test beendet ist, zeige die Ergebnisse an
    showResults();
    return;
  }
  questionElement.style.display = "none";
  answerButtonsElement.style.display = "none";
  prevButton.style.display = "none";
  nextButton.style.display = "none";
  backToOverviewButton.style.display = "none";
  timerElement.style.display = "none";
  questionCounter.style.display = "none";
  overviewElement.style.display = "block";

  const answeredQuestionsCount = answersLog.filter(
    (answer) => answer !== null
  ).length;

  const elapsed = Math.floor((new Date() - startTime) / 1000);
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  overviewElement.innerHTML = `
    <h4>Übersicht</h4>
      <p id="timer">Zeit: ${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}</p> <!-- NEU -->
      <p id="question-counter">Beantwortete Fragen: ${answeredQuestionsCount}/${
    questions.length
  }</p> <!-- NEU -->
    <div class="summary-grid">
    ${questions
      .map(
        (_, index) => `
        <div 
          class="summary-item ${
            testEnded
              ? answersLog[index] === questions[index].correct
                ? "correct"
                : "wrong"
              : answersLog[index]
              ? "answered"
              : "unanswered"
          }"
          onclick="reviewQuestion(${index})">
          ${index + 1}
        </div>
      `
      )
      .join("")}
  </div>
  ${
    testEnded
      ? ""
      : '<button id="end-test-btn" class="btn2" onclick="endTest()">Test abgeben</button>'
  }
`;
  clearInterval(overviewInterval);
  overviewInterval = setInterval(updateOverviewTime, 1000);
}

function reviewQuestion(index) {
  // Verstecke die Übersicht
  overviewElement.style.display = "none";

  // Zeige die Quiz-Elemente wieder an
  questionElement.style.display = "block";
  answerButtonsElement.style.display = "flex";
  prevButton.style.display = "block";
  nextButton.style.display = "block";
  backToOverviewButton.style.display = testEnded ? "none" : "block"; // Nur im Quiz anzeigen

  currentQuestionIndex = index;
  questionCounter.textContent = `Frage: ${index + 1}/${questions.length}`;
  questionElement.textContent = questions[index].question;

  // Antworten aktualisieren
  answerButtonsElement.innerHTML = "";
  const selectedAnswer = answersLog[index];

  questions[index].shuffledAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");

    if (testEnded) {
      timerElement.style.display = "none";
      questionCounter.style.display = "none";
    } else {
      timerElement.style.display = "block";
      questionCounter.style.display = "block";
    }

    questionElement.textContent = testEnded
      ? `Frage ${index + 1}`
      : `Frage ${index + 1}/${questions.length}`;

    questionElement.textContent = questions[index].question;

    if (testEnded) {
      if (answer === questions[index].correct) {
        button.classList.add("correct"); // Richtige Antwort grün
      }
      if (answer === selectedAnswer && answer !== questions[index].correct) {
        button.classList.add("wrong"); // Falsche Antwort rot
      }
      button.disabled = true; // Deaktiviert alle Buttons
    } else {
      if (selectedAnswer === answer) {
        button.classList.add("selected"); // Gewählte Antwort blau
      }
      button.addEventListener("click", () => selectAnswer(index, button));
    }

    answerButtonsElement.appendChild(button);
  });

  function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      showQuestion(currentQuestionIndex - 1);
    }
  }

  nextButton.onclick = () => {
    if (index < questions.length - 1) {
      reviewQuestion(currentQuestionIndex); // Nächste Frage anzeigen
    } else if (testEnded) {
      showOverview(); // Zurück zur Übersicht nach der letzten Frage
    }
  };
}

function endTest() {
  clearInterval(startTimer); // Timer stoppen
  testEnded = true;

  // Berechne und speichere die gestoppte Zeit
  const elapsed = Math.floor((new Date() - startTime) / 1000);
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  stoppedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // Zeit speichern

  const correctAnswers = answersLog.filter(
    (answer, index) => answer === questions[index].correct
  ).length;

  const totalQuestions = questions.length;
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  // Verstecke alle anderen Elemente
  questionElement.style.display = "none";
  answerButtonsElement.style.display = "none";
  prevButton.style.display = "none";
  nextButton.style.display = "none";
  backToOverviewButton.style.display = "none";
  questionCounter.style.display = "none";
  timerElement.style.display = "none";
  overviewElement.style.display = "none"; // Verhindert doppelte Anzeige

  // Zeige die Ergebnisse
  resultsElement.innerHTML = `
    <h4>Quiz beendet!</h4>
<p id="question-counter">Richtige Antworten: ${correctAnswers}/${totalQuestions} (${percentage}%)</p>
    <p id="timer">Benötigte Zeit: ${stoppedTime}</p>
    <div class="summary-grid">
      ${questions
        .map(
          (_, index) => `
          <div 
            class="summary-item ${
              answersLog[index] === questions[index].correct
                ? "correct"
                : "wrong"
            }" 
            onclick="reviewQuestion(${index})">
            ${index + 1}
          </div>`
        )
        .join("")}
    </div>
    <button id="return-to-start-btn" class="btn2">Ergebnisse Speichern</button>
  `;
  resultsElement.style.display = "block";

  const directReturnButton = document.getElementById("direct-return-btn");

  if (directReturnButton) {
    directReturnButton.addEventListener("click", () => {
      console.log("Button 'Zurück zur Startseite' geklickt.");
      window.location.href = "01_Startseite.html"; // Direkt zur Startseite navigieren
    });
  }

  // Event-Listener für "Zur Startseite"-Button
  const returnToStartButton = document.getElementById("return-to-start-btn");

  if (returnToStartButton) {
    returnToStartButton.addEventListener("click", () => {
      // Knopf sofort ausblenden
      returnToStartButton.style.display = "none";

      // Starte den Upload im Hintergrund
      uploadQuizData(correctAnswers, questions.length, stoppedTime, percentage)
        .then(() => {
          console.log("Daten erfolgreich hochgeladen.");
        })
        .catch((error) => {
          console.error("Fehler beim Hochladen der Daten:", error.message);
        });
    });
  }
}

prevButton.addEventListener("click", showPreviousQuestion);
nextButton.addEventListener("click", showNextQuestion);
backToOverviewButton.addEventListener("click", showOverview);

shuffleArray(questions); // Fragen mischen
shuffleAnswersForQuestions();
startTimer();
showQuestion(currentQuestionIndex);

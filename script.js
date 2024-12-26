const header = document.getElementById("scrollHeader");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Wenn nach unten gescrollt wird, Header ausblenden
    header.style.transform = "translateY(-100%)";
  } else {
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

const questions = [
  {
    question: "Welche der folgenden Aussagen zur 2. Säule ist korrekt?",
    answers: [
      "Die Beiträge zur 2. Säule sind für alle Erwerbstätigen obligatorisch.",
      "Der Koordinationsabzug stellt sicher, dass das Einkommen doppelt abgesichert wird.",
      "Der überobligatorische Teil ist gesetzlich vorgeschrieben.",
      "Ab dem 25. Lebensjahr fliessen Beiträge neben der Risikovorsorge auch in die Altersgutschriften.",
    ],
    correct: "Ab dem 25. Lebensjahr fliessen Beiträge neben der Risikovorsorge auch in die Altersgutschriften.",
  },
  {
    question: "Welche Personengruppe ist in der 2. Säule versichert?",
    answers: [
      "Alle Personen ab 18 Jahren, unabhängig vom Einkommen.",
      "Erwerbstätige per 1. Januar des Jahres, in welchem sie 18. werden mit einem Lohn über CHF 22'050.",
      "Selbstständige ohne Altersbeschränkung.",
      "Personen mit einem Jahreseinkommen unter CHF 22'050.",
    ],
    correct: "Erwerbstätige per 1. Januar des Jahres, in welchem sie 18. werden mit einem Lohn über CHF 22'050.",
  },
  {
    question: "Was bedeutet der Begriff 'obligatorischer Teil' in der 2. Säule?",
    answers: [
      "Beiträge, die ausschliesslich von Arbeitgebern eingezahlt werden.",
      "Der versicherte Lohnanteil zwischen dem Koordinationsabzug und dem oberen Grenzbetrag.",
      "Die freiwilligen Einlagen der Arbeitnehmer.",
      "Der gesamte Lohnbetrag eines Versicherten.",
    ],
    correct: "Der versicherte Lohnanteil zwischen dem Koordinationsabzug und CHF 88'200.",
  },
  {
    question: "Welche Aussage über den Koordinationsabzug ist falsch?",
    answers: [
      "Der Koordinationsabzug beträgt 2024 CHF 25'725.",
      "Der Koordinationsabzug reduziert den versicherten Lohn in der 2. Säule.",
      "Personen mit einem Einkommen unter CHF 25'725 sind automatisch nicht versichert.",
      "Bei negativem koordiniertem Lohn wird ein Mindestbetrag versichert.",
    ],
    correct: "Personen mit einem Einkommen unter CHF 25'725 sind automatisch nicht versichert.",
  },
  {
    question: "Was passiert mit den Beiträgen zur 2. Säule, wenn eine Person die Schweiz definitiv verlässt?",
    answers: [
      "Die Beiträge verfallen automatisch.",
      "Sie können als Kapital bezogen werden.",
      "Sie werden in die 1. Säule übertragen.",
      "Die Auszahlung ist nur bei Renteneintritt möglich.",
    ],
    correct: "Sie können als Kapital bezogen werden.",
  },
  {
    question: "Welche der folgenden Aussagen zur Beitragspflicht der 1. Säule ist korrekt?",
    answers: [
      "Erwerbstätige zahlen ab dem 18. Lebensjahr Beiträge, während Nichterwerbstätige ab dem 20. Lebensjahr zahlen müssen.",
      "Erwerbstätige und Nichterwerbstätige zahlen beide ab dem 17. Lebensjahr Beiträge.",
      "Beiträge zur 1. Säule werden ausschliesslich von Angestellten gezahlt.",
      "Die Beitragspflicht endet automatisch mit dem 64. Lebensjahr.",
    ],
    correct: "Erwerbstätige zahlen ab dem 18. Lebensjahr Beiträge, während Nichterwerbstätige ab dem 20. Lebensjahr zahlen müssen.",
  },
  {
    question: "Was passiert, wenn der koordinierte Lohn unter CHF 3'675 liegt, die Eintrittsschwelle jedoch erreicht wird?",
    answers: [
      "Die Person wird nicht in die 2. Säule aufgenommen.",
      "Der Mindestbetrag von CHF 3'675 wird als versicherter Lohn angesetzt.",
      "Es wird ein Sonderbeitrag durch den Arbeitgeber geleistet.",
      "Der Lohn wird vollständig von der AHV abgesichert.",
    ],
    correct: "Der Mindestbetrag von CHF 3'675 wird als versicherter Lohn angesetzt.",
  },
  {
    question: "Was unterscheidet die 2. Säule von der 1. Säule in Bezug auf die Altersvorsorge?",
    answers: [
      "In der 2. Säule spart jeder für sich, in der 1. Säule erfolgt eine soziale Umverteilung.",
      "Die 2. Säule ist vollständig steuerfinanziert, die 1. Säule nicht.",
      "Die 2. Säule garantiert eine maximale Rente, die 1. Säule nicht.",
      "Beide Säulen beruhen auf dem Umlageverfahren.",
    ],
    correct: "In der 2. Säule spart jeder für sich, in der 1. Säule erfolgt eine soziale Umverteilung.",
  },
  {
    question: "Was passiert, wenn ein Arbeitnehmer mit Pensionskasse mehr als den maximalen Betrag in die Säule 3a einzahlt?",
    answers: [
      "Der überschüssige Betrag wird automatisch in die Säule 3b übertragen.",
      "Der überschüssige Betrag bleibt steuerlich unberücksichtigt.",
      "Der überschüssige Betrag wird vollständig versteuert.",
      "Der überschüssige Betrag wird von der Pensionskasse rückerstattet.",
    ],
    correct: "Der Betrag bleibt steuerlich unberücksichtigt.",
  },
  {
    question: "Welche Funktion hat die 1. Säule des Schweizer Vorsorgesystems?",
    answers: [
      "Sicherung des Lebensstandards im Alter",
      "Finanzierung grosser Anschaffungen wie Immobilien",
      "Absicherung der Grundbedürfnisse im Alter, bei Invalidität oder Tod",
      "Freiwilliges Sparen für persönliche Ziele",
    ],
    correct:
      "Absicherung der Grundbedürfnisse im Alter, bei Invalidität oder Tod",
  },
  {
    question:
      "Ab welchem Einkommen (Stand 2024) ist man automatisch in der 2. Säule versichert?",
    answers: [
      "CHF 22'050 pro Jahr",
      "CHF 25'725 pro Jahr",
      "CHF 18'000 pro Jahr",
      "CHF 20'000 pro Jahr",
    ],
    correct: "CHF 22'050 pro Jahr",
  },
  {
    question: "Wie unterscheidet sich die Säule 3a von der Säule 3b?",
    answers: [
      "Säule 3a ist flexibel, während Säule 3b steuerlich gebunden ist.",
      "Säule 3a ist freiwillig, Säule 3b hingegen obligatorisch.",
      "Säule 3a ist steuerlich begünstigt, während Säule 3b keine Steuervergünstigungen bietet.",
      "Säule 3a kann für Immobilien verwendet werden, Säule 3b nicht.",
    ],
    correct:
      "Säule 3a ist steuerlich begünstigt, während Säule 3b keine Steuervergünstigungen bietet.",
  },
  {
    question:
      "Welche Altersgruppe zahlt 10 % des koordinierten Lohns in die 2. Säule ein?",
    answers: [
      "25 - 34 Jahre",
      "35 - 44 Jahre",
      "45 - 54 Jahre",
      "55 - 64/65 Jahre",
    ],
    correct: "35 - 44 Jahre",
  },
  {
    question:
      "Welche Vorteile bietet die freiwillige Versicherung in der Säule 2 für Selbstständige?",
    answers: [
      "Steuerliche Vergünstigungen und Risikoversicherung bei Invalidität",
      "Zugang zu staatlichen Zuschüssen",
      "Automatische Aufnahme in die Säule 1",
      "Verpflichtung zu höheren Beiträgen",
    ],
    correct:
      "Steuerliche Vergünstigungen und Risikoversicherung bei Invalidität",
  },
  {
    question: "Welches Ziel verfolgt die 1. Säule des 3-Säulen-Systems?",
    answers: [
      "Kapital für den Ruhestand aufbauen",
      "Existenzsicherung im Alter oder bei Invalidität",
      "Finanzierung von Luxusausgaben im Ruhestand",
      "Maximierung der Rendite durch Investitionen",
    ],
    correct: "Existenzsicherung im Alter oder bei Invalidität",
  },

  {
    question: "Welche Leistungen gehören zur 1. Säule des Schweizer Vorsorgesystems?",
    answers: [
      "AHV, IV, EO, EL",
      "AHV, BVG, Säule 3a",
      "IV, EO, EL",
      "AHV, IV",
    ],
    correct: "AHV, IV, EO, EL",
  },
  {
    question: "Wie hoch ist der maximale monatliche AHV-Rentenbetrag für Einzelpersonen (Stand 2024)?",
    answers: ["CHF 1'800", "CHF 2'450", "CHF 3'675", "CHF 4'125"],
    correct: "CHF 2'450",
  },
  {
    question: "Was passiert, wenn eine Person nicht alle Beiträge in die 1. Säule einzahlt?",
    answers: [
      "Es entstehen keine Konsequenzen",
      "Die Person verliert den Versicherungsschutz",
      "Es drohen Rentenkürzungen",
      "Die Beiträge werden rückwirkend erhöht",
    ],
    correct: "Es drohen Rentenkürzungen",
  },
  {
    question: "Was ist eine Ergänzungsleistung (EL)?",
    answers: [
      "Ein Zuschlag zur AHV-Rente",
      "Eine Steuervergünstigung für Rentner",
      "Eine staatliche Unterstützung bei unzureichender AHV-Rente",
      "Ein Zuschuss zur Krankenversicherung",
    ],
    correct: "Eine staatliche Unterstützung bei unzureichender AHV-Rente",
  },
  {
    question: "Welches Ziel verfolgt die 2. Säule des 3-Säulen-Systems?",
    answers: [
      "Existenzsicherung",
      "Erhalt des gewohnten Lebensstandards im Alter",
      "Finanzierung von Luxusimmobilien",
      "Umverteilung zwischen Arm und Reich",
    ],
    correct: "Erhalt des gewohnten Lebensstandards im Alter",
  },
  {
    question: "Wie wird die 2. Säule finanziert?",
    answers: [
      "Durch Steuern",
      "Durch das Kapitaldeckungsverfahren",
      "Durch das Umlageverfahren",
      "Durch freiwillige Beiträge",
    ],
    correct: "Durch das Kapitaldeckungsverfahren",
  },
  {
    question: "Was bezeichnet der Koordinationsabzug in der 2. Säule?",
    answers: [
      "Den Mindestbeitrag zur Altersvorsorge",
      "Die Differenz zwischen AHV und Pensionskasse",
      "Den Teil des Lohns, der nicht in die 2. Säule einfliesst",
      "Den maximal versicherten Lohn",
    ],
    correct: "Den Teil des Lohns, der nicht in die 2. Säule einfliesst",
  },
  {
    question: "Welcher Betrag kann 2024 maximal in die Säule 3a eingezahlt werden und vom steuerbaren Einkommen abgezogen werden? (Angestellte mit Pensionskasse)",
    answers: ["CHF 5'672", "CHF 7'056", "CHF 9'321", "CHF 15'165"],
    correct: "CHF 7'056",
  },
  {
    question: "Wann kann das Kapital aus der Säule 3a vorzeitig bezogen werden?",
    answers: [
      "Beim Kauf eines Autos",
      "Beim Wechsel in die Selbstständigkeit",
      "Bei Arbeitslosigkeit",
      "Bei Heirat",
    ],
    correct: "Beim Wechsel in die Selbstständigkeit",
  },
  {
    question: "Welche Aussage beschreibt das Umlageverfahren der 1. Säule korrekt?",
    answers: [
      "Beiträge der Erwerbstätigen werden individuell angespart und verzinst.",
      "Beiträge der Erwerbstätigen werden direkt zur Finanzierung der Renten und Unterstützungsleistungen verwendet.",
      "Der Staat finanziert die 1. Säule vollständig aus Steuermitteln.",
      "Renten werden ausschliesslich aus den Einnahmen der Mehrwertsteuer gezahlt.",
    ],
    correct: "Beiträge der Erwerbstätigen werden direkt zur Finanzierung der Renten und Unterstützungsleistungen verwendet.",
  },
  {
    question: "Welche Aussage zur 1. Säule ist korrekt?",
    answers: [
      "Jeder erhält Renten proportional zu seinen Einzahlungen.",
      "Die Rentenhöhe ist unabhängig von der Beitragsdauer.",
      "Alle zahlen prozentual zu ihrem Einkommen, erhalten bei vollständiger Beitragsdauer jedoch dieselbe maximale AHV-Rente.",
      "Einkommensstarke Personen erhalten höhere Renten als einkommensschwache.",
    ],
    correct: "Alle zahlen prozentual zu ihrem Einkommen, erhalten bei vollständiger Beitragsdauer jedoch dieselbe maximale AHV-Rente.",
  },
  {
    question: "Welcher Prozentsatz des Bruttolohns wird vom Arbeitnehmer für die 1. Säule abgezogen (Stand 2024)?",
    answers: ["8,7 %", "10,6 %", "5,3 %", "15 %"],
    correct: "5,3 %",
  },
  {
    question: "Welche Aussage zur Steuerbegünstigung der Säule 3a ist korrekt?",
    answers: [
      "Einzahlungen und Auszahlungen haben keinen Einfluss auf die Steuern.",
      "Einzahlungen in die Säule 3a können vom steuerbaren Einkommen abgezogen werden, während Auszahlungen besteuert werden.",
      "Sowohl Einzahlungen als auch Auszahlungen der Säule 3a werden besteuert.",
      "Nur Selbstständige müssen Auszahlungen aus der Säule 3a versteuern.",
    ],
    correct: "Einzahlungen in die Säule 3a können vom steuerbaren Einkommen abgezogen werden, während Auszahlungen besteuert werden.",
  },
  {
    question: "Wie hoch ist der maximale Einzahlungsbetrag in die Säule 3a für Selbstständige ohne Pensionskasse (Stand 2024)?",
    answers: ["CHF 25'390", "CHF 28'750", "CHF 35'280", "CHF 38'540"],
    correct: "CHF 35'280",
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
              answersLog[index] === questions[index].correct ? "correct" : "wrong"
            }" 
            onclick="reviewQuestion(${index})">
            ${index + 1}
          </div>`
        )
        .join("")}
    </div>
    <button id="return-to-start-btn" class="btn2">Ergebnisse Speichern</button>
    <button id="direct-return-btn" class="btn2">Test beenden</button>
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

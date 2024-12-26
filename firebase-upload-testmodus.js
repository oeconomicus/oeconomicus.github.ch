// Importieren der Firebase-Module
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Firebase-Konfiguration
const firebaseConfig = {
    apiKey: "AIzaSyCdD1CLr1E2PMOo9Ueg0P0cOW0UDzzmk1k",
    authDomain: "oeconomicus-cfd19.firebaseapp.com",
    databaseURL: "https://oeconomicus-cfd19-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "oeconomicus-cfd19",
    storageBucket: "oeconomicus-cfd19.firebasestorage.app",
    messagingSenderId: "100859316236",
    appId: "1:100859316236:web:55592252cbd4a536290629",
    measurementId: "G-X1QX55N94H"
};

// Firebase-Initialisierung
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/**
 * Hochladen der Quizdaten an Firebase
 * @param {number} correctAnswers Anzahl der richtigen Antworten
 * @param {number} totalQuestions Gesamtanzahl der Fragen
 * @param {string} elapsedTime Die benötigte Zeit
 */

  function uploadQuizData(correctAnswers, totalQuestions, elapsedTime, percentage) {
        const userId = `user_${Date.now()}`;
    const quizData = {
      correctAnswers,
      totalQuestions,
      stoppedTime,
      percentage: `${(correctAnswers/totalQuestions) * 100}%`,
      timestamp: new Date().toISOString()
    };
  
    set(ref(db, `quizResults/${userId}`), quizData)
      .then(() => {
        console.log("Daten erfolgreich hochgeladen:", quizData);
      })
      .catch((error) => {
        console.error("Fehler beim Hochladen der Daten:", error.message);
      });
  }
  
  export { uploadQuizData };
  
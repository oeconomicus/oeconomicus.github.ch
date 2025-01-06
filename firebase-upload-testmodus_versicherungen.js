// Importieren der Firebase-Module
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIN3kJDcxZPYgSj8B_550QFlXQ1gANtnc",
  authDomain: "versicherung-b4224.firebaseapp.com",
  databaseURL: "https://versicherung-b4224-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "versicherung-b4224",
  storageBucket: "versicherung-b4224.firebasestorage.app",
  messagingSenderId: "912451444176",
  appId: "1:912451444176:web:7912e86c15d62bcc212dd5",
  measurementId: "G-3SLVCJM25F"
};

// Initialize Firebase
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
  
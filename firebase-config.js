// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCiqMqOFF4ZwbRYV7pm1PLz1P_9rI9Rb4I",
  authDomain: "portfolio-keo.firebaseapp.com",
  projectId: "portfolio-keo",
  storageBucket: "portfolio-keo.firebasestorage.app",
  messagingSenderId: "861269551239",
  appId: "1:861269551239:web:5c8b43addefd6df4d07022",
  measurementId: "G-YFNJG5JY9F"
};

// Initialiser Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();

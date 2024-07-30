
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCl1VOF6wbuSxksHHmkKM8zWq2SJmOnUbs",
    authDomain: "fir-authentication-test-p.firebaseapp.com",
    projectId: "fir-authentication-test-p",
    storageBucket: "fir-authentication-test-p.appspot.com",
    messagingSenderId: "561208592233",
    appId: "1:561208592233:web:92099c65418ba316741ff8",
    measurementId: "G-KQRG50L606"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);
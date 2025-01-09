import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd7mGGS4TrkQXoBLbKth6xloRKDMm57H4",
  authDomain: "project---asfaleia-ypologiston.firebaseapp.com",
  projectId: "project---asfaleia-ypologiston",
  storageBucket: "project---asfaleia-ypologiston.firebasestorage.app",
  messagingSenderId: "198574425736",
  appId: "1:198574425736:web:cd463162d583704ee4813d",
  measurementId: "G-1KWYE423JP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//submit button
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Connecting with your account");
      window.location.href = "message.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
   
});

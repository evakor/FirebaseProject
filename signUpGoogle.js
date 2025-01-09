import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";




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
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider(); //Create an instance of the Google provider object:

const googleLogin = document.getElementById("google");
googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        console.log('User is signed in');
        window.location.href = "loggedIn.html";
        
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
       alert(errorMessage);
      });
})


 
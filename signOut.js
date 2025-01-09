import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {getAuth,signOut} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAd7mGGS4TrkQXoBLbKth6xloRKDMm57H4",
  authDomain: "project---asfaleia-ypologiston.firebaseapp.com",
  projectId: "project---asfaleia-ypologiston",
  storageBucket: "project---asfaleia-ypologiston.firebasestorage.app",
  messagingSenderId: "198574425736",
  appId: "1:198574425736:web:cd463162d583704ee4813d",
  measurementId: "G-1KWYE423JP",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//logout method
const logout = document.getElementById("logout");
logout.addEventListener("click", function(){
  signOut(auth)
    .then(() => {
      console.log("User signed out");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log(error);
    });

})


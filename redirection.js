import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

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

onAuthStateChanged(auth, (user) => {
if (!user) {
    window.location.href = "index.html";
}
});
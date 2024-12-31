// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd7mGGS4TrkQXoBLbKth6xloRKDMm57H4",
  authDomain: "project---asfaleia-ypologiston.firebaseapp.com",
  projectId: "project---asfaleia-ypologiston",
  storageBucket: "project---asfaleia-ypologiston.firebasestorage.app",
  messagingSenderId: "198574425736",
  appId: "1:198574425736:web:cd463162d583704ee4813d",
  measurementId: "G-1KWYE423JP"
};


const app = initializeApp(firebaseConfig); // Initialize Firebase

// Export Firebase authentication, firestore, and storage
const auth = getAuth(app); //initialize firebase authentication and get a reference to the service
const db = getFirestore(firebaseConfig) //initialize cloud firestore and get a reference to the service
const storage = firebase.storage();

export { auth, db, app, storage };
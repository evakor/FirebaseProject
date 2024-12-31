import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";
import "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase authentication, firestore, and storage
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebaseApp;
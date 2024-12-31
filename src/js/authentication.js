// import {auth, db} from './firebase-config';

// //Create new user
// async function createUser (email, password){
//     try{
//     //First we need to check if the user already exists in Firestore
//     const usersRef = db.collection("users").where("email", "==", email);
//     const already = await usersRef.get();
//     if (!already.empty){
//         throw new Error('User already exists with this email. Try the sign in method!')
//     }

//     //If the user doesn't exist, we have to create a new record
//     const newUser = await auth.createUserWithEmailAndPassword(email, password);
//     const user = newUser.user;

//     //push this user to the db
//     await db.collection('Users').doc(user.uid).set({
//         email: email,
//         createdAt: new Date()
//     });
//     return user;
//     }catch(error){
//         throw error;
//     }
// }

// //User sign in
// function login(email, password){
//     return auth.signInWithEmailAndPassword(email, password);
// }

// //User logout
// function logout(){
//     return auth.signOut();
// }

// export {createUser, login, logout}

import { auth, db } from "./firebase-config";
import firebase from "firebase/app";
import "firebase/auth";

// Handles Email and Password Sign-Up
document
  .getElementById("signUpForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Signed up:", userCredential.user);
        // Redirect or manage user session
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  });

// Handles Email and Password Sign-In
document
  .getElementById("signInForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Signed in:", userCredential.user);
        // Redirect or manage user session
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  });

// Handles Google Sign-In
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log("Google sign in:", result.user);
      // Redirect or manage user session
    })
    .catch((error) => {
      console.error("Google sign in error:", error);
    });
}

// Handles Google Sign-Up (typically the same as sign-in)
function signUpWithGoogle() {
  signInWithGoogle(); // As signing up with Google inherently signs in the user
}

export { signInWithGoogle, signUpWithGoogle };

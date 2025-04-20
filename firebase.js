
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxFy9-vbiYgEz166bs00iG4abtYLHPIV0",
  authDomain: "lostandback-fee16.firebaseapp.com",
  projectId: "lostandback-fee16",
  storageBucket: "lostandback-fee16.firebasestorage.app",
  messagingSenderId: "1028605936220",
  appId: "1:1028605936220:web:deebf532af5c57ef689c99",
  measurementId: "G-1XL6YCB77H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Signup
window.handleSignup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
    alert("Inscription réussie ! Vérifiez votre e-mail pour activer votre compte.");
  } catch (error) {
    alert("Erreur : " + error.message);
  }
};

// Sign in with Google
window.googleLogin = async function () {
  try {
    await signInWithPopup(auth, provider);
    alert("Connexion avec Google réussie !");
  } catch (error) {
    alert("Erreur : " + error.message);
  }
};

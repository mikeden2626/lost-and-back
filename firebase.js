
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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

export { auth };

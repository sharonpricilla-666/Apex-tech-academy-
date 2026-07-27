import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuvTkubffPCOgxq70Vy6p42W3HJnamuHY",
  authDomain: "apex-tech-academy.firebaseapp.com",
  projectId: "apex-tech-academy",
  storageBucket: "apex-tech-academy.firebasestorage.app",
  messagingSenderId: "196815817165",
  appId: "1:196815817165:web:7aee1b17fb19fdcd661c84",
  measurementId: "G-WR9XRGH26K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
};

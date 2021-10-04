// Dependencias
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAHGdJFnlc0-CZW4wBy3avZs8l3pXhfkn8",
  authDomain: "as-7866e.firebaseapp.com",
  projectId: "as-7866e",
  storageBucket: "as-7866e.appspot.com",
  messagingSenderId: "197262769774",
  appId: "1:197262769774:web:45904276fcb7dd82a1f07f"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const db = getFirestore(app);

export { app, google, db }
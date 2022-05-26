import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "student-attandance-system.firebaseapp.com",
  projectId: "student-attandance-system",
  storageBucket: "student-attandance-system.appspot.com",
  messagingSenderId: "675444929179",
  appId: "1:675444929179:web:16dea321b341b8ef0a4c3e"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
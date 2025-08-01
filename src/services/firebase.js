import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8tTR2ReARybwlGLyqzHoU226Q-OxQGOo",
  authDomain: "fintrack-8122b.firebaseapp.com",
  projectId: "fintrack-8122b",
  storageBucket: "fintrack-8122b.firebasestorage.app",
  messagingSenderId: "157939323337",
  appId: "1:157939323337:web:036f240d4eb4bf5efd9818"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

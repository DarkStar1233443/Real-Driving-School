// Import Firebase SDK modules directly from Google CDN (Works natively on GitHub Pages)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlRiz74eFt5zWOIowVEOgxQEAHuLfM3e0",
  authDomain: "rds-a95fc.firebaseapp.com",
  projectId: "rds-a95fc",
  storageBucket: "rds-a95fc.firebasestorage.app",
  messagingSenderId: "935312096631",
  appId: "1:935312096631:web:a3183d86ad0c0ffec5b572",
  measurementId: "G-W84EM7C47F"
};

// Initialize Firebase App & Services
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export utilities for app logic
export { 
    db, 
    auth, 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
};

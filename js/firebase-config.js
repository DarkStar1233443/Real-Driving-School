// Import Firebase SDKs via CDN for browser compatibility
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, onSnapshot, updateDoc, deleteDoc, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your exact web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlRiz74eFt5zWOIowVEOgxQEAHuLfM3e0",
  authDomain: "rds-a95fc.firebaseapp.com",
  projectId: "rds-a95fc",
  storageBucket: "rds-a95fc.firebasestorage.app",
  messagingSenderId: "935312096631",
  appId: "1:935312096631:web:a3183d86ad0c0ffec5b572",
  measurementId: "G-W84EM7C47F"
};

// Initialize Firebase App, Auth, and Firestore Database
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export everything so your other HTML files can use it securely
export { 
    auth, 
    db, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    collection, 
    doc, 
    setDoc, 
    onSnapshot, 
    updateDoc, 
    deleteDoc, 
    getDocs, 
    addDoc 
};

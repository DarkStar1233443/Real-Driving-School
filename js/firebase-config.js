import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, onSnapshot, updateDoc, deleteDoc, getDocs, addDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlRiz74eFt5zWOIowVEOgxQEAHuLfM3e0",
  authDomain: "rds-a95fc.firebaseapp.com",
  projectId: "rds-a95fc",
  storageBucket: "rds-a95fc.firebasestorage.app",
  messagingSenderId: "935312096631",
  appId: "1:935312096631:web:a3183d86ad0c0ffec5b572",
  measurementId: "G-W84EM7C47F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { 
    auth, db, storage, ref, uploadBytes, getDownloadURL,
    signInWithEmailAndPassword, onAuthStateChanged, signOut, 
    collection, doc, setDoc, onSnapshot, updateDoc, deleteDoc, getDocs, addDoc, getDoc 
};

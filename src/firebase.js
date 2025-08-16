// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCjgf2Xy23zN1mYN_0KXl3Y8Qv7D0Qyj6Q",
  authDomain: "social-media-a1d93.firebaseapp.com",
  databaseURL: "https://social-media-a1d93-default-rtdb.firebaseio.com",  // Not needed for Firestore, just keep it for legacy purposes
  projectId: "social-media-a1d93",
  storageBucket: "social-media-a1d93.firebasestorage.app",
  messagingSenderId: "149822954669",
  appId: "1:149822954669:web:51e60fc1f657345ca77a24",
  measurementId: "G-ZDJZ60CTYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, addDoc, collection, getDocs };

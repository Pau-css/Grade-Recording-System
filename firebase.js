// Import necessary Firebase services
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDLmLzMKUF7Zt2SmewrSuQiuZKiDXTfE_M",
  authDomain: "grade-recording-system.firebaseapp.com",
  projectId: "grade-recording-system",
  storageBucket: "grade-recording-system.firebasestorage.app",
  messagingSenderId: "631523657243",
  appId: "1:631523657243:web:35f33cff96498804a45abe",
  measurementId: "G-1MNR1WNEWB"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Exporting firebaseApp, db, and auth
export { firebaseApp, db, auth };

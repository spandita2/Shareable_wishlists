// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
//import {getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "secret",
  authDomain: "shareable-wishlists-710bf.firebaseapp.com",
  projectId: "shareable-wishlists-710bf",
  storageBucket: "shareable-wishlists-710bf.firebasestorage.app",
  messagingSenderId: "700031085097",
  appId: "1:700031085097:web:00116d170b95b2d4300a38",
  measurementId: "G-5FR2XVRJ5Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db=getFirestore(app);

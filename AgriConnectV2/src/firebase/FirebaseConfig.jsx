// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVEzpUePSleewreKAXWO2fRrV5fLmfEcY",
  authDomain: "agriconnect-a2984.firebaseapp.com",
  projectId: "agriconnect-a2984",
  storageBucket: "agriconnect-a2984.appspot.com",
  messagingSenderId: "992955156890",
  appId: "1:992955156890:web:7f401463259e4b32759223",
  measurementId: "G-0N31WEHYWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }

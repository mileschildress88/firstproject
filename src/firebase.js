// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBgCmLaV76vxpg1_tEAd5wmXcNZBu9CNJ0",
    authDomain: "firstproject-db849.firebaseapp.com",
    projectId: "firstproject-db849",
    storageBucket: "firstproject-db849.firebasestorage.app",
    messagingSenderId: "505450159522",
    appId: "1:505450159522:web:249f169ecb884ec5b8e6fb",
    measurementId: "G-7P5XDXWLMS"
  };



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
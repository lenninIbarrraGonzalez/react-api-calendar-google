// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCup2IY_7RGdAddvPGHssTvMLH3WAkW6pc',
  authDomain: 'calendar-app-91813.firebaseapp.com',
  projectId: 'calendar-app-91813',
  storageBucket: 'calendar-app-91813.firebasestorage.app',
  messagingSenderId: '506393747290',
  appId: '1:506393747290:web:664c45e007e323b2821d63',
  measurementId: 'G-FL1YF47P1P',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

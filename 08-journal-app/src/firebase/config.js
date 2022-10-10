// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD78SsUO1yTIiR3Nodbe-yfvwe3SqVT9_8",
  authDomain: "react-cursos-107a2.firebaseapp.com",
  projectId: "react-cursos-107a2",
  storageBucket: "react-cursos-107a2.appspot.com",
  messagingSenderId: "235868029856",
  appId: "1:235868029856:web:a20e355c7e93155bea9ac5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

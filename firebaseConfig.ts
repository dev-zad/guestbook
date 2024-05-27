// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI2ofBhruaIfQ_j89Ux00ZH_7ulC0suUY",
  authDomain: "photo-gallery-165a9.firebaseapp.com",
  projectId: "photo-gallery-165a9",
  storageBucket: "photo-gallery-165a9.appspot.com",
  messagingSenderId: "138201503670",
  appId: "1:138201503670:web:2686a933dc87b42e341317",
  measurementId: "G-J1S9Z3S89F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);


export { auth, storage, db };

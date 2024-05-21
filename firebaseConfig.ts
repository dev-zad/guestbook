// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTQU99NLZ8CRA4DknMEjG-p0--dTldSSA",
  authDomain: "guestbook-6536d.firebaseapp.com",
  projectId: "guestbook-6536d",
  storageBucket: "guestbook-6536d.appspot.com",
  messagingSenderId: "457033047842",
  appId: "1:457033047842:web:231975d542a67c8c500f7b",
  measurementId: "G-Q3GREJV3TD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDTQU99NLZ8CRA4DknMEjG-p0--dTldSSA",
    authDomain: "guestbook-6536d.firebaseapp.com",
    projectId: "guestbook-6536d",
    storageBucket: "guestbook-6536d.appspot.com",
    messagingSenderId: "457033047842",
    appId: "1:457033047842:web:231975d542a67c8c500f7b",
    measurementId: "G-Q3GREJV3TD"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default app;

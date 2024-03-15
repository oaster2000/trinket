// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa349CRZKeHZFCPg8GlkdR-9nmZbQHHD8",
  authDomain: "pixel-trinkets.firebaseapp.com",
  databaseURL: "https://pixel-trinkets-default-rtdb.firebaseio.com",
  projectId: "pixel-trinkets",
  storageBucket: "pixel-trinkets.appspot.com",
  messagingSenderId: "588633095646",
  appId: "1:588633095646:web:f7d09f546510d29cf9b14f",
  measurementId: "G-LN554QJQQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
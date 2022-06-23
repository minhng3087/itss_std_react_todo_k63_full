import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFh_EVhjXHRTz2EDo0ju57WjsmbkgG5Dk",
  authDomain: "fir-2f4c1.firebaseapp.com",
  projectId: "fir-2f4c1",
  storageBucket: "fir-2f4c1.appspot.com",
  messagingSenderId: "148026687693",
  appId: "1:148026687693:web:f98038f8d9e256f1f12984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
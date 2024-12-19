// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEdtm18Fq1hOPEH2LRwVE5qMzVoFf82oo",
  authDomain: "job-portal-auth-4520c.firebaseapp.com",
  projectId: "job-portal-auth-4520c",
  storageBucket: "job-portal-auth-4520c.firebasestorage.app",
  messagingSenderId: "240348777908",
  appId: "1:240348777908:web:9331947fbbde4135e8f6e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
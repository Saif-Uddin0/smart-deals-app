// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAePAzbjvtedKN64TkAlgGNXPwHrphf65Q",
  authDomain: "smart-deals-af8ed.firebaseapp.com",
  projectId: "smart-deals-af8ed",
  storageBucket: "smart-deals-af8ed.firebasestorage.app",
  messagingSenderId: "1064586166471",
  appId: "1:1064586166471:web:3b4692d6ca7f5dd77a7ee2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
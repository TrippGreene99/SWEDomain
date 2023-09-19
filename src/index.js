// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlnJmrKOkq6NSGieCM19l8OQOFJLetbq4",
  authDomain: "bookbreeze-13949.firebaseapp.com",
  projectId: "bookbreeze-13949",
  storageBucket: "bookbreeze-13949.appspot.com",
  messagingSenderId: "998049318822",
  appId: "1:998049318822:web:f1e73e1b8150f6d5697167",
  measurementId: "G-W7J6G41JPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
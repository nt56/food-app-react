// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_IAsW8jGL3S_SHXPzwnk_fcKfoF35v_s",
  authDomain: "food-app-7c572.firebaseapp.com",
  projectId: "food-app-7c572",
  storageBucket: "food-app-7c572.firebasestorage.app",
  messagingSenderId: "262487454135",
  appId: "1:262487454135:web:9c80f4dddcf905e2107832",
  measurementId: "G-TDC8XCSLDC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

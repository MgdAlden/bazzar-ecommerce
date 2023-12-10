// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "bazzar-ecommerce.firebaseapp.com",
  projectId: "bazzar-ecommerce",
  storageBucket: "bazzar-ecommerce.appspot.com",
  messagingSenderId: "771277300703",
  appId: "1:771277300703:web:102009f7e547219c561a6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
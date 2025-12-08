// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfa1N39M51C0iV21nmYcKK3iGet5UL19Q",
  authDomain: "coffee-store-app-13465.firebaseapp.com",
  projectId: "coffee-store-app-13465",
  storageBucket: "coffee-store-app-13465.firebasestorage.app",
  messagingSenderId: "412149365952",
  appId: "1:412149365952:web:5709399c0f05378eb70125"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
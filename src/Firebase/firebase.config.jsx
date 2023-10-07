// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMZM4gKAsTf9dtxIMW7kn3Tw-LjJXI0lk",
  authDomain: "health-fairs-e993d.firebaseapp.com",
  projectId: "health-fairs-e993d",
  storageBucket: "health-fairs-e993d.appspot.com",
  messagingSenderId: "896519181469",
  appId: "1:896519181469:web:8bea802ef6a551d01af074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy4N_AcVKmyjAYx-npxCa1khWalN4Ro_s",
  authDomain: "test-8b626.firebaseapp.com",
  projectId: "test-8b626",
  storageBucket: "test-8b626.appspot.com",
  messagingSenderId: "353032317856",
  appId: "1:353032317856:web:919c7fa4c98ed35bf9d2c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

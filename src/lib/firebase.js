import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw7La_Jwlu4LbrPHYnlAqRWIyC47CwRk8",
  authDomain: "fir-dangkhacdat.firebaseapp.com",
  projectId: "fir-dangkhacdat",
  storageBucket: "fir-dangkhacdat.appspot.com",
  messagingSenderId: "910926735912",
  appId: "1:910926735912:web:0dc072853b097c8b4e231d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
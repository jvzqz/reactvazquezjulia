// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCynDkQWyYDVeEQkhTsH5shiyMNDTsUfzk",
  authDomain: "uvaycuajo-react.firebaseapp.com",
  projectId: "uvaycuajo-react",
  storageBucket: "uvaycuajo-react.appspot.com",
  messagingSenderId: "272402843552",
  appId: "1:272402843552:web:9c334fb74fbadfb06e06c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
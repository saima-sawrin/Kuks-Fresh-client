// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoaS0fYHEkNSW8jwKYdJmbUS1G_zKiK-c",
  authDomain: "kuks-food.firebaseapp.com",
  projectId: "kuks-food",
  storageBucket: "kuks-food.appspot.com",
  messagingSenderId: "714706099206",
  appId: "1:714706099206:web:f4a21f4bc8fea5a8c2b787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoyKYS3g7rIUB-fMWN79xV0ooGtxKKSoU",
  authDomain: "city-hospital-1699c.firebaseapp.com",
  projectId: "city-hospital-1699c",
  storageBucket: "city-hospital-1699c.appspot.com",
  messagingSenderId: "447095863282",
  appId: "1:447095863282:web:f62421eeddcafd6415dd6b",
  measurementId: "G-LES8HCTTNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
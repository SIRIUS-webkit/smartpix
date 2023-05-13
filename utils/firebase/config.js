// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUu30USQQ2OvDUXN3tAob8zzkxoRUia6M",
  authDomain: "smartpix-72c5b.firebaseapp.com",
  projectId: "smartpix-72c5b",
  storageBucket: "smartpix-72c5b.appspot.com",
  messagingSenderId: "514929314992",
  appId: "1:514929314992:web:6030fa0c536af9293ebf75",
  measurementId: "G-JR0GF4GZHE",
};

// Initialize Firebase
const initFirebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// const initFirebaseApp = () => {
//   return app;
// };

export default initFirebaseApp;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyAiBtGOd6tBw1y5IqLCF520U4VeXbVp4U8",
//   authDomain: "blood-donation-1ed49.firebaseapp.com",
//   projectId: "blood-donation-1ed49",
//   storageBucket: "blood-donation-1ed49.appspot.com",
//   messagingSenderId: "986293207268",
//   appId: "1:986293207268:web:e416e9b26c6c5c43602cf1"
  apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
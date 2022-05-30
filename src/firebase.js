import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1_bXW3ji7RzgMXsgxPX69WvQ7WUSdmDE",
  authDomain: "react-authentication-f139d.firebaseapp.com",
  projectId: "react-authentication-f139d",
  storageBucket: "react-authentication-f139d.appspot.com",
  messagingSenderId: "661542630052",
  appId: "1:661542630052:web:cb067989bad7885fb96c31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

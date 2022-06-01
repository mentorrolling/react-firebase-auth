import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMsgLeEBbuVYLhtcypPKlIxr45fX3oCcE",
  authDomain: "react-authentication-sitenso.firebaseapp.com",
  projectId: "react-authentication-sitenso",
  storageBucket: "react-authentication-sitenso.appspot.com",
  messagingSenderId: "38989667194",
  appId: "1:38989667194:web:bc4ec682f8ec9ef7f7d4c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

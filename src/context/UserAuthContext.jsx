import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

import { auth } from "../firbase";

export const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  //funcion para dar de alta usuario

  function signUp(email, password, profile) {
    // const { displayName, photoURL } = profile;
    // createUserWithEmailAndPassword(auth, email, password).then(
    //   (userCredential) => {
    //     console.log(userCredential);
    //     updateProfile(userCredential.user, { displayName, photoURL }).then(
    //       (respuesta) => {
    //         console.log(respuesta);
    //       }
    //     );
    //   }
    // );

    return createUserWithEmailAndPassword(auth, email, password);
  }

  function updateUser(profile) {
    const { displayName, photoURL } = profile;
    return updateProfile(auth.currentUser, { displayName, photoURL });
  }

  function verificationEmail() {
    return sendEmailVerification(auth.currentUser);
  }

  //funcion para el login
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //funcion para el logout
  function logOut() {
    return signOut(auth);
  }

  //funcion para login de Google
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        logOut,
        signUp,
        updateUser,
        verificationEmail,
        googleSignIn,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
};

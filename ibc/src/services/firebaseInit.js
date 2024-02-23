import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

import { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const FirebaseContext = createContext(null);




// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB_Vcs3wry5EZAnlVDrBIdG3uk0HogOsyc",
  authDomain: "ibc-project-397e1.firebaseapp.com",
  databaseURL:"https://ibc-project-397e1-default-rtdb.firebaseio.com/",
  projectId: "ibc-project-397e1",
  storageBucket: "ibc-project-397e1.appspot.com",
  messagingSenderId: "984964084845",
  appId: "1:984964084845:web:9200d0db695fb4a6bcfb64",
  measurementId: "G-E5SE7Y4V71"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
export const storage = app.storage();
export const firestore = app.firestore();
export const auth = app.auth();
export const provider = new firebase.auth.GoogleAuthProvider();







// context api
export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password);


  const signinUserWithEmailAndPass = (email, password) => signInWithEmailAndPassword(auth, email, password);


  const sendPwdResetEmail = (email) => sendPasswordResetEmail(auth, email);

  return <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword ,signinUserWithEmailAndPass,sendPwdResetEmail}}>
    {props.children}
  </FirebaseContext.Provider>
};
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8QZ9-hU14NqyrgP_-j_PD7Q5vRX2Z9hk",
  authDomain: "auth-81693.firebaseapp.com",
  databaseURL: "https://auth-81693.firebaseio.com",
  projectId: "auth-81693",
  storageBucket: "auth-81693.appspot.com",
  messagingSenderId: "856730303472",
  appId: "1:856730303472:web:7c4fb023e3ba6276157b35",
  measurementId: "G-4C95ZWTRB1"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }

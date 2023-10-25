import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCtozMHWCVpRIbf08hOIz5k7tRw1ftB4xY',
  authDomain: 'prj-ibc.firebaseapp.com',
  databaseURL: 'https://prj-ibc-default-rtdb.firebaseio.com',
  projectId: 'prj-ibc',
  storageBucket: 'prj-ibc.appspot.com',
  messagingSenderId: '774653224004',
  appId: '1:774653224004:web:b3b27805d54f684d598811',
  measurementId: 'G-SD1SM3LKGH'
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
export const storage = app.storage();
export const firestore = app.firestore();
export const auth = app.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

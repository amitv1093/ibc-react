//this component made for login and it is use in header file

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCtozMHWCVpRIbf08hOIz5k7tRw1ftB4xY",
  authDomain: "prj-ibc.firebaseapp.com",
  databaseURL: "https://prj-ibc-default-rtdb.firebaseio.com",
  projectId: "prj-ibc",
  storageBucket: "prj-ibc.appspot.com",
  messagingSenderId: "774653224004",
  appId: "1:774653224004:web:b3b27805d54f684d598811",
  measurementId: "G-SD1SM3LKGH",
};

 
    firebase.initializeApp(firebaseConfig);
   

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }

  
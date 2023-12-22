import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { firestore, getFirestore } from "firebase/firestore";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const imgDB = getStorage(app);
const txtDB = getFirestore(app);

export {imgDB,txtDB};


























// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getStorage} from "firebase/storage";
// import firebase from 'firebase/compat/app';


// import 'firebase/storage';
// import 'firebase/firestore';



// const firebaseConfig = {
//   apiKey: "AIzaSyDWvA9sHIVqd45l9UlPDRca1aTwaI4dgdA",
//   authDomain: "ibc-project-980f6.firebaseapp.com",
//   databaseURL: "https://ibc-project-980f6-default-rtdb.firebaseio.com",
//   projectId: "ibc-project-980f6",
//   storageBucket: "ibc-project-980f6.appspot.com",
//   messagingSenderId: "130699552769",
//   appId: "1:130699552769:web:2d8116a99ef8bca1747800",
//   measurementId: "G-H91Z92LGP7"
// };

// // if (!firebase.apps.length) {
// //   firebase.initializeApp(firebaseConfig);
// // }






// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const storage = getStorage(app);
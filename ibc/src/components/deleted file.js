import React, { useState, useEffect } from "react";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCtozMHWCVpRIbf08hOIz5k7tRw1ftB4xY",
  authDomain: "prj-ibc.firebaseapp.com",
  databaseURL: "https://prj-ibc-default-rtdb.firebaseio.com",
  projectId: "prj-ibc",
  storageBucket: "prj-ibc.appspot.com",
  messagingSenderId: "774653224004",
  appId: "1:774653224004:web:b3b27805d54f684d598811",
  measurementId: "G-SD1SM3LKGH"
};

firebase.initializeApp(config);

const database = firebase.database();

function UserRecord() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userRef = database.ref('users/1234567890');

    userRef.get().then((snapshot) => {
      setUser(snapshot.val());
    });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default UserRecord;
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";

function App() {

  const handleLogout = () => {
  
    googleLogout();

    setTimeout(() => {
      console.log("called");
      window.location.href = "/logout";
    }, 5000);
  };

  return (
    <GoogleOAuthProvider clientId="774653224004-a55gvh5ptoo4kdld00sdbr5davipiv43.apps.googleusercontent.com">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </GoogleOAuthProvider>
  );
}

export default App;

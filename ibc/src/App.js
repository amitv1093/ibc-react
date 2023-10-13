import "./App.css";
import Header from "./components/Header";

// ROUTER
// import { BrowserRouter } from "react-router-dom";
// import { RouterConfig } from "./navigation/RouteConfig";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import ContactUs from "./pages/ContactUs"
import VideoTut from "./pages/VideoTut";
import OurCareers from "./pages/OurCareers";





export default function App() {
  return (
    <div className="App">
      
      <Router>
      <Header className="App-header"></Header>
       <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path="/NotFound" element={<NotFound/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/ContactUs" element={<ContactUs/>}></Route>
          <Route path="/VideoTut" element={<VideoTut/>}></Route>
          <Route path="/OurCareers" element={<OurCareers/>}></Route>
        </Routes>
      </Router>



    </div>
  );
}










// import "./App.css";
// import Home from "./pages/Home";
// import Header from "./components/Header";

// // ROUTER
// import { BrowserRouter } from "react-router-dom";
// import { RouterConfig } from "./navigation/RouteConfig";

// function App() {
//   return (
//     <div className="App">
//       <Header className="App-header"></Header>
//       <BrowserRouter>
//         <RouterConfig />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;






















// import { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import { googleLogout } from "@react-oauth/google";

// function App() {

//   const handleLogout = () => {
  
//     googleLogout();

//     setTimeout(() => {
//       console.log("called");
//       window.location.href = "/logout";
//     }, 5000);
//   };

//   return (
//     <GoogleOAuthProvider clientId="774653224004-a55gvh5ptoo4kdld00sdbr5davipiv43.apps.googleusercontent.com">
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>

//         <GoogleLogin
//           onSuccess={(credentialResponse) => {
//             console.log(credentialResponse);
//           }}
//           onError={() => {
//             console.log("Login Failed");
//           }}
//           useOneTap
//         />
//       </div>
//       <button onClick={handleLogout}>Logout</button>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;

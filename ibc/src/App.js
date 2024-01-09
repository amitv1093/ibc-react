//useful

import "./App.css";
import Header from "./components/Header";

// ROUTER
// import { BrowserRouter } from "react-router-dom";
// import { RouterConfig } from "./navigation/RouteConfig";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import VideoTut from "./pages/VideoTut";
import OurCareers from "./pages/OurCareers";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import ForgatPwd from "./components/ForgatPwd";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header className="App-header"></Header>
        <Routes>
          <Route exact path="/react" element={<Home />}></Route>
          <Route path="/react/AboutUs" element={<AboutUs />}></Route>
          <Route path="/react/NotFound" element={<NotFound />}></Route>
          <Route path="/react/Services" element={<Services />}></Route>
          <Route path="/react/ContactUs" element={<ContactUs />}></Route>
          <Route path="/react/VideoTut" element={<VideoTut />}></Route>
          <Route path="/react/OurCareers" element={<OurCareers />}></Route>
          <Route path="/react/Login" element={<Login />}></Route>
          <Route path="/react/Signup" element={<SignUp />}></Route>
          <Route path="/react/ForgatPwd" element={<ForgatPwd />}></Route>
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

//  useless ,dont use//

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

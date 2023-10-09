import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { ROOT, NOPAGEFOUND, ABOUTUS, SERVICES, CONTACTUS } from "./CONSTANTS";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";

export const RouterConfig = () => {
  return (
    <div className="ibc__container">
     
        <Routes>
          <Route exact path={ROOT} element={<Home />} ></Route>
          <Route exact path={ABOUTUS} element={<AboutUs />} ></Route>
          <Route path={NOPAGEFOUND} element={<NotFound />} ></Route>
          <Route path={SERVICES} element={<Services />}></Route>
          <Route path={CONTACTUS} element={<ContactUs />}></Route>
        </Routes>
      
    </div>
  );
};


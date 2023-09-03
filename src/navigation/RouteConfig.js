import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { ROOT, NOPAGEFOUND, ABOUTUS } from "./CONSTANTS";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";

export const RouterConfig = () => {
  return (
    <div className="ibc__container">
      <Routes>
        <Route exact path={ROOT} element={<Home/>} >
        </Route>
        <Route exact path={ABOUTUS}  element={<AboutUs/>} >
        </Route>
        <Route path={NOPAGEFOUND} element={<NotFound/>} >
        </Route>
      </Routes>
    </div>
  );
};

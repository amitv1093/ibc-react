import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROOT, NOPAGEFOUND } from "navigation/CONSTANTS";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

export const RouterConfig = () => {
  return (
    <div className="ibc__container">
      <Router>
        <Switch>
          <Route exact path={ROOT} component={Home}>
            <Home></Home>
          </Route>
          <Route path={NOPAGEFOUND}>
            <NotFound> </NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

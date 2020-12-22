import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
// import Home from "."

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/home">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;

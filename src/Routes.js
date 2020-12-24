import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import MainBrowse from "./Components/Browse/MainBrowse";
// import Home from "."

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route exact path="/browse">
        <MainBrowse />
      </Route>
      <Route exact path="/radio">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;

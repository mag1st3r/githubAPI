import React from "react";

import { Route, Router } from "react-router-dom";
import { BASE_URL, SINGLE_USER } from "../constants/routes";

//Components
import HomePage from "pages/HomePage";
import SingleUser from "pages/SingleUser";

export const Routes = ({ history }) => {
  return (
    <Router history={history}>
      <main className="content-wrapper">
        <Route exact path={BASE_URL} component={HomePage} />
        <Route exact path={SINGLE_USER} component={SingleUser} />
      </main>
    </Router>
  );
};

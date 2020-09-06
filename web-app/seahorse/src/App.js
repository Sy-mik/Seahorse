import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import DynamicFormContainer from "./DynamicForm/DynamicFormContainer";
import { GuardedRoute, GuardProvider } from "react-router-guards";
import Loading from "./Loading/Loading";
import { BrowserRouter, Switch } from "react-router-dom";
import { getIsLoggedIn } from "./services/AuthService";
const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (getIsLoggedIn()) {
      next();
    } else {
      next.redirect("/login");
    }
  } else {
    next();
  }
};

function App() {
  return (
    <BrowserRouter>
      <GuardProvider guards={[requireLogin]} loading={Loading} error={NotFound}>
        <Switch>
          <GuardedRoute path="/login" exact component={Login} />
          <GuardedRoute
            path="/"
            exact
            component={DynamicFormContainer}
            meta={{ auth: true }}
          />
          <GuardedRoute path="*" component={NotFound} />
        </Switch>
      </GuardProvider>
    </BrowserRouter>
  );
}

export default App;

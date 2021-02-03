import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListner } from "./hooks";

export default function App() {
   const {user} = useAuthListner();
  // const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  // console.log("This is the secret API Key: LOL ! " + API_KEY);
  // console.log(user);
  //  const user = null;
  // const user = {emailAddress: "user's email"}
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>

        <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

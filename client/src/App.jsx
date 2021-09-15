import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import Store from "./store";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Register from "./containers/Register";
import AddPassword from "./containers/AddPassword/AddPassword";
import EditPassword from "./containers/AddPassword/EditPassword";
import "./App.scss";

function PrivateRouteToHome(props) {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.login.loginStatus);
  const location = useLocation();
  if (localStorage.getItem("access_token")) {
    dispatch({ type: "CHANGE_LOGIN_STATUS", payload: true });
  }
  return loginStatus ? (
    <Home />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: location.pathname },
      }}
    />
  );
}

function PrivateRouteToLogin(props) {
  const loginStatus = useSelector((state) => state.login.loginStatus);
  const location = useLocation();
  const dispatch = useDispatch();
  if (localStorage.getItem("access_token")) {
    dispatch({ type: "CHANGE_LOGIN_STATUS", payload: true });
  }
  return !loginStatus ? (
    <Login />
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: { from: location.pathname },
      }}
    />
  );
}

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route path="/editPassword/:id">
            <EditPassword />
          </Route>
          <Route path="/addPassword">
            <AddPassword />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <PrivateRouteToLogin />
          </Route>
          <Route exact path="/">
            <PrivateRouteToHome />
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

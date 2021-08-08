import React from "react";
import About from "./components/About";
import Login from "./components/Login";
import ReactDOM from "react-dom";
import SignUp from "./components/SignUp";
import Messages from "./components/Messages";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <NavBar />
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/messages">
        <Messages />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

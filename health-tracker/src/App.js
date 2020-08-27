import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from "./components/Pages/Home";
import Register from "./components/Pages/Register";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/register" component={Register}></Route>
        {/* <Route exact path="/login" component={SignIn}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;

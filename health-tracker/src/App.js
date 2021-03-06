import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from "axios";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import { Box } from "@material-ui/core";
import Dashboard from "./pages/Dashboard";
import BuildProfile from "./pages/UserGoals";
import UserContext from "./context/UserContext";
import "./App.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: "",
  });

  useEffect(() => {
    const checkedLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post(
        "/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({ token, user: userRes.data });
      }
    };

    checkedLoggedIn();
  }, [userData]);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Box>
            <Nav />
            <Switch>
              <Route exact path="/">
                <Home userData={userData} setUserData={setUserData} />
              </Route>
              <Route path="/register">
                <Register userData={userData} />
              </Route>
              <Route path="/login">
                <Login userData={userData} setUserData={setUserData} />
              </Route>
              <Route path="/dashboard">
                <Dashboard userData={userData} />
              </Route>
              <Route path="/buildprofile">
                <BuildProfile userData={userData} />
              </Route>
            </Switch>
            <Footer />
          </Box>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

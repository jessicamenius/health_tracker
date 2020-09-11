import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from "axios";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage";
import { Box } from "@material-ui/core";
import Dashboard from "./pages/Dashboard";
import UserGoals from "./pages/UserGoals";
import UserContext from "./context/UserContext";
import "./App.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkedLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({ token, user: userRes.data });
      }
    };

    checkedLoggedIn();
  }, []);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Box>
            <Nav />
            <Switch>
              <Route exact path="/" component={Landing}></Route>
              <Route path="/register" component={RegisterPage}></Route>
              <Route path="/usergoals" component={UserGoals}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/dashboard" component={Dashboard}></Route>
            </Switch>
            <Footer />
          </Box>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

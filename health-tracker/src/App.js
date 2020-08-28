import React from "react";
import "./App.css";
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Login'
import Footer from './components/Footer'
import RegisterPage from "./pages/RegisterPage";
import { Box } from "@material-ui/core";

function App() {

  return (
    <div className="App">
      <Box>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Box>
    </div>
  )
}

export default App;

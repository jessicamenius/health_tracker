import React from 'react'
import Header from '../components/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Register';
import Login from './Login';

const Main = () => {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Main

import React from 'react'
import Home from '../components/Pages/Home';
import Nav from '../components/Nav/Nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterPage from './RegisterPage';

const Main = () => {
    return (
        <div>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/register" component={RegisterPage}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Main

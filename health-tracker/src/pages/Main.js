import React from 'react'
import Nav from '../components/Nav/Nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from '../components/Footer';
import Login from './Login';
import Register from '../components/Pages/Register';

const Main = () => {

    function Layout() {
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Fresh food"
                    style={{ width: "100%", height: "100%", display: "block", justifyContent: "center", marginLeft: "auto", marginRight: "auto" }}
                >
                </img>
            </div >
        )
    }

    return (
        <div>
            <Router>
                <Nav />
                <Layout />
                <Footer />
            </Router>
        </div>
    )
}

export default Main

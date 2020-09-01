import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,

  },
  navlink: {
    textDecoration: "none",
    color: "white"
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <header id="header">
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" >
            <Link to="/" className={classes.navlink}>
              MERN Health Tracker - My Exercise Rest Nutrition Health Tracker
            </Link>
          </Typography>

          {/* <AuthOptions></AuthOptions> */}

          <Link to="/register" className={classes.navlink} >
            <Button className={classes.navlink} >REGISTER</Button>
          </Link>

          <Link to="/login" className={classes.navlink} >
            <Button className={classes.navlink}>LOGIN</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Nav;

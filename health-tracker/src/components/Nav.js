import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import "../App.css";
import AuthOptions from "../components/auth/AuthOptions";
// import UserContext from "../components/context/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navlink: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function Nav(props) {
  const classes = useStyles();
  return (
    <header id="header">
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <Link to="/" className={classes.navlink}>
              MERN Health Tracker - My Exercise Rest Nutrition Health Tracker
            </Link>
          </Typography>
          <AuthOptions />
        </Toolbar>
      </AppBar>
    </header>
  );
}

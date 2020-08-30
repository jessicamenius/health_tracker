import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navlink: {
    color: "#fff",
    textDecoration: "none",
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title}>
            <Link to="/">
              MERN Health Tracker ~ My Exercise Rest Nutrition Health Tracker
            </Link>
          </Typography>

          <Link to="/login" className="navlinkcss">
            <Button className={classes.navlink}>LOGIN</Button>
          </Link>

          <Link to="/register" className="navlinkcss">
            <Button className={classes.navlink}>REGISTER</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;

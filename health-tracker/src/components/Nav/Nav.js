import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
// import "./style";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navlink: {
    color: "#fff",
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title}>
            My Exercise Rest Nutrition Tracker (MERN-Tracker)
          </Typography>

          <Link to="/" className="navlinkcss">
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

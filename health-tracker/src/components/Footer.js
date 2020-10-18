import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const Footer = () => {
  function Copyright() {
    return (
      <Typography variant="body2" color="white" align="center">
        {"Copyright © "} {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "65vh",
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: "auto",
      backgroundColor: "#3f51b6",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer footer="true" className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" style={{ textAlign: "center" }}>
            MERN Health Tracker - My Exercise Rest Nutrition Health Tracker{" "}
          </Typography>
          <Typography variant="body2" color="textPrimary" align="center">
            Created by Philip Kouchner, Jessica Menius, Steven Simon, Mat Wilmot
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};

export default Footer;

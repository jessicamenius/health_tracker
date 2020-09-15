import React, { useEffect } from "react";
import img from "../pages/img/Logo2.png";
import { Fade } from "react-animation-components";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

export default function Landing(props) {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token !== "") {
      localStorage.setItem("auth-token", "");
      props.setUserData({ token: undefined, user: undefined });
      history.push("/");
    }
  }, []);

  const useStyles = makeStyles({
    root: {
      minWidth: 400,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        width: "50%",
        marginLeft: "25%",
        fontFamily: "Roboto",
        border: "solid #3F51B5",
        marginTop: "25px",
      }}
    >
      <Fade in enterOpacity={1.25}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              variant="h2"
              style={{
                textAlign: "center",
                color: "#FF1493",
                marginBottom: "50px",
                marginTop: "50px",
                fontFamily: "Roboto",
              }}
            >
              <DirectionsRunIcon fontSize="large" />
              Welcome to the MERN Health Tracker
            </Typography>
            <div>
              <img
                src={img}
                style={{
                  height: "250px",
                  width: "900px",
                  boxShadow: " 3px -16px 50px -8px rgba(16,16,230,1)",
                }}
                alt="Compnay Logo"
              />
            </div>
            <h2
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                color: "#3F51B5",
              }}
            >
              MERN Health Tracker is a web application utilizing the Edamam API.
              The MERN Health Tracker is used to track daily and weekly
              nutritional intake, along with weight goals and your progress
              towards them. Log the meals you eat to see detailed information
              about them, such as fat, protein, and carb content, along with an
              overall view for your intake each week.
            </h2>
          </CardContent>
        </Card>
      </Fade>
    </div>
  );
}

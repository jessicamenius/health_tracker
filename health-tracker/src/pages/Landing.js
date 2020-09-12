import React from "react";
import img from '../pages/img/Logo2.png';
import { Fade } from "react-animation-components";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import Typography from "@material-ui/core/Typography";

export default function Landing() {
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
      }}
    >
      <Fade in enterOpacity={1.25}>
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
            style={{ height: "250px", width: "900px" }}
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
        <br />
          <br />
        The MERN Health Tracker is used to track daily and weekly nutritional
        intake, along with weight goals and your progress towards them.
        <br />
          <br />
        Log the meals you eat to see detailed information about them, such as
        fat, protein, and carb content, along with an overall view for your
        intake each week.
      </h2>
      </Fade>
    </div >
  );
}

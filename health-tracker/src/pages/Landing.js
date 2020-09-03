import React from "react";
import img from "./img/Logo.png";
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
          Welcome to MERN
        </Typography>
        <div>
          <img
            src={img}
            style={{ height: "250px", width: "900px" }}
            alt="Our Compnay Logo"
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
          MERN Health Tracker is a web application which utilizes the Edamam API
          that can be used to track daily and weekly nutritional intake,
          <br />
          along with weight goals and your progress towards them. You will be
          able to log meals you eat and see detailed information about them,
          <br />
          such as fat, protein, and carb content, along with an overall view for
          your intake each week.
        </h2>
      </Fade>
    </div>
  );
}

import React, { useEffect } from "react";
import img from "./img/Logo.png";
import { Fade } from "react-animation-components";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import Typography from "@material-ui/core/Typography";
import API from "../utils/API";
import moment from "moment";

export default function Landing() {
  useEffect(() => {
    async function getWeekLogs() {
      let weekAgo = moment().subtract(1, "week").format("YYYY-MM-DD");
      let weekLogs = [];
      await API.getUserLogs(1).then((res) =>
        res.data.map((element, index) => {
          let separated = element.createdAt.split(" ");
          if (separated[0] > weekAgo) {
            weekLogs.push(element);
          }
        })
      );
      console.log("date 1 week ago:", weekAgo);
      console.log("week Logs: ", weekLogs);
    }
    getWeekLogs();
  }, []);

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
    </div>
  );
}

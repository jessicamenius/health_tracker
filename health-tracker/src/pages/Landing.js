import React, { useEffect } from "react";
import img from "../pages/img/Logo2.png";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        width: "50%",
        marginLeft: "25%",
        marginTop: "25px",
      }}
    >
      <Card
        style={{
          borderRadius: "0px",
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <CardContent style={{ border: "none" }}>
          <Typography
            variant="h2"
            style={{
              textAlign: "center",
              color: "#3F51B5",
              marginBottom: "50px",
              marginTop: "50px",
            }}
          >
            <strong>Welcome to the MERN Health Tracker</strong>
          </Typography>

          <img
            src={img}
            style={{
              height: "auto",
              width: "90%",
              marginLeft: "5%",
            }}
            alt="Company Logo"
          />

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
    </div>
  );
}

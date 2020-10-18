import React, { useEffect } from "react";
import img from "../pages/img/Logo2.png";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function Home(props) {
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
      minWidth: 275,
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
        marginTop: "25px",
      }}
    >
      <Card
        style={{
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <CardContent style={{ border: "none" }}>
          <img
            src={img}
            style={{
              height: "auto",
              width: "90%",
              marginLeft: "5%",
            }}
            alt="Company Logo"
          />
          <br />
          <br />
          <h2
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              color: "#3F51B5",
            }}
          >
            The MERN Health Tracker is used to track daily nutritional intake.
            <br />
            <br />
            By providing your weight, height, age, and gender, the tracker
            calculates your BMR and BMI providing target calorie and other health metric goals.
            <br />
            <br />
            Log the food you eat to see detailed nutritional information, such
            as fat, protein, and carbohydrate content, along with an overall
            view for your intake for the day.
          </h2>
        </CardContent>
      </Card>
    </div>
  );
}

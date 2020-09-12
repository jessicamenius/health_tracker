import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormSearch from "../components/FormSearch";
import Chart from "../components/Chart";
import TableUser from "../components/TableUser";

const Dashboard = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      textAlign: "center",
    },
    left: {
      float: "left",
      width: "450px",
      marginTop: "50px",
      border: "solid",
    },
    right: {
      float: "right",
      marginTop: "50px",
      width: "300px",
      border: "solid",
    },
    center: {
      display: "inline-block",
      width: "350px",
      border: "solid",
      margin: "10px",
      flexDirection: "row",
    },
  }));

  // console.log(value);

  const classes = useStyles();

  console.log("props.user in dashboard", props.user);
  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: "center", color: "#3F51B5" }}>
        Welcome to your MERN Health Tracker dashboard!
      </h1>
      <div className={classes.left}>
        <h1 style={{ color: "#3F51B5" }}>User Stats</h1>
        <TableUser />
      </div>
      <div className={classes.center}>
        <Chart />
      </div>
      <div className={classes.right}>
        <FormSearch />
      </div>
    </div>
  );
};

export default Dashboard;

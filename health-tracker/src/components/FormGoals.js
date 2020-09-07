import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
// import { Fade } from "react-animation-components";
import API from "../utils/API";
import Typography from "@material-ui/core/Typography";
import AlertMessage from "../components/AlertMessage";

// Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
// Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)

const FormGoals = () => {
  let objUserStats = {};
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      margin: "100px",
    },
    divOne: {
      height: "50vh",
      width: "50%",
    },
    form: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      position: "static",
      flexDirection: "column",
      width: "80%",
      marginLeft: "50px",
      marginTop: "50px",
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      marginTop: "50px",
    },
  }));
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [answer, setAnswer] = useState(false);
  const [resultBMI, setResultBMI] = useState(0);
  const [resultBMR, setResultBMR] = useState(0);
  const [validate, setValidate] = useState(false);
  const [status, setStatusBase] = useState("");

  const submitBMIAndBMR = async (e) => {
    e.preventDefault();
    // function that calculate the BMI of the use and keep the data
    if (
      height !== 0 &&
      weight !== 0 &&
      age !== 0 &&
      gender !== "" &&
      validate
    ) {
      let bmi = (703 * weight) / Math.pow(height, 2);
      setResultBMI(bmi);
      let bmr;
      if (gender.toLowerCase() === "man") {
        bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
        setResultBMR(bmr);
      } else {
        bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
        setResultBMR(bmr);
      }
      // Need to get the UserID from the page
      objUserStats = {
        height: height,
        weight: weight,
        age: age,
        gender: gender,
        bmi: bmi,
        bmr: bmr,
        UserId: 1,
      };
      API.setStats(objUserStats);
      setAnswer(true);
    } else {
      setAnswer(false);
      setStatusBase({ msg: "Error", key: Math.random() });
    }
  };

  const classes = useStyles();
  let renderElement;
  if (!answer) {
    renderElement = (
      <div>
        <h2
          style={{
            textAlign: "center",
            textDecoration: "none",
            color: "blue",
          }}
        >
          Let's get started!{" "}
        </h2>
        <h4
          style={{
            textAlign: "center",
            textDecoration: "none",
            color: "blue",
          }}
        >
          Provide the below information to calculate your BMI and BMR.
        </h4>
        <form className={classes.form}>
          <TextField
            id="standard-secondary"
            label="Enter height"
            variant="outlined"
            style={{ marginBottom: "20px" }}
            onChange={(e) => {
              var hasNumber = /\d/;
              if (e.target.value === "" || hasNumber.test(e.target.value)) {
                setHeight(e.target.value);
                setValidate(true);
              } else {
                setValidate(false);
              }
            }}
          />
          <TextField
            id="filled-secondary"
            label="Enter weight"
            variant="outlined"
            style={{ marginBottom: "20px" }}
            onChange={(e) => {
              var hasNumber = /\d/;
              if (e.target.value === "" || hasNumber.test(e.target.value)) {
                setWeight(e.target.value);
                setValidate(true);
              } else {
                setValidate(false);
              }
            }}
          />
          <TextField
            id="outlined-secondary"
            label="Enter age"
            variant="outlined"
            style={{ marginBottom: "20px" }}
            onChange={(e) => {
              var hasNumber = /\d/;
              if (e.target.value === "" || hasNumber.test(e.target.value)) {
                setAge(e.target.value);
                setValidate(true);
              } else {
                setValidate(false);
              }
            }}
          />

          <TextField
            id={"filled-secondary"}
            label="Enter gender"
            variant="outlined"
            onChange={(e) => {
              var pattern = new RegExp(/^[a-zA-Z0-9- ]*$/);
              var hasNumber = /\d/;

              if (
                e.target.value === "" ||
                hasNumber.test(e.target.value) ||
                !pattern.test(e.target.value)
              ) {
                setValidate(false);
              } else {
                setGender(e.target.value);
                setValidate(true);
              }
            }}
          />
        </form>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            onClick={submitBMIAndBMR}
            style={{ marginRight: "10px" }}
          >
            CALCULATE
            {status ? (
              <AlertMessage key={status.key} message={status.msg} />
            ) : null}
          </Button>
        </div>
      </div>
    );
  } else {
    renderElement = (
      <div>
        <Typography color="secondary" variant="h4" align="center">
          Your BMI is: {Math.floor(resultBMI)} Your BMR is:{" "}
          {Math.floor(resultBMR)}
        </Typography>
        <div className={classes.form}>
          <Link
            href="/dashboard"
            variant="body2"
            style={{ textAlign: "center" }}
          >
            <Button variant="contained" color="primary">
              Main Page
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.divOne}>{renderElement}</div>
    </div>
  );
};
export default FormGoals;

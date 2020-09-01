import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Fade, Loop } from "react-animation-components";

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
  const [gender, setGender] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [resultBMI, setResult] = useState(0);
  const [resultBMR, setResultBMR] = useState(0);
  const submitBMI = (e) => {
    e.preventDefault();
    objUserStats = {
      height: height,
      weight: weight,
      age: age,
      gender: gender,
    };
    // function that calculate the BMI of the use and keep the data
    if (answer) {
      setAnswer(false);
    } else {
      setAnswer(true);
    }
    let temp = (703 * weight) / Math.pow(height, 2);
    setResult(temp);
  };
  const submitBMR = (e) => {
    e.preventDefault();
    objUserStats = {
      height: height,
      weight: weight,
      age: age,
      gender: gender,
    };
    if (answer) {
      setAnswer(false);
    } else {
      setAnswer(true);
    }
    // function that calculate the BMI of the use and keep the data
    // Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
    // Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)
    if (gender.toLowerCase() === "man") {
      let temp = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      setResultBMR(temp);
    } else {
      let temp = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      setResultBMR(temp);
    }
  };
  const classes = useStyles();
  return (
    <Fade in>
      <div className={classes.container}>
        <div className={classes.divOne}>
          <h2
            style={{
              textAlign: "center",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Welcome to My status page
          </h2>
          <form className={classes.form}>
            <TextField
              id="standard-secondary"
              label="Enter height"
              variant="outlined"
              color="secondary"
              style={{ marginBottom: "20px" }}
              onChange={(e) => setHeight(e.target.value)}
            />
            <TextField
              id="filled-secondary"
              label="Enter weight"
              variant="outlined"
              color="secondary"
              style={{ marginBottom: "20px" }}
              onChange={(e) => setWeight(e.target.value)}
            />
            <TextField
              id="outlined-secondary"
              label="Enter age"
              variant="outlined"
              color="secondary"
              style={{ marginBottom: "20px" }}
              onChange={(e) => setAge(e.target.value)}
            />
            <TextField
              id="outlined-secondary"
              label="Enter Gender"
              variant="outlined"
              color="secondary"
              onChange={(e) => setGender(e.target.value)}
            />
          </form>
          <div className={classes.button}>
            <Button
              variant="contained"
              color="primary"
              onClick={submitBMI}
              style={{ marginRight: "10px" }}
            >
              calculate BMI
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={submitBMR}
              style={{ marginRight: "10px" }}
            >
              calculate BMR
            </Button>
            <Link href="/dashboard" variant="body2">
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "10px", color: "#ea80fc" }}
              >
                Main Page
              </Button>
            </Link>
          </div>
          {answer && resultBMI > 0 && (
            <div div className={classes.form}>
              <p style={{ textAlign: "center" }}>
                Your BMI is: {Math.floor(resultBMI)}
              </p>
            </div>
          )}
          {answer && resultBMR > 0 && (
            <div div className={classes.form}>
              <p style={{ textAlign: "center" }}>
                Your BMR is: {Math.floor(resultBMR)}
              </p>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
};
export default FormGoals;

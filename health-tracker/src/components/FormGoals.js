import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Fade } from "react-animation-components";
import API from "../utils/API";
import Typography from "@material-ui/core/Typography";
import AlertMessage from "../components/AlertMessage";
import RadioGroupBtn from "./RadioGroupBtn"
import CardResult from "./CardResult";


// BMI Metric  [weight (kg) / height (cm) / height (cm)] x 10,000 ,Calculation: [weight (lb) / height (in) / height (in)] x 703
// Metric BMR Formula Women: BMR = 655 + (9.6 x weight in kg) + (1.8 x height in cm) - (4.7 x age in years)
// Men: BMR = 66 + (13.7 x weight in kg) + (5 x height in cm) - (6.8 x age in years) 
// English BMR Formula
// Women: BMR = 655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.7 x age in years)
// Men: BMR = 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years)


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
      marginLeft: "50px",
      marginTop: "50px",
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      marginTop: "50px",
    },
    input: {
      color: "white"
    }
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
  const [value, setValue] = useState("Metric");

  console.log(value);
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
      if (gender.toLowerCase() === "M") {
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
      setStatusBase({ msg: "Error - Invalid Input", key: Math.random() });
    }
  };

  const classes = useStyles();
  let renderElement;
  if (!answer) {
    renderElement = (
      <div>
        <Fade in>


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
                  e.target.value === "" || hasNumber.test(e.target.value) || !pattern.test(e.target.value)) {
                  setValidate(false);
                } else {
                  setGender(e.target.value);
                  setValidate(true);
                }
              }}
              helperText="Enter M or F"
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
        </Fade>
      </div>
    );
  } else {
    renderElement = (
      <div>
        <div className={classes.form}>
          <CardResult resultBMI={resultBMI} resultBMR={resultBMR} />
        </div>
      </div >
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.divOne}>{renderElement} </div>
      <div style={{ marginTop: "100px", marginLeft: "30px" }}>
        <Fade in>
          {
            !answer ? <RadioGroupBtn value={value} setValue={setValue} /> : null
          }
        </Fade>
      </div>
    </div>
  );
};
export default FormGoals;

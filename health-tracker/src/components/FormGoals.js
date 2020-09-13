import React, { useState, useEffect } from "react";
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


const FormGoals = (props) => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [answer, setAnswer] = useState(false);
  const [resultBMI, setResultBMI] = useState(0);
  const [resultBMR, setResultBMR] = useState(0);
  const [validate, setValidate] = useState(false);
  const [status, setStatusBase] = useState("");
  const [value, setValue] = useState("Metric");

  useEffect(() => {
    console.log(props);
  }, []);

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




  const submitBMIAndBMR = (e) => {
    e.preventDefault();
    // function that calculate the BMI of the use and keep the data
    let bmi;
    let bmr;
    if (
      height !== 0 &&
      weight !== 0 &&
      age !== 0 &&
      gender !== "" &&
      validate
    ) {
      //  [weight (kg) / height (cm) / height (cm)] x 10,000

      if (value === "Metric") {
        console.log(value);
        bmi = (weight / height / height) * 10000;
        setResultBMI(bmi);
        //  Metric BMR Formula Women: BMR = 655 + (9.6 x weight in kg) + (1.8 x height in cm) - (4.7 x age in years)
        // Men: BMR = 66 + (13.7 x weight in kg) + (5 x height in cm) - (6.8 x age in years) 
        console.log(gender);
        if (gender === "Male") {
          console.log(gender);
          console.log(value);
          bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
          setResultBMR(bmr);
        } else {
          bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
          setResultBMR(bmr);
        }
      } else {
        // [weight (lb) / height (in) / height (in)] x 703
        let bmi = ((weight / height) / height) * 703;
        setResultBMI(bmi);
        // Women: BMR = 655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.7 x age in years)
        // Men: BMR = 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years)
        let bmr;
        if (gender === "Male") {
          bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
          setResultBMR(bmr);
        } else {
          bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)
          setResultBMR(bmr);
        }
      }

      // Need to get the UserID from the page
      objUserStats = {
        height: height,
        weight: weight,
        age: age,
        gender: gender,
        bmi: bmi,
        bmr: bmr,
        UserId: props.userData.user.id,
      };
      API.setStats(objUserStats);
      setAnswer(true);
      setWeight("");
      setHeight("");
      setAge("");
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
              value={height}
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
              value={height}
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
              value={age}
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
            !answer ? <RadioGroupBtn value={value} gender={gender} setValue={setValue} setGender={setGender} /> : null
          }
        </Fade>
      </div>
    </div>
  );
};
export default FormGoals;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import CardResult from "./CardResult";
import RadioGroupBtn from "../components/RadioGroupBtn";

const BuildProfile = (props) => {
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
  const history = useHistory();

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
      color: "white",
    },
  }));

  useEffect((history) => {
    const token = localStorage.getItem("auth-token");
    if (!token) {
      history.push("/");
    }
  }, []);

  const submitBMIAndBMR = (e) => {
    e.preventDefault();
    let bmi;
    let bmr;
    if (
      height !== 0 &&
      weight !== 0 &&
      age !== 0 &&
      gender !== "" &&
      validate
    ) {
      if (value === "Metric") {
        bmi = (weight / height / height) * 10000;
        setResultBMI(bmi);
        if (gender === "Male") {
          bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
          setResultBMR(bmr);
        } else {
          bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
          setResultBMR(bmr);
        }
      } else {
        bmi = (weight / (height * 12) / (height * 12)) * 703;
        setResultBMI(bmi);
        if (gender === "Male") {
          bmr = 66 + 6.23 * weight + 12.7 * (height * 12) - 6.8 * age;
          setResultBMR(bmr);
        } else {
          bmr = 655 + 4.35 * weight + 4.7 * (height * 12) - 4.7 * age;
          setResultBMR(bmr);
        }
      }

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

  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  const handleChangeGender = (event) => {
    props.setGender(event.target.value);
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
            color: "#3F51B5",
          }}
        >
          Let's get started!
        </h2>
        <RadioGroupBtn />
        <h4
          style={{
            textAlign: "center",
            textDecoration: "none",
            color: "3F51B5",
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
            value={weight}
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
          </Button>
        </div>
      </div>
    );
  } else {
    renderElement = (
      <div>
        <div className={classes.form}>
          <CardResult resultBMI={resultBMI} resultBMR={resultBMR} />
        </div>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.divOne}>{renderElement} </div>
      <div style={{ marginTop: "100px", marginLeft: "30px" }}>) : null}</div>
    </div>
  );
};
export default BuildProfile;

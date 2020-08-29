import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const FormGoals = () => {

    let objUserStats = {};
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        container: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            margin: "100px"
        },
        divOne: {
            height: "50vh",
            width: "50%"
        },
        form: {
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            position: "static",
            flexDirection: "column",
            width: "80%",
            marginLeft: "50px",
            marginTop: "50px"
        },
        button: {
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "50px"

        }

    }));

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState(0);
    const [answer, setAnswer] = useState(false);
    const [result, setResult] = useState(0);

    const submitBMI = (e) => {
        e.preventDefault();
        objUserStats = {

            height: height,
            weight: weight,
            age: age,
            gender: gender
        }
        // function that calculate the BMI of the use and keep the data
        if (answer) {

            setAnswer(false);
        } else {
            setAnswer(true)
        }
        let temp = (703 * weight) / Math.pow(height, 2);
        setResult(temp);
    }

    const submitBMR = (e) => {
        e.preventDefault();
        objUserStats = {
            height: height,
            weight: weight,
            age: age,
            gender: gender
        }
        if (!answer) {

            setAnswer(true);
        } else {
            setAnswer(false)
        }
        // function that calculate the BMI of the use and keep the data
    }


    const classes = useStyles();

    return (
        <div className={classes.container}>

            <div className={classes.divOne}>
                <h2 style={{ textAlign: "center" }}>Welcome to My status page</h2>
                <form className={classes.form} >
                    <TextField id="standard-secondary" label="Enter height" variant="outlined" color="secondary"
                        style={{ marginBottom: "20px" }}
                        onChange={(e) => setHeight(e.target.value)} />
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
                        color="secondary" style={{ marginBottom: "20px" }}
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
                    <button onClick={submitBMI} style={{ marginRight: "10px" }}>calculate BMI</button>
                    <button onClick={submitBMR}>calculate BMR</button>
                </div>
                {answer &&
                    <div className={classes.form}>
                        <p style={{ textAlign: "center" }}>Your BMI is: {Math.floor(result)}</p>
                    </div>


                }
            </div>

        </div>

    );
}

export default FormGoals



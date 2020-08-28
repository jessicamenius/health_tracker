import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const FormGoals = () => {

    const objUserStats = {};
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState(0);

    const submitBMI = (e) => {
        e.preventDefault();
        objUserStats = {

            height: height,
            weight: weight,
            age: age,
            gender: gender
        }
        // function that calculate the BMI of the use and keep the data
    }

    const submitBMR = (e) => {
        e.preventDefault();
        objUserStats = {
            height: height,
            weight: weight,
            age: age,
            gender: gender
        }
        // function that calculate the BMI of the use and keep the data
    }

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-secondary" label="Enter height" variant="outlined" color="secondary" onChange={(e) => setHeight(e.target.value)} />
            <TextField
                id="filled-secondary"
                label="Enter weight"
                variant="outlined"
                color="secondary"
                onChange={(e) => setWeight(e.target.value)}
            />
            <TextField
                id="outlined-secondary"
                label="Enter age"
                variant="outlined"
                color="secondary"
                onChange={(e) => setAge(e.target.value)}
            />
            <TextField
                id="outlined-secondary"
                label="Enter Gender"
                variant="outlined"
                color="secondary"
                onChange={(e) => setGender(e.target.value)}
            />
            <button onClick={submitBMI}>calculate BMI</button>
            <button onClick={submitBMR}>calculate BMR</button>
        </form>
    );
}

export default FormGoals



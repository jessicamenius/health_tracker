import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const CardResult = (props) => {

    const useStyles = makeStyles({
        root: {
            minWidth: 225,
            fontSize: "20px"
        },
        ulDiv: {
            flex: "center",
            justifyContent: "center"
        }
    });

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography color="primary" component="h1" >
                    Summary
                </Typography>
                <Typography color="primary" component="h2" >
                    Your BMI is: {Math.floor(props.resultBMI)}
                </Typography>
                <div className={classes.ulDiv}>
                    <List >
                        <ListItemText>
                            <FitnessCenterIcon />
                            {" "}Underweight = 18.5
                        </ListItemText>
                        <ListItemText>
                            <FitnessCenterIcon />
                            {" "} Normal weight = 18.5–24.9
                        </ListItemText>
                        <ListItemText>
                            <FitnessCenterIcon />
                            {" "} Overweight = 25–29.9
                        </ListItemText>
                        <ListItemText>
                            <FitnessCenterIcon />
                            {" "}  Obesity = BMI of 30 or greater
                        </ListItemText>
                    </List>
                </div>
                <Typography color="primary" component="h2"  >
                    Your BMR is: {" "}
                    {Math.floor(props.resultBMR)}
                </Typography>
                <Typography variant="subtitle1" component="p" color="primary">
                    <Link href="https://www.bmi-calculator.net/bmr-calculator/harris-benedict-equation/"> Link: Reference To BMI and BMR Explanation</Link>
                </Typography>
            </CardContent>
            <CardActions >
                <div>
                    <Link
                        href="/dashboard"
                        variant="body2"
                        style={{ textAlign: "center" }}>
                        <Button variant="contained" color="primary">Main Page</Button>
                    </Link>
                </div>
            </CardActions>
        </Card>
    );
}

export default CardResult


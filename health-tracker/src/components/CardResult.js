import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";


const CardResult = (props) => {

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },

        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography color="primary" gutterBottom component="h1" >
                    <h1>Summary</h1>
                </Typography>
                <Typography color="primary" gutterBottom component="h2" >
                    Your BMI is: {Math.floor(props.resultBMI)}
                </Typography>
                <div style={{ flex: "center", justifyContent: "center" }}>
                    <ul>
                        <li>Underweight = 18.5</li>
                        <li> Normal weight = 18.5–24.9</li>
                        <li> Overweight = 25–29.9</li>
                        <li> Obesity = BMI of 30 or greater</li>
                    </ul>
                </div>
                <Typography color="primary" gutterBottom component="h2"  >
                    Your BMR is: {" "}
                    {Math.floor(props.resultBMR)}
                </Typography>
                <Typography variant="subtitle1" component="p">
                    <Link href="https://www.bmi-calculator.net/bmr-calculator/harris-benedict-equation/">Explanation</Link>
                </Typography>
            </CardContent>
            <CardActions >
                <div>
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

            </CardActions>
        </Card>
    );
}

export default CardResult


import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const Footer = () => {

    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {"Copyright © "}
                <Link color="primary">
                    Developers Jessica, Philip, Mat, Steven
            </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        );
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column'
        },
        main: {
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(2),
        },
        footer: {
            padding: theme.spacing(3, 2),
            marginTop: 'auto',
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <footer footer="true" className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1" style={{ textAlign: "center" }}>
                        My Exercise Rest Nutrition Tracker (MERN-Tracker)
                    </Typography>
                    <Copyright />
                </Container>
            </footer>
        </div >
    );
}

export default Footer
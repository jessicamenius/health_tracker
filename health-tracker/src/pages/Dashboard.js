import React, { useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import FormSearch from '../components/FormSearch';
import Chart from '../components/Chart'
import TableUser from '../components/TableUser';
const Dashboard = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: "100%",
            textAlign: "center",
        },
        left: {
            float: "left",
            width: "450px",
            marginTop: "50px",
            border: "solid",
        },
        right: {
            float: "right",
            marginTop: "50px",
            width: "300px",
            border: "solid"
        },
        center: {
            display: "inline-block",
            width: "350px",
            border: "solid",
            margin: "10px",
            flexDirection: "row"
        }
    }));
    // function click submit


    //useState('userData')

    // useEffect(() => {
    //     const res =//query
    //     if (res.length == 0) {
    //         setUserData([])

    //     } else {
    //         setuserData(res)
    //         rows = res;
    //     }
    // }, []);


    // row = {carbs:}
    //chartData
    // let rows = [];
    // let chartData = [];
    // const submit = (amount, measure) => {
    //     //
    //     //api call
    //     rows.push({});
    //     chartData.push({});
    //     //
    // }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 style={{ textAlign: "center", color: "#3F51B5" }}>Welcome to Our Dashboard</h1>
            <div className={classes.left}>
                <h1 style={{ color: "#3F51B5" }}>User Stats</h1>
                <TableUser />
            </div>
            <div className={classes.center}>
                <FormSearch />
            </div>
            <div className={classes.right}>
                <Chart />
            </div>
        </div>
    )
}
// submitFunc={submit}

export default Dashboard

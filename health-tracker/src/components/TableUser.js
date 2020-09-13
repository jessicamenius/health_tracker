import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TableUser = (props) => {
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

    function createData(name, calories, fat, carbs, protein, weight, height, gender) {
        return { name, calories, fat, carbs, protein, weight, height, gender };
    }

    let rows = [];
    let table;
    if (props.isUser) {
        if (props.foodLog.length > 0) {
            console.log("Inside the table")
            console.log(props.foodLog);
            for (let i = 0; i < props.isUser.FoodLogs.length; i++) {
                rows.push(createData(props.foodLog[i].foodName, props.foodLog[i].calories, props.foodLog[i].fat, props.foodLog[i].carbs, props.foodLog[i].protein, props.isUser.Stat.weight, props.isUser.Stat.height, props.isUser.Stat.gender))
            }
            table = (
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                <button>Click ME</button>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            <TableCell align="right">{row.height}</TableCell>
                            <TableCell align="right">{row.weight}</TableCell>
                            <TableCell align="right">{row.gender}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            )
        }
    }

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Food Name </TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        <TableCell align="right">Height&nbsp;</TableCell>
                        <TableCell align="right">Weight&nbsp;</TableCell>
                        <TableCell align="right">Gender&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                {props.foodLog.length > 0 ? table : null}
            </Table>
        </TableContainer>
    );
}

export default TableUser










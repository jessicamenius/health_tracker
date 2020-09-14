import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
        btn: {
            backgroundColor: "red",
            color: "white",
            fontSize: "20px",
            padding: "10px 15px",
            borderRadius: "5px",
            margin: "10px 0px",
            cursor: "pointer"

        }
    });

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 18,
        },
    }))(TableCell);
    const classes = useStyles();
    function createData(id, name, calories, fat, carbs, protein, weight, height, gender) {
        return { id, name, calories, fat, carbs, protein, weight, height, gender };
    }


    let temp = [];
    let arrayForTable;
    const click = (e) => {
        e.preventDefault();
        const idFood = e.target.id;
        const idToDelete = e.target.attributes.getNamedItem('data-tag').value;
        props.deleteFood(idFood, idToDelete);
    }

    if (props.isUser) {
        if (props.foodLog.length > 0) {
            for (let i = 0; i < props.foodLog.length; i++) {
                temp.push(createData(props.foodLog[i].id, props.foodLog[i].foodName, props.foodLog[i].calories, props.foodLog[i].fat, props.foodLog[i].carbs, props.foodLog[i].protein, props.isUser.Stat.weight, props.isUser.Stat.height, props.isUser.Stat.gender))
            }
            console.log(props.foodLog);
            arrayForTable = (
                temp.map((row, index) => (
                    < TableBody >
                        <TableRow key={index} id={row.id}>
                            <StyledTableCell component="th" scope="row">
                                <button className={classes.btn} onClick={click} id={row.id} data-tag={index} >
                                    Delete
                                </button>


                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            <StyledTableCell align="right">{row.height}</StyledTableCell>
                            <StyledTableCell align="right">{row.weight}</StyledTableCell>
                            <StyledTableCell align="right">{row.gender}</StyledTableCell>
                        </TableRow>
                    </ TableBody >
                ))
            )
        }
    }



    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell>Food Name </StyledTableCell>
                        <StyledTableCell align="right" >Calories</StyledTableCell>
                        <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Height&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Weight&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Gender&nbsp;</StyledTableCell>
                    </TableRow>
                </TableHead>
                {props.foodLog.length > 0 ? arrayForTable : null}
            </Table>
        </TableContainer>
    );
}

export default TableUser










// return (
//     <TableBody>
//         {  rows.map((row, index) => (
//             <TableRow key={index}>
//                 <TableCell component="th" scope="row">
//                     <button>Click ME</button>
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                     {row.name}
//                 </TableCell>
//                 <TableCell align="right">{row.calories}</TableCell>
//                 <TableCell align="right">{row.fat}</TableCell>
//                 <TableCell align="right">{row.carbs}</TableCell>
//                 <TableCell align="right">{row.protein}</TableCell>
//                 <TableCell align="right">{row.height}</TableCell>
//                 <TableCell align="right">{row.weight}</TableCell>
//                 <TableCell align="right">{row.gender}</TableCell>
//             </TableRow>
//         ))}
//     </TableBody>
// )
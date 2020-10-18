import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const UserProfile = (props) => {
  const useStyles = makeStyles({
    table: {
      minWidth: "50%",
    },
    btn: {
      backgroundColor: "red",
      color: "white",
      fontSize: "20px",
      padding: "10px 15px",
      borderRadius: "5px",
      margin: "10px 0px",
      cursor: "pointer",
    },
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
  function createData(firstName, weight, height, gender) {
    return { firstName, weight, height, gender };
  }

  let temp = [];
  let arrayForTable;
  const click = (e) => {
    e.preventDefault();
    const idFood = e.target.id;
    const idToDelete = e.target.attributes.getNamedItem("data-tag").value;
    props.deleteFood(idFood, idToDelete);
  };

  if (props.isUser) {
    if (props.foodLog.length > 0) {
      for (let i = 0; i < props.foodLog.length; i++) {
        temp.push(
          createData(
            props.foodLog[i].id,
            props.foodLog[i].foodName,
            props.foodLog[i].calories,
            props.foodLog[i].fat,
            props.foodLog[i].carbs,
            props.foodLog[i].protein
            // props.isUser.Stat.weight,
            // props.isUser.Stat.height,
            // props.isUser.Stat.gender
          )
        );
      }
      // console.log(props.foodLog);
      arrayForTable = temp.map((row, index) => (
        <Container>
          <UserProfile>
            <TableBody>
              <TableRow key={index} id={row.id}>
                <StyledTableCell align="right">{row.height}</StyledTableCell>
                <StyledTableCell align="right">{row.weight}</StyledTableCell>
                <StyledTableCell align="right">{row.gender}</StyledTableCell>
              </TableRow>
            </TableBody>
          </UserProfile>
        </Container>
      ));
    }
  }

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Height&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Weight&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Gender&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        {props.foodLog.length > 0 ? arrayForTable : null}
      </Table>
    </TableContainer>
  );
};

export default UserProfile;

import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, Select } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import API from '../utils/API'
import AlertMessage from '../components/AlertMessage'
const FormSearch = (props) => {

  const [measure, setMeasure] = useState('Pounds');
  const [amount, setAmount] = useState("");
  const [searchFood, setSearchFood] = useState("");
  const [arrayFood, setArrayFood] = useState([]);
  const [flag, setFlag] = useState(false);
  const [status, setStatusBase] = useState("");


  const numInput = (e) => {
    setAmount(e.target.value);
  }
  const measureInput = (e) => {
    setMeasure(e.target.value);
  }

  const onKeyPress = (e) => {
    setSearchFood(e.target.value);
    const text = e.target.value;
    if (text.length > 1) {
      API.autocomplete(text).then(res => {
        let arrayInput = [];
        arrayInput = [...res.data];
        setArrayFood([...arrayInput]);
      });
    }

  }
  const onSave = (event, newValue) => {
    setSearchFood(newValue);

  };
  const submit = (e) => {
    e.preventDefault();

    if (searchFood !== "" && amount !== "" && measure !== "") {
      props.eventSubmitBtn(searchFood, amount, measure);
      setMeasure("");
      setAmount("");
      setSearchFood("");
    } else {
      setFlag(true);
      setStatusBase({ msg: "Error - Invalid Input", key: Math.random() });
    }

  }

  const arr = [<MenuItem value="kilogram"> Kilogram</MenuItem>,
  <MenuItem value={"pound"}>Pound</MenuItem>,
  <MenuItem value={"ounce"}>Ounce</MenuItem>,
  <MenuItem value={"gram"}>Gram</MenuItem>,
  <MenuItem value={"pinch"}>Pinch</MenuItem>,
  <MenuItem value={"liter"}>Liter</MenuItem>,
  <MenuItem value={"fluid_ounce"}>fluid-Ounce</MenuItem>,
  <MenuItem value={"pint"}>Pint</MenuItem>,
  <MenuItem value={"quart"}>Quart</MenuItem>,
  <MenuItem value={"milliliter"}>Milliliter</MenuItem>,
  <MenuItem value={"drop"}>Drop</MenuItem>,
  <MenuItem value={"cup"}>Cup</MenuItem>,
  <MenuItem value={"tablespoon"}>Tablespoon</MenuItem>,
  <MenuItem value={"teaspoon"}>Teaspoon</MenuItem>];

  return (
    <div>
      <FormControl variant="outlined" style={{ marginRight: "50px" }} >
        <Autocomplete
          options={arrayFood}
          id="controlled-demo"
          value={searchFood}
          getOptionLabel={(option) => option}
          onKeyUp={onKeyPress}
          onChange={onSave}
          renderInput={(params) => <TextField {...params} label="selectOnFocus" margin="normal" />}
          style={{ marginBottom: "25px", width: "500px" }}
        />
        <TextField
          id="outlined-number"
          variant="outlined"
          value={amount}
          className="mb-4"
          onChange={numInput}
          style={{ marginBottom: "25px", width: "500px" }}
        />
        <Select
          value={measure}
          onChange={measureInput}
          style={{ marginBottom: "25px" }} >
          {arr}
        </Select>
        <Button onClick={submit} variant="contained" color="primary">Submit
            {flag ? (
            <AlertMessage key={status.key} message={status.msg} />
          ) : null}
        </Button>
      </FormControl>


    </div>

  )
}


export default FormSearch












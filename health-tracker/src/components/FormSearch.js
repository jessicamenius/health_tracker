import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, Select } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';

const FormSearch = () => {
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
    ];
    // array of measure
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
    };

    const flatProps = {
        options: top100Films.map((option) => option.title),
    };

    const [measure, setMeasure] = useState('Pounds');
    const [amount, setAmount] = useState(0);
    const [searchFood, setSearchFood] = useState(null);



    const numInput = (e) => {
        setAmount(e.target.value);
        console.log(e.target.value)
    }
    const measureInput = (e) => {
        console.log(e.target.value);
        setMeasure(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault();
        console.log(searchFood.title);
        console.log(measure);
        console.log(amount)
    }


    return (
        <FormControl variant="outlined" >
            <Autocomplete
                {...defaultProps}
                id="controlled-demo"
                getOptionSelected={() => flatProps}
                value={searchFood}
                onChange={(event, newValue) => {

                    setSearchFood(newValue);
                }}
                renderInput={(params) => <TextField {...params} label="controlled" margin="normal" />}
                style={{ marginBottom: "25px" }}
            />
            <TextField
                id="outlined-number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                className="mb-4"
                onChange={numInput}
                style={{ marginBottom: "25px" }}
            />
            <FormControl variant="filled" >
                <InputLabel id="demo-simple-select-filled-label">Volume</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={measure}
                    onChange={measureInput}
                    style={{ marginBottom: "25px" }}
                >
                    <MenuItem value="Kilograms">
                        <em>Kilograms</em>
                    </MenuItem>
                    <MenuItem value={"Pounds"}>Pounds</MenuItem>
                    <MenuItem value={"Ounce"}>Ounce</MenuItem>
                    <MenuItem value={"Gram"}>Gram</MenuItem>
                </Select>
            </FormControl>
            <Button onClick={submit} color="primary">Submit</Button>
        </FormControl>

    )
}

export default FormSearch


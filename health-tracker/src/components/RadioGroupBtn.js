import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioGroupBtn = (props) => {

    const handleChange = (event) => {
        props.setValue(event.target.value);
    };
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Measurement</FormLabel>
            <br />
            <RadioGroup aria-label="gender" name="gender1" value={props.value} onChange={handleChange}>
                <FormControlLabel value="Metric" control={<Radio />} label="Metric - Centimeters, Kilograms" />
                <FormControlLabel value="Standard" control={<Radio />} label="Standard - Feet+Inches, Pounds" />
            </RadioGroup>
        </FormControl>
    );
}

export default RadioGroupBtn



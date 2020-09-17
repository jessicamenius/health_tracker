import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
const RadioGroupBtn = (props) => {

    const handleChange = (event) => {
        props.setValue(event.target.value);
    };
    const handleChangeGender = (event) => {
        props.setGender(event.target.value);
    };
    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Measurement
                <Tooltip title={"Based on your selection of measurement, use cm and kg for Metric and ft/in and lbs for Standard."}>
                        <IconButton aria-label="delete">
                            <CommentIcon />
                        </IconButton>
                    </Tooltip></FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={props.value} onChange={handleChange}>
                    <FormControlLabel value="Metric" control={<Radio />} label="Metric" />
                    <FormControlLabel value="Standard" control={<Radio />} label="Standard" />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">

                <FormLabel component="legend">Gender
                <Tooltip title="The available data for calorie goals is based on cis-gender bodies, and we understand that this data may not represent 
            all bodies. If you like, we can provide this data based on the body type that best represents you at this time, 
            even if this does not match your gender identity.">
                        <IconButton aria-label="delete">
                            <CommentIcon />
                        </IconButton>
                    </Tooltip>
                </FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={props.gender} onChange={handleChangeGender}>
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>

            </FormControl>

        </div>

    );

}

export default RadioGroupBtn



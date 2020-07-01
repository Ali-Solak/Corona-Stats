import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import classes from './Dropdown.css'


const dropdown = (props) =>{
    return (
        <div className={classes.box}>
            <FormControl variant="filled" className={classes.drop}>
                <InputLabel htmlFor="filled-age-native-simple">Country</InputLabel>
                <Select
                    native
                    onChange={props.handleChange}
                >
                    <option aria-label="None" value="none" />
                    {props.countries.map((c,i) => {
                        return <option key={i} value={c.country}>{c.country}</option>
                    })}
                </Select>
            </FormControl>
        </div>
    );

}

export default dropdown;
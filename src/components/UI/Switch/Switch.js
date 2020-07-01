import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SwitchMat from '@material-ui/core/Switch';
import Tooltip from "@material-ui/core/Tooltip";

const Switch = ({ isOn, handleToggle }) => {
    return (
        <React.Fragment>
            <Tooltip title="Deaths/Cases">
            <FormControlLabel
                control={<SwitchMat checked={isOn} onChange={handleToggle} name="stats" />}
                label=""
            />
            </Tooltip>
        </React.Fragment>
    );
};
export default Switch;
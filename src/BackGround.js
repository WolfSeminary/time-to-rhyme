import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function BackGround() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose A BackGround </FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="BackGround1" control={<Radio />} label="BackGround 1" />
        <FormControlLabel value="BackGround2" control={<Radio />} label="BackGround 2" />
        <FormControlLabel value="BackGround3" control={<Radio />} label="BackGround 3" />
      </RadioGroup>
    </FormControl>
  );
}




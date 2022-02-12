import {
  FormLabel,
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup
} from "@mui/material";

export default function BackGround({ onChange }) {

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose A Background </FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="Background1" control={<Radio />} label="Background 1" onChange={onChange} />
        <FormControlLabel value="Background2" control={<Radio />} label="Background 2" onChange={onChange} />
        <FormControlLabel value="Background3" control={<Radio />} label="Background 3" onChange={onChange} />
      </RadioGroup>
    </FormControl>
  );
}





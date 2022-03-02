import {
  FormLabel,
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup
} from "@mui/material";

export default function BackGround({onChange}) {
return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose A Background </FormLabel>
        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
          <FormControlLabel value="BackGround1" id="section-to-print" control={<Radio />} label="BackGround 1" onChange={onChange}/>          
          <FormControlLabel value="BackGround2" id="section-to-print" control={<Radio />} label="BackGround 2" onChange={onChange}/>
          <FormControlLabel value="BackGround3" id="section-to-print" control={<Radio />} label="BackGround 3" onChange={onChange}/>
        </RadioGroup>
    </FormControl>
  );
}





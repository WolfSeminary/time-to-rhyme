import * as React from 'react';
import TextField from '@mui/material/TextField';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';

const WriteSong=()=>{
    return(<>
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch'},
      }}
      noValidate
      autoComplete="off"
    > 
 <TextField  
    variant="outlined"
     style = {{width:600}}
     label="Write Song"
     defaultValue="Write the Song"
     multiline rows={8}
     fullWidth
  /></Box> 
</>
    )
}
export default WriteSong

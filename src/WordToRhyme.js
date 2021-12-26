import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const WordToRhyme=()=>{
return(
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="outlined-basic" label="Word to Rhyme" variant="outlined" />
     
    </Box>

    </>
)
}
export default WordToRhyme;
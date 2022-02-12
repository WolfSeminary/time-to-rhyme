import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';
const WordToRhyme = () => {
  const [wordToRhyme, setWordToRhyme] = useState();
  const onWordToRhymeChange = (event) => {
    setWordToRhyme(event.target.value);
  }
  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Word to Rhyme" variant="outlined" onChange={(event) => onWordToRhymeChange(event)} />
      </Box>
    </>
  )
}
export default WordToRhyme;
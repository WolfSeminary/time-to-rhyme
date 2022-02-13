import { Box, TextField } from '@mui/material';

export default function WordToRhyme({ onChange }) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Word to Rhyme" variant="outlined" onChange={onChange} />
    </Box>
  )
}

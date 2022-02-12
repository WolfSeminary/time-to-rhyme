

import { Box, TextField } from '@mui/material';

export default function WriteSong({ onChange }) {
  return (
    <Box id="section-to-print"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        variant="outlined"
        style={{ width: 600 }}
        label="Write Song"
        defaultValue="Write the Song"
        multiline rows={8}
        value={song}
        fullWidth
        onChange={onChange}
      />
    </Box>
  )
}

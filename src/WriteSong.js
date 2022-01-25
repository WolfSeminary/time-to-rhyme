import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';
import ClearSong from './ClearSong';

const WriteSong = () => {
  const [song, setSong] = useState();
  const onWriteSong = (params) => {
    setSong(params);
  }
  const onClearSongClick = () => {
    setSong('');
  }
  return (
    <>
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
          onChange={(e) => onWriteSong(e.target.value)}
        />
      </Box>
      <div onClick={onClearSongClick}>
        <ClearSong></ClearSong>
        </div>

    </>
  )
}
export default WriteSong

import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function PrintSong() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Print Designed Song</Button>
    </Stack>
  );
}
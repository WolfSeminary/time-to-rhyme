import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FetchRhymes from './FetchRhymes'

export default function FindRhymeBtn() {
  return (
    <Stack onClick={FetchRhymes} spacing={2} direction="row">
      <Button variant="contained">Find me a Rhyme</Button>
    </Stack>
  );
}

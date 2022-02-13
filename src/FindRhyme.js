
import { Button, Stack } from '@mui/material';

export default function FindRhyme({onClick}) {

  return (
    <Stack  spacing={2} direction="row">
      <Button variant="contained" onClick={onClick}>Find me a Rhyme</Button>
    </Stack>
  );
}


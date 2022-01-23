import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FindRhyme() {
  const [wordToRhyme, setWordToRhyme] = useState()
  const FetchRhymes = () => {
  let word=wordToRhyme
   fetch('https://rhymebrain.com/talk?function=getRhymes&word=' + word).then(res => res.json())
  }
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Find me a Rhyme</Button>
    </Stack>
  );
}

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";
import FetchMoreRhymes from './FetchMoreRhymes'

export default function FindRhyme() {
  const [wordToRhyme, setWordToRhyme] = useState();
  const [rhymes, setRhymes] = useState();
  const FetchRhymes = () => {
    let word = wordToRhyme
    fetch('https://rhymebrain.com/talk?function=getRhymes&word=' + word)
      .then(res => res.json())
      .then(res => setRhymes(res.items))
    return (
    <>
      <Stack onClick={FetchRhymes} spacing={2} direction="row">
        <Button variant="contained">Find me a Rhyme</Button>
      </Stack>
      <FetchMoreRhymes rhymes={rhymes}/>
    </>
    );
  }
}

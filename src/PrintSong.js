import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function PrintSong() {
const [shouldShowThankYouModal,setShouldShowThankYouModal]=useState(false); 
const thank=()=>{
  return (
    shouldShowThankYouModal==true&&< ThankYouModal/>
  )
} 
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onclick={thank}
    >Print Designed Song</Button>
    </Stack>
  );
}
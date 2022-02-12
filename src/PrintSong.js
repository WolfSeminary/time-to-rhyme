import { React, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ThankYouModal from './ThankYouModal'

export default function PrintSong() {
  const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false);
  const thank = () => {
    setShouldShowThankYouModal(true);
  }
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={thank}
        >Print Designed Song</Button>
      </Stack>
      {
        shouldShowThankYouModal&&<ThankYouModal setShouldShowThankYouModal={setShouldShowThankYouModal} />
      }
    </>
  )
}
import { Button, Stack } from '@mui/material';
import ThankYouModal from './ThankYouModal'

export default function PrintSong({ onClick, open, onClose }) {
  function onPrintSongClick() {
    setShouldShowThankYouModal(true);
    window.print();
  }
  return (
    <>
    <Stack spacing={2} direction="row">
      <Button variant="contained" onchange={onPrintSongClick} onclick={onClick} >
        Print Designed Song</Button>
    </Stack>
    {
      open && <ThankYouModal onClose={onClose} />
    }
    </>
  );
}
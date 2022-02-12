import { Button, Stack } from '@mui/material';
import ThankYouModal from './ThankYouModal'

export default function PrintSong({ onClick, open, onClose }) {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={onClick}
        >Print Designed Song</Button>
      </Stack>
      {
        open && <ThankYouModal onClose={onClose} />
      }
    </>
  )
}
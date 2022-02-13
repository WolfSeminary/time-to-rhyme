

import Button from '@mui/material/Button';
export default function FetchMoreRhymes() {

  return (
    <Button variant="contained" disableElevation>
      Fetch more Rhymes ({currentRhymesRange},{props.rhymes})
    </Button>
  )
}



import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';


const ClearSong = () => {
    return ( <Stack direction="row" spacing={1}>
    <IconButton aria-label="Clear">
    <DeleteIcon />
  </IconButton>
  </Stack> );
}
 
export default ClearSong;
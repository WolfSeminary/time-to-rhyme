import { TextField } from '@mui/material';

export default function NumOfSyllables({ onChange }) {
    return <TextField onChange={onChange} id="outlined-basic" label="Number of Syllables" variant="outlined" />

}

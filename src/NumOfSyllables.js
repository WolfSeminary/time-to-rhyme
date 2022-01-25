import { TextField } from '@mui/material';
import { useState } from 'react';

const NumOfSyllables = () => {
    const [numOfSyllables, setNumOfSyllables] = useState(0)
    const onNumOfSyllablesChange = (e) => {
        setNumOfSyllables(e.target.value);
    }
    return (
        <TextField onChange={e => onNumOfSyllablesChange(e)} id="outlined-basic" label="Number of Syllables" variant="outlined" />
    )
}
export default NumOfSyllables;
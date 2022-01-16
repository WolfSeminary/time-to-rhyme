
import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';

const FetchMoreRhymes=()=>{
const[currentRhymesRange, setCurrentRhymesRange]=useState(0)

function fetchRhymes(){
  setCurrentRhymesRange(currentRhymesRange+10)
 }
return(
    <Button variant="contained" disableElevation>
      Fetch more Rhymes
    </Button>
)
}
export default FetchMoreRhymes

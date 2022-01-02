import   React from 'react';
import { useState } from 'react';

const[currentRhymesRange,setcurrentRhymesRange]=useState(0)
const fetchRhymes=()=>{
  return(
    setcurrentRhymesRange(10)
  )
}

export default FetchMoreRhymes
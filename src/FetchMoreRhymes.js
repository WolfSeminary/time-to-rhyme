import   React from 'react';
import { useState } from 'react';


const fetchRhymes=()=>{
const[currentRhymesRange,setcurrentRhymesRange]=useState(0)

  return(
      setcurrentRhymesRange(currentRhymesRange+10) 
  )
}
export default FetchMoreRhymes
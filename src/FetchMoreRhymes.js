import   React from 'react';
import { useState } from 'react';

const FetchMoreRhymes=()=>{
const[currentRhymesRange, setCurrentRhymesRange]=useState(0)

function fetchRhymes(){
  setcurrentRhymesRange(currentRhymesRange+10)
 }

  return <div>here has to be a button</div>
}
export default FetchMoreRhymes

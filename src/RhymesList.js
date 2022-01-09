import {useState} from 'react'
import ListItem from './listItem';
const RhymesList = () => {
    const[rhymes,setRhymes ]=useState(["DFF","FGH"])
    return ( 
        <>
        {rhymes.map((item)=>(
           <ListItem rhyme={item}/>
        ))}
        </>
     );
}
 
export default RhymesList;
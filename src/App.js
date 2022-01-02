import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import RhymesList from './RhymesList';

function App() { 
    const[arrRhymes,setArrRhymes]=useState(["ffff","gfgf","cgvb","REWF!@","wrewr","Rqewtt","ffff","gfgf","cgvb","REWF!@","wrewr","Rqewtt"]);
  return (
    <div className="App"> 
    <RhymesList arrOfRhymes={arrRhymes}/>
    </div>
  );
}

export default App;

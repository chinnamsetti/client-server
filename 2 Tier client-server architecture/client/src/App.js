import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  
  let [animals,setAnimals]=useState([]);
  let getAnimals=async()=>{
     let reqOptions={
      method:"GET"
     };

     let JSONData=await fetch("http://localhost:1405/animals",reqOptions);
        
    let JSOData=await JSONData.json();
    setAnimals(JSOData);

    console.log(JSOData);
  }
  return (
    <div className="App">
        <button onClick={()=>{
          getAnimals();
        }}>Get Animals</button>
        {animals.map((ele,i)=>{
          return<h3 key={i}>{ele}</h3>
        })}
    </div>
  );
}

export default App;

import {useState} from 'react';
import React from "react";
import { Button } from 'react-bootstrap';
function Btn() {
    const [counter,setCounter] = useState(0);

    const increase = () =>{
        setCounter(counter +1);
    };
    const decreaseC = () =>{
        setCounter(counter -1);
    };

    return (
      <div>
        <h1>Counter App</h1>
        <h2>Counter value:{counter}</h2>
      <Button onClick ={increase}>Ins</Button>
    <Button onClick ={decreaseC}>Des</Button>
      </div>
    );
  }
  
  export default Btn;
  
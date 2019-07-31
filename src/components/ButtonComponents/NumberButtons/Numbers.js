import React, { useState } from "react";
import makeID from "../../../makeID";
import { numbers } from '../../../data.js';
import NumberButton from './NumberButton';

//import any components needed

//Import your array data to from the provided data file

const Numbers = props => {
    // STEP 2 - add the imported data to state
  return (
    <div className="number-buttons"> 
    {/* STEP 3 - Use .map() to iterate over your array data and return a button
     component matching the name on the provided file. Pass
     it any props needed by the child component*/ } 
     {numbers.map(number => {
         number = number !== "." ? parseInt(number) : number;
         return ( 
           <NumberButton 
           num = { number }
           key = { makeID(5) }
           display = { props.display }
           setDisplay = { props.setDisplay } 
           />
         );
       })}{" "}
     </div>
     );
     };

     export default Numbers;
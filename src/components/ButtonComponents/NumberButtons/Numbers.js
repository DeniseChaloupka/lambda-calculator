import React, { useState } from "react";
import { numbers } from '../../../data.js';
import NumberButton from './NumberButton';

//import any components needed

//Import your array data to from the provided data file

const Numbers = ({ total }) => {
    // STEP 2 - add the imported data to state
    const [numbersState] = useState(numbers);
    const style_Numbers = {
      display: 'flex',
      flexWrap: 'wrap',
      width: '300px',
      justifyContent: 'space-around',
      height: '400px',
      order: '3',
    }
  return (
    < div style = { style_Numbers } > 
    {/* STEP 3 - Use .map() to iterate over your array data and return a button
     component matching the name on the provided file. Pass
     it any props needed by the child component*/ } 
     {numbersState.map((number, i) => {
        return <NumberButton key = { i } number = { number } />
      })}
    </div>
  );
};

export default Numbers;
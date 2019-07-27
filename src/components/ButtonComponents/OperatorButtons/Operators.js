import React, { useState } from "react";
import { operators } from '../../../data.js';
import OperatorButton from './OperatorButton';
//import any components needed

//Import your array data to from the provided data file


const Operators = ({ total }) => {
  // STEP 2 - add the imported data to state
  const [operatorsState] = useState(operators);

  const style_Operators = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: '13px',
    height: '100%',
    order: '3'
  }

  return ( 
    <div style = { style_Operators }> 
    {/* STEP 3 - Use .map() to iterate over your array data and return a button
     component matching the name on the provided file. Pass
     it any props needed by the child component*/ } 
     {operatorsState.map(operator => {
        return <OperatorButton
        operator = { operator.char }
        value = { operator.value }
        total = { total } />
      })
    } 
    </div>
  );
};

// Exporting the {Operators} component using the `export` keyword
export default Operators;
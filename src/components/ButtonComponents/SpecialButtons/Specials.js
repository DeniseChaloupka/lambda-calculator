import React, { useState } from "react";
import { specials } from '../../../data.js';
import SpecialButton from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

const Specials = ({total}) => {
  // STEP 2 - add the imported data to state
  const [specialsState] = useState(specials);

  const style_Specials = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '300px',
    height: '100px',
    order: '1',
  }

  return ( 
    <div style = { style_Specials }>  
    {specialsState.map(special => {
        return <SpecialButton
        special = { special }
        total = { total } />
      })
    } 
    </div>
  );
};

// Exporting the {Specials} component using the `export` keyword
export default Specials;
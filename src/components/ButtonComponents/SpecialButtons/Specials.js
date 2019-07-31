import React, { useState } from "react";
import makeID from "../../../makeID";
import SpecialButton from './SpecialButton';
import { specials } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  return ( 
    <div className = "specials-buttons" >
    {specials.map(special => {
        return <SpecialButton spec = {special} key = { makeID(5) } />
      })
    } 
    </div>
  );
};

// Exporting the {Specials} component using the `export` keyword
export default Specials;
import React, { useState } from "react"; // Imported `useState`
import "./App.css";
import Display from './components/DisplayComponents/Display'; // Importing default export of the {Display} component
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'; // Importing default export of the {Numbers} component
import Operators from './components/ButtonComponents/OperatorButtons/Operators'; // Importing default export of the {Operators} component
import Specials from './components/ButtonComponents/SpecialButtons/Specials'; // Importing default export of the {Specials} component


// STEP 4 - import the button and display components
import Logo from "./components/DisplayComponents/Logo";


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [displayState, setDisplayState] = useState(0);
  return ( 
    <div className = "container" >
      <Logo />
      <div className = "App" > 
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */ }
        <Display display = { displayState }/> 
        <div className = "button-container" >
        <div className = "left" >
          <Specials />
          <Numbers display = { displayState } setDisplay = { setDisplayState }/> 
        </div> 
        <Operators />
        </div> 
      </div> 
    </div>
  );
}

export default App;
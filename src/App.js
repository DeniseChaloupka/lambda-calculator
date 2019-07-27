import React, { useState } from "react"; // Imported `useState`
import "./App.css";
import Display from './components/DisplayComponents/Display'; // Importing default export of the {Display} component
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'; // Importing default export of the {Numbers} component
import Operators from './components/ButtonComponents/OperatorButtons/Operators'; // Importing default export of the {Operators} component
import Specials from './components/ButtonComponents/SpecialButtons/Specials'; // Importing default export of the {Specials} component


// STEP 4 - import the button and display components
import Logo from "./components/DisplayComponents/Logo";


function App() {
   const [total, setTotal] = useState('0');

   const [accumulator, setAcc] = useState('')
   const calculate = () => {
     try {
       setAcc(eval(total));
       setTotal(eval(total))
     } catch (e) {
       console.log(e)
       setTotal('err');
       setAcc('err');
     }
   }

   const onPress = event => {
     const button = event.target.textContent
     if (button === "=") {
       calculate()
     } else if (button === 'C') {
       setTotal('');
       setAcc('');
     } else if (button === '+/-') {
       setAcc(eval(accumulator * -1))
       setTotal(eval(total * -1));
     } else if (button === 'x') {
       setTotal(`${total}*`)
       setAcc(`${accumulator}x`)
     } else if (button === '%') {
       setTotal(eval(total / 100));
       setAcc(eval(accumulator / 100));
     } else {
       setAcc(`${accumulator}${button}`)
       setTotal(`${total}${button}`);
     }
   }

   const style_ButtonsContainer = {
     display: 'flex',
     flexDirection: 'column',
     flexWrap: 'wrap',
     height: '500px',
     width: '100%',
     margin: '25px',
   }

   const style_Container = {
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
   }

   const style_App = {
     display: 'flex',
     flexWrap: 'wrap',
     height: '725px',
     width: '450px',
     borderRadius: '15px',
     backgroundColor: '#A9203C',
   }

   return ( 
     <div className = "container"
     style = { style_Container } >
     <div className = "App"
     style = { style_App } > 
     { /* STEP 4 - Render your components here and be sure to properly import/export all files */ } 
     <Logo />
     <Display total = { total }/> 
     <div style = { style_ButtonsContainer } >
     <Numbers total = {(event) => onPress(event)}/> 
     <Operators total = {(event) => onPress(event)}/> 
     <Specials />
     </div> 
     </div> 
     </div>
   );
   }

   export default App;
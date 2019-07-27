import React from "react";

const NumberButton = ({ number, total }) => { // Passing {number} as props
  let style_NumberButton;
  // eslint-disable-next-line
  if (number == 0) {
    style_NumberButton = {
      background: '#0E447E',
      width: '180px',
      height:'75px',
      color: '#fff',
      border: 'none',
      borderRadius: '40px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.20)',
      cursor: 'pointer',
      outline: 'none',
    }
  } else {
    style_NumberButton = {
      background: '#0E447E',
      color: '#fff',
      border: 'none',
      borderRadius: '40px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.20)',
      cursor: 'pointer',
      outline: 'none',
    }
  }

  return ( 
    <> {/* Display a button element rendering the data being passed down from the parent container on props */ } 
    <button 
      className = 'clicky'
      style = { style_NumberButton }
      onClick = { total }> 
      { number } 
      </button> 
      </>
  );
};

// Exporting the {NumberButton} component using the `export` keyword
export default NumberButton;
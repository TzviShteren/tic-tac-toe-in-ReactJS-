import React from 'react';
import './Button.css'; // Import Button-specific styles

const Button = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;

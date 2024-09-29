import React from 'react';
import Button from '../Button/Button';

const Board = ({ board, handleClick }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 60px)' }}>
      {board.map((value, index) => (
        <Button key={index} value={value} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Board;

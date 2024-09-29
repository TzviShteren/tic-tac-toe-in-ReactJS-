import React, { useState } from 'react';
import Board from './components/Board/Board';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="app">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="status">{status}</div>
      <div className="board-container">
        <Board board={board} handleClick={handleClick} />
      </div>
      <button className="restart-button" onClick={() => setBoard(Array(9).fill(null))}>
        Restart
      </button>
    </div>
  );
};

const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default App;

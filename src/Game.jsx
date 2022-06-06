import React, { useState } from "react";
import PlayField from "./PlayField";
import Header from "./Header";
const Game = () => {
  const [playerX, setPlayerX] = useState(0);
  const [playerO, setPlayerO] = useState(0);
  function calculateWinner(squares) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        if (squares[a] == "X") {
          setPlayerX(playerX + 1);
        } else {
          setPlayerO(playerO + 1);
        }
        setBoard(Array(9).fill(null));
        return squares[a];
      }
    }
  }

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const fieldCopy = [...board];
    // ------
    if (winner || fieldCopy[index]) return;
    // ------
    fieldCopy[index] = xIsNext ? "X" : "O";
    setBoard(fieldCopy);
    setXIsNext(!xIsNext);
  };
  const clearField = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <div>
      <Header />
      <h2>Paper Note</h2>

      <div className="gameSection">
        <PlayField
          playerO={playerO}
          playerX={playerX}
          squares={board}
          click={handleClick}
        />
      </div>
      <button className="clearBtn" onClick={clearField}>
        Clear the field
      </button>
    </div>
  );
};

export default Game;

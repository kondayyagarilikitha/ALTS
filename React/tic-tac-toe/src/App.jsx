// App.jsx
import React, { useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  // Winning combinations
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check winner
  const checkWinner = () => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }
    return null;
  };

  const winner = checkWinner();

  // Handle click
  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  // Restart game
  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div style={styles.container}>
      <h1>Tic Tac Toe</h1>

      <h2>
        {winner
          ? `Winner: ${winner}`
          : `Turn: ${isXTurn ? "X" : "O"}`}
      </h2>

      <div style={styles.board}>
        {board.map((value, index) => (
          <button
            key={index}
            style={styles.cell}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>

      <button style={styles.restartBtn} onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}

// Styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },

  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 100px)",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px",
  },

  cell: {
    width: "100px",
    height: "100px",
    fontSize: "32px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "10px",
    border: "2px solid black",
  },

  restartBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "black",
    color: "white",
  },
};

export default App;
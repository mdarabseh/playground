import React, { useState } from "react";
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

const TicTacTeo = () => {
  const [player, setPlayer] = useState("X");
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [winner, setWinner] = useState(null);

  const handleCellClick = (rowIndex, cellIndex) => {
    board[rowIndex][cellIndex] = player;
    setBoard([...board]);
    checkWinner();

    setPlayer(player === "X" ? "O" : "X");
  };
  const checkWinner = () => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log("a:", board[a], board[b], board[c]);
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log("winner");
        setWinner(board[a]);
        return board[a];
      }
    }

    return null;
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        {winner ? `Winner: ${winner}` : `Player: ${player}`}
      </h1>
      {board.map((row, rowIndex) => {
        return (
          <div className="flex flex-row gap-2" key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <button
                  className="w-20 h-20 border-2 border-black mt-2"
                  key={cellIndex}
                  onClick={() => handleCellClick(rowIndex, cellIndex)}
                >
                  {cell}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TicTacTeo;

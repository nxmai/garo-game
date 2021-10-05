import React from "react";
import "../App.css";

const Square = ({ x, y, value, onClick, winnerCells }) => {
  const handleClick = () => {
    onClick(x, y);
  };

  const colorStyle = {
    backgroundColor: 'white',
  };
  for(let i = 0; i < winnerCells.length; i++){
    if(winnerCells[i][0] === x && winnerCells[i][1] === y){
        colorStyle["backgroundColor"] = `#D1D5DB`;
    }
  }

  return (
    <div
      className="square bg-none border-black border w-10 h-10 float-left mr-[-1px] mt-[-1px] hover:bg-gray-300"
      onClick={handleClick}
      style={colorStyle}
    >
      {value}
    </div>
  );
};

const Board = ({ square, winnerCells, row, col, onClick }) => {
  const allRowSquare = [];

  
    for (let i = 0; i < row; i++) {
        const rowSquare = [];
        for (let j = 0; j < col; j++) {
          rowSquare.push(
            <Square x={i} y={j} value={square[i][j] === 0 ? "" : square[i][j]} onClick={(x, y) => onClick(x, y)} winnerCells={winnerCells} />
          );
        }
        allRowSquare.push(rowSquare);
    }
  
  

  return (
    <div className="flex flex-col mr-12">
      {allRowSquare?.map((item, index) => (
        <div value={index} key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Board;

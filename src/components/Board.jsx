import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [Squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  function handleClick(i) {
    if (Squares[i]) {
      return;
    }
    const nextSquares = Squares.slice();
    if (isXNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }
  return (
    <>
      <div className="flex">
        <Square value={Squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={Squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={Squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={Squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={Squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={Squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={Squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={Squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={Squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;

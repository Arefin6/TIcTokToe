import Square from "./Square";

const Board = () => {
  return (
    <>
      <div>
        <Square value="X" />
        <Square value="O" />
        <Square value="X" />
      </div>
      <div>
        <Square value="O" />
        <Square value="X" />
        <Square value="O" />
      </div>
      <div>
        <Square value="X" />
        <Square value="O" />
        <Square value="X" />
      </div>
    </>
  );
};

export default Board;

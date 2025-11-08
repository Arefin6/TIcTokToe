const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border-2 m-1 border-gray-300 w-16 h-16 text-2xl"
    >
      {value}
    </button>
  );
};

export default Square;

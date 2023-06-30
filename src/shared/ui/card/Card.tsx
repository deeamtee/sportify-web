const Card = ({ rank, visited, handleCheckboxChange }) => {
  return (
    <div className="w-full bg-slate-600 rounded-lg p-4 shadow-md mb-4">
      <h3 className="text-xl font-semibold text-white">{rank}</h3>
      <div className="flex items-center mt-2 text-l">
        <label htmlFor={`visited-${rank}`} className="text-white">
        </label>
        <input
          type="checkbox"
          id={`visited-${rank}`}
          checked={visited}
          onChange={() => handleCheckboxChange(rank)}
          className="form-checkbox h-4 w-4 text-teal-500"
        />
      </div>
    </div>
  );
};

  export default Card;
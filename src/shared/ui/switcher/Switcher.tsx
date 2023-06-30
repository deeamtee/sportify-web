const Switcher = ({ onChange, checked }) => {
  return (
      <label htmlFor="theme-toggle" className="cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="theme-toggle"
            checked={checked}
            onChange={onChange}
            className="hidden"
          />
          <div className={`toggle-wrapper w-12 h-6 rounded-full ${checked ? 'bg-teal-600' : 'bg-gray-300'}`}>
            <div
              className={`toggle-circle w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${checked && 'translate-x-6'}`} />
          </div>
        </div>
      </label>
  );
};

export default Switcher;

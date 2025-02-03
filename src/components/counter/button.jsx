import PropTypes from "prop-types";

const Button = ({ handleClick, label }) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="text-xl bg-indigo-500 font-bold px-3 py-2 rounded-sm text-white hover:cursor-pointer hover:bg-indigo-600"
      >
        {label}
      </button>
    </>
  );
};


Button.prototype = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;

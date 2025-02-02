function Button({onClick, label, className}) {
    return (
        <button onClick={onClick} className={`rounded-md py-2 px-4 cursor-pointer text-md font-bold ${className}`}>
        {label}
      </button>
    );


  }
  

export default Button;
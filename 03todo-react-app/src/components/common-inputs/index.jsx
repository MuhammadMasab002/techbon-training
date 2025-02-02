function InputFunc({ type, name, id, value, placeholder, label, onChange }) {
  return (
    <div className="mt-5 flex items-center justify-center">
      {/* <label htmlFor={id}>{label}</label> */}
      <input
      className="border-2 rounded-md py-2 px-2 ml4 w-75 focus:outline-0"
        value={value}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default InputFunc;

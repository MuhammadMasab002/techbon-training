import { useSelector } from "react-redux";

const CountValue = () => {
  const state = useSelector((state) => state.count.count);
  // const { count } = state;
  return (
    <div>
      <p className="text-2xl text-white font-bold">{state}</p>
    </div>
  );
};

export default CountValue;

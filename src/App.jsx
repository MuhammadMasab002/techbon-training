import "./App.css";
import AddTodos from "./components/AddTodo";
import Button from "./components/counter/button";
import CountValue from "./components/counter/count-value";
import Todos from "./components/Todos";

import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "./features/counter/countSlice";

function App() {
  const dispatch = useDispatch();

  function incrementHandleClick() {
    dispatch(increment());
  }

  function decrementHandleClick() {
    dispatch(decrement());
  }
  function resetHandleClick() {
    dispatch(reset());
  }

  return (
    <>
      <div className="w-100 m-auto h-lvh flex flex-col items-center justify-center">
        <div className="w-100 flex-co items-center py-5">
          <AddTodos />
          <Todos />
        </div>

        <div>
          <h1 className="my-6 text-2xl font-bold text-white">Counter App</h1>
        </div>
        <div className="w-100 flex items-center justify-evenly mb-4">
          <Button handleClick={incrementHandleClick} label={"Increment"} />
          <CountValue />
          <Button handleClick={decrementHandleClick} label={"Decrement"} />
        </div>
          <Button handleClick={resetHandleClick} label={"Reset"} />
      </div>
    </>
  );
}

export default App;

import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function AddTodos() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  function addTodoHandler(event) {
    event.preventDefault();

    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <>
      {/* <div> */}

        <form onSubmit={addTodoHandler}>
          <div className="my-4 flex justify-center">
            <input
              className="border-2 rounded-sm px-2 py-1"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new todo..."
            />
            <button
              className="bg-blue-700 rounded-sm px-3 py-1 font-bold ml-2 hover:cursor-pointer"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      {/* </div> */}
    </>
  );
}

export default AddTodos;

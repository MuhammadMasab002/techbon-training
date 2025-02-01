import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-500 py-6 px-4">
      <ul>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-black py-2 px-2 rounded-md my-2"
            >
              <div className="text-md text-white">{todo.text}</div>
              <button
                className="bg-red-700 rounded-sm px-3 py-1 font-bold ml-4 hover:cursor-pointer"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <h1 className="text-white">add todos here...</h1>
        )}
      </ul>
    </div>
  );
}

export default Todos;

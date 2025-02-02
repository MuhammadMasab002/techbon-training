import { useEffect } from "react";
import { useState } from "react";
import TodoItems from "./components/todo-item";
import TodoDetails from "./components/todo-detail";

function TodoListApp() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [filteredTodos, setFilteredTodos] = useState([]);
  // const [editTodo, setEditTodo] = useState(null);
  // const [filter, setFilter] = useState("");

  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fetchListOfTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/todos", {
        method: "GET",
      });
      const result = await response.json();

      if (result?.todos && result.todos.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        console.log(result);
      } else {
        setErrorMsg("No Todos found");
        setLoading(false);

        console.log("No Todos found");
      }
    } catch (error) {
      setErrorMsg("Fetching list of Todos failed");
      setLoading(false);

      console.log("error", errorMsg);
    }
  };

  const fetchDetailsOfCurrentTodos = async (getCurrentTodoId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoId}`,
        {
          method: "GET",
        }
      );
      const details = await response.json();

      if (details) {
        setTodoDetails(details);
        setOpenDialog(true);
        // setLoading(false);
        console.log(details);
      } else {
        setOpenDialog(false);
        setErrorMsg("No Todos Details found");
        // setLoading(false);
        console.log(errorMsg);
        
      }
    } catch (error) {
      setErrorMsg("Fetching Details of Todos failed", error);
      // setLoading(false);
      console.log("error", errorMsg);
    }
  };

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-10 text-2xl font-bold">My Todo List</h1>

      <div className="w-[75%] bg-indigo800 mx-auto p-4 mt-6">
        <ul className="list-none flex flex-wrap gap-2 justify-center items-center">
          {todoList && todoList.length > 0
            ? todoList.map((todoItem, index) => (
                <TodoItems
                  fetchDetailsOfCurrentTodos={fetchDetailsOfCurrentTodos}
                  todo={todoItem}
                  key={index}
                />
              ))
            : null}
        </ul>
      </div>

      {/* <TodoItems /> */}
      <TodoDetails
        todoDetails={todoDetails}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        setTodoDetails={setTodoDetails}
      />
      {/* <TodoForm /> */}
      {/* <TodoList /> */}
    </div>
  );
}

export default TodoListApp;

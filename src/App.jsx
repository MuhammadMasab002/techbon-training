import "./App.css";
import AddTodos from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="w-100 m-auto">
        <div className="flex-col items-center py-50">
          <AddTodos />
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;

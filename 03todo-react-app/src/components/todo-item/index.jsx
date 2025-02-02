function TodoItems({ todo, fetchDetailsOfCurrentTodos, keyId }) {
  return (
    <li key={keyId} className="border-2 border-blue-500 p-4 w-75 h-30 flex justify-between items-center">
      <h3>{todo?.todo}</h3>
      <button onClick={() => {fetchDetailsOfCurrentTodos(todo?.id)}} className="bg-amber-400 rounded-md text-white font-bold px-4 py-2 ml-2 hover:cursor-pointer">
        Details
      </button>
      {/* <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button> */}
      {/* TODO: Implement TodoItems component */}
    </li>
  );
}

export default TodoItems;

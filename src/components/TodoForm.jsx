import React from "react";
import { useTodoContext } from "../context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = React.useState("");
  const [priority, setPriority] = React.useState("Low"); // New state for priority
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false, priority }); // Include priority in the task
    setTodo("");
    setPriority("Low"); // Reset priority to default
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Write your task..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-blue-400"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border border-gray-300 rounded-lg px-2 py-2 bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

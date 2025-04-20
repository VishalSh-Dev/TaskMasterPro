import React from "react";
import { useTodoContext } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { editTodo, removeTodo, toggleTodo } = useTodoContext();
  const [isTodoEditable, setIsTodoEditable] = React.useState(false);
  const [todoMsg, setTodoMsg] = React.useState(todo.todo);

  const toggleCompleted = () => {
    toggleTodo(todo.id);
  };

  const updateTodo = () => {
    if (todoMsg.trim() === "") return;
    editTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  return (
    <div
      className={`flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 shadow-sm transition duration-300 ${
        todo.completed
          ? "bg-green-100 dark:bg-green-800"
          : "bg-gray-100 dark:bg-gray-700"
      } ${
        todo.priority === "High"
          ? "border-red-500"
          : todo.priority === "Medium"
          ? "border-yellow-500"
          : "border-green-500"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="cursor-pointer w-5 h-5"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <span
          className={`text-sm font-semibold ${
            todo.priority === "High"
              ? "text-red-500"
              : todo.priority === "Medium"
              ? "text-yellow-500"
              : "text-green-500"
          }`}
        >
          {todo.priority}
        </span>
        <input
          type="text"
          className={`w-full bg-transparent outline-none ${
            isTodoEditable ? "border-b border-gray-400" : "border-none"
          } ${
            todo.completed
              ? "line-through text-gray-500 dark:text-gray-400"
              : "text-gray-800 dark:text-gray-200"
          }`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          className={`px-2 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 dark:bg-blue-400 dark:hover:bg-blue-500 ${
            todo.completed
              ? "line-through text-gray-500 dark:text-gray-400"
              : ""
          }`}
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              updateTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "Save 📁" : "Edit ✏️"}
        </button>
        <button
          className="px-2 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 dark:bg-red-400 dark:hover:bg-red-500"
          onClick={() => removeTodo(todo.id)}
        >
          Delete 🗑
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

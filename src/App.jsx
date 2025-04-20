import { useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeBtn";
function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [todos, setTodos] = useState([]);
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [themeMode]);
  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { ...todo, id: Date.now(), completed: false },
    ]);
  };
  const editTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };
  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
        setTodos(JSON.parse(storedTodos));
      } catch (error) {
        console.error("Failed to parse todos from localStorage:", error);
      }
    }
  }, []);
  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <TodoProvider
        value={{ todos, addTodo, editTodo, removeTodo, toggleTodo }}
      >
        <div
          className={`min-h-screen py-8 ${
            themeMode === "dark"
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          <div className="w-full max-w-3xl mx-auto shadow-lg rounded-lg px-6 py-5 bg-white dark:bg-gray-800 dark:text-gray-200">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">
            TaskMaster Pro
            </h1>
            <div className="flex justify-end mb-4">
              <ThemeBtn />
            </div>
            <div className="mb-6">
              <TodoForm />
            </div>
            <div className="grid gap-4">
              {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;

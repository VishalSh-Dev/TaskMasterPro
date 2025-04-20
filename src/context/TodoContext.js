import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    editTodo: (id, updatedTodo) => {},
    removeTodo: (id) => {},
    toggleTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
}
// This code defines a context for managing todo items in a React application.
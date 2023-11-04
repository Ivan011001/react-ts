import { useState } from "react";
import { nanoid } from "nanoid";
import { Todo } from "./App.types";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

export function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const onTodoAdd = (description: string) => {
    const newTodo: Todo = { description, id: nanoid() };

    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };

  const onTodoDelete = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      <TodoForm onTodoAdd={onTodoAdd} />
      <TodoList todos={todos} onTodoDelete={onTodoDelete} />
    </div>
  );
}

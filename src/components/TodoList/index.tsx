import TodoListItem from "./TodoListItem";
import { Todo } from "components/App/App.types";

interface ITodoListProps {
  todos: Todo[];
  onTodoDelete: (id: string) => void;
}

export default function TodoList({ todos, onTodoDelete }: ITodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoListItem todo={todo} onTodoDelete={onTodoDelete} />
        </li>
      ))}
    </ul>
  );
}

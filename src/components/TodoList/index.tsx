import TodoListItem from "./TodoListItem";
import { selectTodos } from "redux/Todo/selectors";
import { useSelector } from "react-redux";
import { Todo } from "redux/Todo/slice";

// import { Todo } from "components/App/App.types";

// interface ITodoListProps {
//   todos: Todo[];
//   onTodoDelete: (id: string) => void;
// }

export default function TodoList() {
  const todos: Todo[] = useSelector(selectTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoListItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}

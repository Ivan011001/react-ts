import { FC } from "react";
import { Todo } from "../../App/App.types";

interface ITodoListItemProps {
  todo: Todo;
  onTodoDelete: (id: string) => void;
}

const TodoListItem: FC<ITodoListItemProps> = ({ todo, onTodoDelete }) => {
  return (
    <div>
      <span>{todo.description}</span>

      <button type="button" onClick={() => onTodoDelete(todo.id)}>
        delete
      </button>
    </div>
  );
};

export default TodoListItem;

import { FC } from "react";
import { Todo } from "../../App/App.types";
import { useDispatch } from "react-redux";
import { deleteTodo } from "redux/Todo/slice";

interface ITodoListItemProps {
  todo: Todo;
}

const TodoListItem: FC<ITodoListItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{todo.description}</span>

      <button type="button" onClick={() => dispatch(deleteTodo(todo.id))}>
        delete
      </button>
    </div>
  );
};

export default TodoListItem;

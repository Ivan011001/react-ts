import { FormEvent, useState, ChangeEvent } from "react";
import { addTodo } from "redux/Todo/slice";
import { useDispatch } from "react-redux";

// interface ITodoFormProps {
//   onTodoAdd: (description: string) => void;
// }

export default function TodoForm() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      todo: { value: string };
    };

    const description = target.todo.value;

    dispatch(addTodo(description));

    setNewTodo("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="todo"
        value={newTodo}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

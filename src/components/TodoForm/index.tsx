import { FormEvent, useState, ChangeEvent } from "react";

interface ITodoFormProps {
  onTodoAdd: (description: string) => void;
}

export default function TodoForm({ onTodoAdd }: ITodoFormProps) {
  const [newTodo, setNewTodo] = useState<string>("");

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      todo: { value: string };
    };

    const description = target.todo.value;

    onTodoAdd(description);

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

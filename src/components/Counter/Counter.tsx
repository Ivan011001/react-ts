import { useState } from "react";
import { User } from "../App/App.types";

interface CounterProps {
  user: User;
}

export function Counter({ user }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <span>{count}</span>
      <button
        type="button"
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </button>

      <button
        type="button"
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        -
      </button>

      <div>
        <p>User age: {user.age}</p>
        <p>User name: {user.name}</p>
      </div>
    </div>
  );
}

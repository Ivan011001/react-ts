import { useState } from "react";

type User = {
  name: string;
  age: number;
};

export function UserProfile() {
  const [user, setUser] = useState<User>({ name: "dekbf", age: 22 });

  const changeUser = (newName: string, newAge: number): void => {
    setUser((user): User => {
      return { ...user, name: newName, age: newAge };
    });
  };

  return (
    <div>
      <p>
        Hello {user.name} you age is {user.age}
      </p>

      <button type="button" onClick={() => changeUser(`${Math.random()}`, Math.random())}>
        Change user
      </button>
    </div>
  );
}

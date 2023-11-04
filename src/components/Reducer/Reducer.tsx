import { useReducer, useEffect } from "react";

type User = {
  id: string;
  name: string;
  age: number;
};

type State = {
  user: User | null;
  error: string | null;
  loading: boolean;
};

type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS"; payload: User }
  | { type: "ERROR"; error: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };

    case "SUCCESS":
      return { ...state, error: null, user: action.payload };

    case "ERROR":
      return { ...state, error: action.error, user: null };
  }
}

const initialState: State = {
  user: null,
  error: null,
  loading: false,
};

export function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchUsers = () => {
      try {
        dispatch({ type: "LOADING" });

        const isSuccess = Math.random() > 0.5;

        const newUser: User = {
          id: "2",
          name: "ksfbv",
          age: 13,
        };

        if (!isSuccess) throw new Error("jbharb");

        dispatch({ type: "SUCCESS", payload: newUser });
      } catch (error) {
        dispatch({ type: "ERROR", error: (error as Error).message });
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <button onClick={() => console.log(state)}></button>
    </div>
  );
}

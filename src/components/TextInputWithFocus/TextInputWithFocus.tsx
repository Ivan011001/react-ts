import { useRef, useEffect } from "react";

export function TextInputWithFocus() {
  const inputEl = useRef<HTMLInputElement>(null);
  const number = useRef<number>(0);

  const inputFocus = () => {
    inputEl.current?.focus();
  };

  const addNumber = () => {
    number.current += 1;
    console.log("Added");
  };

  useEffect(() => {
    console.log("Updated");
  }, []);

  return (
    <div>
      <input type="text" name="input" ref={inputEl} />

      <button onClick={inputFocus}>Focus</button>

      <button onClick={addNumber}>Add number</button>
    </div>
  );
}

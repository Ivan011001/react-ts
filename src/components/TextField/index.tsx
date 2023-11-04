import { ChangeEvent } from "react";
import { useState } from "react";

export default function TextField() {
  const [value, setValue] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <input type="text" value={value} onChange={onInputChange} />;
}

import React from "react";
import { ChangeEvent, KeyboardEvent } from "react";

interface Props {
  value: string | number;
  type: "number" | "text";
  onChange: (value: string | number) => void;
  onPressEnter: () => void;
}

export default function Input({ value, type, onChange, onPressEnter }: Props) {
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onPressEnter();
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: string | number = e.target.value;

    if (type === "number") {
      newValue = Number(newValue);
    }

    console.log("Змінене значення:", newValue);
    onChange(newValue);
  };

  return (
    <input
      type={type}
      value={value.toString()}
      onChange={onInputChange}
      onKeyDown={onKeyPress}
    />
  );
}

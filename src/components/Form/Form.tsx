import React from "react";
import { FormEvent } from "react";

export function Form() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submited");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Submit!</button>
    </form>
  );
}

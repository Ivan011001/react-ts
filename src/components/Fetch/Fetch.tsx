import { useState } from "react";

type Status = "idle" | "pending" | "success" | "error";

export function Fetch() {
  const [status, setStatus] = useState<Status>("idle");

  const startFetching = () => {
    setStatus("pending"); // Set status to "pending" immediately when the fetch starts

    const isSuccess = Math.random() > 0.5;

    // Simulate a delay before updating the status
    setTimeout(() => {
      try {
        if (!isSuccess) throw new Error();
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    }, 1000); // Delay for 1 second (1000 milliseconds)
  };

  return (
    <div>
      <p>Current status is: {status}</p>
      <button onClick={startFetching}>Fetch</button>
    </div>
  );
}

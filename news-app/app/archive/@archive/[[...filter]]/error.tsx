"use client";

interface ErrorProps {
  error: Error;
  reset: () => void; // function to retry rendering
}

export default function FilterError({ error, reset }: ErrorProps) {
  return (
    <div style={{ padding: "2rem", color: "red" }}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

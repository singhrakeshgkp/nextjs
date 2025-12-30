'use client';


interface ErrorProps {
  error: boolean;
  message: string;
}
export default function NewPostError({ message,error }: ErrorProps) {
  return (
    <>
      <h2>An error occurred!</h2>
      <p>Unfortunately, something went wrong.</p>
      <p>{message}</p>
    </>
  );
}

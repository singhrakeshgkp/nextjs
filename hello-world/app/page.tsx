import Image from "next/image";
import Link from "next/link";
import Student from "../components/student"

export default function Home() {
  console.log("test execution started")
  return (
    <main>
      <h1>Hello world</h1>
      <Student></Student>
      {/* <p><a href = "/about">About US</a></p> */}
      <p><Link href="/about">About US</Link></p>
    </main>
  );
}

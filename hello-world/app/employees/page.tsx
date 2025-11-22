import Link from "next/link";

export default function Employees(){
    return (
        <main>
            <h1>Employees</h1>
            <p><Link href="/employees/employee-1"> Employee  1</Link></p>
            <p><Link href="/employees/employee-2"> Employee 2</Link></p>
        </main>
    )
}
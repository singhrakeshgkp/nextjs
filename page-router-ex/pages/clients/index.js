import Link from "next/link"

export default function clientsPage(){
    const clients = [
        {id: "001",name: "google"},
        {id: "002",name: "facebook"},
        {id: "003",name:"nvidia"}
    ]
    return (
        <><h1>This is Clients page</h1>
        <ul>
            {
                clients.map((client) => (
                    <li key={client.id}>
                        {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> approach 1 */}
                        {/* approach -2 */}
                       <Link href={{
                        pathname: "/clients/[id]",
                        query: {id: client.id}
                       }}>{client.name}</Link>
                    </li>
                ))
            }
        </ul>
        </>
    )
}
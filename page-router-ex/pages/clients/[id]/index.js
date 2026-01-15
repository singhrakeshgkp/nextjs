import { useRouter } from "next/router";

export default function clientProjects(){
    const router = useRouter();
    function loadProjectHandler(){
        //.... code to fetch data from api or db

        // approach 1
        /* router.push('/clients/001/projecta') */ 
        // approach 2 by passing object to push method
        router.push({
            pathname: "/clients/[id]]/[clientPrjectId]",
            query: {id: "002",clientProjectId: "projectA"}
        });
    }
    return <><h1>Projects by Client id page</h1>

    <button onClick={loadProjectHandler}>Load Project A</button>
    </>
}
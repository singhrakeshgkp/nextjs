import { useRouter } from "next/router";

export default function productDetailPage(){
    const router = useRouter();
    console.log('path name = ',router.pathname);
    console.log('query param = ',router.query);
    return <><h1>Product details page</h1></>
}
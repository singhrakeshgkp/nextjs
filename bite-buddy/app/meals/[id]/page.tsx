type MealByIdPageProp = {
    params: Promise<{id: string}> //next js wraps parames in. promise
}

export default async function Meal(props: MealByIdPageProp){
    const params = await props.params
    const id = params.id
    return <main>
        <h1> Meal Page, Meal id is :-        {id}</h1>
    </main>
}
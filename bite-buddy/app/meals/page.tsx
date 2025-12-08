import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import Link from 'next/link';
import { Suspense } from 'react';
import classes from './page.module.css';

 async function OutSourceMeals(){
const meals =  await getMeals();
return <MealsGrid meals={meals}></MealsGrid>;

}
export const metadata = {
    title: "meals",
    description:"browse our elegant meals"
}
export default function Meals(){
    return (
    
        <>
        <header className={classes.header}>
            <h1>
                Delicious meals, created{''}
                <span className={classes.highligh}> by you </span>
            </h1>

            <p> choose your fav receipe and coock yourself</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                Share your fav receipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className= {classes.loading}>Fetching meals...</p>}>
                 <OutSourceMeals/>
            </Suspense>
           
        </main>
        </>
    )
}
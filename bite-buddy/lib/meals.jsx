import sql from 'better-sqlite3';
const db = sql('meals.db');

/* export default function getMeals(){
    return db.prepare('select * from meals').all();
} */

    /* OR */

export default async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve,2000))
    return db.prepare('select * from meals').all();
}
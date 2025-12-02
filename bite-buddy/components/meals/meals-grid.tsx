import MealItem from './meal-item';
import classes from './meals-grid.module.css';

interface Meal{
    id: number;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
}

interface MealsGridProps{
    meals: Meal[];
}
export default function MealsGrid({meals}: MealsGridProps){
    return <ul className={classes.meals}>
        {meals.map(meal => <li key={meal.id}>
            <MealItem {...meal}></MealItem>
        </li>)}
    </ul>
}
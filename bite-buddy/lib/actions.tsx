'use server'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

    function isInValidText(text:string | undefined | null) : boolean{
        return !text || text.trim() === '';
    }
    export async function submitMeal(formData:FormData) {
        'use server'// specified this to execute this function on server.
        const meal = {
            title: formData.get('title'),
            summary: formData.get('summary'),
            instructions: formData.get('instructions'),
            image: formData.get('image'),
            creator: formData.get('name'),
            creator_email: formData.get('email')
        }

        if (isInValidText( meal.title as string ) ?? ''){
            throw new Error('Invalid data')
        }

        await saveMeal(meal);
        console.log('data saved successfully')
        revalidatePath('/meals');// one path
        /* revalidatePath('/meals','page'); one path one page*/
        /* revalidatePath('/meals','layout'); multiple/nested page will be revalidated. */
        /* revalidatePath('/','layout'); revalidate all the pages of entire website */
        redirect('/meals');
    }
'use client'
import { useFormStatus } from "react-dom";

export function MealsFormSubmit(){
/*  const status = useFormStatus();
    const pending = status.pending; */
    /* OR */
    const {pending} = useFormStatus();
    return <button disabled={pending}>
        {pending ? 'Submitting....' : 'Share Meal'}
    </button>

}
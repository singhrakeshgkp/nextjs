'use server'

import { createAuthSession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

export async function signup(prevState,formData){
    const email = formData.get('email');
    const password = formData.get('password');
    
    let errors = {};
    console.log("email is ",email)
    if (!email.includes('@')){
        errors.email = 'Please enter a valid email address';
    }

    if (password.trim().length < 5){
        errors.password = 'Password must be 8 character long.';
    }

    if(Object.keys(errors).length >0){
        return {
            errors, // can be written as errors: errors since property(used in auth-form.js formState.error) name and value object is same so we used shortcut errors,
        }
    }

    const hashedPassword = hashUserPassword(password);
    try {
    const userId = createUser(email, hashedPassword);
    await createAuthSession(userId);
     redirect('/training');

    }catch(error){
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE'){
            return {
                errors: {
                    email : 'email already exist'
                }
            }
        }
        throw error;
    }
}

export async function login(prevState,formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const existingUser = getUserByEmail(email);

    if(!existingUser){ //if existingUser is undefined
        return {
            errors: {
                email: 'Invalid email'
            }
        }
    }

    const isValidPassword = verifyPassword(existingUser.password,password);
    if (!isValidPassword){
        return {
            errors: {
                password: 'Invalid credential'
            }
        }
    }

    await createAuthSession(existingUser.userId);
    redirect('/training')
}
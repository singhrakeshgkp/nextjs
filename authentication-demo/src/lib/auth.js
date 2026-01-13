import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { Lucia } from 'lucia';
import { cookies } from "next/headers";
import db from './db';

const adapter = new BetterSqlite3Adapter(db,{ // specified user table and sessions table where sessions will be stored
    user: 'USERS',
    session: 'sessions'
});
const lucia = new Lucia(adapter,{
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === 'production'
        }
    }
});

export async function createAuthSession(userId) {
     console.log(userId);
   const session = await lucia.createSession(userId,{});  // this line will create session in table with extra data, since we dont want any extra data so we pssed {} empty object
   const sessionCookie = lucia.createSessionCookie(session.id);
 const cookieStore = await cookies(); 
   
   cookieStore.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
   );
}

export async function verifySession() {
    const cookieStore = await cookies(); 
    const sessionCookie = cookieStore.get(lucia.sessionCookieName);
    if (!sessionCookie){
        return {
            user: null,
            session: null
        };
    }

    const sessionId = sessionCookie.value;
    if(! sessionId){
        return {
            user: null,
            session: null
        };
    }

    const result = await lucia.validateSession(sessionId)
    try{
    if(result.session && result.session.fresh){
        // override session
      const sessionCookie  = lucia.createSessionCookie(result.session.id);
        cookieStore.set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes
         );
        }
    if(! result.session){
        const sessionCookie = lucia.createBlankSessionCookie();
        cookieStore.set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes
         );
    }
    }catch{}
    return result;
}
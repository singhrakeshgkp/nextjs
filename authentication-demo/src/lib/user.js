import db from "./db";

export function createUser(email,password){
   const result = db.prepare('insert into users (email, password) values (?,?)')
    .run(
        email,
        password);
    return result.lastInsertRowid;
}
import sql from 'better-sqlite3';
import fs from 'node:fs';
import slugify from 'slugify';
import xss from 'xss';
const db = sql('meals.db');

/* export default function getMeals(){
    return db.prepare('select * from meals').all();
} */

    /* OR */

export  async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve,2000))
   /*  throw Error("some error occurred") */
    return db.prepare('select * from meals').all();
}

export   function getMealById(id) {
    return db.prepare('select * from meals where id = ?').get(id); 
}

export async function saveMeal(meal){
    meal.slug  = slugify(meal.title,{lower:true});
    /* const instructions = xss(meal.instructions);  OR */
   meal.instructions = xss(meal.instructions);
  /* since we are storing only image file name in db and image in /public folder, hence we need to write image in this folder first with some name. */
   const extension = meal.image.name.split('.').pop();
   const fileName = `${meal.slug}.${extension}`;
   const stream = fs.createWriteStream(`public/images/${fileName}`)
   const bufferredImage = await meal.image.arrayBuffer();
   stream.write(Buffer.from(bufferredImage, (error)=>{
    if(error){
        throw new Error('saving image failed....')
    }
   }));

   meal.image = `/images/${fileName}`;
   db.prepare(`
    insert into meals 
    (title, summary,instructions, creator, creator_email,image, slug)
    values (
     @title,
     @summary,
     @instructions,
     @creator,
     @creator_email,
     @image,
     @slug
    )
    `).run(meal)


}
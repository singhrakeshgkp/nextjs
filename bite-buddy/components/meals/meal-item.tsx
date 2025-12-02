import Image from 'next/image';
import Link from 'next/link';
import classes from './meal-item.module.css';

interface MealItemProps{
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
}
export default function MealItem({ title, slug, image, summary, creator } : MealItemProps) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />. {/* Here we have used fill props as here image is getting loaded dynamically lets say from DB so next js <image tag will not be 
          able to resolve its height and width as image is dynamic. was it in our project folder and image was static <Image tag would have resolve it during compilation */}
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
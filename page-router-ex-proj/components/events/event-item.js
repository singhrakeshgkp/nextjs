import classes from "@/components/events/event-item.module.css";
import Link from "next/link";
export default function EventItem(props){
    const {title,image,date, location,id} = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(', ','\n');
    const exploreEventLink = `/events/${id}`;


    return <li className={classes.item}>
        <img src={'/'+image} alt=""></img>
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Link href={exploreEventLink}>Explore Event</Link>
            </div>
        </div>
    </li>
}


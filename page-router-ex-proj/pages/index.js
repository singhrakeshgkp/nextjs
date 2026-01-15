import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

export default function HomePage(){
  const newsEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={newsEvents}></EventList>
    </div>
  )
}
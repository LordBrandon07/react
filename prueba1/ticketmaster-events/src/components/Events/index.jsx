import { useState } from "react";
import EventItem from "./components/EventItem"
import eventJSON from "../../data/event.json"


const Events = () => {
    const [data, setSata] = useState(eventJSON);
    const { _embedded: {events}} = data;

    const handleEventItemClick = (id) => {
        console.log('evento click', id)
    }

    const eventsComponent = events.map((eventItem) => (
        <EventItem 
            key={`event-tem-${eventItem.id}`}
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url}
            onEventClick={handleEventItemClick}
            id={eventItem.id}
        />
    ));

    return <div>
        eventos
        {eventsComponent}
    </div>
}

export default Events
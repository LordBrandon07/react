import { useState } from "react";
import EventItem from "./components/EventItem"
import useEventsData from "../../hooks/useEventsData";

import { useNavigate } from "react-router-dom";

const Events = ( {searchTerm} ) => {
    const { events, isLoading, error } = useEventsData();
    const navigate = useNavigate();

    const handleEventItemClick = (id) => {
        navigate(`detail/${id}`)
    }

    const renderEvents = () => {
        let eventsFiltered = events;

        if (searchTerm.length > 0){
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm));
        }

        return eventsFiltered.map((eventItem) => (
            <EventItem 
                key={`event-tem-${eventItem.id}`}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventItemClick}
                id={eventItem.id}
            />
        ))
    };

    if (error) {
        return <div>Ha ocurrido un error</div>
    }

    if (isLoading) {
        return <div>Cargando eventos...</div>
    }

    return <div>
        eventos
        {renderEvents()}
    </div>
}

export default Events
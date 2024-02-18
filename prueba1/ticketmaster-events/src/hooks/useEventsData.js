import { useState } from "react";

import eventJSON from "../data/event.json"

const useEventsData = () => {
    const [data, setSata] = useState(eventJSON);
    const { _embedded: {events}} = data;

    return {
        events
    }
}

export default useEventsData
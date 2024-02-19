import { useRef, useEffect, useState } from "react";

import eventJSON from "../data/event.json"

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        setTimeout(() => {
            try{
                setData(eventJSON);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 4000);
    }, []);

    return {
        events: data?._embedded?.events || [],
        isLoading,
        error,
    }
}

export default useEventsData
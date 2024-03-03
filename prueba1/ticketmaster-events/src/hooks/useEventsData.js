import { useRef, useEffect, useState } from "react";


const useEventsData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const fetchEvents = async (params) => {
        try{
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=kNZvNsNIYfJyOwhgCvJK9mYEWuhWdM2g&countryCode=MX${params?.length? params : ''}`); 
            const data = await response.json();

            setData(data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    };

        // setTimeout(() => {
        //     try{
        //         setData(eventJSON);
        //         setIsLoading(false);
        //     } catch (error) {
        //         setError(error);
        //     }
        // }, 500)

    return {
        events: data?._embedded?.events || [],
        isLoading,
        error,
        fetchEvents,
    }
}

export default useEventsData
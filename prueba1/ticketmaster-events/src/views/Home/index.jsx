import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar"
import Events from "../../components/Events";
import useEventsData from "../../hooks/useEventsData";

const Detail = () => {
    const { events, isLoading, error, fetchEvents } = useEventsData();
    const containerRef = useRef();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      fetchEvents();
    }, []);
    

    const handleNavbarSearch = (term) => {
      setSearchTerm(term);
      fetchEvents(`&keyword:${term}`);
    }
  
    return (
      <>
       <Navbar onSearch={handleNavbarSearch} ref={containerRef}/>
       {isLoading ? <div>Cargando eventos...</div> : <Events searchTerm={searchTerm} events={events}/>}
       {!!error && <div>Ha ocurrido un error</div>}
      </>
    )
}

export default Detail
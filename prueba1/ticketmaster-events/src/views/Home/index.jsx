import { useState, useRef } from "react";
import Navbar from "../../components/Navbar"
import Events from "../../components/Events";

const Detail = () => {
    const containerRef = useRef();
    const [searchTerm, setSearchTerm] = useState('');
    const handleNavbarSearch = (term) => {
      console.log(containerRef.current.setSearch(''))
      setSearchTerm(term);
    }
  
  
    return (
      <>
       <Navbar onSearch={handleNavbarSearch} ref={containerRef}/>
       <Events searchTerm={searchTerm}/>
      </>
    )
}

export default Detail
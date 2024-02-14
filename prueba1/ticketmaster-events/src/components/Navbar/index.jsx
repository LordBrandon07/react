import { useState } from "react";

const Navbar = () => {
    const[search, setSearch] = useState('');

    const handleInputChange = (evt) => {
        setSearch(evt.target.value)
    }

    return(
        <div>
            <p>Boleteria</p>
            <input 
                placeholder="Busca el evento" 
                onChange={handleInputChange}
                value={search}
            />
        </div>
    );
};

export default Navbar;
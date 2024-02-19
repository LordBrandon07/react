import { useState, forwardRef, useImperativeHandle } from "react";

const Navbar = forwardRef(({onSearch}, ref ) => {
    const[search, setSearch] = useState('');


    useImperativeHandle(ref, () => ({
        search, setSearch   
    }));

    const handleInputChange = (evt) => {
        setSearch(evt.target.value)
    }

    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter'){
            onSearch(search);
        }
    }



    return(
        <div ref={ref} style={{
            marginBottom: 14,
            width: '100%',
            display: 'flex',

        }}>
            <div style={{flex: 1 , display:'flex'}}>
                <p style={{
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>Boleteria</p>
            </div>
            <div style={{flex: 1, display:'flex', alignItems: 'center', justifyContent:'flex-end', }}>
                <input 
                    placeholder="Busca el evento" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value={search}
                    style={{
                        fontSize: 16,
                        padding: '6px    12px',
                        borderRadius: '4px',
                        border: 'none',
                        width: 200
                    }}
                />
            </div>
        </div>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
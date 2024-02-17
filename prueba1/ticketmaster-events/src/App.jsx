import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/index.jsx'
import Events from './components/Events/index.jsx'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  }


  return (
    <>
     <Navbar onSearch={handleNavbarSearch} />
     <Events searchTerm={searchTerm}/>
    </>
  )
}

export default App

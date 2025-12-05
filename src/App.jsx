import { useState } from 'react';
import Navbar from './Components/Navbar'
import {myData, navItems} from './data';

function App() {
    const  [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }
    return (
        <div>
            <Navbar
             name={myData.name} 
             navItems={navItems}
             isMenuOpen={isMenuOpen}
             toggleMenu={toggleMenu}
            />
        </div>
    )
}

export default App;


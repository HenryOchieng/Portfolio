import { useState } from 'react';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import {myData, navItems} from './data';

function App() {
    const  [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }
    return (
        <div className='portfolio-app-root'>
            <Navbar
             name={myData.name} 
             navItems={navItems}
             isMenuOpen={isMenuOpen}
             toggleMenu={toggleMenu}
            />
            <main>
                <Hero 
                    name={myData.name}
                    title={myData.title}
                    socials={myData.contact}
                />
                <About 
                    bio={myData.bio}
                    caption={myData.caption} 
                />
                <Skills 
                    stack={myData.skills}
                />
            </main>
        </div>
    )
}

export default App;


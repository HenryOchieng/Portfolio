import { useState } from 'react';
//import { Navbar, Hero, About, Skills } from './Components';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
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
                <Projects 
                    works={myData.projects}
                />
                <Contact
                    contact={myData.contact} 
                />
                <Footer 
                    name={myData.name}
                />
            </main>
        </div>
    )
}

export default App;


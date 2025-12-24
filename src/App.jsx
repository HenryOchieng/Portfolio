import { useEffect, useState } from 'react';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import {myData, navItems} from './data';

function App() {
    const [loading, setLoading] = useState(true)
    const  [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return <Loader />
    }

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


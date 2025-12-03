import Navbar from './Components/Navbar'
import {myData, navItems} from './data';
import {useState, useEffect} from 'react';
function App() {
    //const  [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <>
            <Navbar name={myData.name} navItems={navItems}/>
        </>
    )
}

export default App;


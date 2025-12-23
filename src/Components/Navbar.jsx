import MobileMenu from './MobileMenu';
import { Menu, X, Zap, Download } from 'lucide-react';

export default function Navbar({...props}) {
    return (
        <header className='header'>
            <div className='container header__content'>
                <a href='#' className='header__logo'>
                    <Zap className='w-7 h-7'/>
                    <span>{props.name.split(' ')[0]}.dev</span>
                </a>

                <nav className='header__nav'>
                    {props.navItems.map((item) => (
                        <a key={item.name} href={item.href}>
                            {item.name}
                        </a>
                    ))}
                </nav>
        
                <div className='hidden md:block header__mobile-action'>
                    <a
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        >
                        <Download className="w-4 h-4" />
                        <span>View CV</span>
                    </a>

                </div>

                <button 
                    className='menu-btn'
                    onClick={props.toggleMenu}
                    aria-label='Open Menu'
                >
                    {props.isMenuOpen ? <X className='w-6 h-6'/> : <Menu className='w-6 h-6' />}
                </button>
            </div>
            <MobileMenu open={props.isMenuOpen} onClose={props.toggleMenu} />
            
        </header>
    )
}
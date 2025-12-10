import { Menu, X, Zap, Download } from 'lucide-react';

export default function Navbar({...props}) {
    return (
        <header className='header'>
            <div className='container header__content'>
                <a href='#' className='header__logo'>
                    <Zap className='w-7 h-7'/>
                    <span>{props.name.split(' ')[0]}.dev</span>
                </a>

                {/* Desktop Navigation */}
                <nav className='header__nav'>
                    {props.navItems.map((item) => (
                        <a key={item.name} href={item.href}>
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Action Button */}        
                <div className='hidden md:block header__mobile-action'>
                    <button className='btn-secondary'>
                        <Download className='w-4 h-4' />
                        <span>Download CV</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className='header__mobile-toggle'
                    onClick={props.toggleMenu}
                    aria-label='Toggle Menu'
                >
                    {props.isMenuOpen ? <X className='w-6 h-6'/> : <Menu className='w-6 h-6' />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {props.isMenuOpen && (
                <div className={`header__mobile-menu ${props.isMenuOpen ? 'open' : ''}`}>
                    <nav>
                        {props.navItems.map((item) => (
                            <a 
                                key={item.name}
                                href={item.href}
                                onClick={() =>props.setMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className='btn-secondary'>
                            Download CV
                        </button>
                    </nav>
                </div>
            )}
        </header>
    )
}
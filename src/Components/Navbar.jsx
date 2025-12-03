import React from 'react';
import { Menu, X, Zap, Download } from 'lucide-react';
import { navItems } from '../data';

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
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href}>
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className='hidden md:block header__mobile-action'>
                    <button className='btn-secondary'>
                        <Download className='w-4 h-4' />
                        <span>Download Resume</span>
                    </button>
                </div>
            </div>
        </header>
    )
}
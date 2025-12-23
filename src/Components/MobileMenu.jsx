//import { useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileMenu({ open, onClose }) {

    const menuVariants = {
        hidden: { x: '100%' },
        visible: {
            x: 0,
            translation: { type: 'spring', stiffness: 260, damping: 30},
        },
        exit: { x: '100%', transition: { duration: 0.25 } }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: { delay: i * 0.08 },
        })
    }

    const links = [ 'Home', 'About', 'Projects', 'Skills', 'Contact']

    return (
        <AnimatePresence>
            {open && (
                <div className='mobile-header'>
                    <motion.div
                        className='menu-overlay'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <motion.nav
                        className='mobile-menu'
                        variants={menuVariants}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <button
                            className='close-btn'
                            onClick={onClose}
                            aria-label='Close menu'
                        >
                            <X className='w-6 h-6' />
                        </button>

                        <ul className='menu-links'>
                            {links.map((link, i) => (
                                <motion.li
                                    key={link}
                                    custom={i}
                                    variants={itemVariants}
                                    initial='hidden'
                                    animate='visible'
                                >
                                    <a href={`#${link.toLowerCase()}`} onClick={onClose}>
                                        {link}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                </div>
            )}
        </AnimatePresence>
    )
}
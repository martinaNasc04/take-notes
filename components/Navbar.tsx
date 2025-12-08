'use client'
import { Menu, NotebookPen } from 'lucide-react'
import React, { useEffect } from 'react'

const Navbar = ({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
     // check if the menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    return (
        
        <nav className='flex items-center justify-between font-bold text-(--moss-900) bg-(--parchment-100) py-3 md:py-2 px-8
        fixed top-0 z-40 w-full 
        backdrop-blur-lg  border-white/10 shadow-lg'>
            <div className='flex items-center gap-2 py-2'>
                <a href="#hero" className="font-serif text-3xl ">TakeNotes</a>
                <NotebookPen />
            </div>
            {/* Icon Menu Mobile */}
                <div className="relative z-40 h-5 cursor-pointer w-7 md:hidden" onClick={() =>
                    setMenuOpen(prev => !prev)}>
                    <Menu />
                </div>
            <div className='hidden gap-6 text-2xl md:flex '>
                {/* Future nav items can go here */}
                <a href="#about">Sobre</a>
                <a href="#features">Funcionalidades</a>
                <a href="#contact">Contatos</a>
            </div>

        </nav>
    )
}

export default Navbar
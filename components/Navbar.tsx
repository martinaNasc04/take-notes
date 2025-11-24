'use client'
import { NotebookPen } from 'lucide-react'
import React, { useEffect } from 'react'

const Navbar = ({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
     // check if the menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    return (
        
        <nav className='flex items-center  justify-between font-bold text-[#303322] py-3 md:py-2 px-8
        fixed top-0 z-40 w-full 
        backdrop-blur-lg  border-white/10 shadow-lg'>
            <div className='flex items-center gap-2'>
                <a href="#hero" className="text-3xl  font-serif ">Take Notes</a>
                <NotebookPen />
            </div>
            {/* Icon Menu Mobile */}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() =>
                    setMenuOpen(prev => !prev)}>
                    &#9776;
                </div>
            <div className='hidden md:flex gap-6 text-lg '>
                {/* Future nav items can go here */}
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#contact">Contact</a>
            </div>

        </nav>
    )
}

export default Navbar
import { NotebookPen } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex items-center px-8 justify-between text-[#303322] p-2
        fixed top-0 z-40 w-full 
        backdrop-blur-lg  border-white/10 shadow-lg'>
            <div className='flex items-center gap-2'>
                <h1 className="text-3xl font-bold font-serif">Take Notes</h1>
                <NotebookPen />
            </div>
            <div className='flex gap-6 text-lg font-semibold'>
                {/* Future nav items can go here */}
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#contact">Contact</a>
            </div>

        </nav>
    )
}

export default Navbar
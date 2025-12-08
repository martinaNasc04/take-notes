import { UserButton } from '@clerk/nextjs'
import { NotebookPen } from 'lucide-react'
import React from 'react'

export const UserNavBar = () => {
    return (
        <nav className='flex items-center  justify-between font-bold text-(--moss-900) bg-(--parchment-100) py-3 md:py-2 px-8
                    w-full 
                    backdrop-blur-lg  border-white/10 shadow-lg'>
            <div className='flex items-center gap-2'>
                <a href="/notes" className="font-serif text-3xl ">TakeNotes</a>
                <NotebookPen />
            </div>

            <UserButton />
        </nav>
    )
}

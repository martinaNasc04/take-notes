import { createNote } from '@/lib/actions/notes'
import { currentUser } from '@clerk/nextjs/server'
import { NotebookPen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default async function NewNotePage() {
    // Get the current logged-in user
        const user = await currentUser()
        if (!user) throw new Error("User not authenticated")
    return (
        <div className="space-y-10 bg-(--moss-100) min-h-screen">
            <nav className='flex items-center  justify-between font-bold text-(--moss-900) bg-(--parchment-100) py-3 md:py-2 px-8
                    w-full 
                    backdrop-blur-lg  border-white/10 shadow-lg'>
                <div className='flex items-center gap-2'>
                    <a href="/notes" className="text-3xl  font-serif ">TakeNotes</a>
                    <NotebookPen />
                </div>
            </nav>

            <main className="mx-8 flex flex-col space-y-8">
                <div className="flex items-center justify-between ">

                    <h1 className="text-4xl md:text-3xl font-sans font-semibold text-gray-900 ">New Notes</h1>

                </div>

                <div className='max-w-2xl'>
                    <div className='bg-(--parchment-100) rounded-lg border border-gray-200 p-6'>
                        <div className='space-y-6'>
                            <form className="space-y-6" action={createNote} >
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Title:
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                                        placeholder="Enter the note's title..."
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="content"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Content:
                                    </label>
                                    <input
                                        type="text"
                                        id="content"
                                        name="content"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                                        placeholder="Enter the note's content..."
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        className="px-6 py-3 cursor-pointer bg-(--soft-indigo) text-white rounded-lg hover:bg-[#6c6f93d2] "
                                    >
                                        Add Note
                                    </button>
                                    <Link
                                        href="/notes"
                                        className="px-6 py-3 bg-(--terra-rose) text-gray-800 rounded-lg hover:bg-[#b56a60d3]"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    )
}

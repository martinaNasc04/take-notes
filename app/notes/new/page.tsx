import { UserNavBar } from '@/components/UserNavBar'
import { createNote } from '@/lib/actions/notes'
import { currentUser } from '@clerk/nextjs/server'
import { NotebookPen } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function NewNotePage() {
    // Get the current logged-in user
    const user = await currentUser()
    if (!user) redirect('/sign-in')
    return (
        <div className="space-y-10 bg-(--moss-100) min-h-screen">
            <UserNavBar />

            <main className="flex flex-col mx-8 space-y-8">
                <div className="flex items-center justify-between ">

                    <h1 className="font-sans text-4xl font-semibold text-gray-900 md:text-3xl ">Nova Nota</h1>

                </div>

                <div className='max-w-2xl'>
                    <div className='bg-(--parchment-100) rounded-lg border border-gray-200 p-6'>
                        <div className='space-y-6'>
                            <form className="space-y-6" action={createNote} >
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 text-sm font-medium text-gray-700"
                                    >
                                        Título:
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                                        placeholder="Escreva o nome da título da nota..."
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="content"
                                        className="block mb-2 text-sm font-medium text-gray-700"
                                    >
                                        Conteúdo:
                                    </label>
                                    <input
                                        type="text"
                                        id="content"
                                        name="content"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                                        placeholder="Escreva o conteúdo da nota..."
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        className="px-6 py-3 cursor-pointer bg-(--soft-indigo) text-white rounded-lg hover:bg-[#6c6f93d2] "
                                    >
                                        Adicionar Nota
                                    </button>
                                    <Link
                                        href="/notes"
                                        className="px-6 py-3 bg-(--terra-rose) text-gray-800 rounded-lg hover:bg-[#b56a60d3]"
                                    >
                                        Cancelar
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

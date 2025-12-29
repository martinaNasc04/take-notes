import { UserNavBar } from '@/components/UserNavBar'
import { createNote } from '@/lib/actions/notes'
import { currentUser } from '@clerk/nextjs/server'
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

            <main className="flex flex-col items-center mx-8 space-y-8">
                <div className="flex items-center justify-center ">

                    <h1 className="font-sans text-4xl font-semibold text-(--moss-900) md:text-3xl ">Nova Nota</h1>

                </div>


                <div className='bg-(--parchment-200) border-2 border-(--parchment-300) rounded-lg w-1/2 p-6'>
                    <div className='space-y-6'>
                        <form className="space-y-6" action={createNote} >
                            <div>
                                <label
                                    htmlFor="title"
                                    className="block mb-2 text-sm font-medium text-(--moss-900)"
                                >
                                    Título:
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 text-(--moss-900) rounded-lg focus:border-transparent"
                                    placeholder="Escreva o nome da título da nota..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="content"
                                    className="block mb-2 text-sm font-medium text-(--moss-900)"
                                >
                                    Conteúdo:
                                </label>
                                <input
                                    type="text"
                                    id="content"
                                    name="content"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 text-(--moss-900) rounded-lg focus:border-transparent"
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
                                    className="px-6 py-3 bg-(--terra-rose) text-white rounded-lg hover:bg-[#b56a60d3]"
                                >
                                    Cancelar
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>


            </main>

        </div>
    )
}

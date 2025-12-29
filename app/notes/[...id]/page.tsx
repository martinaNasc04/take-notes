import { UserNavBar } from '@/components/UserNavBar'
import { deleteNote } from '@/lib/actions/notes'
import prisma from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import { ArrowLeft, Edit2, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function ViewNotePage({ params }: { params: Promise<{ id: string }> }) {

    // Get the current logged-in user
    const user = await currentUser()
    if (!user) redirect('/sign-in')

    const resolvedParams = await params
    const noteId = resolvedParams.id[0]


    if (!noteId) throw new Error("Note ID not found")

    const note = await prisma.notes.findUnique({
        where: { id: noteId, userId: user.id }
    })

    if (!note) {
        redirect("/notes")
    }

    const title: string = note?.title || ""
    const content: string = note?.content || ""
    const createdAt: Date = note?.createdAt || new Date()
    return (
        <div className=" bg-(--moss-100) min-h-screen">
            <UserNavBar />
            <div className='flex items-center justify-between w-full p-4 mb-4'>
                <Link href="/notes" className='flex items-center justify-center gap-2'>
                    <ArrowLeft />
                    Voltar para notas</Link>

                <div className="flex gap-2 ">
                    <Link href={`/notes/edit/${note.id}`} className="bg-(--teal-muted) hover:scale-105 transition-all px-4 py-2  rounded-full">
                        Editar
                    </Link>
                    <form action={async (formData: FormData) => {
                        "use server";
                        await deleteNote(formData)
                    }}>
                        <input type="hidden" name="id" value={noteId} />
                        <button type="submit" className='bg-(--terra-rose) hover:scale-105 transition-all px-4 py-2 rounded-full cursor-pointer'>

                            Deletar
                        </button>
                    </form>

                </div>

            </div>

            <div className='flex flex-col items-center justify-center border'>

                <div className='p-6 bg-(--parchment-200) rounded-t-lg border-2 border-(--parchment-300) mt-8'>
                    <h1 className='text-3xl font-bold mb-4 text-(--moss-900)'>{title}</h1>
                    <p className='mb-8 text-sm leading-1 text-(--sage-shadow)'>Criado em: {createdAt.toLocaleDateString('pt-BR')}</p>
                    <p className="text-(--moss-700) text-xl mb-4 text-wrap">{content}</p>

                </div>
            </div>
        </div>
    )
}

import EditNoteComponent from '@/components/EditNote';
import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { NotebookPen } from 'lucide-react';

export default async function EditNote({ params }: { params: Promise<{ id: string }> }) {


    // Get the current logged-in user
    const user = await currentUser()
    if (!user) throw new Error("User not authenticated")

    const resolvedParams = await params
    const noteId = resolvedParams.id.toString()


    if (!noteId) throw new Error("Note ID not found")

    const note = await prisma.notes.findUnique({
        where: { id: noteId }
    })

    if (!note) return <div>Note not found</div>

    const title: string = note?.title || ""
    const content: string = note?.content || ""



    return (
        <div className="space-y-8 bg-(--moss-100) min-h-screen">
            <nav className='flex items-center  justify-between font-bold text-(--moss-900) bg-(--parchment-100) py-3 md:py-2 px-8
                    w-full 
                    backdrop-blur-lg  border-white/10 shadow-lg'>
                <div className='flex items-center gap-2'>
                    <a href="/notes" className="text-3xl  font-serif ">TakeNotes</a>
                    <NotebookPen />
                </div>
            </nav>

            <EditNoteComponent note={{ noteId, title, content }} />

        </div>
    )
}

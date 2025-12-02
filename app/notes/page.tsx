import prisma from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"
import { Edit, NotebookPen, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default async function NotesPage() {
    // Get the current logged-in user
    const user = await currentUser()
    const userId = user?.id;

    const notes = await prisma.notes.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
    })


    return (
        <div className="space-y-8 bg-(--moss-100) min-h-screen">
            <nav className='flex items-center  justify-between font-bold text-(--moss-900) bg-(--parchment-100) py-3 md:py-2 px-8
                    w-full 
                    backdrop-blur-lg  border-white/10 shadow-lg'>
                <div className='flex items-center gap-2'>
                    <a href="/notes" className="text-3xl  font-serif ">Take Notes</a>
                    <NotebookPen />
                </div>
            </nav>

            <main className="mx-8 flex flex-col space-y-8">
                <div className="flex items-center justify-between ">

                    <h1 className="text-4xl md:text-3xl font-sans font-semibold text-gray-900 ">View your notes here</h1>
                    <Link href="/notes/new" className="flex items-center gap-2 p-2 rounded-lg bg-(--moss-900) hover:bg-(--moss-800) transition-colors text-white">
                        <span>New Note</span>
                    </Link>

                </div>

                {/* Card note */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {notes.map((note, key) =>
                        <div key={key} >
                            <div className="flex items-center bg-(--parchment-200) p-4 rounded-t-lg">
                                <h2 className="text-2xl font-medium">{note.title}</h2>

                            </div>
                            <div className="bg-(--earth-cream) p-4">
                                <p>{note.content}</p>
                            </div>
                            {/* Date and actions*/}
                            <div className="bg-(--parchment-200) p-4 rounded-b-lg flex items-center justify-between">
                                <p> Created at: {note.createdAt.toLocaleDateString()}</p>

                                <div className="flex gap-2">
                                    <Link href={`/notes/edit/${note.id}`} className="bg-(--teal-muted) w-7 h-7 flex items-center justify-center rounded-lg">
                                        <Edit />
                                    </Link>
                                    <Link href={`/notes/delete/${note.id}`} className="bg-(--terra-rose) w-7 h-7 flex items-center justify-center rounded-lg">
                                        <Trash2 />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}


                </div>
            </main>
        </div>
    )
}

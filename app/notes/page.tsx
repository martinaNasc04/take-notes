import { UserNavBar } from "@/components/UserNavBar";
import { deleteNote } from "@/lib/actions/notes";
import prisma from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"
import { Edit, Notebook, Trash2 } from "lucide-react";
import Link from "next/link";

interface Note {
    id: string
    userId: string
    title: string
    content: string
    createdAt: Date
}

export default async function NotesPage() {
    // Get the current logged-in user
    const user = await currentUser()
    const userId = user?.id;

    const notes: Note[] = await prisma.notes.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
    })


    return (
        <div className="space-y-8 bg-(--moss-100) min-h-screen">
            <UserNavBar />

            <main className="flex flex-col mx-8 space-y-8">
                <div className="flex items-center justify-between ">

                    <h1 className="font-sans text-4xl font-semibold text-gray-900 md:text-3xl ">Visualize suas notas aqui</h1>
                    <Link href="/notes/new" className="flex items-center gap-2 p-2 rounded-lg bg-(--moss-900) hover:bg-(--moss-800) transition-colors text-white">
                        <span>Adicionar Nota</span>
                    </Link>

                </div>
                {/* If there are no notes... */}
                {notes.length === 0 ? (
                    <div className="flex flex-col items-center justify-center w-full gap-4 p-8">
                        <h3 className="text-3xl text-gray-500">Nada por aqui. Adicione uma nota!</h3>
                        <Notebook className="w-16 h-16 text-gray-500" />
                    </div>
                    // But if there are notes...

                ) :
                    (<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {/* Card note */}
                        {notes.map((note: Note, key) =>
                            <div key={key} >
                                <div className="flex items-center bg-(--parchment-200) p-4 rounded-t-lg">
                                    <h2 className="text-2xl font-medium">{note.title}</h2>

                                </div>
                                <div className="bg-(--earth-cream) p-4">
                                    <p>{note.content}</p>
                                </div>
                                {/* Date and actions*/}
                                <div className="bg-(--parchment-200) p-4 rounded-b-lg flex items-center justify-between">
                                    <p> Criado em: {note.createdAt.toLocaleDateString()}</p>

                                    <div className="flex gap-2">
                                        <Link href={`/notes/edit/${note.id}`} className="bg-(--teal-muted) w-7 h-7 flex items-center justify-center rounded-lg">
                                            <Edit />
                                        </Link>
                                        <form action={async (formData: FormData) => {
                                            "use server";
                                            await deleteNote(formData)
                                        }}>
                                            <input type="hidden" name="id" value={note.id} />
                                            <button>

                                                <Trash2 className="bg-(--terra-rose) w-7 h-7 rounded-lg cursor-pointer" />
                                            </button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        )}



                    </div>
                    )}



            </main>
        </div>
    )
}

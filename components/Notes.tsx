import { Notebook } from "lucide-react";
import Link from "next/link";
type Note = {
    id: string
    userId: string
    title: string
    content: string
    createdAt: Date
}

const Notes = ({ notes }: { notes: Note[] }) => {
    return (
        <div>
            {/* If there are no notes... */}
            {notes.length === 0 ? (
                <div className="flex flex-col items-center justify-center w-full gap-4 p-8">
                    <h3 className="text-3xl text-gray-500">Nada por aqui. Adicione uma nota!</h3>
                    <Notebook className="w-16 h-16 text-gray-500" />
                </div>
                // But if there are notes...

            ) :
                (<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card note */}
                    {notes.map((note: Note) =>
                        <div key={note.id} className="p-6 bg-(--parchment-200) rounded-t-lg border-2 border-(--parchment-300)">
                            <h3 className="text-xl mb-2 font-bold text-(--moss-900)">{note.title}</h3>
                            <p className="mb-4 text-sm text-(--sage-shadow)"> Criado em: {note.createdAt.toLocaleDateString('pt-BR')}</p>

                            <p className=" text-(--moss-700) text-sm truncate">{note.content}</p>



                            <div className="mt-4 border-t border-(--parchment-300)">
                                <Link href={`/notes/${note.id}`}>
                                    <span className="text-xs font-medium text-(--sage-shadow)">Leia mais...</span>
                                </Link>



                            </div>
                        </div>
                    )}



                </div>
                )}
        </div>
    )
}

export default Notes
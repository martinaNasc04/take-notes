import { updateNote } from "@/lib/actions/notes";
import Link from "next/link";

interface NoteProps {
    noteId: string;
    title: string;
    content: string;
}

export default function EditNoteComponent({ note }: { note: NoteProps }) {

    return (


        <main className="flex flex-col items-center justify-center space-y-8">
            <div className="flex items-center justify-between ">

                <h1 className="font-sans text-4xl font-semibold text-gray-900 md:text-3xl ">Editar Nota</h1>

            </div>

            <div className='max-w-5xl border-2 border-yellow'>
                <div className='bg-(--parchment-200) rounded-lg border-2 border-(--parchment-300) p-6'>
                    <div className='space-y-6'>
                        <form className="space-y-6" action={updateNote} >
                            <input type="hidden" name="id" value={note?.noteId} />
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
                                    className="w-full px-2 py-2 border text-(--moss-900) border-gray-300 rounded-lg focus:border-transparent"
                                    placeholder="Escreva o nome da título da nota..."
                                    defaultValue={note.title}

                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="content"
                                    className="block mb-2 text-sm font-medium text(--moss-900)"
                                >
                                    Conteúdo:
                                </label>
                                <input
                                    type="textarea"
                                    id="content"
                                    name="content"
                                    required
                                    className="h-20 px-2 py-2 border text(--moss-900) border-gray-300 rounded-lg w-lg focus:border-transparent"
                                    placeholder="Escreva o conteúdo da nota..."
                                    defaultValue={note.content}

                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="px-6 py-3 cursor-pointer bg-(--soft-indigo) text-white rounded-lg hover:bg-[#6c6f93d2] "
                                >
                                    Salvar
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
            </div>

        </main>

    )
}
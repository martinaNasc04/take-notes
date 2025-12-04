import { updateNote } from "@/lib/actions/notes";
import Link from "next/link";

interface NoteProps {
    noteId: string;
    title: string;
    content: string;
}

export default function EditNoteComponent({ note }: { note: NoteProps }) {

    return (


        <main className="mx-8 flex flex-col space-y-8">
            <div className="flex items-center justify-between ">

                <h1 className="text-4xl md:text-3xl font-sans font-semibold text-gray-900 ">Update Note</h1>

            </div>

            <div className='max-w-2xl'>
                <div className='bg-(--parchment-100) rounded-lg border border-gray-200 p-6'>
                    <div className='space-y-6'>
                        <form className="space-y-6" action={updateNote} >
                            <input type="hidden" name="id" value={note?.noteId} />
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
                                    defaultValue={note.title}

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
                                    defaultValue={note.content}

                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="px-6 py-3 cursor-pointer bg-(--soft-indigo) text-white rounded-lg hover:bg-[#6c6f93d2] "
                                >
                                    Update Note
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

    )
}
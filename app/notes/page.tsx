import Notes from "@/components/Notes";
import { UserNavBar } from "@/components/UserNavBar";

import prisma from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

import Link from "next/link";
import { redirect } from "next/navigation";

type Note = {
    id: string
    userId: string
    title: string
    content: string
    createdAt: Date
}

export default async function NotesPage() {
    // Get the current logged-in user
    const user = await currentUser()
    if (!user) redirect('/sign-in')
    const userId = user?.id;

    const notes: Note[] = await prisma.notes.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
    })


    return (
        <div className=" space-y-4 bg-(--moss-100) min-h-screen">
            <UserNavBar />

            <main className="flex flex-col mx-8 space-y-8">
                <div className="flex items-center justify-between ">

                    <h1 className="font-sans text-4xl font-semibold text-(--moss-900) md:text-3xl ">Minhas Notas</h1>
                    <Link href="/notes/new" className="flex items-center px-6 py-3 gap-2 font-semibold hover:-translate-y-0.5 transition-all rounded-full bg-(--moss-900) hover:bg-(--moss-800) text-white">
                        <span>+ Adicionar Nota</span>
                    </Link>

                </div>

                <Notes notes={notes} />


            </main>
        </div>
    )
}

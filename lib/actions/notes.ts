'use server'

import { currentUser } from "@clerk/nextjs/server"
import z from "zod"
import prisma from "../prisma"
import { redirect } from "next/navigation"

const NoteSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
})

// Create note
export async function createNote(formData: FormData) {
    const user = await currentUser()
    
    if (!user) throw new Error("User not authenticated")

    const parsed = NoteSchema.safeParse({
        title: formData.get("title") as string,
        content: formData.get("content") as string
    })

    if (!parsed.success) throw new Error("Validation failed")

    await prisma.notes.create({
        data: {
            ...parsed.data,
            userId: user?.id
        }
    })
    
    redirect("/notes")
}


// Delete Note
export async function deleteNote(formData: FormData) {
    const user = await currentUser()
    
    if (!user) throw new Error("User not authenticated")
    
    const id = String(formData.get("id") || "")

    await prisma.notes.deleteMany({
        where: { id: id, userId: user?.id }
    })
}
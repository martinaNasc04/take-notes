// Populate database with initial data
import { PrismaClient } from "@prisma/client" 

const prisma = new PrismaClient()

async function main() {
    const demoUserId = 'user_36ARJEMNlYL0vWvMmExH1zDSJAR' // Replace with a valid Clerk user ID

    // Create sample
    await prisma.notes.createMany({
        data: [
            {
                userId: demoUserId,
                createdAt: new Date(),
                title: 'Welcome to Take Notes',
                content: 'This is your first note! Feel free to edit or delete it.',
            },
            {
                userId: demoUserId,
                createdAt: new Date(),
                title: 'Organize Your Thoughts',
                content: 'Use Take Notes to jot down ideas, make lists, and keep track of important information.',
            },
            {
                userId: demoUserId,
                createdAt: new Date(),
                title: 'Stay Productive',
                content: 'Set reminders and deadlines for your notes to stay on top of your tasks.',

            },
        ],
    })

    console.log('Database has been seeded. 🌱')
}
main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
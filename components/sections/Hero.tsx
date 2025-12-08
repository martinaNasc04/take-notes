import Link from 'next/link'


const HeroSection = () => {
    return (
        <section id='hero' className="relative flex items-center justify-center min-h-screen mx-8">
            <div className="flex items-center justify-center w-full gap-10 mt-20">
                <div className='flex flex-col items-center m-2 space-y-4 text-center'>
                    <h2 className='font-serif text-3xl md:text-6xl'>Crie, Edite e Organize <br /> suas ideias em um só lugar</h2>
                    <p className='font-serif text-2xl '>Com TakeNotes, você pode criar novas notas, editá-las e deletar aquelas que não são mais importantes.</p>
                    <Link href="/sign-in" className=' p-4 rounded-lg bg-(--moss-900) hover:bg-(--moss-800) transition-colors text-white'>
                        Comece Aqui!</Link>
                <p className='text-gray-500'>Este é um projeto em desenvolvimento para portfolio pessoal.</p>
                </div>


            </div>
        </section>
    )
}

export default HeroSection
import Link from 'next/link'


const HeroSection = () => {
    return (
        <section id='hero' className="relative flex items-center justify-center min-h-screen  bg-linear-to-r from-(--moss-600) via-(--moss-700) to-(--moss-800)">
            <div className="flex items-center justify-center w-full gap-10 mx-8 mt-20 ">
                <div className='flex flex-col items-center m-2 space-y-12 text-center md:space-y-16'>
                    <h1 className='font-serif text-6xl md:text-8xl text-(--parchment-100) text-shadow:_0_25px_50px_rgba(0,0,0,0.25)'>Pense e crie</h1>
                    <p className='font-serif text-xl md:text-3xl font-light text-(--moss-100) '>Com TakeNotes, guarde suas ideias e inspirações em um simples e intuitivo ambiente.</p>
                    <Link href="/sign-in" className='px-12 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] bg-(--earth-gold) hover:bg-(--earth-caramel) transition-colors'>
                        Comece Aqui!</Link>
                    <p className='text-gray-200'>Este é um projeto em desenvolvimento para portfolio pessoal.</p>
                </div>


            </div>
        </section>
    )
}

export default HeroSection
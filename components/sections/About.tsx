import React from 'react'

const AboutSection = () => {
    return (
        <section id='about' className="relative flex items-center justify-center min-h-screen mx-8">
            <div className="flex flex-col items-center justify-center gap-10 md:mt-20">
                <h2 className='font-serif text-3xl md:text-6xl'>Sobre TakeNotes</h2>
                <p className='max-w-xl mt-4 text-lg text-justify text-gray-700'>
                    TakeNotes é um website simples e intuitivo para guardar suas ideias e inspirações.
                    Seja você um estudante, profissional ou alguém que goste de anotar seus pensamentos, 
                    TakeNotes oferece um ambiente limpo e sem distração para organizar suas anotações.
                </p>
            </div>
        </section>
    )
}

export default AboutSection
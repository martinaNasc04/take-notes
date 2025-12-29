import React from 'react'

const FeaturesSection = () => {
    const features = [
        {
            emoji: '📝',
            title: 'Criação de notas',
            description: 'Adicione ideias e informações importantes facilmente em um clique.'
        },
        {
            emoji: '✏️',
            title: 'Edição simples',
            description: 'Atualize suas notas de forma rápida e eficiente sempre que necessário.'
        },
        {
            emoji: '🗑️',
            title: 'Deleção',
            description: 'Exclua notas que não são mais necessárias com facilidade.'
        }
    ]
    return (
        <section id='features' className="relative flex items-center justify-center min-h-screen px-8">
            <div className="flex flex-col items-center justify-center gap-10 ">
                <ul className='grid grid-cols-1 gap-12 mx-auto mt-12 md:grid-cols-3'>
                    {features.map((feature, index) => (
                        <div key={index} className='flex items-center border-2 border-(--parchment-300) p-12 rounded-3xl bg-linear-to-tl from-(--parchment-200) to-(--earth-cream) '>

                            <li key={index} className='flex flex-col items-center justify-center text-lg text-justify'>
                                <div className='flex items-center justify-center w-16 h-16 mb-6 text-3xl rounded-2xl
                                bg-linear-to-tl from-(--moss-700) to-(--moss-600) p-10'>
                                    {feature.emoji}
                                </div>
                                <div >

                                    <h3 className='text-2xl font-bold mb-4 text-(--moss-900)'>  {feature.title}</h3>
                                </div>
                                <div>

                                    <p className='text-(--sage-shadow)'> {feature.description}</p>
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>

            </div>
        </section>
    )
}

export default FeaturesSection
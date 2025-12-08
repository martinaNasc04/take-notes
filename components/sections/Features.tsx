import { PencilLine } from 'lucide-react'
import React from 'react'

const FeaturesSection = () => {
    const features = [
        "Criação de notas: Adicione ideias e informações importantes facilmente em um clique.",
        "Edição simples:  Atualize suas notas de forma rápida e eficiente sempre que necessário.",
        "Deleção Rápida: Exclua notas que não são mais necessárias com facilidade.",
    ]
    return (
        <section id='features' className="relative flex items-center justify-center min-h-screen mx-8">
            <div className="flex flex-col items-center justify-center gap-10 md:mt-20">
                <h2 className='font-serif text-3xl md:text-6xl'>Funcionalidades</h2>
                <ul>
                    {features.map((feature, index) => (
                        <div key={index} className='flex items-center gap-4 p-2'>
                            
                            <li key={index} className='max-w-xl mt-4 text-lg text-justify text-gray-700 list-disc'>
                                {feature}
                            </li>
                        </div>
                    ))}
                </ul>

            </div>
        </section>
    )
}

export default FeaturesSection
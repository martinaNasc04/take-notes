import React from 'react'

const FeaturesSection = () => {
    const features = [
        "Create, manage and share notes with ease. Our application offers a user-friendly interface.",
        "Search and organize your notes efficiently with tags and categories.",
        "Access your notes from any device, anytime.",
        "Enjoy a distraction-free writing experience with our clean and intuitive design."
    ]
    return (
        <section id='features' className="min-h-screen flex items-center justify-center relative mx-8">
            <div className="flex gap-10 items-center  justify-center md:flex-col md:mt-20">
                <h2 className='md:text-6xl font-serif'>Features</h2>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index} className='max-w-xl text-lg mt-4 text-justify text-gray-700'>
                            {feature}
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}

export default FeaturesSection
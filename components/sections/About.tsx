import React from 'react'

const AboutSection = () => {
    return (
        <section id='about' className="min-h-screen flex items-center justify-center relative mx-8">
            <div className="flex gap-10 items-center  justify-center flex-col md:mt-20">
                <h2 className='text-3xl md:text-6xl font-serif'>About Take Notes</h2>
                <p className='max-w-xl text-lg mt-4 text-justify text-gray-700'>
                    Take Notes is a simple and intuitive note-taking application designed to help you capture your ideas, 
                    inspirations, and important information effortlessly. Whether you&apos;re a student, 
                    professional, or just someone who loves to jot down thoughts, 
                    Take Notes provides a clean and distraction-free environment for all your note-taking needs.
                </p>
            </div>
        </section>
    )
}

export default AboutSection
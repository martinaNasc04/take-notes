import Image from 'next/image'


const HeroSection = () => {
    const imageNotes = "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <section id='hero' className="min-h-screen flex items-center justify-center relative mx-8">
            <div className="flex gap-10 items-center  justify-center md:flex-col md:mt-20">
                
                <h2 className='md:text-6xl font-serif'>Write your ideas and inspirations here</h2>
                <Image
                    src={imageNotes}
                    alt="Illustration of note taking"
                    width={600}
                    height={400}
                    
                />
            </div>
        </section>
    )
}

export default HeroSection
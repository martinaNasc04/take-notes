import React from 'react'

const ContactSection = () => {
    return (
        <section id="contact" className="relative flex items-center justify-center min-h-screen py-20">
            <div className="flex flex-col items-center justify-center gap-10 mx-8 md:mt-20">
                <div className='flex flex-col p-2 rounded-xl'>
                    <h2 className='font-serif text-3xl md:text-4xl lg:text-6xl '>Fale Conosco</h2>
                    <p className='mt-2'>Se você tiver alguma dúvida ou sugestão, entre em contato conosco.</p>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 md:mt-8">
                    {/* Contact */}
                    <div className="p-2 transition-all border rounded-xl border-white/10 hover:-translate-y-1">
                        <ul>
                            <li><span className='font-semibold'>Email:</span> support@takenotes.com</li>
                            <li><span className='font-semibold'>Telefone:</span> +1 (123) 456-7890</li>
                        </ul>
                    </div>
                    {/* Social Media */}
                    <div className="p-2 transition-all border rounded-xl border-white/10 hover:-translate-y-1">
                        <ul>
                            <li><span className='font-semibold'>Twitter:</span> @TakeNotesApp</li>
                            <li><span className='font-semibold'>Facebook:</span> facebook.com/TakeNotesApp</li>
                            <li><span className='font-semibold'>Instagram:</span> instagram.com/TakeNotesApp</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ContactSection
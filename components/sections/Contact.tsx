import React from 'react'

const ContactSection = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center relative py-20">
            <div className="flex gap-10 items-center mx-8 justify-center md:flex-col md:mt-20">
                <div className='flex flex-col p- rounded-xl'>
                    <h2 className='text-2xl md:text-6xl font-serif '>Contact Us</h2>
                    <p className='mt-2'>If you have any questions or feedback, please don&apos;t hesitate to contact us.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {/* Contact */}
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <ul>
                            <li><span className='font-semibold'>Email:</span> support@takenotes.com</li>
                            <li><span className='font-semibold'>Phone:</span> +1 (123) 456-7890</li>
                        </ul>
                    </div>
                    {/* Social Media */}
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
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
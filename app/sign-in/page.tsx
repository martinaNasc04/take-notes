'use client'
import { SignedOut, SignInButton, SignUpButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


const SignInPage = () => {
    const { isSignedIn, isLoaded } = useUser()
    const router = useRouter()
    
    useEffect(() => {
        if (isLoaded && isSignedIn) {
            router.push('/notes')
        }
    }, [isLoaded, isSignedIn, router])

    return (
        <div className='min-h-screen flex px-8 items-center justify-center bg-(--moss-100) '>
            <SignedOut>
                <div className='flex flex-col items-center w-full max-w-md p-2'>
                    <h1 className='text-4xl font-bold mb-6 text-(--moss-900)'>Crie sua conta ou entre para acessar suas notas</h1>
                    <div className='flex gap-4'>


                        <SignUpButton mode="modal"  >
                            <button className='cursor-pointer p-4 rounded-lg bg-(--moss-900) hover:bg-(--moss-800) transition-colors text-white'>Cadastrar</button>
                        </SignUpButton>
                        <SignInButton mode="modal" >
                            <button className='cursor-pointer p-4 rounded-lg bg-(--moss-900) hover:bg-(--moss-800) transition-colors text-white'>Entrar</button>
                        </SignInButton>

                    </div>
                </div>
            </SignedOut>

        </div >
    )
}

export default SignInPage
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'


const SignInPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-(--moss-100)'>
            <SignedOut>
                <div className='flex flex-col items-center w-full max-w-md'>
                    <h1 className='text-4xl font-bold mb-6 text-[#303322]'>Crie sua conta ou entre para acessar suas notas</h1>
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
            {/* Only will show up when already signed in */}
            <SignedIn>
                <div className='flex flex-col items-center space-y-4'>
                    <h2 className='text-2xl'>Você já está logado</h2>
                    <UserButton showName />
                    <Link href="/notes" className=' p-4 rounded-lg bg-(--moss-900) hover:bg-(--moss-800) transition-colors text-white'>
                        Vá para suas notas</Link>
                </div>

            </SignedIn>

        </div >
    )
}

export default SignInPage
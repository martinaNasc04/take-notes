import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'


const SignInPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-(--moss-100)'>
            <SignedOut>
                <div className='max-w-md w-full flex flex-col items-center'>
                    <h1 className='text-4xl font-bold mb-6 text-[#303322]'>Create your account or sign in</h1>
                    <div className='flex gap-4'>


                        <SignUpButton mode="modal"  >
                            <button className='cursor-pointer p-4 rounded-lg bg-(--moss-900) hover:bg-(--moss-800) transition-colors text-white'>Sign Up</button>
                        </SignUpButton>
                        <SignInButton mode="modal" >
                            <button className='cursor-pointer p-4 rounded-lg bg-(--moss-900) hover:bg-(--moss-800) transition-colors text-white'>Sign In</button>
                        </SignInButton>

                    </div>
                </div>
            </SignedOut>
            {/* Only will show up when already signed in */}
            <SignedIn>
                <div className='flex flex-col space-y-4 items-center'>
                    <h2 className='text-2xl'>You are already signed in</h2>
                    <UserButton showName />
                    <Link href="/notes" className=' p-4 rounded-lg bg-(--moss-900) hover:bg-(--moss-800) transition-colors text-white'>
                        Go to Notes</Link>
                </div>

            </SignedIn>

        </div >
    )
}

export default SignInPage
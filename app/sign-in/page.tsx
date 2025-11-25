import React from 'react'

const SignInPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 to-purple-100'>
            <div className='max-w-md w-full flex flex-col items-center'>
                <h1 className='text-4xl font-bold mb-6 text-[#303322]'>Sign In</h1>
                <form className='w-full bg-white p-8 rounded-lg shadow-md'>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#656b4a]'
                            type='email'
                            id='email'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#656b4a]'
                            type='password'
                            id='password'
                            placeholder='Enter your password'
                        />
                    </div>
                    <button
                        className='w-full bg-[#656b4a] hover:bg-[#565b3a] cursor-pointer text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#656b4a]'
                        type='submit'
                    >
                        Sign In
                    </button>
                    <p className='text-gray-400'>This is just a example of sign in page. The authentication is not implemented, it will be implemented in the future.</p>
                </form>
            </div>
        </div>
    )
}

export default SignInPage
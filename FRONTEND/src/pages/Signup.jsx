import React from 'react'

const Signup = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center flex-col'>
            <h1 className='text-3xl'>Don't Have an Account?</h1>
            {/* <p>Create one..</p> */}
            <form action="POST" className='flex flex-col items-center justify-center gap-4 w-1/3 h-1/2 bg-amber-300 px-10 rounded'>
                <div className='flex flex-col w-[90%]'>
                    <label htmlFor="name" className='text-sm text-[#303030]'>Name</label>
                    <input className='py-1 px-2 text-lg border border-[#0099FF] rounded-md outline-none mt-2 ' type="text" name='name' autoFocus placeholder="Enter your name.." />
                </div>
                <div className='flex flex-col w-[90%]'>            
                    <label htmlFor="email" className='text-sm text-[#303030]'>Email</label>
                    <input className='py-1 px-2 text-lg border border-[#0099FF] rounded-md outline-none mt-2 ' type="email" name='email' placeholder="Enter your email.." />
                </div>
                <div className='flex flex-col w-[90%]'>
                    <label htmlFor="password" className='text-sm text-[#303030]'>Password</label>
                    <input className='py-1 px-2 text-lg border border-[#0099FF] rounded-md outline-none mt-2 ' type="password" name='pass' placeholder="Enter your password.." />
                </div>
                <button className='w-1/3 text text-white bg-[#0099FF]' type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup
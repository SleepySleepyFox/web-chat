import React from 'react'

export default function Auth() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='bg-gray-300 h-96 w-72 rounded-md flex flex-col justify-center gap-2 p-6'>
            <input type="text" className='bg-gray-200 rounded-s-md p-2' placeholder='E-mail' />
            <input type="text" className='bg-gray-200 rounded-s-md p-2' placeholder='password'/>
            <button className='bg-slate-400 rounded-sm p-2'>Sign Up</button>
            <button className='bg-zinc-400 rounded-sm p-2'>Log In</button>
        </div>
    </div>
  )
}

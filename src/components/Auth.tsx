import React, { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Auth() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signUp(){
        createUserWithEmailAndPassword(auth, email, password)
    }
    
    function logIn(){

    }

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='bg-gray-300 h-96 w-72 rounded-md flex flex-col justify-center gap-2 p-6'>
            <input type="text" className='bg-gray-200 rounded-md p-2 outline-slate-400' placeholder='Username' />
            <input type="email" className='bg-gray-200 rounded-md p-2 outline-slate-400' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" className='bg-gray-200 rounded-md p-2 outline-slate-400' placeholder='password'  onChange={(e) => setPassword(e.target.value)}/>
            <button className='bg-slate-400 rounded-sm p-2' onClick={() => signUp()}>Sign Up</button>
            <button className='bg-zinc-400 rounded-sm p-2'>Log In</button>
        </div>
    </div>
  )
}

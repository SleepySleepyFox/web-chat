import React from 'react'

export default function ChatInput() {
  return (
    <div className='container flex items-center max-w-full p-2 bg-gray-200 h-8'>
         <input placeholder='Text...' className=' w-full bg-transparent outline-none'/>
         <p>Send</p>
    </div>
  )
}

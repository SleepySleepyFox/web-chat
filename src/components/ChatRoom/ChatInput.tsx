import React from 'react'

export default function ChatInput() {
  return (
    <div className='flex items-center max-w-full mb-4 p-2 bg-gray-200 h-8'>
         <input placeholder='Text...' className=' w-full bg-transparent outline-none m-2'/>
         <p>Send</p>
    </div>
  )
}

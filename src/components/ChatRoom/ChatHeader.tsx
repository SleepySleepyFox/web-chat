import React from 'react'

export default function ChatHeader(props: any) {
  return (
    <div className='container max-w-full'>
        <header className='top-0 flex items-center gap-2 p-2'>
            <img src={props.PhotoURL} alt="" className='w-9 h-9 rounded-full bg-black' />
        <div>
            <h4 className='font-semibold'>{props.uName}</h4>
        </div>
        <img src="https://img.icons8.com/android/24/null/info.png" className='opacity-40 h-4 w-4  ml-auto'/>
        </header>
    </div>
  )
}

import React from 'react'

export default function MessageItem(props: any) {
  return (
    <div className='h-fit px-4 rounded-lg text-white w-fit max-w-[45%] bg-slate-600'>
        {props.message}
    </div>
  )
}

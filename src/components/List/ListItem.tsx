import React from 'react'

export default function ListItem() {
  return (
    <div className='container flex items-center  mt-2 gap-2'>
        <div className='w-9 h-9 rounded-full bg-red-500 flex-shrink-0'></div>
        
        <div>
            <h4>John Doe</h4>
            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='items-baseline ml-auto'>
            <p className='text-xxs'>16:45</p>
            <p className='text-xxs'>R</p>
        </div>
    </div>
  )
}

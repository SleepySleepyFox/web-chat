import { Listbox } from '@headlessui/react'
import React, { useState } from 'react'

export default function Search() {
  const sortBy = ["Newest", "Oldest"] 
  const [sort, setSort] = useState(sortBy[0])
  return (
    <div className='container flex justify-center flex-col max-w-full px-2'>
        <h1 className='text-2xl font-semibold m-2'>Messages</h1>
        <div className="container flex justify-center items-center rounded-xl bg-input max-w-full">
          <img className='h-3 w-3 m-2' src="https://img.icons8.com/external-others-iconmarket/64/000000/external-reserch-e-commerce-others-iconmarket.png"/>
          <input className=' rounded-xl w-full bg-transparent outline-none'/>
        </div>
        
        <div className='flex items-center'>
        <p className='text-xs ml-2'>sort by</p>
        {/* Use headless UI here in future */}
        <select className='bg-none text-xs text-center weig  outline-none text-links focus:bg-none'>
        <option className='bg-none'>Newest</option>
        <option className='bg-none'>Oldest</option>
        </select>
        </div>
    </div>
  )
}

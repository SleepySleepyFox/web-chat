import { Listbox } from '@headlessui/react'
import React, { useState } from 'react'

export default function Search() {
  const options = [
    {sortBy: 'Newest'}, 
    {sortBy: 'Olderst'}]
  const [sort, setSort] = useState(options[0])

  return (
    <div className='container flex justify-center flex-col max-w-full px-2'>
        <h1 className='text-2xl font-semibold m-2'>Messages</h1>
        <div className="container flex justify-center items-center rounded-xl bg-input max-w-full">
          <img className='h-3 w-3 m-2' src="https://img.icons8.com/external-others-iconmarket/64/000000/external-reserch-e-commerce-others-iconmarket.png"/>
          <input className=' rounded-xl w-full bg-transparent outline-none'/>
        </div>
        
        <div className='flex items-center'>
        <p className='text-xs mx-2'>sort by</p>
  
        <div className='max-w-10'>
        <Listbox value={sort} onChange={setSort}>
          <div>
            <Listbox.Button>
              <span>{sort.sortBy}</span>
            </Listbox.Button>

            <Listbox.Options className="absolute mt-1  w-28 h-28 overflow-auto rounded-md backdrop-blur-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map(e => (<Listbox.Option  value={e}>{e.sortBy}</Listbox.Option>))}
            </Listbox.Options> 
          </div>   
        </Listbox>
        </div>

        </div>
    </div>
  )
}







 {/* Use headless UI here in future */}
        {/* <select className='bg-none text-xs text-center weig  outline-none text-links focus:bg-none'>
        <option className='bg-none'>Newest</option>
        <option className='bg-none'>Oldest</option>
        </select> */}
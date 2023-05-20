import { Listbox } from '@headlessui/react'
import React, { useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';

export default function Search() {
  const options = [
    {sortBy: 'Newest'}, 
    {sortBy: 'Olderst'}]
  const [sort, setSort] = useState(options[0])

  function logOut(){
    signOut(auth).then(() => {
      console.log('Sign-out successful.')
    }).catch((error) => {
     console.log('Sign Out Error: ', error)
    });
  }

  return (
    <div className='container flex justify-center flex-col max-w-full px-2'>
        <h1 className='text-2xl font-semibold m-2' onClick={() => logOut()}>Messages</h1> 
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
              <span className='text-links text:sm'>{sort.sortBy}</span>
            </Listbox.Button>
            {/* Не забыть убрать псевдорандом из ключей */}
            <Listbox.Options className="absolute left-10 mt-1 text-center  w-28 overflow-auto rounded-md backdrop-blur-md py-1 text-base shadow-lg ring-1 ring-gray-200 ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map(e => (<Listbox.Option  value={e} key={Math.random()}>{e.sortBy}</Listbox.Option>))}
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
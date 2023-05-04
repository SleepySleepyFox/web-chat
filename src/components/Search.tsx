import React from 'react'

export default function Search() {
  return (
    <div className='container flex justify-center flex-col'>
        <h1 className='text-2xl font-semibold m-2'>Messages</h1>
        <div className="container flex justify-center items-center rounded-xl w-full bg-input">
        <img className='h-3 w-3 m-2' src="https://img.icons8.com/external-others-iconmarket/64/000000/external-reserch-e-commerce-others-iconmarket.png"/>
        <input className=' rounded-xl  w-full bg-transparent outline-none'/>
        </div>
    </div>
  )
}

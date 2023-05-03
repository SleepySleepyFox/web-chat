import React from 'react'
import menu from '../assets/menu.svg'


export default function Navigation() {
  return (
    <div className='container flex max-w-full align-middle p-2 bg-slate-500 md:hidden'>
        <img src={menu} className='h-4 md:hidden' /> 
    </div>
  )
}

import React from 'react'
import SearchItem from './SearchItem'

export default function SearchFor(props: any) {
  return (
    <div className='h-fit mt-4 pb-4 w-full'>
      <SearchItem userName={props.userName} photoURL={props.photoURL}/>
      <hr className='mt-4'/>
    </div>
  )
}

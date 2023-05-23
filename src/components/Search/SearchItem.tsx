import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from '../../firebase'


export default function SearchItem(props: any) {
    
  return (
    <div>
      {props.show && <div className='container flex items-center  mt-2 gap-2'>
      <img src={props.photoURL} alt="" className='w-9 h-9 rounded-full flex-shrink-0'/> 
        
        <div>
            <h4>{props.userName}</h4>
        </div>
      </div>}
    </div>
  )
}

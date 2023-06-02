import React, {useState, useEffect} from 'react'
import { store } from "../../app/store";
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { setChatRoom } from '../../features/MoveData';

export default function ListItem(props: any) {  
  
  const dispatch = useAppDispatch()

  return (
    <div className='container flex items-center  mt-2 gap-2' onClick={() => dispatch(setChatRoom([props.chatName, props.otherUserId]))}>
        <div className='w-9 h-9 rounded-full bg-red-500 flex-shrink-0'> 
          {<img src={props.pfp} alt="" className='w-9 h-9 rounded-full flex-shrink-0' />}
        </div>
        
        <div>
            <h4>{props.sentBy}</h4>
            <p className='text-xs'>{props.sentBy}: {props.text}</p>
        </div>
        <div className='items-baseline ml-auto'>
            {/* <p className='text-xxs'>16:45</p> */}
            {/* <p className='text-xxs'>R</p> */}
        </div>
    </div>
  )
}

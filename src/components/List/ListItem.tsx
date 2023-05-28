import React, {useState, useEffect} from 'react'
import { auth } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { query, collection, orderBy } from 'firebase/firestore'
import { db } from '../../firebase'

export default function ListItem(props: any) {  
  const [lastMasg, setlastMsg] = useState('')
  const messagesRef = collection(db, `${props.chatName}`)
  const q = query(messagesRef, orderBy('timestamp', 'asc'))
  const [messages] = useCollectionData(q)

 useEffect(() => {
  messages?.map(e => {
    setlastMsg(e.text)
  })
 }, [messages])
  return (
    <div className='container flex items-center  mt-2 gap-2'>
        <div className='w-9 h-9 rounded-full bg-red-500 flex-shrink-0'> 
          {<img src={props.img} alt="" className='w-9 h-9 rounded-full flex-shrink-0' />}
        </div>
        
        <div>
            <h4>{props.name}</h4>
            <p className='text-xs'>{lastMasg}</p>
        </div>
        <div className='items-baseline ml-auto'>
            {/* <p className='text-xxs'>16:45</p> */}
            {/* <p className='text-xxs'>R</p> */}
        </div>
    </div>
  )
}

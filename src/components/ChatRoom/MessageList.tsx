import React, {useState, useEffect} from 'react'
import MessageItem from './MessageItem'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'

export default function MessageList(props: any) {
  interface message{
    text: string
  }

  const [messages, setMessages] = useState<message[]>([])
  const getChat = async() => {
    const querySnapshot = await getDocs(collection(db, `${props.chatName}`))
    querySnapshot.forEach(doc => (
      setMessages([
        {
          text: doc.get('text')
        }
      ])
    ))
  }

  useEffect(() => {
    getChat()
    console.log(messages)
  }, [props.chatName])
  
  const display = messages.map(e => (
    <MessageItem
      message = {e.text}
    />
  ))
  return (
    <div className=' h-screen max-w-full flex flex-col justify-end gap-1'>
      {display}
    </div>
  )
}

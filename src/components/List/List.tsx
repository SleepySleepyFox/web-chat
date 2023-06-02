import React, { useEffect, useState, useReducer } from "react";
import ListItem from './ListItem'
import { auth } from "../../firebase";
import { collection, where, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { store } from "../../app/store";
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getData, setData } from "../../features/MoveData";
import { v4 as uuidv4 } from 'uuid';





export default function List() {
  interface CHAT_NAME{
    name: string
  }
  interface USER_CHATS{
    sentBy: string,
    text: string,
    timestamp: string
    pfp: string,
    chatName: string
  }
  const [chatN, setChatN] = useState<CHAT_NAME[]>([])
  const[userChat, setUserChats] = useState<USER_CHATS[]>([])
  
  const dispatch = useAppDispatch()

  if(auth.currentUser?.displayName != null || undefined){
    const Ref = collection(db, 'chats')
    const q = query(Ref, where(String(auth.currentUser?.displayName), '==', auth.currentUser?.uid))
    const [chats] = useCollectionData(q)

    
    const getChatRooms = async () => {
      for(let i = 0; i <= chatN.length; i++){
        const querySnapshot = await getDocs(collection(db, `${chatN[i]}`))
        querySnapshot.forEach((doc) => {
          setUserChats(k => [...k, {
            sentBy: doc.get('sentBy'),
            text: doc.get('text'),
            timestamp: doc.get('timestamp'),
            pfp: doc.get('pfp'),
            chatName: `${chatN[i]}`
          }]) 
        });  
      }
    }
    
    useEffect(() => {
      chats?.map(e => {
        setChatN(k => [...k, e.chatName])
      })
    }, [chats])
    
    useEffect(() => {
      getChatRooms()
    }, [chatN])
  }

 const display = auth.currentUser?.uid != undefined && userChat.map(e => (
  <div 
    key = {uuidv4()} 
    onClick={() => dispatch(getData())}>
      <ListItem
      text = {e.text}
      sentBy = {e.sentBy}
      pfp = {e.pfp}
      chatName = {e.chatName}
      otherUserId = {e.chatName.replace(String(auth.currentUser?.uid), '')}
      />
  </div>
 ))
return (
    <div className='max-w-full max-h-screen px-2 md:m-0 '>
      {display}
    </div>
  )
}

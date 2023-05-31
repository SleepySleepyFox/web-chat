import React, { useEffect, useState } from "react";
import ListItem from './ListItem'
import { auth } from "../../firebase";
import { collection, where, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { getAuth } from "firebase/auth";
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { DocumentData } from "@firebase/firestore-types";


export default function List() {
  interface CHAT_NAME{
    name: string
  }
  interface USER_CHATS{
    sentBy: string,
    text: string,
    timestamp: string
  }
  const [chatN, setChatN] = useState<CHAT_NAME[]>([])
  const[userChat, setUserChats] = useState<USER_CHATS[]>([])
  
  if(auth.currentUser?.displayName != null || undefined){
    const Ref = collection(db, 'chats')
    const q = query(Ref, where(String(auth.currentUser?.displayName), '==', auth.currentUser?.uid))
    const [chats] = useCollectionData(q)

    
    const getChatRooms = async () => {
      for(let i = 0; i <= chatN.length; i++){
        const querySnapshot = await getDocs(collection(db, `${chatN[i]}`))
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data())
          setUserChats(k => [...k, {
            sentBy: doc.get('sentBy'),
            text: doc.get('text'),
            timestamp: doc.get('timestamp')
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
    
    // if sentBy field != currentUserUid => get User pfp
 console.log('Chat info: ', userChat);

 const display = userChat.map(e => (
  <ListItem 
    text = {e.text}
    sentBy = {e.sentBy}
  />
 ))
return (
    <div className='max-w-full max-h-screen px-2 md:m-0 '>
      {display}
    </div>
  )
}

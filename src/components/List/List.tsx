import React, { useEffect, useState } from "react";
import ListItem from './ListItem'
import { auth } from "../../firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function List() {
  interface Chats_Face{
      chatName: string | undefined,
      otherUserId: string | undefined,
  }
  const [user, setUser] = useState({
    userId: auth.currentUser?.uid,
    userName: auth.currentUser?.displayName
  })
  const [chats, setChats] = useState<Chats_Face>()
  const [otherUser, setOtherUser] = useState({
    pfp: '',
    name: ''
  })

  const getChatsInfo = async () => {
   const q = query(collection(db, 'chats'), where(String(user.userName) , '==', user.userId))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    setChats({
      chatName: doc.get('chatName'),
      otherUserId: doc.get('chatName').replace(auth.currentUser?.uid, ''),
      })
    })
  }

  const getPfp = async() => {
    const q = query(collection(db, 'users'), where('uID' , '==', chats?.otherUserId))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      setOtherUser({
        pfp: doc.get('PhotoURL'),
        name: doc.get('uName')
      })
      })
  }

  useEffect(() => {
    getChatsInfo()
  }, [user])
  useEffect(() => {
    getPfp()
  }, [chats])


return (
    <div className='max-w-full max-h-screen px-2 md:m-0 '>
        <ListItem 
        img = {otherUser.pfp}
        name = {otherUser.name}
        chatName = {chats?.chatName}
        />
    </div>
  )
}

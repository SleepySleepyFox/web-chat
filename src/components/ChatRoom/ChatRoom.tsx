import React, { useState, useEffect } from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import MessageList from './MessageList'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { collection, getDoc, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

export default function ChatRoom() {
  interface RootState {
    data: {
      value: string
      chatRoom: {
        chatRoomName: string,
        otherUserId: string
      }
    }
  }
  interface UserInfo{
    uID: string,
    uName: string,
    PhotoURL: string,
  }
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const dataId = useSelector((state: RootState) => state.data.chatRoom.otherUserId)
  const dataChatName = useSelector((state: RootState) => state.data.chatRoom.chatRoomName)
  
  const getOtherUserInfo = async() => {
    const ref = collection(db, 'users')
    const q = query(ref, where('uID', '==', dataId))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => setUserInfo({
      uID: doc.get('uID'),
      uName: doc.get('uName'),
      PhotoURL: doc.get('PhotoURL'),
    }))
  }

  useEffect(() => {
    getOtherUserInfo()
  }, [dataId])

  return (
    <div className='hidden w-full md:flex flex-col justify-between max-h-screen max-w-full lg:ml-5 px-4'>
        <ChatHeader
        uName = {userInfo?.uName}
        PhotoURL = {userInfo?.PhotoURL}
        />
        <MessageList
          chatName = {dataChatName}
        />
        <ChatInput/>
    </div>
  )
}

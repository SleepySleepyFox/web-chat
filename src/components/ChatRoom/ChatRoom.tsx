import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

export default function ChatRoom() {


  return (
    <div className='hidden w-full md:flex flex-col justify-between max-h-screen max-w-full lg:ml-5 px-4'>
        <ChatHeader/>
        <MessageList/>
        <ChatInput/>
    </div>
  )
}

import React from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

export default function ChatRoom() {
  return (
    <div className='container flex flex-col justify-between max-h-screen max-w-full lg:ml-5'>
        <ChatHeader/>
        <MessageList/>
        <ChatInput/>
    </div>
  )
}

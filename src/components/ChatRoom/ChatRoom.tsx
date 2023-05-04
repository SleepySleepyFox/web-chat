import React from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

export default function ChatRoom() {
  return (
    <div className='flex flex-col justify-between max-h-screen'>
      <ChatHeader/>
      <MessageList/>
      <ChatInput/>
    </div>
  )
}

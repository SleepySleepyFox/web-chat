import React from 'react'
import Search from './components/Search'
import List from './components/List/List'
import ChatRoom from './components/ChatRoom/ChatRoom'


export default function App() {
  return (
    <div className='h-full'>
      <div className="container md:flex">
        <div>
          <Search />
          <List />
        </div>
        <ChatRoom/>
      </div>
    </div>
  )
}

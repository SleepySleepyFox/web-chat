import React from "react";
import Search from "./components/Search";
import List from "./components/List/List";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Auth from "./components/Auth";

export default function App() {
  return (
    <div className="h-screen">
      <div className="h-full md:flex">
        <Auth/>
        {/* <div>
          <Search />
          <List />
        </div>
        <ChatRoom /> */}
      </div>
    </div>
  );
}

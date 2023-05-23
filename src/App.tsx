import React from "react";
import Search from "./components/Search/Search";
import List from "./components/List/List";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Auth from "./components/Auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
export default function App() {
  const [user] = useAuthState(auth);

  return (
    // NOTE: Seatch.tsx - убрать math.random() из listItme
    // NOTE: Реализовать авторизацию через Route
    <div className="h-screen">
      {!user ? (
        <Auth />
      ) : (
        <div className="h-full md:flex">
          <div>
            <Search />
            <List />
          </div>
          <ChatRoom />
        </div>
      )}
    </div>
  );
}

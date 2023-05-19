import React, { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Auth() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [LogIn, setLogIn] = useState(false);
  const [error, setError] = useState(false);

  async function signUp() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(true);
      console.log("SignUp Error: ", err);
    }
  }

  async function signIn() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(true);
      console.log("SignIn Error: ", err);
    }
  }
  //${error && 'border-red-400 border-2'}
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      {!LogIn && (
        <div
          className={`bg-gray-300 h-96 w-72 rounded-md flex flex-col justify-center gap-2 p-6 ${
            error && "border-red-400 border-2 border-opacity-30"
          }`}
        >
          <input
            type="text"
            className="bg-gray-200 rounded-md p-2 outline-slate-400"
            placeholder="Username"
          />
          <input
            type="email"
            className="bg-gray-200 rounded-md p-2 outline-slate-400"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false);
            }}
          />
          <input
            type="password"
            className="bg-gray-200 rounded-md p-2 outline-slate-400"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
          />
          <input type="file" id="file" className="hidden"/>
          <label htmlFor="file" className="flex gap-2 m-2">
            <img width="24" height="24" src="https://img.icons8.com/pastel-glyph/64/0110100/image--v2.png" alt="image--v2"/>
            <span>add profile picture</span>
          </label>
          <button
            className="bg-slate-400 rounded-sm p-2"
            onClick={() => signUp()}
          >
            Sign Up
          </button>
          <p className="text-center">
            already have an account{" "}
            <span className="text-blue-900" onClick={() => setLogIn((e) => !e)}>
              sign in
            </span>
          </p>
        </div>
      )}

      {LogIn && (
        <div
          className={`bg-gray-300 h-96 w-72 rounded-md flex flex-col justify-center gap-2 p-6 ${
            error && "border-red-400 border-2 border-opacity-30"
          }`}
        >
          <input
            type="email"
            className="bg-gray-200 rounded-md p-2 outline-slate-400"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false);
            }}
          />
          <input
            type="password"
            className="bg-gray-200 rounded-md p-2 outline-slate-400"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
          />
          <button
            className="bg-zinc-400 rounded-sm p-2"
            onClick={() => signIn()}
          >
            Sign In
          </button>
          <p className="text-center">
            don't have an account{" "}
            <span className="text-blue-900" onClick={() => setLogIn((e) => !e)}>
              sign up
            </span>
          </p>
        </div>
      )}

      {error && <p className="text-red-400">something went wrong</p>}
    </div>
  );
}

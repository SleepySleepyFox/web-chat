import { Listbox } from "@headlessui/react";
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import SearchFor from "./SearchFor";
import { collection, query, where, getDocs } from "firebase/firestore";
import List from "../List/List";
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getData, setData } from "../../features/MoveData";
import { v4 as uuidv4 } from 'uuid';

export default function Search() {
  const [searchStastu, setSearchStatus] = useState(false);
  const [getuser, setGetUser] = useState("");
  const options = [{ sortBy: "Newest" }, { sortBy: "Olderst" }];
  const [sort, setSort] = useState(options[0]);
  const [user, setUser] = useState<User[]>([{ name: " ", photoURL: "", uId: "" }]); //name field needs to contain " " default 

  const dispatch = useAppDispatch()

  interface User {
    name: string;
    photoURL: string;
    uId: string;
  }

  const usersRef = collection(db, "users");
  const q = query(usersRef, where("uName", "==", getuser));

  async function getDocuments() {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUser(k => [ 
      {
        name: doc.get("uName"),
        photoURL: doc.get("PhotoURL"),
        uId: doc.get('uID')
      }]);
    });
  }
  getDocuments();

  function logOut() {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        console.log("Sign Out Error: ", error);
      });
  }

  const display = user.map(e => (
    <div onClick={() => dispatch(setData(e.uId))}>
      {searchStastu && e.name === getuser ? 
      <div><SearchFor userName={e.name} photoURL={e.photoURL} id={e.uId} show = {true} /></div>
      : searchStastu && <div><SearchFor userName={getuser} show = {false} /></div>
      }
    </div>
  ))

  return (
    <div className="container flex justify-center flex-col max-w-full px-2">
      <h1 className="text-2xl font-semibold m-2" onClick={() => logOut()}>
        Messages
      </h1>
      <div className="container flex justify-center items-center rounded-xl bg-input max-w-full">
        <img
          className="h-3 w-3 m-2"
          src="https://img.icons8.com/external-others-iconmarket/64/000000/external-reserch-e-commerce-others-iconmarket.png"
        />
        <input
          className=" rounded-xl w-full bg-transparent outline-none"
          onClick={() => setSearchStatus((e) => !e)}
          onBlur={() => getuser === '' && setSearchStatus((e) => !e)}
          onChange={(e) => setGetUser(e.target.value)}
        />
      </div>

      <div className="flex items-center">
        <p className="text-xs mx-2">sort by</p>

        <div className="max-w-10">
          <Listbox value={sort} onChange={setSort}>
            <div>
              <Listbox.Button>
                <span className="text-links text:sm">{sort.sortBy}</span>
              </Listbox.Button>
              <Listbox.Options className="absolute left-10 mt-1 text-center  w-28 overflow-auto rounded-md backdrop-blur-md py-1 text-base shadow-lg ring-1 ring-gray-200 ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((e) => (
                  <Listbox.Option value={e} key={uuidv4()}>
                    {e.sortBy}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
      </div>
      {display}
    </div>
  );
}

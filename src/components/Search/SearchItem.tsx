import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from '../../firebase'


export default function SearchItem(props: any) {
    const usersRef = collection(db, 'users')
    const q = query(usersRef, where('uName', '==', props.userInfo ))
    console.log( props.userInfo);
    interface User {
        name: string,
        photoURL: string,
    }
    const [user, setUser] = useState<User>({name: '', photoURL: ''})
    async function getDocuments(){
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUser({
        name: doc.get('uName'),
        photoURL: doc.get('PhotoURL')
      })
    });
      }
      getDocuments() 
  return (
    <div className='container flex items-center  mt-2 gap-2'>
      
            <img src={user.photoURL} alt="" className='w-9 h-9 rounded-full flex-shrink-0'/>
        
        
        <div>
            <h4>{user.name}</h4>
        </div>
    </div>
  )
}

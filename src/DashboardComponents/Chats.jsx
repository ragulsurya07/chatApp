import React, { useContext, useEffect, useState } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase';
import { AuthContext } from '../Context/Authcontext';
import { ChatContext } from '../Context/Chatcontext';


const Chats = () => {

  const [chats,setChats]= useState([]);

  const {currentUser}=useContext(AuthContext)
  const { dispatch }=useContext(ChatContext)

  useEffect(()=>{
    const getChats=()=>{
      const unsub = onSnapshot(doc(db , "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      });
      return ()=> {
        unsub();
      }
    }

    currentUser.uid && getChats();
  },[currentUser.uid])

  const handleSelect = (userinfo) => {
    dispatch({type:"CHANGE_USER",payload:userinfo})
  }

  return (
    <div className='chats'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat)=>(
        <div onClick={()=>handleSelect(chat[1].userInfo)} className="userchat">
          <div className="userchatinfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chats

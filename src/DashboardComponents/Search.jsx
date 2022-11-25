import React, { useContext, useState } from 'react'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../Firebase';
import { AuthContext } from '../Context/Authcontext';
import { ChatContext } from '../Context/Chatcontext';

const Search = () => {

  const {currentUser} = useContext(AuthContext);
  const { dispatch }=useContext(ChatContext);

  const [username,setUsername] = useState("");
  const [user,setUser] = useState(null);
  const [err,setErr] = useState(false);

  const handleFind = async () => {
    const q = query(collection(db , "users"),where("displayName","==",username))
   
    try{
      const finduser = await getDocs(q);
      finduser.forEach((doc) => {
        setUser(doc.data())
      });
    }catch{
      setErr(true)
    }
  }

  const handleSelect = async(user) => {
    const combinedID = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db,"chats",combinedID));
      if (!res.exists()) {
        await setDoc(doc(db,"chats",combinedID),{messages:[]})

        await updateDoc(doc(db,"userChats",currentUser.uid),{
          [combinedID+".userInfo"] :{
            uid: user.uid,
            displayName: user.displayName
          },
          [combinedID+".date"] : serverTimestamp()
        });
        await updateDoc(doc(db,"userChats",user.uid),{
          [combinedID+".userInfo"] :{
            uid: currentUser.uid,
            displayName: currentUser.displayName
          },
          [combinedID+".date"] : serverTimestamp()
        });
      }

    }catch(err){
      console.log(err)
    }
    setUser(null);
    setUsername("");
    dispatch({type:"CHANGE_USER",payload:user})
  }

  const handleKey= e => {
    e.code === "Enter" && handleFind();
  }

  return (
    <div className='search'>
      <div className="searchform">
        <input type="text" placeholder='Find a User'onKeyDown={handleKey} value={username} onChange={e=>setUsername(e.target.value)} />
      </div>
      {err && <span>No such User</span>}
      {user && <div  className="userchat">
        <div className="userchatinfo">
          <span onClick={()=>handleSelect(user)} >{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search

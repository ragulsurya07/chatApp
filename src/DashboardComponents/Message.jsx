import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../Context/Authcontext'

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext)


  const ref = useRef();

  useEffect(()=> {
    ref.current?.scrollIntoView({behavior:"smooth"})
  },[message])

  return (
    <div>
        <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
          <div className="messagecontent">
            {/* {console.log(message)} */}
            <p>{message.text}</p>
          </div>
        </div>
  </div>
  )
}

export default Message;

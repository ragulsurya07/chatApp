import React, { useContext } from 'react'
import { ChatContext } from '../Context/Chatcontext'
import Input from './Input'
import Messages from './Messages'

const Chat = () => {

  const { data } = useContext( ChatContext )

  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>{data.user.displayName}</span>
      </div>
    <Messages/>
    <Input />
    </div>
  )
}

export default Chat

import React from 'react'
import { Message } from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import { MessageSkeleton } from '../skeletons/MessageSkeleton';
export const Messages = () => {

  const {messages,loading} = useGetMessages();

  console.log(messages);

  return (
    <div className='px-4 flex-1 overflow-auto'>

      {!loading && messages.length > 0 && messages.map((message)=>(
        <Message key={message._id} message={message}/>
      ))}

      {loading && <span className='loading loading-spinner'></span>}

      {!loading && messages.length===0 &&(<p className='text-center'>Send a message to start the conversation</p>) }

      
    </div>
  )
}


//over-flow auto for scrollbar if it overflows

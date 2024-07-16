import React from 'react'
import { Conversation } from './Conversation'
import { useGetConversations } from '../../hooks/useGetConversations';
export const Conversations = () => {

  const{loading,conversations}=useGetConversations();
  


  return (
    <div className='py-2 flex flex-col overflow-auto'>

      {conversations.map((conversation,idx)=>(
        <Conversation
        key={conversation._id}
        conversation={conversation}
        lastIdx={idx === conversations.length - 1}
        />
      ))}
      

      {loading??<span className='loading loading-spinner'></span>}
    </div>
  )
}


// Okay so what do i see in the image .
// img , name , icon
//it will be feched from the database and will be rendered.
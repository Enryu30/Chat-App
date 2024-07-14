import React from 'react'
import { Conversation } from './Conversation'
export const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
    </div>
  )
}


// Okay so what do i see in the image .
// img , name , icon
//it will be feched from the database and will be rendered.
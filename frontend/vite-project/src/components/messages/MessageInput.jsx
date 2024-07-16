import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage';

export const MessageInput = () => {
  const[message, setMessage] = useState("");
  const {loading , sendMessage}= useSendMessage();


  const handleSubmit = async (e)=>{
     e.preventDefault();

    if(!message)return ;

    await sendMessage(message);
    setMessage("");

  };

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative '>
        <input type="text" placeholder='Send a Message'
        className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        />
        <button className='absolute inset-y-0 end-0 items-center pe-3 ' type='submit'>
          <BsSend/>
        </button>
      </div>
    </form>
  )
}

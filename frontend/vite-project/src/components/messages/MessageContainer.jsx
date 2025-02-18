import React, { useEffect } from 'react'
import { Messages } from './Messages'
import { MessageInput } from './MessageInput'
import { TiMessage } from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'

export const MessageContainer = () => {

const {selectedConversation,setSelectedConversation} = useConversation();

useEffect(()=>{
    //clean up f();
  return() => setSelectedConversation(null);
},[setSelectedConversation]);


  return (
    <div className='md:min-2-[450px]  flex flex-col' style={{width:"600px"}}>
     
     {!selectedConversation?(<NoChatSelected/>) : (
         <>
         {/* Header */}
         <div className='bg-slate-500 px-4 py-2 mb-2'>
           <span className='label-text'>To:</span>
           <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
         </div>
         <Messages/>
         <MessageInput/> 
     </>
     )}
    </div>
  )
}


const NoChatSelected=()=>{
  return(
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col'>
        <p>Welcome👋 {}❄️</p>
        <p>Select a chat to start messaging</p>
        <TiMessage className='text-3xl md:text-6xl text-center w-full'/>
      </div>
    </div>
  )
}


/* 
  Header
  messages

  Scroll bar css in index.js

*/
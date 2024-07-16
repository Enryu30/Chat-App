import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export const useGetConversations = () => {
  
  const [loading,setLoading]= useState(false);
  const [conversations,setConversations]=useState([]);


  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
  
      try {
        const res = await fetch("/api/users/");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
  
        if (data.error) throw new Error(data.error);
        setConversations(data);
      } catch (err) {
        console.error("Failed to fetch conversations:", err);
      } finally {
        setLoading(false);
      }
    };
  
    getConversations();
  }, []);

  return{loading, conversations};


}

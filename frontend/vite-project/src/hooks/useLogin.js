import { useState } from "react";
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast";

 export const useLogin=()=>{
  const[loading , setLoading]=useState(false);
    const{setAuthUser}=useAuthContext();

    const login = async(username, password)=>{

      
      try {
        //fetch

        const res = await fetch("/api/auth/login",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({username,password})
        });

        const data = await res.json();

        if(data.error)throw new Error(data.error)

          localStorage.setItem("chat-user", JSON.stringify(data))
          setAuthUser(data);

      } catch (err) {
        //error handle

        toast.error(err.message);
      }
        finally{
          setLoading(false);
        }

    }

    return {loading , login};

    
}


// during fetching=> loading

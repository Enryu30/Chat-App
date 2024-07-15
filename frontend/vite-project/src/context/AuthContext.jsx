import { Children, createContext, useContext, useState } from "react";

export const AuthContext = createContext();


export const useAuthContext = () =>{
  return useContext(AuthContext);
}


export const AuthContextProvider = ({children})=>{
  const[authUser, setAuthUser]= useState(JSON.parse(localStorage.getItem("chat-user") || null));


return <AuthContext.Provider value={{authUser,setAuthUser}}>{children}</AuthContext.Provider>

}
//we write the members that can be made available to the whole files.


//=>Create context, provide context and use context.




/* Sure! Let's break down this code step by step:

1. **Import Statements:**
   ```javascript
   import { Children, createContext, useContext, useState } from "react";
   ```
   This imports necessary functions and components from the React library.

2. **Creating the Context:**
   ```javascript
   export const AuthContext = createContext();
   ```
   This creates a new context called `AuthContext`. Contexts in React are used to pass data through the component tree without having to pass props down manually at every level.

3. **Custom Hook to Use the Context:**
   ```javascript
   export const useAuthContext = () => {
     return useContext(AuthContext);
   }
   ```
   This defines a custom hook `useAuthContext` that allows any component to easily access the `AuthContext`. It uses the `useContext` hook provided by React to do this.

4. **Context Provider Component:**
   ```javascript
   export const AuthContextProvider = ({ children }) => {
     const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user") || null));
   
     return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>
   }
   ```
   This component, `AuthContextProvider`, will wrap around parts of your app where you want the `AuthContext` to be available. 

   - **State Initialization:**
     ```javascript
     const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user") || null));
     ```
     It uses the `useState` hook to create a state variable `authUser` and a function to update it, `setAuthUser`. It initializes `authUser` with the value stored in `localStorage` under the key `"chat-user"`. If there's no such value in `localStorage`, it initializes to `null`.

   - **Providing Context Value:**
     ```javascript
     return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>
     ```
     This returns a `Provider` component from the `AuthContext`. The `value` prop of the `Provider` is an object containing `authUser` and `setAuthUser`. This makes `authUser` and `setAuthUser` available to any descendant components that use the `useAuthContext` hook. The `children` prop represents any child components that will be wrapped by this provider.

### Summary:
- **AuthContext** is a context object that holds authentication-related data.
- **useAuthContext** is a custom hook to easily access the context.
- **AuthContextProvider** is a component that wraps around other components, providing them with the authentication context.

When you use `AuthContextProvider` to wrap parts of your app, any component within that wrapped part can access the authentication data using the `useAuthContext` hook. */
import Login from './pages/login/Login'
import './App.css'
import SignUp from './pages/signup/Signup'
import { Home } from './pages/home/Home'
import { Navigate, Route,Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {

  const {authUser}= useAuthContext();

  return (
    <>
        <div className='p-4 h-screen flex items-center justify-center'>
        <Toaster/>

          <Routes>

          <Route path='/' element={authUser?<Home/>:<Login/>}/>            
          <Route path='/login' element={authUser?<Navigate to='/'/> : <Login/>}/>
            <Route path='/signup' element={authUser ? <Navigate to='/'/> :<SignUp/>}/>

            
          </Routes>
        </div> 

    </>
  )
}

export default App

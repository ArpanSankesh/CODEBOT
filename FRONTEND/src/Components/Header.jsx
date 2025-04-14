import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { handelSuccess } from '../utils/Utils';
import { ToastContainer } from 'react-toastify'; 

const Header = () => {

  const [loggedInUser, setLoginUser] = React.useState("")
  const nav = useNavigate();
  useEffect(() => {
    setLoginUser(localStorage.getItem("LoggedInUser"))
  }, [])

  const handelLogout = (e) => {
    localStorage.removeItem("token")
    localStorage.removeItem("loggedInUser")
    handelSuccess("Logout Successfully")
    setTimeout(() => {
      nav('/login')
    }, 1000);
  }

  return (
    <div >
      <div className='fixed top-0 left-0 z-10 w-full h-[10vh] bg-[#212121] px-10 flex items-center justify-between text-white text-lg'>
      <h1 className=''>CodeLens</h1>
      <div className='text-lg'>
      <button className='px-6'>{loggedInUser}</button>
      <button onClick={handelLogout} className='text-md px-3 py-1  rounded-lg text-white bg-[#0099FF] cursor-pointer font-semibold' >Logout</button>
      </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Header


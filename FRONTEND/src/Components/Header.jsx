import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

  const [loggedInUser, setLoginUser] = React.useState("")

  useEffect(() => {
    setLoginUser(localStorage.getItem("LoggedInUser"))
  }, [])

  return (
    <div className='fixed top-0 left-0 z-10 w-full h-[10vh] bg-[#212121] px-10 flex items-center justify-between text-white text-lg'>
      <h1 className=''>CodeLens</h1>
      <button className='bg-transparent border-[0.5px] border-gray-500 px-6 text-lg rounded-xl'>{loggedInUser}</button>
      <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
    </div>
  )
}

export default Header


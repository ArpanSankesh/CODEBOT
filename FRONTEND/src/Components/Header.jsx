import React from 'react'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 z-10 w-full h-[6vh] bg-[#212121] px-10 py-3 flex align-center justify-between text-white'>
    CodeLens
    <button className='bg-transparent border-[0.5px] border-gray-500 px-4 text-sm rounded-4xl'>PROFILE</button>
    </div>
  )
}

export default Header
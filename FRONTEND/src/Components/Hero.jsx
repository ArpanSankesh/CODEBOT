import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-[#212121] text-white px-4 relative'>
      <div className='w-[50%] min-h-screen pb-32  '>
      
      </div>
    
      <div className='fixed bottom-0 w-[50%] px-4 h-[15vh] bg-[#212121] pb-5 flex gap-2'>
        <input 
          type='text' 
          placeholder='Ask anything...' 
          className=' w-full h-full bg-[#303030] text-sm text-white text-start px-5 py-2 rounded-xl outline-none  placeholder:text-gray-400 focus:ring-2 focus:ring-white-100 transition overflow-scroll'
        />

        <button className='cursor-pointer px-3 py-4 bg-transparent rounded-xl outline-none  placeholder:text-gray-400 border border-white-100 transition'>Ask</button>
    
      </div>
    </div>
  )
}

export default Hero

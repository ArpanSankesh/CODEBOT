import React, { useState } from 'react'

const Hero = () => {
  const [code, setCode] = useState("");
  function handelFileUplode(event) {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setCode(e.target.result)
      }
      reader.readAsText(file)
    }
  }
  return (
    <div className='flex flex-col items-center min-h-screen bg-[#212121] text-white px-4 relative '>
      <div className='w-[50%] min-h-screen pb-70 text-xs whitespace-pre-wrap'>
        
      </div>

      <div className='fixed bottom-1 w-[50%] px-4 h-[30vh] bg-[#303030] pb-5 flex flex-col justify-between  gap-4 rounded-2xl'>
        <textarea
          placeholder='Ask anything...'
          value={code}
          // onChange={(e) => setCode(e.target.value)}
          className='w-full h-full bg-[#303030] text-xs text-white text-start px-5 py-2 rounded-xl outline-none placeholder:text-gray-400 transition overflow-x-hidden'
          textarea/>
        <div className='w-full flex items-center justify-between gap-2 bg-[#303030]'>
          <input onChange={handelFileUplode}
          type="file" 
          accept='.js, .jsx, .ts, .tsx, .py, .java, .cpp, .c, .go, .rb, .php, .html, .css'
          className='w-full bg-[#212121] p-2 rounded-xl text-sm border placeholder:text-gray-700 ' />
          <button className=' w-full cursor-pointer bg-[#212121] p-2 rounded-xl text-sm outline-none  placeholder:text-gray-400 border border-white-100 transition'>Ask</button>
        </div>
      </div>

    </div>
  )
}

export default Hero

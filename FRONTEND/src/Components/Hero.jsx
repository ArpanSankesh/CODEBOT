import React, { useState, useEffect } from 'react'
import 'prismjs/themes/prism-tomorrow.css'
import Editor from 'react-simple-code-editor'
import prism from 'prismjs'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import axios from 'axios'



const Hero = () => {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  
  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode(){
    const response = await axios.post("http://localhost:3000/ai/get-review/", {code});
    setReview(response.data);
}
  
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
      <div className='w-[50%] min-h-screen pb-70 text-s whitespace-pre-wrap'>
      <Markdown rehypePlugins={[rehypeHighlight]} >{review}</Markdown>
      </div>

      <div className='fixed bottom-1 w-[50%] px-4 h-[20vh] bg-[#303030] pb-2 flex flex-col justify-between  gap-4 rounded-2xl'>
        <div className='w-full h-full bg-[#303030] text-xs text-white text-start px-5 pt-1 rounded-xl outline-none placeholder:text-gray-400 transition overflow-x-hidden'> 
        <Editor placeholder='Ask Anything..' className='w-full h-full' value={code} onValueChange={(code) => setCode(code)}
              highlight={(code)=>prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{fontFamily: "Fire Code, monospace", fontsize: 16}}></Editor>
          </div>
        <div className='w-full flex items-center justify-between gap-2 bg-[#303030]'>
          <input onChange={handelFileUplode}
          type="file" 
          accept='.js, .jsx, .ts, .tsx, .py, .java, .cpp, .c, .go, .rb, .php, .html, .css'
          className='w-full bg-[#212121] p-2 rounded-xl text-sm border placeholder:text-gray-700 ' />
          <button onClick={reviewCode} className=' w-full cursor-pointer bg-[#212121] p-2 rounded-xl text-sm outline-none  placeholder:text-gray-400 border border-white-100 transition'>Ask</button>
        </div>
      </div>

    </div>
  )
}

export default Hero

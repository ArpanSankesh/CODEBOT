import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { handelError, handelSuccess } from '../utils/Utils'


const Signup = () => { 
    const [signInInfo, setSignInInfo] = React.useState({
        name: "",
        email: "",
        password: ""
    })

    const nav = useNavigate()

    const handelChange = (e) => {
        const {name, value} = e.target;
        const copySignInInfo = {...signInInfo};
        copySignInInfo[name] = value;
        setSignInInfo(copySignInInfo);
    }
    
    const handelSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password } = signInInfo;
        if (!name || !email || !password) {
            return handelError("Please fill all the fields");
        } try {
            const url = "http://localhost:8080/auth/signup"
            const response = await fetch(url, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signInInfo)
            })
            const result = await response.json()
            const {success, message, error} = result
            if(success){
                handelSuccess(message)
                setTimeout(() => {
                    nav('/login')
                }, 1000);
            }else if(error){
               const details = error?.details[0].message;
               handelError(details)
            }else if(!success){
                handelError(message)
            }
            
        } catch (error) {
            handelError(error.message)
        }
    }
    
    return (
        <div className='w-full h-screen flex justify-center items-center flex-col px-4'>
            <form onSubmit={handelSubmit}
                action="POST"
                className='flex flex-col items-center justify-center gap-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/3 bg-[#f9f9f9] px-6 sm:px-10 py-10 rounded-lg shadow-lg '
            >
                <div className='flex flex-col items-center justify-center '>
                <h1 className='text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold'>Don't Have an Account?</h1>
                    <p className='text-gray-500 font-semibold'>Create one..</p>
                </div>
                <div className='flex flex-col w-[90%]'>
                    <input
                    onChange={handelChange}
                        className='bg-white py-2 px-2 text-lg border focus:ring-2 focus:ring-[#0099FF] rounded-md outline-none mt-2'
                        type="text"
                        name='name'
                        autoFocus
                        placeholder="Name.." 
                        value={signInInfo.name} />
                </div>

                <div className='flex flex-col w-[90%]'>
                    <input
                    onChange={handelChange}
                        className='bg-white py-2 px-2 text-lg border focus:ring-2 focus:ring-[#0099FF] rounded-md outline-none mt-2'
                        type="email"
                        name='email'
                        placeholder="Email.." 
                        value={signInInfo.email}
                        />
                </div>

                <div className='flex flex-col w-[90%]'>
                    <input
                    onChange={handelChange}
                        className='bg-white py-2 px-2 text-lg border focus:ring-2 focus:ring-[#0099FF]  rounded-md outline-none mt-2'
                        type="password"
                        name='password'
                        placeholder="Password.." 
                        value={signInInfo.password}
                        />
                </div>
                <button className='w-[90%] text-2xl p-2 rounded-md text-white bg-[#0099FF] cursor-pointer font-semibold ' type="submit">Sign Up</button>
                <p className='text-gray-500 font-semibold'>Already have an Account? <Link to="/login" className='text-[#0099FF]'>login</Link></p>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default Signup

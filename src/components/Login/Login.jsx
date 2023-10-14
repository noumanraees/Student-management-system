import React from 'react'
import { useForm } from "react-hook-form"
function Login() {
  const {register,handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data)
  return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="h-screen w-screen bg-gray-900 flex items-center justify-center">

    <div className="w-1/2 h-1/2 bg-red-500  rounded-md ">
    <h2 className="  h-12 text-center text-2xl bg-white font-semibold mb-4 p-2 ">Login</h2>
    <div className="bg-gray-600 flex justify-center h-[90%]">
    <div className="w-60 mt-10 ">
          {/* <Input type="email" color="white"  placeholder='Enter your Email' />
          <Input className='border-xl mt-3' type ="password" color="white" placeholder='Enter your Password'/>
          <Input className='border-xl mt-3' type ="password" color="white" placeholder='Confirm Password'/> */}
          
          <div className='py-2 '>
            <input {...register("email", { required: true })} className='w-full py-1 px-2 rounded-2xl' type="email" color="white"  placeholder='Enter your Email'/>
          </div>
          <div className='py-2 '>
            <input {...register("password", { required: true })} className='w-full py-1 px-2 rounded-2xl'  type ="password" color="white" placeholder='Enter your Password'/>
          </div>
          
          <div className=" mt-3 py-2 px-2 flex justify-center">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg">
              Login
            </button>
            </div>
            <div className=' py-3 flex justify-center'>
              <p className='text-white'>New student? <a href="/signup" className="text-yellow-500 hover:text-black ">Signup</a></p>
    
            </div>
              </div>
             
             
    
    </div>
    
      </div>
      </div>
       </form>
      );
    }

export default Login

import React from 'react'

function Profile({setValue}) {

  return (
    <div className='flex gap-5 justify-between px-3 py-3'>
        <div className='grid text-3xl w-full bg-purple-800 h-[200px] rounded-2xl  text-white '>
<h1 className='justify-center items-center p-2'>Teachers</h1>
<h1 className='justify-center items-center  p-2'>45</h1>
<div className='flex text-lg justify-center mt-auto bg-black w-full'>
    <h1 className='cursor-pointer' onClick={() =>setValue("Staff")}>More Info</h1>
   </div>
        </div>
      <div className='grid text-3xl w-full bg-green-400 h-[200px] rounded-2xl '>
 <h1 className='p-2 justify-center items-center'>Students</h1>
   <h1 className='p-2 justify-center items-center'>300</h1>
   <div className='flex text-lg justify-center mt-auto bg-green-800 w-full'>
    <h1 className='cursor-pointer ' onClick={() =>setValue("Student")}>More Info</h1>
   </div>
      </div>
    </div>
  )
}

export default Profile

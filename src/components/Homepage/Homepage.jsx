import React from 'react'
import background from '../../assets/background.png'

function Homepage() {
    return (
      <div
        className="h-screen relative">
        <div className='flex justify-between mt-2 '>
            <div className='text-3xl'>Techlogix</div>
            <div>
                <div className='gap-4 flex mt-2 text-2xl'>
                    <a href="#home" className="text-gray-600 hover:text-black ">
                        Home
                    </a>
                    <a href="#contact" className="text-gray-600 hover:text-black ">
                        Contact Us
                    </a>
                    <a href="#feedback" className="text-gray-600 hover:text-black ">
                        Feedback
                    </a>
                </div>
            </div>
            <a href='/login'>
                <div>
                    <button className="bg-yellow-500 text-white text-1xl mr-5px mt-2 py-3 px-3">
                        Login
                </button>
                </div>
            </a>
        </div>
        <div className='mt-4'
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          height: 'calc(100% - 64px)', 
        }} >
                <div className="absolute top-1/2 left-7 transform -translate-y-1/2 ">
                <p className="text-white text-6xl ">
                    <h1>MORDERN</h1>
                    <h1 className='text-yellow-500'>LEARNING 4.0</h1>
                </p>
                <p className='text-white text-1xl left-6'> 
                 <div>  Lorem ispum dolor sitin met elit.</div> 
                 <div>   asdaf asf sad asdasa sgsfsf fdsfd.</div> 
                 <div>   asdasdsdfdf gdg dasd asd .</div>  </p>
                </div>
                <div className=" absolute left-7 mt-411p">
          <button className="bg-white text-black font-semibold py-2 px-4 mr-2  ">
            Try Now
          </button>
          <button className="bg-yellow-500 text-white font-semibold py-2 px-4  ">
            Remind me
          </button>
        </div>
      </div>
      </div>
    );
  }
  
  
export default Homepage

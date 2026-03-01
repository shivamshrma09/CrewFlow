'use client'
import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, #3537db20 1px, transparent 1px),
          linear-gradient(to bottom, #3537db20 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3537db] rounded-full blur-[150px] opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3537db] rounded-full blur-[150px] opacity-30"></div>
      
      <div className="w-full px-6 flex flex-col items-center justify-center mb-20 relative z-10">
        <h1 className='text-white'>Get <span className='text-[#3537db] '>50%</span> OFF ON HOLI OFFER<span className='text-[#3537db] '> HOLI50</span></h1>
        <div className="bg-[#0c0c29] flex flex-row px-2 justify-between items-center max-w-6xl w-full h-13 rounded-xl">
          <div>
            <span className="text-[#3537db] text-lg text-bold">Crew</span>
            <span className="text-white text-lg text-bold">Flow</span>
          </div>

          <div>
            <button className="text-bold  px-4 py-1 rounded-lg text-[#3537db]">
              Login
            </button>

            <button className="bg-[#3537db] text-white px-4 py-1 rounded-lg hover:bg-[#3537db]">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center  mb-4">
        <h1 className="text-5xl text-white text-semibold ">Your Content On</h1>
        <h1 className='text-5xl text-[#3537db] font-semibold'>Autopilot</h1>
        </div>


      <div className="w-full flex justify-center px-6 mb-8">
        <Image 
          src='https://ik.imagekit.io/qwzhnpeqg/CrewFlow/Home_ITO_Ps_5a5aac3fda.webp' 
          alt='home' 
          width={1200} 
          height={600} 
          className='rounded-lg relative z-10 w-full max-w-5xl object-cover' 
        />
      </div>
        

        <div className="w-full mt-15 flex flex-col items-center justify-center">
         


          <div className="flex flex-col items-center justify-center w-full mt-12 px-6 max-w-6xl mx-auto gap-8">
            <div className='flex flex-col w-full border border-gray-800 rounded-xl p-6 bg-[#0c0c29]/50'>
              <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-bold text-center text-white'>Create your first campaign</h1>
                <p className='text-gray-400 text-center mt-2'>Connect your social media accounts and start creating content</p>
                <button className="bg-[#3537db] text-white px-8 py-3 rounded-lg hover:bg-[#2a2cc0] transition-colors mt-6">
                  Create Campaign
                </button>
                <Image 
                  src='https://ik.imagekit.io/qwzhnpeqg/CrewFlow/Home_ITO_Ps_5a5aac3fda.webp' 
                  alt='home' 
                  width={800} 
                  height={400} 
                  className='rounded-lg mt-6 w-full object-cover' 
                />
              </div>
            </div>

            <div className='flex flex-col w-full border border-gray-800 rounded-xl p-6 bg-[#0c0c29]/50'>
              <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-bold text-center text-white'>Create your first campaign</h1>
                <p className='text-gray-400 text-center mt-2'>Connect your social media accounts and start creating content</p>
                <button className="bg-[#3537db] text-white px-8 py-3 rounded-lg hover:bg-[#2a2cc0] transition-colors mt-6">
                  Create Campaign
                </button>
                <Image 
                  src='https://ik.imagekit.io/qwzhnpeqg/CrewFlow/Home_ITO_Ps_5a5aac3fda.webp' 
                  alt='home' 
                  width={800} 
                  height={400} 
                  className='rounded-lg mt-6 w-full object-cover' 
                />
              </div>
            </div>
          </div>

           <span className='flex flex-row items-center justify-center'>
            <hr className='w-20 h-[1px] bg-[#686ade] border-0' />
            <p className='mx-4 text-gray-400'>connect to all</p>
            <hr className='w-20 h-[1px] bg-[#686ade] border-0' />
          </span>

          <div className="flex flex-row items-center justify-center gap-8 mt-8">
            <Image src="https://ik.imagekit.io/qwzhnpeqg/CrewFlow/Youtube-Logo-PNG-Picture-removebg-preview%20(1).png" alt="YouTube" width={80} height={80} className="object-contain" />
            <Image src="https://ik.imagekit.io/qwzhnpeqg/CrewFlow/Fsgb8v6Qw8aKEbfpp9YGV5-removebg-preview%20(1).png" alt="Instagram" width={80} height={80} className="object-contain" />
            <Image src="https://ik.imagekit.io/qwzhnpeqg/CrewFlow/images-removebg-preview%20(1).png" alt="Platform 3" width={80} height={80} className="object-contain" />
            <Image src="https://ik.imagekit.io/qwzhnpeqg/CrewFlow/images-removebg-preview%20(2).png" alt="Platform 4" width={80} height={80} className="object-contain" />
          </div>


        </div>
    </div>
  );
}

export default page;

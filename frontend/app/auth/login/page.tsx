'use client'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { CiLinkedin } from 'react-icons/ci'
import { RiTwitterXFill } from 'react-icons/ri'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function page() {
  const [otpsend, setotpsend] = useState(false)

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <div className='min-h-screen flex items-center justify-center p-4'>
        <div className='border border-neutral-500/20 border-2 solid rounded-b-lg p-6 bg-black max-w-md w-full'>
          <div className='flex flex-col gap-[-10] items-center justify-center mb-4'>
            <div className='flex flex-row items-center justify-center mb-2'>
              <span className="text-[#3537db] text-4xl font-bold">Crew</span>
              <span className="text-white text-4xl font-bold">Flow</span>
            </div>
            <p className='text-sm text-neutral-400 mt-[-5]'>Automate your content creation</p>
          </div>

          {!otpsend ? (
            <div>
              <form onSubmit={(e) => { e.preventDefault(); setotpsend(true); }}>
                <label className='text-sm text-white'>Enter your Email</label>
                <input type='email' required className='w-full bg-black text-white border border-neutral-500/30 rounded-lg px-4 py-2 mt-1 mb-4' />
                <button 
                  type='submit' 
                  className='w-full bg-[#3537db] text-white text-xl font-semibold px-4 py-2 rounded-lg hover:bg-[#3537db]/80 transition-colors' 
                  onClick={() => toast.success('OTP sent successfully! (DEMO)')}
                >
                  Send OTP
                </button>
              </form>

              <span className='flex mt-10 flex-row items-center justify-center'>
                <hr className='w-20 h-[1px] bg-neutral-500/40 border-0' />
                <p className='mx-4 text-gray-400'>or</p>
                <hr className='w-20 h-[1px] bg-neutral-500/40 border-0' />
              </span>

              <div className='flex flex-col gap-3 mt-6'>
                <button className='w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-3'>
                  <FcGoogle size={24} />
                  Continue with Google
                </button>
                <button className='w-full bg-[#0077b5] text-white px-4 py-2 rounded-lg hover:bg-[#006399] transition-colors flex items-center justify-center gap-3'>
                  <CiLinkedin size={24} />
                  Continue with LinkedIn
                </button>
                <button className='w-full bg-black border border-white text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-3'>
                  <RiTwitterXFill size={24} />
                  Continue with X
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => e.preventDefault()}>
              <label className='text-sm text-white'>Enter your OTP</label>
              <input type='text' required maxLength={6} className='w-full bg-black text-white border border-neutral-500/30 rounded-lg px-4 py-2 mt-1 mb-4' />
              <button type='submit' className='w-full bg-[#3537db] text-white text-xl font-semibold px-4 py-2 rounded-lg hover:bg-[#3537db]/80 transition-colors'>Verify OTP</button>
            </form>
          )}

        </div>
      </div>
    </>
  )
}

export default page

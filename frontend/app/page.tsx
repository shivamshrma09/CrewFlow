'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { joinWaitlist } from '@/services/waitlistService'

function page() {
  const router = useRouter()
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [email, setEmail] = useState('')
  const [suggestion, setSuggestion] = useState('')
  const [rating, setRating] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWaitlist(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await joinWaitlist(email, suggestion, rating)
      toast.success('Successfully joined the waitlist!')
      setEmail('')
      setSuggestion('')
      setRating('')
      setShowWaitlist(false)
    } catch (error: any) {
      if (error.message === 'Email already registered') {
        toast.info('Already added to waiting list!')
      } else {
        toast.error(error.message || 'Failed to join waitlist')
      }
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      
      {showWaitlist && (
        <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4'>
          <div className='border border-neutral-500/30 rounded-lg p-8 bg-black max-w-md w-full relative'>
            <button 
              onClick={() => setShowWaitlist(false)}
              className='absolute top-4 right-4 text-white hover:text-gray-400'
            >
              ✕
            </button>
            
            <div className='flex flex-col items-center justify-center mb-6'>
              <div className='flex flex-row items-center justify-center mb-2'>
                <span className="text-[#3537db] text-4xl font-bold">Crew</span>
                <span className="text-white text-4xl font-bold">Flow</span>
              </div>
              <p className='text-sm text-neutral-400 mt-[-8]' >Automate your content creation</p>
            </div>

            <div className='text-center mb-6'>
              <h2 className='text-2xl font-bold text-white mb-2'>Join the waiting list</h2>
            </div>

            <form onSubmit={handleWaitlistSubmit}>
              <label className='text-sm text-white'>Enter your Email</label>
              <input 
                type='email' 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='your@email.com'
                className='w-full bg-black text-white border border-neutral-500/30 rounded-lg px-4 py-3 mt-1 mb-4 focus:border-[#3537db] focus:outline-none' 
              />
              
              <label className='text-sm text-white'>Your Suggestions (Optional)</label>
              <textarea 
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder='Share your ideas or suggestions...'
                rows={4}
                className='w-full bg-black text-white border border-neutral-500/30 rounded-lg px-4 py-3 mt-1 mb-4 focus:border-[#3537db] focus:outline-none resize-none' 
              />
              
              <label className='text-sm text-white'>Rate this project (Optional)</label>
              <input 
                type='text' 
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder='Rate my project out of 5 ⭐'
                className='w-full bg-black text-white border border-neutral-500/30 rounded-lg px-4 py-3 mt-1 mb-4 focus:border-[#3537db] focus:outline-none' 
              />
              
              <button 
                type='submit' 
                disabled={loading}
                className='w-full bg-[#3537db] text-white text-xl font-semibold px-4 py-3 rounded-lg hover:bg-[#3537db]/80 transition-colors disabled:opacity-50'
              >
                {loading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          </div>
        </div>
      )}

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
            <button 
              onClick={() => window.open('https://ik.imagekit.io/qwzhnpeqg/CrewFlow/ET_HACKTHONS_SUBMISSION%20(1).pdf', '_blank')}
              className="text-bold px-4 py-1 rounded-lg text-[#3537db] hover:bg-[#3537db]/10 transition-colors"
            >
              Project 
            </button>

            <button 
              onClick={() => router.push('/auth/login')}
              className="text-bold px-4 py-1 rounded-lg text-[#3537db] hover:bg-[#3537db]/10 transition-colors"
            >
              Login
            </button>

            <button 
              onClick={() => router.push('/auth/signup')}
              className="bg-[#3537db] text-white px-4 py-1 rounded-lg hover:bg-[#2a2cc0] transition-colors"
            >
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
        
      <div className='w-full flex flex-col items-center justify-center mt-20 sm:mb-[-40]'>
        <h2 className='text-5xl font-bold text-white text-center '>Fetures</h2>
        <p className='text-gray-400 text-center max-w-2xl mb-16'>Powered by the latest AI and ML technologies to automate your content creation</p>
      </div>

        <div className="w-full mt-8 flex flex-col items-center justify-center">
         


          <div className="flex flex-col items-center justify-center w-full mt-12 px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
            <div className='flex flex-col w-full border border-[#3537db]/30 rounded-2xl p-8 bg-gradient-to-br from-[#0c0c29] via-[#0a0a1f] to-[#050510] h-full hover:border-[#3537db]/60 hover:shadow-2xl hover:shadow-[#3537db]/10 transition-all duration-500 group'>
              <div className='flex flex-col items-start'>
                <h1 className='text-3xl font-bold text-white mb-1'>Cognitive Analysis Engine</h1>
                <p className='text-xs text-[#3537db] font-bold uppercase tracking-wider'>Tech Stack</p>
                <p className='text-sm text-[#3537db] font-semibold mt-1 mb-4'>Gemini 1.5 Pro + GPT-4o</p>
                <p className='text-gray-300 text-base leading-relaxed'>Performs deep semantic analysis for AI Content Repurposer (1 video → 10 assets). Drives Comment Responder by analyzing comments for contextual replies and Viral Hook Generator by reverse-engineering top 1% viral content</p>
                <Image 
                  src='https://ik.imagekit.io/qwzhnpeqg/CrewFlow/Home_ITO_Ps_5a5aac3fda.webp' 
                  alt='Cognitive Analysis Engine' 
                  width={600} 
                  height={300} 
                  className='rounded-lg mt-6 w-full object-cover group-hover:scale-105 transition-transform duration-500' 
                />
              </div>
            </div>

            <div className='flex flex-col w-full border border-[#3537db]/30 rounded-2xl p-8 bg-gradient-to-br from-[#0c0c29] via-[#0a0a1f] to-[#050510] h-full hover:border-[#3537db]/60 hover:shadow-2xl hover:shadow-[#3537db]/10 transition-all duration-500 group'>
              <div className='flex flex-col items-start'>
                <h1 className='text-3xl font-bold text-white mb-1'>Identity & Audio Synthesis</h1>
                <p className='text-xs text-[#3537db] font-bold uppercase tracking-wider'>Tech Stack</p>
                <p className='text-sm text-[#3537db] font-semibold mt-1 mb-4'>ElevenLabs + Whisper V3 + FFmpeg</p>
                <p className='text-gray-300 text-base leading-relaxed'>Implementation of Regional Voice Cloning and natural-language dubbing. Powers Voice-to-Content feature (Hindi speech → automated script/video) and handles platform-specific resizing for all social media</p>
                <Image 
                  src='https://ik.imagekit.io/qwzhnpeqg/CrewFlow/Home_ITO_Ps_5a5aac3fda.webp' 
                  alt='Identity & Audio Synthesis' 
                  width={600} 
                  height={300} 
                  className='rounded-lg mt-6 w-full object-cover group-hover:scale-105 transition-transform duration-500' 
                />
              </div>
            </div>

            <div className='flex flex-col w-full border border-[#3537db]/30 rounded-2xl p-8 bg-gradient-to-br from-[#0c0c29] via-[#0a0a1f] to-[#050510] h-full hover:border-[#3537db]/60 hover:shadow-2xl hover:shadow-[#3537db]/10 transition-all duration-500 group'>
              <div className='flex flex-col items-start'>
                <h1 className='text-3xl font-bold text-white mb-1'>Strategic Analytics Engine</h1>
                <p className='text-xs text-[#3537db] font-bold uppercase tracking-wider'>Tech Stack</p>
                <p className='text-sm text-[#3537db] font-semibold mt-1 mb-4'>Custom ML Regression (XGBoost) + Scikit-learn</p>
                <p className='text-gray-300 text-base leading-relaxed'>Powers Audience Retention Predictor by analyzing watch-time patterns and Revenue Estimator which converts engagement into brand deal valuations. Includes Fake Follower Scanner to verify audience authenticity</p>
                <Image 
                  src='https://ik.imagekit.io/qwzhnpeqg/CrewFlow/Home_ITO_Ps_5a5aac3fda.webp' 
                  alt='Strategic Analytics Engine' 
                  width={600} 
                  height={300} 
                  className='rounded-lg mt-6 w-full object-cover group-hover:scale-105 transition-transform duration-500' 
                />
              </div>
            </div>

            <div className='flex flex-col w-full border border-[#3537db]/30 rounded-2xl p-8 bg-gradient-to-br from-[#0c0c29] via-[#0a0a1f] to-[#050510] h-full hover:border-[#3537db]/60 hover:shadow-2xl hover:shadow-[#3537db]/10 transition-all duration-500 group'>
              <div className='flex flex-col items-start'>
                <h1 className='text-3xl font-bold text-white mb-1'>Growth Intelligence (The Scout)</h1>
                <p className='text-xs text-[#3537db] font-bold uppercase tracking-wider'>Tech Stack</p>
                <p className='text-sm text-[#3537db] font-semibold mt-1 mb-4'>Real-time API Scraping + Vector DB</p>
                <p className='text-gray-300 text-base leading-relaxed'>Drives Trend Jacking by cross-referencing Google Trends and social sentiment. Powers Collaborator Finder by matching creator niches using audience overlap algorithms and calculates Hashtag ROI via historical performance analysis</p>
                <Image 
                  src='https://ik.imagekit.io/qwzhnpeqg/CrewFlow/Home_ITO_Ps_5a5aac3fda.webp' 
                  alt='Growth Intelligence' 
                  width={600} 
                  height={300} 
                  className='rounded-lg mt-6 w-full object-cover group-hover:scale-105 transition-transform duration-500' 
                />
              </div>
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
    </>
  );
}

export default page;

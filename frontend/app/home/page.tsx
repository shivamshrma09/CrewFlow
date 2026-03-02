'use client'
import React, { useState } from 'react'
import { FaYoutube } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill, RiArrowDownWideFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

function page() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState({ icon: FaYoutube, name: 'YouTube' })

  const platforms = [
    { icon: FaYoutube, name: 'YouTube' },
    { icon: CiInstagram, name: 'Instagram' },
    { icon: CiFacebook, name: 'Facebook' },
    { icon: RiTwitterXFill, name: 'Twitter' },
    { icon: CiLinkedin, name: 'LinkedIn' }
  ]

  const SelectedIcon = selected.icon

  return (
    <div >
      <h1 className='text-white flex flex-row text-2xl items-center justify-center mt-10'>SHOW YOUR <span className='text-[#3537db] ml-2'>PROGRESH</span></h1>

      <div className='flex items-center justify-center mt-6'>
        <div className='relative'>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='bg-black text-white px-3 py-2 rounded-lg border border-neutral-500/40 flex items-center gap-1 min-w-[200px] justify-between'
          >
            <div className='flex items-center gap-3'>
              <SelectedIcon size={20} />
              {selected.name}
            </div>
            <RiArrowDownWideFill size={20} />
          </button>

          {isOpen && (
            <div className='absolute top-full mt-2 w-full bg-black border border-neutral-500/30 rounded-lg overflow-hidden z-50'>
              {platforms.map((platform, index) => {
                const PlatformIcon = platform.icon
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setSelected(platform)
                      setIsOpen(false)
                    }}
                    className='w-full text-left px-6 py-3 hover:bg-[#3537db]/20 transition-colors flex items-center gap-3 text-white'
                  >
                    <PlatformIcon size={20} />
                    {platform.name}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Home Image Section */}
      <div className='flex items-center justify-center mt-12 px-6'>
       
      </div>
    </div>
  )
}

export default page

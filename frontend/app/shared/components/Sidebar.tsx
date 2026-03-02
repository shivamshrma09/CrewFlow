'use client'
import React, { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import { RiArrowDownWideFill } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { LiaComments } from "react-icons/lia";
import { GrAnalytics } from "react-icons/gr";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { BsCameraReels } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter, usePathname } from 'next/navigation';


function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [sidebar, setSidebar] = useState(false)
  const [showproducts, setshowproducts] = useState(false)
  const [title, settitle] = useState('Dashboard')
  
  if (pathname === '/' || pathname.startsWith('/auth')) {
    return null
  }
  
  const menuItems = [
    { icon: MdOutlineDashboard, label: 'Dashboard', link: '/home' },
    { icon: GoProjectSymlink, label: 'Projects', link: '/projects' },
    { icon: LiaComments, label: 'Comment AI', link: '/competitor' },
    { icon: GrAnalytics, label: 'Competitor', link: '/competitor' },
    { icon: RiCalendarScheduleLine, label: 'Schedule', link: '/schedule' },
    { icon: BsCameraReels, label: 'Shorts', link: '/shorts' },
    { icon: IoSettingsOutline, label: 'Profile', link: '/Profile' }
  ]
  
  return (
   <div>
    <div className='w-full h-16 flex flex-row items-center justify-between px-6 border-b border-neutral-500/30 bg-black'>
      {!sidebar && (
        <div className='cursor-pointer' onClick={() => setSidebar(!sidebar)}>
          <CiMenuBurger
            size={20}
            color="white"
          />
        </div>
      )}

      <h1 className='text-white font-semibold text-2xl capitalize'>{pathname.slice(1) || 'Dashboard'}</h1>

      <div className='cursor-pointer border border-white rounded-full p-1' onClick={() => router.push('/profile')}>
        <SlUser 
          size={24}
          color="white"
        />
      </div>
    </div>

{showproducts && sidebar && (
    <div className='w-1/3 border border-neutral-500/30 text-white rounded-md flex flex-col gap-2 p-4 fixed top-16 left-[50%] bg-black z-[9998]'>
      <a href='https://mockroundai-six.vercel.app/' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:text-[#3537db]'>MockRound.Ai</a>
      <a href='https://plusdsaai.vercel.app/' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:text-[#3537db]'>PlusDSA</a>
      <a href='https://classrommitra.vercel.app/' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:text-[#3537db]'>ClassroomMitra</a>
    </div>
)}

      {sidebar && (
        <div className='w-1/2 border border-neutral-500/30 text-white rounded-br-md flex flex-col gap-2 h-screen fixed top-0 left-0 bg-black z-[9999] overflow-y-auto'>
          <div className='flex flex-row items-center justify-between w-full px-4 py-3 border-b border-neutral-500/30'>
            <div>
              <span className="text-2xl text-[#3537db] font-semibold">Crew</span>
              <span className='text-white text-2xl font-bold'>Flow</span>
            </div>
            <div className='cursor-pointer' onClick={() => setSidebar(!sidebar)}>
              <CiMenuBurger 
                size={20}
                color="white"
              />
            </div>
          </div>

          <div className='text-white/80 text-semibold w-full'>
            {menuItems.map((item, index) => {
              const ItemIcon = item.icon
              return (
                <button 
                  key={index} 
                  onClick={() => {
                    settitle(item.label)
                    router.push(item.link)
                  }} 
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#3537db]/20 text-white transition-colors text-xl flex items-center gap-3"
                >
                  <ItemIcon size={20} color="#3537db" /> {item.label}
                </button>
              )
            })}
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#3537db]/20 transition-colors text-xl flex items-center gap-3">
              More Products <span className='cursor-pointer inline-block' onClick={() => setshowproducts(!showproducts)}><RiArrowDownWideFill size={20} color="#3537db" /></span>
            </button>
          </div>

          <div className='p-2 mt-3 border border-neutral-500/30 w-full flex flex-col items-center justify-center gap-2'>
            <h1>GET 50% OFF</h1>
            <img src="https://ik.imagekit.io/qwzhnpeqg/images__1_-removebg-preview.png" alt="Arrow" width={400} height={400}/>
            <button className="bg-[#3537db] text-white px-4 py-1 rounded-lg hover:bg-[#3537db]/80 transition-colors">Buy Now</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

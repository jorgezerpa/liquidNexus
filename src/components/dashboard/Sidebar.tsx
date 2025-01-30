"use client"
import React, { useEffect, useState } from 'react'
import type {ReactNode} from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { IoRadioSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLargeLine } from "react-icons/ri";
import { useCloudProviderStore } from '@/store/CloudProviderStore'
import { FaChevronDown } from "react-icons/fa";

function Sidebar({ isAdmin }:{ isAdmin?:boolean }) {
    const cloudProvider = useCloudProviderStore()

    const [windowWidth, setWindowWidth] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    const [showCloudProviders, setShowCloudProviders] = useState(false)

    useEffect(()=>{
        setWindowWidth(window.innerWidth)
        const resizeHandler = () => {
            setWindowWidth(window.innerWidth)
        } 
        window.addEventListener("resize", resizeHandler)
    }, [])

    const handleSelectProvider = (index:number) => {
        cloudProvider.setProvider(index)
        setShowCloudProviders(false)
    }

  return (
    <div className={`${(windowWidth<800&&showMenu)&&"fixed top-5 left-5 bottom-5 right-5"} ${windowWidth>800&&"h-full"}`}>
    
        <div
            className={`${windowWidth<800&&!showMenu?"hidden":""} ${windowWidth<800?"w-full":"w-[200px]"} h-full flex flex-col justify-start items-start bg-white shadow-lg text-gray-900`}
        >
            <div className='relative py-2 px-2 w-full'>
                <div onClick={()=>setShowCloudProviders(!showCloudProviders)} className='flex gap-2 justify-center items-center bg-gray-100 rounded-lg px-1 py-3 cursor-pointer'>
                    <p>
                        { cloudProvider.availableProviders[cloudProvider.selectedProviderIndex] }
                    </p>
                    <FaChevronDown />
                </div>
                <div className='rounded-lg transition-all overflow-hidden' style={{ maxHeight: showCloudProviders ? '500px' : 0 }}>
                    {
                        cloudProvider.availableProviders.map((provider, index)=>{
                            return (
                                <div onClick={()=>handleSelectProvider(index)} style={{ transform: `scaleY(${showCloudProviders?1:0})` }} key={provider+index+"cloudproviderslistonsidebar"} className='text-gray-600 px-2 py-3 cursor-pointer transition-all origin-top'>
                                    <p>{ provider }</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-full flex-1'>
                <MenuItem
                    title='Cloud Insights'
                    link='/dashboard/cloudInsights'
                    icon={()=><IoRadioSharp size={20} />}
                    closeMenu={()=>{setShowMenu(false)}}
                />
                <MenuItem
                    title='Allowed Resources'
                    link='/dashboard/allowedResources'
                    icon={()=><IoRadioSharp size={20} />}
                    closeMenu={()=>{setShowMenu(false)}}
                />
                <MenuItem
                    title='Rewards'
                    link='/dashboard/rewards'
                    closeMenu={()=>{setShowMenu(false)}}
                    icon={()=><IoRadioSharp size={20} />}
                />
                <MenuItem
                    title='Configuration'
                    link='/dashboard/configuration'
                    closeMenu={()=>{setShowMenu(false)}}
                    icon={()=><IoRadioSharp size={20} />}
                />
            </div>
        
            <div className='py-4 px-2 text-right w-full' onClick={async()=>await signOut({ callbackUrl:"/" })}>
                {/* <MenuItem
                    disable
                    title='Sign Out'
                    link='/dashboard/billing'
                    closeMenu={()=>{setShowMenu(false)}}
                    icon={()=><FaSignOutAlt size={20} />}
                /> */}
            </div>
        </div>

    <div className={`flex justify-center items-center fixed bottom-10 right-5 w-12 h-12 bg-purple-500 rounded-full ${windowWidth>800&&"hidden"}`} onClick={()=>setShowMenu(!showMenu)}>
        { !showMenu && <TiThMenu size={30} color='white' /> }
        { showMenu && <RiCloseLargeLine size={30} color='white' /> }
    </div>
    </div>
  )
}

const MenuItem = ({title, link, icon, disable, closeMenu}: { title:string, link:string, icon: () => ReactNode, disable?:boolean, closeMenu?:()=>void }) => {
    return (
        <div onClick={()=>closeMenu&&closeMenu()} className='w-full py-4 px-2 text-lg'>
            {
                !disable &&
                <Link  href={link} className='flex justify-start items-center gap-1'>
                    { icon() }
                    <p>{title}</p>
                </Link>
            }
            {
                disable &&
                <div className='flex justify-start items-center gap-1 cursor-pointer'>
                    { icon() }
                    <p>{title}</p>
                </div>
            }
        </div>
    )
}

export {Sidebar}
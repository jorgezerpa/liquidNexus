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
import { useRouter, usePathname } from 'next/navigation'

import { IoMdHome } from "react-icons/io";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { GiTwoCoins } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { IoIosDocument } from "react-icons/io";

import { BsFillCpuFill } from "react-icons/bs";
import { MdNetworkCheck } from "react-icons/md";
import { MdStorage } from "react-icons/md";

import { MdManageAccounts } from "react-icons/md";
import { FaServer } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";

function Sidebar({ isAdmin }:{ isAdmin?:boolean }) {
    const pathname = usePathname()
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
            className={`${windowWidth<800&&!showMenu?"hidden":""} ${windowWidth<800?"w-full":"w-[200px]"} ${windowWidth<800?"rounded-lg":"rounded-none"} h-full flex flex-col justify-start items-start bg-backgroundSecondary shadow-lg shadow-[#555] `}
        >
            {/* <div className='relative py-2 px-2 w-full'>
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
            </div> */}
            <div className='w-full flex-1 mt-4'>
                <MenuItem
                    title='Home'
                    link='/dashboard/home'
                    icon={()=><IoMdHome size={25} />}
                    closeMenu={()=>{setShowMenu(false)}}
                />
                <MenuItemDropdown
                    title='Resource Management'
                    basePath='/dashboard/resourceManagement'
                    icon={()=><HiSquare3Stack3D size={25}  />}
                    closeMenu={()=>{setShowMenu(false)}}
                    subitems={[
                        { title: "CPU", link:"/dashboard/resourceManagement/cpu", icon: ()=><BsFillCpuFill size={25} /> },
                        { title: "Bandwidth", link:"/dashboard/resourceManagement/bandwidth", icon: ()=><MdNetworkCheck size={25} /> },
                        { title: "Storage", link:"/dashboard/resourceManagement/storage", icon: ()=><MdStorage size={25} /> },
                    ]}
                />
                <MenuItem
                    title='Rewards'
                    link='/dashboard/rewards'
                    closeMenu={()=>{setShowMenu(false)}}
                    icon={()=><GiTwoCoins size={25} />}
                />
                <MenuItemDropdown
                    title='Settings'
                    basePath='/dashboard/settings'
                    closeMenu={()=>{setShowMenu(false)}}
                    icon={()=><IoIosSettings size={25} />}
                    subitems={[
                        { title: "Account preferences", link:"/dashboard/settings/accountPreferences", icon: ()=><MdManageAccounts size={25} /> },
                        { title: "API keys", link:"/dashboard/settings/apiKeys", icon: ()=><FaServer size={25} /> },
                        { title: "Wallet Addresses", link:"/dashboard/settings/walletAddress", icon: ()=><FaWallet size={25} /> },
                    ]}
                />
                <MenuItem
                    title='Support and Documentation'
                    link='/dashboard/supportAndDocumentation'
                    closeMenu={()=>{setShowMenu(false)}}
                    icon={()=><IoIosDocument size={25} />}
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
    const pathname = usePathname()
    
    return (
        <div onClick={()=>closeMenu&&closeMenu()} className={`w-full py-4 px-2 text-lg ${pathname.includes(link)&&"text-primaryGreen-light"}`}>
            {
                !disable &&
                <Link  href={link} className='flex justify-start items-center gap-1'>
                    <span className='w-[30px] justify-center flex'>
                        { icon() }
                    </span>
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

const MenuItemDropdown = ({title, basePath, icon, closeMenu, subitems}: { title:string, basePath:string,  icon: () => ReactNode, disable?:boolean, closeMenu?:()=>void, subitems:{title:string, link:string, icon: () => ReactNode,}[] }) => {
    const router = useRouter()
    const pathname = usePathname()
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div onClick={()=>setShowDropdown(!showDropdown)} className='w-full py-4 px-2 text-lg'>
            <div className={`flex justify-start items-center gap-1 cursor-pointer ${pathname.includes(basePath)&&"text-primaryGreen-light"}`}>
                <span className='w-[30px] justify-center flex flex-shrink-0'>
                    { icon() }
                </span>
                <p>{title}</p>
                <div className='flex-1 flex justify-end transition-all'>
                    <FaChevronDown style={{ transform:`rotate(${showDropdown?"180deg":"0deg"})` }} className='transition-all' />
                </div>
            </div>

            <div className={`mt-5 ml-5 pl-2 border-l-2 ${pathname.includes(basePath)?"border-primaryGreen-light":"border-gray-300"} transition-all overflow-hidden`} style={{ maxHeight: showDropdown ? '500px' : 0 }}>
                {
                    subitems.map((item, i) => {
                        return(
                            <div
                                onClick={(e)=>{
                                    e.stopPropagation()
                                    // setShowDropdown(false)
                                    router.push(item.link)
                                    if(closeMenu)closeMenu()
                                }}
                                style={{ transform: `scaleY(${showDropdown?1:0})` }}
                                key={"uniquesidebarsubitemmen"+item.link+i} 
                                className={`mb-2 flex justify-start items-center gap-1 cursor-pointer transition-all origin-top ${pathname.includes(item.link)&&"text-primaryGreen-light"}`}
                            >
                                <span className='w-[30px] justify-center flex flex-shrink-0'>
                                    { item.icon() }
                                </span>
                                <p>{ item.title }</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export {Sidebar}
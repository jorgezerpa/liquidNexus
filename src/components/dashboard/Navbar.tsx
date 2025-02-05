"use client"
import React, {useState} from 'react'
import { useDisconnect, useAccount, useBalance } from 'wagmi'
import { formatWalletAddress } from '@/utils/formatWalletAddress'
import { formatBalanceValue } from '@/utils/formatBalanceValue'
import BlockiesSvg from 'blockies-react-svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Navbar() {
    const router = useRouter()
    const {address, chainId, chain} = useAccount()

    const {data:dataBalance} = useBalance({
        chainId, 
        address,
        token:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831"
    })

    const {disconnect} = useDisconnect()
    const [showProfileOptions, setShowProfileOptions] = useState(false)

    return (
        <nav
            className='flex justify-between items-center h-[90px] px-4 sm:px-8 absolute top-0 left-0 right-0 bg-backgroundSecondary shadow-sm shadow-[#333]'
        >
            <div className='sm:w-[250px] mr-2'>
                {/* <h1 className='text-lg sm:text-2xl font-bold text-gray-600'>LiquidNexus</h1> */}
                <div style={{ width: '80px', height: '80px', position:"relative"}} className="sm:scale-100"> 
                    <Image 
                    src="/images/logo.png" 
                    alt="My Image" 
                    layout="fill" 
                    objectFit="contain" 
                    />
                </div>
            </div>
            <div className='w-full hidden sm:block'>
                <div className='hover:text-primaryGreen-light cursor-pointer inline-block' onClick={()=>router.push("/dashboard")}>
                    <p>Dashboard</p>
                </div>
            </div>
            <div className='flex justify-end items-center gap-5 flex-shrink-0'>
                <div className='hidden sm:block'>
                    <p className='text-lg text-gray-50'>
                        {formatBalanceValue(dataBalance?.value?.toString()||"",dataBalance?.decimals||0)} {dataBalance?.symbol}
                    </p>
                </div>
                <div onClick={()=>setShowProfileOptions(!showProfileOptions)} className='relative bg-primaryGreen-light rounded-xl px-2 sm:px-5 py-3 flex gap-3 justify-center items-center cursor-pointer'>
                    <BlockiesSvg 
                        address={address || ""}
                        size={3}
                        className='rounded-full border-2 border-white'
                    />
                    <div className='flex flex-col justify-end sm:block'>
                        <p className='text-gray-700 text-xs'>
                            {chain?.name||"Not Allowed Network"}
                        </p>
                        <p className='text-gray-200 font-bold text-xs sm:text-base'>
                            {formatWalletAddress(address||"")}
                        </p>
                        <p className='block sm:hidden text-xs text-gray-500'>
                            {formatBalanceValue(dataBalance?.value?.toString()||"",dataBalance?.decimals||0)} {dataBalance?.symbol}
                        </p>
                    </div>

                    {
                        showProfileOptions &&
                        <div className='absolute top-full left-0 right-0 bg-gray-100 rounded-lg'>
                            <div onClick={()=>disconnect()} className='text-gray-600 px-2 py-3'>
                                <p>Disconnect</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            
        </nav>
    )
}

export {Navbar}
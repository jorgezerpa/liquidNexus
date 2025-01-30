"use client"
import React, {useState} from 'react'
import { useDisconnect, useAccount } from 'wagmi'
import { formatWalletAddress } from '@/utils/formatWalletAddress'
import BlockiesSvg from 'blockies-react-svg'

function Navbar() {
    const {address} = useAccount()
    const {disconnect} = useDisconnect()
    const [showProfileOptions, setShowProfileOptions] = useState(false)

    return (
        <nav
            className='flex justify-between items-center h-[80px] px-4 sm:px-8 shadow-sm absolute top-0 left-0 right-0'
        >
            <div className=''>
                <h1 className='text-lg sm:text-2xl font-bold text-gray-600'>LiquidNexus</h1>
            </div>
            <div className='flex flex-col justify-center items-end'>
                <div onClick={()=>setShowProfileOptions(!showProfileOptions)} className='relative bg-gray-200 rounded-xl px-5 py-3 flex gap-3 justify-center items-center cursor-pointer'>
                    <BlockiesSvg 
                        address={address || ""}
                        size={3}
                        className='rounded-full border-2 border-white'
                    />
                    <p className='text-gray-700'>
                        {formatWalletAddress(address||"")}
                    </p>

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
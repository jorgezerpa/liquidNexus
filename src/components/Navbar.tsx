"use client"
import React from 'react'
import { useDisconnect, useAccount } from 'wagmi'
import { formatWalletAddress } from '@/utils/formatWalletAddress'

function Navbar() {
    const {address} = useAccount()
    const {disconnect} = useDisconnect()

    return (
        <nav
            className='flex justify-between items-center h-[80px] px-4 sm:px-8 bg-gray-900 shadow-sm text-gray-100 absolute top-0 left-0 right-0'
        >
            <div className=''>
                <h1 className='text-lg sm:text-2xl font-bold'>LiquidNexus</h1>
            </div>
            <div className='flex flex-col justify-center items-end'>
                <p className='text-white' onClick={()=>disconnect()}>
                    Disconnect
                </p>
                <p className='text-white' onClick={()=>disconnect()}>
                    {formatWalletAddress(address||"")}
                </p>
            </div>
            
        </nav>
    )
}

export {Navbar}
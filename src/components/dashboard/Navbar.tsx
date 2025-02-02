"use client"
import React, {useState} from 'react'
import { useDisconnect, useAccount, useBalance, useChains } from 'wagmi'
import { formatWalletAddress } from '@/utils/formatWalletAddress'
import { formatBalanceValue } from '@/utils/formatBalanceValue'
import BlockiesSvg from 'blockies-react-svg'

function Navbar() {
    const {address, chainId, chain} = useAccount()

    const {data:dataBalance} = useBalance({chainId, address})
    console.log(dataBalance)

    const {disconnect} = useDisconnect()
    const [showProfileOptions, setShowProfileOptions] = useState(false)

    return (
        <nav
            className='flex justify-between items-center h-[80px] px-4 sm:px-8 shadow-sm absolute top-0 left-0 right-0'
        >
            <div className=''>
                <h1 className='text-lg sm:text-2xl font-bold text-gray-600'>LiquidNexus</h1>
            </div>
            <div className='flex justify-end items-center gap-5'>
                <div>
                    <p className='text-base text-gray-500'>
                        {formatBalanceValue(dataBalance?.value?.toString()||"",dataBalance?.decimals||0)} {dataBalance?.symbol}
                    </p>
                </div>
                <div onClick={()=>setShowProfileOptions(!showProfileOptions)} className='relative bg-gray-200 rounded-xl px-5 py-3 flex gap-3 justify-center items-center cursor-pointer'>
                    <BlockiesSvg 
                        address={address || ""}
                        size={3}
                        className='rounded-full border-2 border-white'
                    />
                    <div>
                        <p className='text-gray-700 text-xs'>
                            {chain?.name||"Not Allowed"}
                        </p>
                        <p className='text-gray-700'>
                            {formatWalletAddress(address||"")}
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
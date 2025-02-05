"use client"
import * as React from 'react'
import {  useConnect } from 'wagmi'
import Image from 'next/image'

export function ConnectToMetamask() {
  const { connectors, connect } = useConnect()

  const injected = connectors.find(c => c.id === "injected") as any
  const walletConnect = connectors.find(c => c.id === "walletConnect") as any
  const metamask = connectors.find(c => c.id === "metaMaskSDK") as any

    return (
        <div className='flex-shrink-0 w-full max-w-[300px] px-4 py-3 justify-center items-center bg-gradient-to-br from-gray-700 to-gray-900 shadow-md shadow-gray-700 rounded-lg'>
          <div style={{ width: '80px', height: '80px', position:"relative"}} className="sm:scale-100 mx-auto"> 
              <Image
              src="/images/logo.png" 
              alt="My Image" 
              layout="fill" 
              objectFit="contain" 
              />
          </div>
          <p className='text-center font-bold text-2xl text-title mb-4'>Connect your wallet</p>
          <div className='flex flex-col gap-1'>
            <button 
              onClick={() => {
                connect({ connector:injected, chainId:42161 })
              }}
              type='button' className="hover:scale-95 transition-all px-4 py-6  rounded-lg hover:text-white hover:font-bold cursor-pointer my-2 bg-white bg-opacity-5 shadow-md shadow-black">
                Injected
            </button>
            <button 
              onClick={() => {
                connect({ connector:walletConnect, chainId:42161 })
              }}
              type='button' className="hover:scale-95 transition-all px-4 py-6  rounded-lg hover:text-white hover:font-bold cursor-pointer my-2 bg-white bg-opacity-5 shadow-md shadow-black">
                Wallet Connect
            </button>
            <button 
              onClick={() => {
                connect({ connector:metamask, chainId:42161 })
              }}
              type='button' className="hover:scale-95 transition-all  px-4 py-6  rounded-lg hover:text-white hover:font-bold cursor-pointer my-2 bg-white bg-opacity-5 shadow-md shadow-black">
                Metamask
            </button>
          </div>
        </div>
    )
    
}
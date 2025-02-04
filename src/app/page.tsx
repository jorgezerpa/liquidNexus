'use client'
import {  useEffect } from "react"
import { useRouter } from "next/navigation"
import { ConnectToMetamask } from "@/components/web3/Connectors"
import { useAccount } from 'wagmi'


export default function Home() {
  const router = useRouter()
  const { isConnected } = useAccount()

  useEffect(()=>{
    if(isConnected) {
      router.push("/dashboard")
    }
  }, [isConnected])

  return (
    <div className="flex justify-center items-center h-screen">
      <ConnectToMetamask />
    </div>
  )
}
"use client"
import { useEffect } from "react"
import { useAccount } from 'wagmi'
import { useRouter } from "next/navigation"

export function Providers({children}: {children: React.ReactNode}) {
    
  const router = useRouter()
  const { isConnected } = useAccount()

  useEffect(()=>{
    if(!isConnected) {
      router.push("/")
    }
  }, [isConnected])
   
  return (
    <div>
      {
        children
      }
    </div>
  )
}
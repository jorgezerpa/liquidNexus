'use client'
import { useState } from "react"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"

import { PowMining } from "@/components/dashboard/pages/allowedResources/PowMining"

// { title: "Account preferences", link:"/accountPreferences", icon: ()=><IoRadioSharp size={20} /> },
//                         { title: "API keys", link:"/apiKeys", icon: ()=><IoRadioSharp size={20} /> },
//                         { title: "Wallet Addresses", link:"/walletAddress", icon: ()=><IoRadioSharp size={20} /> },
const MAP_PARAM_TO_TITLE: any = {
  "accountPreferences": "Account preferences",
  "apiKeys": "API keys",
  "walletAddress": "Wallet Addresses",
}

const MAP_PARAM_TO_COMPONENT: any = {
  "accountPreferences": () => "Account preferences",
  "apiKeys": () => "API keys",
  "walletAddress": () => "Wallet Addresses",
  // "pow-mining": () => <PowMining />,
}

export default function ResourceManagementDetail() {
  const router = useRouter()
  const params = useParams()
  const setting = params.setting

  return (
    <div className="px-4 py-5">
      <p className="mb-5 text-base text-gray-500 flex items-center gap-1 cursor-pointer"><span onClick={()=>router.push("/dashboard/settings")}>Settings</span><span>&gt;</span><span>{ MAP_PARAM_TO_TITLE[setting as string] }</span></p>
      <p className="mb-5 text-2xl text-gray-700 font-bold">{ MAP_PARAM_TO_TITLE[setting as string] }</p>

      {MAP_PARAM_TO_COMPONENT[setting as string]&&MAP_PARAM_TO_COMPONENT[setting as string]()}

    </div>
  )
}
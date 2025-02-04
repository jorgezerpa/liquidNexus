'use client'
import { HintHover } from "@/components/shared/HintHover";
import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function WalletAddresses() {
  const router = useRouter()
  const params = useSearchParams()
  const provider = params.get("provider") as string

  const WALLETS = [
    {
      address: "0x76b785Db5787398A355822eb07460CF2E709f669",
      addedOn: "01/01/2025",
      totalRewardedAmount: "538$",
      lastReward: "12/01/2024",
    },
    {
      address: "0x76b785Db5787398A355822eb07460CF2E709f669",
      addedOn: "01/01/2025",
      totalRewardedAmount: "538$",
      lastReward: "12/01/2024",
    },
    {
      address: "0x76b785Db5787398A355822eb07460CF2E709f669",
      addedOn: "01/01/2025",
      totalRewardedAmount: "538$",
      lastReward: "12/01/2024",
    },
  ]

  return (
    <div className="px-5 py-5">
      <p className="text-3xl text-title font-bold mb-5 flex items-center gap-1">
        Wallet addresses
        <HintHover text="Wallets you provided to receive rewards. You can choose only one at time." />
      </p>

      <div className="flex justify-center items-center flex-col mb-5 mt-10">
        <div className="cursor-pointer">
          <MdAddToPhotos size={80} />
          <p className="text-xl text-title mb-5">Add new</p>
        </div>
      </div>

      {
        WALLETS.map((wallet, i)=>{
          return (
            <div className="flex">
              <div>
                <input type="checkbox" className="w-5 h-5 bg-white" />
              </div>
              <div key={wallet.address+i} className="flex-shrink-0 flex-1 bg-white bg-opacity-10 rounded-xl px-4 py-1 mb-3">
                <div className="flex  justify-end mb-2 gap-2">
                  <p className="text-lg text-white cursor-pointer">
                    <MdEdit size={27} />
                  </p>          
                  <p className="text-xl text-white cursor-pointer">
                    <MdDelete size={27} />  
                  </p>          
                </div>
                <div className="flex  justify-between mb-2">
                  <p className="text-lg text-gray-100 font-bold">Address: {wallet.address}</p>          
                  <p className="text-xl text-gray-200 ">added on: {wallet.addedOn}</p>          
                </div>
                <div className="flex  justify-between">
                  <p className="text-lg">Total rewarded amount: {wallet.totalRewardedAmount}</p>          
                </div>
                <div className="flex  justify-between">
                  <p className="text-lg">Last Reward: {wallet.lastReward}</p>          
                </div>
                <div className="flex  justify-center">
                  <p className="text-lg text-white cursor-pointer font-bold mb-3">See wallet historial</p>          
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

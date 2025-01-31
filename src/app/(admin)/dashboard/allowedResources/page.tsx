'use client'
import { useRouter } from "next/navigation"

const OPTIONS = [
  { path: "nft-asset-storage", label: "NFT Asset Storage" },
  { path: "zk-snarks-cpu", label: "ZK SNARKS CPU" },
  { path: "indexers", label: "Indexers" },
  { path: "swap-route-search", label: "Swap Route Search" },
  { path: "pow-mining", label: "PoW Mining" },
  { path: "farm-yielding", label: "Farm Yielding" },
]

export default function AllowedResources() {

  const router = useRouter()

  return (
    <div className="px-4 py-5">

      <div className="flex gap-4 items-center justify-start flex-wrap">
        {
          OPTIONS.map((option, index)=>{
            return (
              <div onClick={()=>router.push(`allowedResources/${option.path}`)} key={option.label+"allowresoradfaf"+index} className="flex-shrink-0 w-[49%] bg-gray-100 rounded-xl p-4 cursor-pointer">
                <p className="text-xl text-gray-700 font-bold">{ option.label }</p>          
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
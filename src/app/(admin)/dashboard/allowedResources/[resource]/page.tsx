'use client'
import { useParams } from "next/navigation"

const OPTIONS = [
  { label: "NFT Asset Storage" },
  { label: "ZK SNARKS CPU" },
  { label: "Indexers" },
  { label: "Swap Route Search" },
  { label: "PoW Mining" },
  { label: "Farm Yielding" },
]

export default function AllowedResourcesResource() {

  const params = useParams()
  const resource = params.resource

  return (
    <div className="px-4 py-5">
      <p className="text-xl text-gray-700 font-bold">{ resource }</p>
    </div>
  )
}
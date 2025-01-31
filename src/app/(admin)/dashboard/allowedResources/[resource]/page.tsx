'use client'
import { useState } from "react"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"

import { PowMining } from "@/components/dashboard/pages/allowedResources/PowMining"

const MAP_PARAM_TO_TITLE: any = {
  "nft-asset-storage": "NFT Asset Storage",
  "zk-snarks-cpu": "ZK SNARKS CPU",
  "indexers": "Indexers",
  "swap-route-search": "Swap Route Search",
  "pow-mining": "PoW Mining",
  "farm-yielding": "Farm Yielding",
}

const MAP_PARAM_TO_COMPONENT: any = {
  "nft-asset-storage": () => "NFT Asset Storage",
  "zk-snarks-cpu": () => "ZK SNARKS CPU",
  "indexers": () => "Indexers",
  "swap-route-search": () => "Swap Route Search",
  "pow-mining": () => <PowMining />,
  "farm-yielding": () => "Farm Yielding",
}

export default function AllowedResourcesResource() {
  const router = useRouter()
  const params = useParams()
  const resource = params.resource

  return (
    <div className="px-4 py-5">
      <p className="mb-5 text-base text-gray-500 flex items-center gap-1 cursor-pointer"><span onClick={()=>router.push("/dashboard/allowedResources")}>Allowed Resources</span><span>&gt;</span><span>{ MAP_PARAM_TO_TITLE[resource as string] }</span></p>
      <p className="mb-5 text-2xl text-gray-700 font-bold">{ MAP_PARAM_TO_TITLE[resource as string] }</p>

      {MAP_PARAM_TO_COMPONENT[resource as string]()}

    </div>
  )
}
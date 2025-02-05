'use client'
import { } from "react"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"


const MAP_PARAM_TO_TITLE: any = {
  "cpu": "CPU",
  "bandwidth": "Bandwidth",
  "storage": "Storage",
}

const MAP_PARAM_TO_COMPONENT: any = {
  "cpu": () => "cpu",
  "bandwidth": () => "Bandwidth",
  "storage": () => "Storage",
  // "pow-mining": () => <PowMining />,
}

export default function ResourceManagementDetail() {
  const router = useRouter()
  const params = useParams()
  const resource = params.resource

  return (
    <div className="px-4 py-5">
      <p className="mb-5 text-base text-gray-300 flex items-center gap-1 cursor-pointer"><span onClick={()=>router.push("/dashboard/allowedResources")}>Allowed Resources</span><span>&gt;</span><span>{ MAP_PARAM_TO_TITLE[resource as string] }</span></p>
      <p className="mb-5 text-2xl text-title font-bold">{ MAP_PARAM_TO_TITLE[resource as string] }</p>

      {MAP_PARAM_TO_COMPONENT[resource as string]&&MAP_PARAM_TO_COMPONENT[resource as string]()}

    </div>
  )
}
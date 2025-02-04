'use client'
import { useEffect, useState } from "react"
import 'rc-slider/assets/index.css';
import CPU from "@/components/dashboard/pages/allowedResources/CPU";
import Bandwidth from "@/components/dashboard/pages/allowedResources/Bandwidth";
import Storage from "@/components/dashboard/pages/allowedResources/Storage";
import { HintHover } from "@/components/shared/HintHover";


const initialDataLines = [
    {
      name: 'Jan',
      "cpu": 2345,
    },
    {
      name: 'Feb',
      "cpu": 2245,
    },
    {
      name: 'Mar',
      "cpu": 2145,
    },
    {
      name: 'Apr',
      "cpu": 2245,
    },
    {
      name: 'May',
      "cpu": 2345,
    },
    {
      name: 'Jun',
      "cpu": 2445,
    },
    {
      name: 'Jul',
      "cpu": 2245,
    },
    {
      name: 'Aug',
      "cpu": 2243,
    },
    {
      name: 'Sep',
      "cpu": 2221,
    },
    {
      name: 'Oct',
      "cpu": 2221,
    },
    {
      "cpu": 2176,
      name: 'Nov',
    },
    {
      name: 'Dec',
      "cpu": 2000,
    }
  ];


const initialLines = [
    { key: 1, dataKey:"cpu", stroke:"#8884d8", totalValue: "23 Gbps" }, 
]

export default function ResourceManagement() {

    const [selectedGraph, setSelectedGraph] = useState<number>(1)
    const [, setDataLineChart] = useState<any[]>(initialDataLines)
    const [, setLines] = useState(initialLines)
    const [, setHiddenLines] = useState<number[]>([])


    useEffect(()=>{
        if(selectedGraph==1){
            setDataLineChart(initialDataLines)
            setLines(initialLines)
            setHiddenLines([])
        }
        if(selectedGraph==2){
            setDataLineChart(initialDataLines)
            setLines(initialLines)
            setHiddenLines([])
        }
        if(selectedGraph==3){
            setDataLineChart(initialDataLines)
            setLines(initialLines)
            setHiddenLines([])
        }
    }, [selectedGraph])

  return (
    <div className="py-10 px-5">

        <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row justify-start items-center cursor-pointer">
            <div className="mr-2">
              <HintHover text="Select a cloud provider to see the detailed resource usage and modify it's limits." />
            </div>
            <div onClick={()=>setSelectedGraph(1)} className={selectedGraph===1?"bg-primaryGreen-light w-[250px] py-2 border border-gray-50":"w-[250px] py-2 border border-gray-200"}>
                <p className={`text-lg text-gray-200 font-bold text-center`}>Google Cloud</p>          
            </div>
            <div onClick={()=>setSelectedGraph(2)} className={selectedGraph===2?"bg-primaryGreen-light w-[250px] py-2 border border-gray-50":"w-[250px] py-2 border border-gray-200"}>
                <p className="text-lg text-gray-200 font-bold text-center">Microsoft Azure</p>          
            </div>
            <div onClick={()=>setSelectedGraph(3)} className={selectedGraph===3?"bg-primaryGreen-light w-[250px] py-2 border border-gray-50":"w-[250px] py-2 border border-gray-200"}>
                <p className="text-lg text-gray-200 font-bold text-center">Amazon Web Services</p>          
            </div>
            <div onClick={()=>setSelectedGraph(4)} className={selectedGraph===4?"bg-primaryGreen-light w-[250px] py-2 border border-gray-50":"w-[250px] py-2 border border-gray-200"}>
                <p className="text-lg text-gray-200 font-bold text-center">Filecoin</p>          
            </div>
        </div>

        <CPU />
        <Bandwidth />
        <Storage />

    </div>
  )
}
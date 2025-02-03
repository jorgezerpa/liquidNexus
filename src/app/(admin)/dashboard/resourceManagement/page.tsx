'use client'
import { useEffect, useState } from "react"
import { LineChart } from "@/components/charts/LineChart"
import { NidleChart } from "@/components/charts/NidleChart";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import CPU from "@/components/dashboard/pages/allowedResources/CPU";
import Bandwidth from "@/components/dashboard/pages/allowedResources/Bandwidth";
import Storage from "@/components/dashboard/pages/allowedResources/Storage";


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
    const [dataLineChart, setDataLineChart] = useState<any[]>(initialDataLines)
    const [lines, setLines] = useState(initialLines)
    const [hiddenLines, setHiddenLines] = useState<number[]>([])

    const [slider1, setSlider1] = useState<number>(50)
    const [slider2, setSlider2] = useState<number>(43)
    const [slider3, setSlider3] = useState<number>(68)
    const [slider4, setSlider4] = useState<number>(23)

    const handleHideLine = (key:number) => {
        // const isHidden = hiddenLines.includes(key)

        // let newHiddenLines:number[] = []
        // if(isHidden) newHiddenLines = [...hiddenLines.filter(lineKey => lineKey!=key)]
        // if(!isHidden) newHiddenLines = [...hiddenLines, key] 

        // setHiddenLines(newHiddenLines)
        // setLines([
        //     ...(selectedGraph==1?initialLinesBa:initialLinesKPIs).filter(l=>!newHiddenLines.includes(l.key))
        // ])
    }

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

        <div className="flex justify-start items-center cursor-pointer">
            <div onClick={()=>setSelectedGraph(1)} className={selectedGraph===1?"bg-primaryGreen-light w-[250px] py-2 border border-gray-50":"w-[250px] py-2 border border-gray-200"}>
                <p className={`text-lg text-gray-200 font-bold text-center`}>Google Cloud</p>          
            </div>
            <div onClick={()=>setSelectedGraph(2)} className={selectedGraph===2?"bg-primaryGreen-light w-[250px] py-2 border border-gray-50":"w-[250px] py-2 border border-gray-200"}>
                <p className="text-lg text-gray-200 font-bold text-center">Microsoft Azure</p>          
            </div>
            <div onClick={()=>setSelectedGraph(3)} className={selectedGraph===3?"bg-primaryGreen-light w-[250px] py-2 border border-gray-50":"w-[250px] py-2 border border-gray-200"}>
                <p className="text-lg text-gray-200 font-bold text-center">Amazon Web Services</p>          
            </div>
        </div>

        <CPU />
        <Bandwidth />
        <Storage />

    </div>
  )
}
'use client'
import { useEffect, useState } from "react"
import { LineChart } from "@/components/charts/LineChart"
import { NidleChart } from "@/components/charts/NidleChart";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


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

export default function CPU() {

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

      <div>
        <p className="mb-5 text-2xl text-title font-bold mt-5">CPU</p>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-shrink-0 w-[98%] lg:w-[50%] rounded-xl ">
            <p className="mb-5 text-xl text-title">Current Consumption</p>
            <LineChart data={dataLineChart} lines={lines} hasDot={false} />
          </div>
          <div className="flex-shrink-0 w-[100%] lg:w-[50%] flex justify-center items-center flex-wrap gap-3">
            <div className="w-[230px] flex justify-center items-center flex-col ">
              <NidleChart percentage={.4} />
              <p className="mb-5 text-base text-title">Usage of Max. CPU capacity</p>
            </div>
            <div className="w-[230px] flex justify-center items-center flex-col ">
              <NidleChart percentage={.84} />
              <p className="mb-5 text-base text-title">Usage of Allowed CPU capacity</p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-[100%] lg:w-[50%] flex-col justify-start items-start flex-wrap gap-3">
            <div className="mb-5">
              <p className="text-xl text-gray-200">Max. CPU % usage</p>
              <div className="h-3 w-[100%]">
                  <Slider value={slider1} onChange={(e)=>setSlider1(e as number)} />
              </div>
              <p className="text-base">{slider1}%</p>
            </div>
            <div className="mb-5">
              <p className="text-xl text-gray-200">Max. IPS</p>
              <div className="h-3 w-[100%]">
                  <Slider value={slider2} onChange={(e)=>setSlider2(e as number)} />
              </div>
              <p className="text-base ">{slider2*10} ips</p>
            </div>
        </div>
      </div>

    </div>
  )
}
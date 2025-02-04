'use client'
import { useEffect, useState } from "react"
import { LineChart } from "@/components/charts/LineChart"
import { NidleChart } from "@/components/charts/NidleChart";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const initialDataLines = [
    {
      name: 'Jan',
      "Kbps": 2345,
    },
    {
      name: 'Feb',
      "Kbps": 2245,
    },
    {
      name: 'Mar',
      "Kbps": 2145,
    },
    {
      name: 'Apr',
      "Kbps": 2245,
    },
    {
      name: 'May',
      "Kbps": 2345,
    },
    {
      name: 'Jun',
      "Kbps": 2445,
    },
    {
      name: 'Jul',
      "Kbps": 2245,
    },
    {
      name: 'Aug',
      "Kbps": 2243,
    },
    {
      name: 'Sep',
      "Kbps": 2221,
    },
    {
      name: 'Oct',
      "Kbps": 2221,
    },
    {
      "Kbps": 2176,
      name: 'Nov',
    },
    {
      name: 'Dec',
      "Kbps": 2000,
    }
  ];


const initialLines = [
    { key: 1, dataKey:"Kbps", stroke:"#8884d8", totalValue: "23 Gbps" }, 
]

export default function Bandwidth() {

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
        <p className="mb-5 text-2xl text-title font-bold mt-5">Bandwidth</p>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-shrink-0 w-[100%] lg:w-[50%] rounded-xl ">
            <p className="mb-5 text-xl text-title">Current Consumption</p>
            <LineChart data={dataLineChart} lines={lines} hasDot={false} />
          </div>
          <div className="flex-shrink-0 w-[100%] lg:w-[50%] flex flex-col justify-center  flex-wrap gap-3">
            <div className="mb-5">
              <p className="text-xl text-gray-200">Max. kbps</p>
              <div className="h-3 w-[100%]">
                  <Slider value={slider1} onChange={(e)=>setSlider1(e as number)} />
              </div>
              <p className="text-base">{slider1}%</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
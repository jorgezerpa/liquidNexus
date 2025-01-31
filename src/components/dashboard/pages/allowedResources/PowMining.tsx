'use client'
import { useEffect, useState } from "react"
import { LineChart } from "@/components/charts/LineChart"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const initialDataLineChartKPIs = [
    {
      name: 'Jan',
      "Mined Amount": 2345,
      "Hash Rate": 1456,
      "Power Consumption": 3789,
      "Efficiency": 4123,
      "Profitability": 1890
    },
    {
      name: 'Feb',
      "Mined Amount": 4876,
      "Hash Rate": 2987,
      "Power Consumption": 1234,
      "Efficiency": 567,
      "Profitability": 3456
    },
    {
      name: 'Mar',
      "Mined Amount": 1567,
      "Hash Rate": 3123,
      "Power Consumption": 4567,
      "Efficiency": 2345,
      "Profitability": 987
    },
    {
      name: 'Apr',
      "Mined Amount": 3901,
      "Hash Rate": 1789,
      "Power Consumption": 2678,
      "Efficiency": 456,
      "Profitability": 2109
    },
    {
      name: 'May',
      "Mined Amount": 4234,
      "Hash Rate": 2567,
      "Power Consumption": 1890,
      "Efficiency": 3789,
      "Profitability": 1567
    },
    {
      name: 'Jun',
      "Mined Amount": 1987,
      "Hash Rate": 3456,
      "Power Consumption": 4123,
      "Efficiency": 2890,
      "Profitability": 3210
    },
    {
      name: 'Jul',
      "Mined Amount": 3123,
      "Hash Rate": 1234,
      "Power Consumption": 2987,
      "Efficiency": 4321,
      "Profitability": 1789
    },
    {
      name: 'Aug',
      "Mined Amount": 4567,
      "Hash Rate": 2789,
      "Power Consumption": 1567,
      "Efficiency": 3123,
      "Profitability": 2345
    },
    {
      name: 'Sep',
      "Mined Amount": 2678,
      "Hash Rate": 3890,
      "Power Consumption": 4234,
      "Efficiency": 1987,
      "Profitability": 4567
    },
    {
      name: 'Oct',
      "Mined Amount": 1345,
      "Hash Rate": 1901,
      "Power Consumption": 2567,
      "Efficiency": 3210,
      "Profitability": 2987
    },
    {
      name: 'Nov',
      "Mined Amount": 4789,
      "Hash Rate": 2109,
      "Power Consumption": 1789,
      "Efficiency": 4890,
      "Profitability": 1234
    },
    {
      name: 'Dec',
      "Mined Amount": 2890,
      "Hash Rate": 3210,
      "Power Consumption": 4321,
      "Efficiency": 2456,
      "Profitability": 3789
    }
  ];

  const initialDataLineChartBasics = [
    {
      name: 'Jan',
      "Band Width": 2345,
      "Storage": 1456,
      "CPU usage": 3789,
    },
    {
      name: 'Feb',
      "Band Width": 4876,
      "Storage": 2987,
      "CPU usage": 1234,
    },
    {
      name: 'Mar',
      "Band Width": 1567,
      "Storage": 3123,
      "CPU usage": 4567,
    },
    {
      name: 'Apr',
      "Band Width": 3901,
      "Storage": 1789,
      "CPU usage": 2678,
    },
    {
      name: 'May',
      "Band Width": 4234,
      "Storage": 2567,
      "CPU usage": 1890,
    },
    {
      name: 'Jun',
      "Band Width": 1987,
      "Storage": 3456,
      "CPU usage": 4123,
    },
    {
      name: 'Jul',
      "Band Width": 3123,
      "Storage": 1234,
      "CPU usage": 2987,
    },
    {
      name: 'Aug',
      "Band Width": 4567,
      "Storage": 2789,
      "CPU usage": 1567,
    },
    {
      name: 'Sep',
      "Band Width": 2678,
      "Storage": 3890,
      "CPU usage": 4234,
    },
    {
      name: 'Oct',
      "Band Width": 1345,
      "Storage": 1901,
      "CPU usage": 2567,
    },
    {
      name: 'Nov',
      "Band Width": 4789,
      "Storage": 2109,
      "CPU usage": 1789,
    },
    {
      name: 'Dec',
      "Band Width": 2890,
      "Storage": 3210,
      "CPU usage": 4321,
    }
  ];

const initialLinesKPIs = [
    { key: 1, dataKey:"Mined Amount", stroke:"#8884d8", totalValue: ".45 BTC" }, 
    { key: 2, dataKey:"Hash Rate", stroke:"#82ca9d", totalValue: "100 TH/s" },
    { key: 3, dataKey:"Power Consumption", stroke:"#f33", totalValue: "3 kW"},
    { key: 4, dataKey:"Efficiency", stroke:"#282", totalValue: "30 J/GH"},
    { key: 5, dataKey:"Profitability", stroke:"#00f", totalValue:"$5/day" },
]

const initialLinesBasics = [
    { key: 1, dataKey:"Band Width", stroke:"#8884d8", totalValue: "23 Gbps" }, 
    { key: 2, dataKey:"Storage", stroke:"#82ca9d", totalValue: "134 GB" },
    { key: 3, dataKey:"CPU usage", stroke:"#f33", totalValue: "40%"},
]

export function PowMining() {

    const [selectedGraph, setSelectedGraph] = useState<number>(1)
    const [dataLineChart, setDataLineChart] = useState<any[]>(initialDataLineChartKPIs)
    const [lines, setLines] = useState(initialLinesBasics)
    const [hiddenLines, setHiddenLines] = useState<number[]>([])

    const [slider1, setSlider1] = useState<number>(50)
    const [slider2, setSlider2] = useState<number>(43)
    const [slider3, setSlider3] = useState<number>(68)
    const [slider4, setSlider4] = useState<number>(23)

    const handleHideLine = (key:number) => {
        const isHidden = hiddenLines.includes(key)

        let newHiddenLines:number[] = []
        if(isHidden) newHiddenLines = [...hiddenLines.filter(lineKey => lineKey!=key)]
        if(!isHidden) newHiddenLines = [...hiddenLines, key] 

        setHiddenLines(newHiddenLines)
        setLines([
            ...(selectedGraph==1?initialLinesBasics:initialLinesKPIs).filter(l=>!newHiddenLines.includes(l.key))
        ])
    }

    useEffect(()=>{
        if(selectedGraph==1){
            setDataLineChart(initialDataLineChartBasics)
            setLines(initialLinesBasics)
            setHiddenLines([])
        }
        if(selectedGraph==2){
            setDataLineChart(initialDataLineChartKPIs)
            setLines(initialLinesKPIs)
            setHiddenLines([])
        }
    }, [selectedGraph])

  return (
    <div className="">
        <div className="flex justify-start items-center cursor-pointer">
            <div onClick={()=>setSelectedGraph(1)} className={selectedGraph===1?"bg-gray-200 w-[250px] py-2":"w-[250px] py-2 border border-gray-200"}>
                <p className="text-lg text-gray-700 font-bold text-center">General Consumption</p>          
            </div>
            <div onClick={()=>setSelectedGraph(2)} className={selectedGraph===2?"bg-gray-200 w-[250px] py-2":"w-[250px] py-2 border border-gray-200"}>
                <p className="text-lg text-gray-700 font-bold text-center">Specific KPIs</p>          
            </div>
        </div>
      <div className="flex">
        <div className="flex-shrink-0 w-[50%] rounded-xl p-4">
          <LineChart data={dataLineChart} lines={lines} />
        </div>
        <div className="flex-shrink-0 w-[50%] p-4 flex justify-start items-start flex-wrap gap-3">
            {
                selectedGraph==1 && initialLinesBasics.map((line, i)=>{
                    return (
                        <p key={line.key+"lineuqiquepowmining1ggrapsh"+i} onClick={()=>handleHideLine(i+1)} style={{ opacity:hiddenLines.includes(i+1)?.4:1 }} className="cursor-pointer text-xl text-gray-700 w-[48%]"><span className="font-bold ">{line.dataKey}:</span> {line.totalValue}</p>          
                    )
                })
            }
            {
                selectedGraph==2 && initialLinesKPIs.map((line, i)=>{
                    return (
                        <p key={line.key+"lineuqiquepowmining1ggrapsh"+i} onClick={()=>handleHideLine(i+1)} style={{ opacity:hiddenLines.includes(i+1)?.4:1 }} className="cursor-pointer text-xl text-gray-700 w-[48%]"><span className="font-bold ">{line.dataKey}:</span> {line.totalValue}</p>          
                    )
                })
            }
        </div>
      </div>

      <div className="h-6"></div>

      <div className="flex justify-between mt-5">
        <div className="w-[48%]">
            <p className="text-xl text-gray-700 font-bold mb-2">General Allowance</p>
            <div className="mb-5">
            <p className="text-xl text-gray-700">Max. CPU usage</p>
            <div className="h-3 w-[100%]">
                <Slider value={slider1} onChange={(e)=>setSlider1(e as number)} />
            </div>
            <p className="text-base text-gray-500">{slider1}%</p>
            </div>
            <div className="mb-5">
            <p className="text-xl text-gray-700">Max. power consumption per hour</p>
            <div className="h-3 w-[100%]">
                <Slider value={slider2} onChange={(e)=>setSlider2(e as number)} />
            </div>
            <p className="text-base text-gray-500">{slider2*10} kW/h</p>
            </div>
            <div className="mb-5">
            <p className="text-xl text-gray-700">Bandwidth</p>
            <div className="h-3 w-[100%]">
                <Slider value={slider3} onChange={(e)=>setSlider3(e as number)} />
            </div>
            <p className="text-base text-gray-500">{slider3!=0?slider3/4:slider3} TH/s</p>
            </div>
            <div className="mb-5">
            <p className="text-xl text-gray-700">Memory Storage</p>
            <div className="h-3 w-[100%]">
                <Slider value={slider3} onChange={(e)=>setSlider3(e as number)} />
            </div>
            <p className="text-base text-gray-500">{slider3} GB</p>
            </div>
        </div>

        <div className="w-[48%]">
            <p className="text-xl text-gray-700 font-bold mb-2">Specific KPIs Limits</p>
            <div className="mb-5">
            <p className="text-xl text-gray-700">Max. Minted Amount per day</p>
            <div className="h-3 w-[100%]">
                <Slider value={slider1} onChange={(e)=>setSlider1(e as number)} />
            </div>
            <p className="text-base text-gray-500">{slider1}%</p>
            </div>
            <div className="mb-5">
            <p className="text-xl text-gray-700">Max. hashrate</p>
            <div className="h-3 w-[100%]">
                <Slider value={slider4} onChange={(e)=>setSlider4(e as number)} />
            </div>
            <p className="text-base text-gray-500">{slider4} TH/s</p>
            </div>
        </div>
      </div>



    </div>
  )
}
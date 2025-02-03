import React from 'react'
import GaugeChart from 'react-gauge-chart'

interface NidleChartProps {
  percentage: number
}

export function NidleChart({percentage}:NidleChartProps) {
  return (
    <GaugeChart 
      id="gauge-chart1"
      nrOfLevels={20} 
      percent={percentage}   
      colors={["#fff", "#00BB77"]} 
      needleColor='#00BB77'
      needleBaseColor='#00BB77'
    />
  )
}


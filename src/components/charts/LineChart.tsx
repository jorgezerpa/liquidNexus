import React from 'react';
import { LineChart as LineChartRecharts, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartParams {
  data:any
  lines: { stroke:string, dataKey:string }[]
  hasLegend?: boolean
  hasDot?: boolean
}

export const LineChart = ({data, lines, hasLegend=true, hasDot=true}:LineChartParams) => { // Functional component
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChartRecharts
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="10 10" />
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          {
            hasLegend&&<Legend />
          }
          { 
            lines.map((line, index)=>{
              return(
                <Line key={line.dataKey+"linechartlineadfa"+index} type="monotone" dot={hasDot} dataKey={line.dataKey} stroke={line.stroke} strokeWidth={2} />
              )
            })
          }
        </LineChartRecharts>
      </ResponsiveContainer>
    </div>
  );
};

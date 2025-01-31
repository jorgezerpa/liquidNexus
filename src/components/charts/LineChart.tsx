import React from 'react';
import { LineChart as LineChartRecharts, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartParams {
  data:any,
  lines: { stroke:string, dataKey:string }[]
}

export const LineChart = ({data, lines}:LineChartParams) => { // Functional component
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
          <Legend />
          { 
            lines.map((line, index)=>{
              return(
                <Line key={line.dataKey+"linechartlineadfa"+index} type="monotone" dataKey={line.dataKey} stroke={line.stroke} />
              )
            })
          }
        </LineChartRecharts>
      </ResponsiveContainer>
    </div>
  );
};

import React, { useState } from 'react';
import { PieChart as PieCharRecharts, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#223344', '#223344', '#223344'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }:any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const PieChartDetailed = () => {

    const [data, setData] = useState([
        { name: 'Personal', value: 400 },
        { name: 'Allowed for contribution', value: 300 },
        { name: 'Contributing', value: 300 },
        { name: 'Free', value: 200 },
    ])

  return (
    <div className='flex flex-col items-center justify-center'>
        <div className="h-[300px] w-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieCharRecharts>
                    <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    fill="#8884d8"
                    dataKey="value"
                    >
                      {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                </PieCharRecharts>
            </ResponsiveContainer>
        </div>
            
        <div className="w-[40%] flex gap-4 justify-center">
            {data.map((entry, index) => (
            <div key={entry.name + "legentitemsforinsightssdkfsdakf"} className="flex items-center mb-2 cursor-pointer">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span>{entry.name}</span>
            </div>
            ))}
        </div>
    </div>
  );
};
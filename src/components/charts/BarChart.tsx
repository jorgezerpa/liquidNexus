import React from 'react';
import { BarChart as BarChartRechart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'ZK-SNARKS',
    limit: 4000,
    used: 2400,
    amt: 2400,
  },
  {
    name: 'Indexation',
    limit: 3000,
    used: 1398,
    amt: 2210,
  },
  {
    name: 'Swap route searcher',
    limit: 2000,
    used: 9800,
    amt: 2290,
  },
  {
    name: 'Mining',
    limit: 2780,
    used: 3908,
    amt: 2000,
  },
  {
    name: 'Yield',
    limit: 2780,
    used: 3908,
    amt: 2000,
  },
];

export const BarChart = () => {  // Changed to a functional component
  return (
    <div className="h-[300px] ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChartRechart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Bar dataKey="limit" stackId="a" fill="#8884d8" />
          <Bar dataKey="used" stackId="a" fill="#82ca9d" />
        </BarChartRechart>
      </ResponsiveContainer>
    </div>
  );
};

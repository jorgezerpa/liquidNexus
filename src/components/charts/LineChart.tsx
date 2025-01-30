import React from 'react';
import { LineChart as LineChartRecharts, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    "Storage": 4000,
    "Band Width": 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    "Storage": 3000,
    "Band Width": 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    "Storage": 2000,
    "Band Width": 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    "Storage": 2780,
    "Band Width": 3908,
    amt: 2000,
  },
  {
    name: 'May',
    "Storage": 1890,
    "Band Width": 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    "Storage": 2390,
    "Band Width": 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    "Storage": 3490,
    "Band Width": 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    "Storage": 4000,
    "Band Width": 2400,
    amt: 2400,
  },
  {
    name: 'Sep',
    "Storage": 3000,
    "Band Width": 1398,
    amt: 2210,
  },
  {
    name: 'Oct',
    "Storage": 2000,
    "Band Width": 9800,
    amt: 2290,
  },
  {
    name: 'Nov',
    "Storage": 2780,
    "Band Width": 3908,
    amt: 2000,
  },
  {
    name: 'Dic',
    "Storage": 1890,
    "Band Width": 4800,
    amt: 2181,
  }
];

export const LineChart = () => { // Functional component
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
          <Line type="monotone" dataKey="Band Width" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Storage" stroke="#82ca9d" />
        </LineChartRecharts>
      </ResponsiveContainer>
    </div>
  );
};

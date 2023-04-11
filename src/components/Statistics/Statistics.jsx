import React from "react";
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "Assignment-1",
      marks: 60,
      id: 1,
    },
    {
      name: "Assignment-2",
      marks: 60,
      id: 2,
    },
    {
      name: "Assignment-3",
      marks: 60,
      id: 3,
    },
    {
      name: "Assignment-4",
      marks: 60,
      id: 4,
    },
    {
      name: "Assignment-5",
      marks: 60,
      id: 5,
    },
    {
      name: "Assignment-6",
      marks: 60,
      id: 6,
    },
    {
      name: "Assignment-7",
      marks: 60,
      id: 7,
    },
    {
      name: "Assignment-8",
      marks: 30,
      id: 8,
    },
  ];
  return (
    <div className="w-9/12 mx-auto">
      <AreaChart width={1000} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Statistics;

"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";



const data = [
  { name: "فروردین", value: 2 },
  { name: "اردیبهشت", value: 5 },
  { name: "خرداد", value: 10 },
  { name: "تیر", value: 12 },
  { name: "مرداد", value: 20 },
  { name: "شهریور", value: 30 },
  { name: "مهر", value: 35 },
  { name: "آبان", value: 40 },
  { name: "آذز", value: 43 },
  { name: "دی", value: 48 },
  { name: "بهمن", value: 49 },
  { name: "اسفند", value: 50 },
];

const Chart = () => {
  return (
    <>
    <h1 className="mt-5 mb-3 text-center text-3xl font-bold">پیشرفت پروژه</h1>
    <ResponsiveContainer width="100%" height={400} className='my-5'>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend formatter={(value) => "نمودار پیشرفت پروژه شرکت فولاد آلیاژی مرکزی بافق"}/>
        <Line type="monotone" dataKey="value" stroke="#292a71" strokeWidth={3}/>
      </LineChart>
    </ResponsiveContainer>
    </>
  );
};

export default Chart;

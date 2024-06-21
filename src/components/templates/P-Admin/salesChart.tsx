"use client";
import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

function SalesChart() {
  const data = [
    { month: "فروردین", sales: 100_000, pv: 2400, amt: 2400 },
    { month: "اردیبهشت", sales: 70_000, pv: 2400, amt: 2400 },
    { month: "خرداد", sales: 300_000, pv: 2400, amt: 2400 },
    { month: "تیر", sales: 700_000, pv: 2400, amt: 2400 },
    { month: "مرداد", sales: 500_000, pv: 2400, amt: 2400 },
    { month: "شهریور", sales: 1_000_000, pv: 2400, amt: 2400 },
    { month: "مهر", sales: 1_500_000, pv: 2400, amt: 2400 },
    { month: "ابان", sales: 800_000, pv: 2400, amt: 2400 },
    { month: "اذر", sales: 200_000, pv: 2400, amt: 2400 },
    { month: "دی", sales: 600_000, pv: 2400, amt: 2400 },
    { month: "بهمن", sales: 2_000_000, pv: 2400, amt: 2400 },
    { month: "اسفند", sales: 2_500_000, pv: 2400, amt: 2400 },

  ];
  return (
    <div className="w-full font-sans">
      <h2 className="font-bold text-2xl text-primryCream2 py-4">نرخ فروش</h2>
      <LineChart width={950} height={300} data={data}>
        <Line type="monotone" dataKey="sales" stroke="#f96" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip/>
      </LineChart>
    </div>
  );
}

export default SalesChart;

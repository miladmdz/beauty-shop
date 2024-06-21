"use client";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";

function GrowChart() {
  const data = [
    { month: "فروردین", sales: 100_000 },
    { month: "اردیبهشت", sales: 70_000 },
    { month: "خرداد", sales: 300_000 },
    { month: "تیر", sales: 700_000 },
    { month: "مرداد", sales: 500_000 },
    { month: "شهریور", sales: 1_000_000 },
    { month: "مهر", sales: 1_500_000 },
    { month: "ابان", sales: 800_000 },
    { month: "اذر", sales: 200_000 },
    { month: "دی", sales: 600_000 },
    { month: "بهمن", sales: 2_000_000 },
    { month: "اسفند", sales: 2_500_000 },
  ];
  return (
    <div className="w-full flex flex-col font-sans">
      <h2 className="font-bold text-2xl text-primryCream2 py-4">نرخ رشد</h2>
      <AreaChart
        width={950}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip/>
        <Area type="monotone" dataKey="sales" stroke="#f96" fill="#f4b19f" />
      </AreaChart>
    </div>
  );
}

export default GrowChart;

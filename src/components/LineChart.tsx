"use client";

import React from "react";
import {
  Line,
  LineChart as Linegraph,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {};

const data = [
  {
    name: "Apr 1",
    total: Math.floor(Math.random() * 5000) + 2000,
  },
  {
    name: "Apr 2",
    total: Math.floor(Math.random() * 5000) + 2000,
  },
  {
    name: "Apr 3",
    total: Math.floor(Math.random() * 5000) + 2000,
  },
  {
    name: "Apr 4",
    total: Math.floor(Math.random() * 5000) + 2000,
  },
  {
    name: "Apr 5",
    total: Math.floor(Math.random() * 5000) + 2000,
  },
  {
    name: "Apr 6",
    total: Math.floor(Math.random() * 5000) + 2000,
  },
  {
    name: "Apr 7",
    total: Math.floor(Math.random() * 5000) + 2000,
  },
];

const formatYAxisTick = (tick: any) => {
  return `${tick / 1000}k`;
};

export default function LineChart({}: Props) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="flex bg-black w-28 h-6 border justify-center items-center border-white  text-white text-xs text-center">
          <p className="">{`${label} : ${payload[0].value}k`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <ResponsiveContainer width="100%" height={250}>
      <Linegraph
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 40,
          bottom: 0,
        }}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          stroke="#888888"
          fontSize={12}
          dx={-10}
        />
        <YAxis
          type="number"
          axisLine={false}
          tickLine={false}
          stroke="#888888"
          fontSize={12}
          orientation="right"
          dx={15}
          tickFormatter={formatYAxisTick}
        />
        <Line dataKey="total" stroke="#888888" />
        <Tooltip content={<CustomTooltip />} />
      </Linegraph>
    </ResponsiveContainer>
  );
}

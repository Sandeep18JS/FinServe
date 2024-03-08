"use client";

import React from "react";
import { CardWrapper } from "@/components/Card";
import Table from "@/components/Table";

export type CardProps = {
  label: string;
  amount: string;
  button: string;
  date: string;
};

const CardData: CardProps[] = [
  {
    label: "Total Balance",
    amount: "14,200.00",
    button: "Withdraw all Earning",
    date: "11 Apr 2023",
  },
  {
    label: "Next Payment",
    amount: "8,342.00",
    button: "Manage Payments",
    date: "11 May 2023",
  },
];

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 w-full gap-4 transition-all sm:grid-cols-2">
        {CardData.map((card) => (
          <CardWrapper key={card.label} className="w-full group gap-y-4">
            <p className="text-sm font-semibold">{card.label}</p>
            <h2 className="text-2xl font-semibold">
              ${card.amount}{" "}
              <span className="font-medium text-sm text-gray-400">USD</span>
            </h2>
            <p className="text-sm">{card.date}</p>
            <button className="text-blue-600 border-blue-400 hover:bg-blue-600 hover:text-white border p-2 rounded-lg text-sm font-medium">
              {card.button}
            </button>
          </CardWrapper>
        ))}
      </div>
      <CardWrapper>
        <h1 className="py-2 font-semibold text-medium">All Payments</h1>
        <Table />
      </CardWrapper>
    </div>
  );
}

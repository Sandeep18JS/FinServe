import React from "react";

type Props = {};

export default function QuickTransfer({}: Props) {
  return (
    <div className="flex flex-col gap-4 px-3">
      <h1 className="font-semibold pt-0.5">Quick Transfer</h1>

      <div className="grid gap-3">
        <label className="text-sm font-medium" htmlFor="name">
          Card Number
        </label>
        <input
          className="bg-transparent w-full h-10 border rounded-lg p-4"
          id="name"
          placeholder="2568 5626 2589 256 "
        />
        <div className="w-full h-10 border rounded-lg focus-within:border-black focus-within:border-2">
          <select className="bg-transparent h-9 border-r w-18 text-sm ml-2">
            <option value="USD">$</option>
            <option value="EUR">€</option>
            <option value="GBP">₹</option>
            <option value="GBP">.ر.ق</option>
          </select>
          <input
            className="bg-transparent ml-4 text-sm outline-none"
            id="name"
            placeholder="Enter amount"
          />
        </div>
      </div>

      <button className="text-white w-full h-10 bg-[#355FE5] rounded-lg">
        Send Money
      </button>
    </div>
  );
}

"use client";

import React from "react";

type Props = {};

import PageTitle from "@/components/PageTitle";
import Table from "@/components/Table";

export default function Transactions({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Transaction" />
      <Table />
    </div>
  );
}

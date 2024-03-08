"use client";
import Figma from "@/assets/figma.png";
import Youtube from "@/assets/youtube.png";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/DataTable";

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
type Props = {};

type Payment = {
  id: string;
  name: string;
  type: "Subscription" | "Withdraw" | "Transfer";
  date: string;
  amount: number;
  status: "Pending" | "Success" | "Failed";
  action: string;
};

export const data: Payment[] = [
  {
    id: "728ed52f",
    name: "Figma",
    amount: 100,
    type: "Subscription",
    date: "Jan 11,2024",
    status: "Pending",
    action: "m@example.com",
  },
  {
    id: "728ed52f",
    name: "Youtube",
    amount: 200,
    type: "Withdraw",
    date: "Jan 12,2024",
    status: "Success",
    action: "ddm@example.com",
  },
  {
    id: "728ed52f",
    name: "Figma",
    amount: 100,
    type: "Subscription",
    date: "Jan 11,2024",
    status: "Pending",
    action: "m@example.com",
  },
  {
    id: "728ed52f",
    name: "Youtube",
    amount: 200,
    type: "Withdraw",
    date: "Jan 12,2024",
    status: "Failed",
    action: "ddm@example.com",
  },
  {
    id: "728ed52f",
    name: "Figma",
    amount: 100,
    type: "Subscription",
    date: "Jan 11,2024",
    status: "Pending",
    action: "m@example.com",
  },
  {
    id: "728ed52f",
    name: "Youtube",
    amount: 200,
    type: "Withdraw",
    date: "Jan 12,2024",
    status: "Success",
    action: "ddm@example.com",
  },
  {
    id: "728ed52f",
    name: "Figma",
    amount: 100,
    type: "Subscription",
    date: "Jan 11,2024",
    status: "Pending",
    action: "m@example.com",
  },
  {
    id: "728ed52f",
    name: "Youtube",
    amount: 200,
    type: "Withdraw",
    date: "Jan 12,2024",
    status: "Success",
    action: "ddm@example.com",
  },
  {
    id: "728ed52f",
    name: "Figma",
    amount: 100,
    type: "Subscription",
    date: "Jan 11,2024",
    status: "Pending",
    action: "m@example.com",
  },
  {
    id: "728ed52f",
    name: "Youtube",
    amount: 200,
    type: "Withdraw",
    date: "Jan 12,2024",
    status: "Success",
    action: "ddm@example.com",
  },
  {
    id: "728ed52f",
    name: "Figma",
    amount: 100,
    type: "Subscription",
    date: "Jan 11,2024",
    status: "Pending",
    action: "m@example.com",
  },
  {
    id: "728ed52f",
    name: "Youtube",
    amount: 200,
    type: "Withdraw",
    date: "Jan 12,2024",
    status: "Success",
    action: "ddm@example.com",
  },
  {
    id: "728ed52f",
    name: "Figma",
    amount: 100,
    type: "Subscription",
    date: "Jan 11,2024",
    status: "Pending",
    action: "m@example.com",
  },
  {
    id: "728ed52f",
    name: "Youtube",
    amount: 200,
    type: "Withdraw",
    date: "Jan 12,2024",
    status: "Success",
    action: "ddm@example.com",
  },
  {
    id: "728ed52f",
    name: "Figma",
    amount: 100,
    type: "Subscription",
    date: "Jan 11,2024",
    status: "Pending",
    action: "m@example.com",
  },
  {
    id: "728ed52f",
    name: "Youtube",
    amount: 200,
    type: "Withdraw",
    date: "Jan 12,2024",
    status: "Success",
    action: "ddm@example.com",
  },
];

type images = {
  id: number;
  name: string;
  imageSrc: StaticImageData;
};

const images: images[] = [
  {
    id: 1,
    name: "Figma",
    imageSrc: Figma,
  },
  {
    id: 2,
    name: "Youtube",
    imageSrc: Youtube,
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      const matchingImage = images.find((image) => image.name === name);
      if (matchingImage) {
        return (
          <div className="flex gap-2">
            <Image
              width={20}
              height={20}
              alt="Image"
              src={matchingImage.imageSrc.src}
              className="w-9 h-9 rounded-full border p-1.5"
            />
            <div className="flex items-center">{name}</div>
          </div>
        );
      } else {
        return;
      }
    },
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-md", {
            "bg-yellow-100 text-yellow-500":
              row.getValue("status") === "Pending",
            "bg-green-100  text-green-500":
              row.getValue("status") === "Success",
            "bg-red-100 text-red-500": row.getValue("status") === "Failed",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];

export const slicedData = data.slice(0, 2);

export default function Table({}: Props) {
  return <DataTable columns={columns} data={data} useCase="data" />;
}

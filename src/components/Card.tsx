import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

export type CardProps = {
  icon: LucideIcon;
  label: string;
  amount: string;
};

export const Card = (props: CardProps) => {
  return (
    <CardWrapper className="w-full group  hover:text-white hover:bg-[#355FE5] ">
      <props.icon className="h-6 w-6 text-[#355FE5] group-hover:text-white" />
      <p className="text-xs text-gray-400 group-hover:text-white">
        {props.label}
      </p>
      <h2 className="text-lg font-semibold">${props.amount}</h2>
    </CardWrapper>
  );
};

export function CardWrapper(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col gap-2 p-4  rounded-xl border shadow",
        props.className
      )}
    />
  );
}

import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  color: string;
};

export default function CreditCard(props: Props) {
  return (
    <Card
      className={cn(
        "w-[320px]  mx-auto relative flex flex-col rounded-2xl  gap-10 text-white",
        {
          "bg-blue-600": props.color === "blue",
          "bg-orange-600": props.color === "orange",
        }
      )}
    >
      <CardHeader>
        <CardDescription className="text-xs tracking-wide text-white">
          Current Balance
        </CardDescription>
        <CardTitle className="text-2xl tracking-wide">$14,200.00</CardTitle>
        <CardTitle className="text-2xl absolute font-bold top-3 right-6">
          VISA
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex justify-between">
        <p className="text-sm ">5294 6595 9448 5459</p>
        <p className="text-xs font-light">12/26</p>
      </CardFooter>
    </Card>
  );
}

import { Card, CardProps, CardWrapper } from "@/components/Card";
import LineChart from "@/components/LineChart";
import PageTitle from "@/components/PageTitle";
import {
  ArrowRightLeft,
  Download,
  FileDown,
  FileText,
  LucideIcon,
  PlusSquare,
  Send,
  Upload,
  Wallet2,
} from "lucide-react";
import { columns, slicedData } from "@/components/Table";
import { DataTable } from "@/components/DataTable";
import CreditCard from "@/components/CreditCard";
import QuickTransfer from "@/components/QuickTransfer";
import Link from "next/link";

const CardData: CardProps[] = [
  {
    icon: Wallet2,
    label: "Total Balance",
    amount: "14,200.00",
  },
  {
    icon: Download,
    label: "Income",
    amount: "8,342.00",
  },
  {
    icon: Upload,
    label: "Spending",
    amount: "5243.00",
  },
  {
    icon: ArrowRightLeft,
    label: "Transaction",
    amount: "5243.00",
  },
];

type iconsProps = {
  name: string;
  icon: LucideIcon;
};

const icons: iconsProps[] = [
  {
    name: "Deposit",
    icon: PlusSquare,
  },
  {
    name: "Send",
    icon: Send,
  },
  {
    name: "Receive",
    icon: FileDown,
  },
  {
    name: "Invoice",
    icon: FileText,
  },
];
export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-full">
      <PageTitle title="Dashboard" />
      <div className="flex flex-col xl:flex-row w-10/12 md:w-11/12 xl:w-full md:mx-auto xl:mx-0 gap-8">
        <section className="w-full flex flex-col gap-4">
          <div
            className="grid grid-cols-1  gap-x-4 gap-y-4  transition-all
          sm:grid-cols-2 xl:grid-cols-4
          "
          >
            {CardData.map((card, index) => (
              <Card {...card} key={index} />
            ))}
          </div>

          <div className="relative w-full max-w">
            <CardWrapper>
              <h1 className="absolute font-semibold">Total Balance</h1>
              <LineChart />
            </CardWrapper>
          </div>

          <div className="w-full">
            <CardWrapper className="p-0">
              <div className="flex justify-between px-4 pt-2">
                <h1 className="  font-semibold">Recent Transaction</h1>
                <Link
                  href="/transactions"
                  className="font-medium text-sm hover:underline mt-1"
                >
                  See All
                </Link>
              </div>
              <DataTable
                columns={columns}
                data={slicedData}
                useCase="slicedCase"
              />
            </CardWrapper>
          </div>
        </section>

        <section className=" flex flex-col gap-6">
          <CardWrapper className="lg:px-6">
            <h1 className="font-semibold">My Card</h1>
            <CreditCard color="blue" />
            <div className="flex gap-10 mx-auto mt-6 ">
              {icons.map((icon, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <button className="w-12 h-12 border rounded-lg justify-center items-center flex">
                    <icon.icon color="#355FE5" />
                  </button>
                  <p className="text-xs text-center ">{icon.name}</p>
                </div>
              ))}
            </div>
          </CardWrapper>

          <CardWrapper>
            <QuickTransfer />
          </CardWrapper>
        </section>
      </div>
    </main>
  );
}

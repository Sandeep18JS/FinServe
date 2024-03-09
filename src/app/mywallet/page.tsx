import { CardWrapper } from "@/components/Card";
import CreditCard from "@/components/CreditCard";
import LineChart from "@/components/LineChart";
import PageTitle from "@/components/PageTitle";
import { FileDown, FileText, LucideIcon, PlusSquare, Send } from "lucide-react";
import React from "react";
import EUR from "@/assets/european.png";
import USD from "@/assets/united-states-of-america.png";
import GBP from "@/assets/united-kingdom.png";
import Image, { StaticImageData } from "next/image";

type Props = {};

type CurrencyProps = {
  name: string;
  amount: string;
  flag: StaticImageData;
};
const Currency: CurrencyProps[] = [
  {
    name: "USD",
    amount: "55,256",
    flag: USD,
  },
  {
    name: "EUR",
    amount: "55,256",
    flag: EUR,
  },
  {
    name: "GBP",
    amount: "55,256",
    flag: GBP,
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
  {
    name: "Check Out",
    icon: FileText,
  },
];
export default function MyWallet({}: Props) {
  return (
    <main className="w-full flex flex-col  gap-4 ">
      <PageTitle title="My Wallet" />
      <div className="flex flex-col xl:flex-row w-10/12 md:w-11/12 xl:w-full md:mx-auto xl:mx-0 gap-8">
        <section className="w-full  xl:w-2/6 flex flex-col gap-4">
          <div>
            <CardWrapper className="p-2">
              <div className="flex flex-col gap-2  px-8">
                <h1 className=" font-semibold">Total Balance</h1>
                <p className="font-bold text-2xl">
                  $88,232.00
                  <span className="text-xs font-medium text-gray-400">USD</span>
                </p>
                <p className="text-xs font-normal text-gray-400">
                  11 April 2022
                  <span className="font-medium text-green-500"> 2.05% up</span>
                </p>
                <button className="border border-blue-900 text-blue-700 rounded-lg p-2 font-medium text-sm hover:text-white hover:bg-blue-700">
                  Withdraw All Earning
                </button>
              </div>
            </CardWrapper>
          </div>
          <div>
            <CardWrapper className="w-full p-2">
              <h1 className=" font-semibold mx-8">My Cards</h1>

              <CreditCard color="blue" />
              <CreditCard color="orange" />
              <button className="mx-10 border border-blue-900 text-blue-700 rounded-lg p-2 font-medium text-sm hover:text-white hover:bg-blue-700">
                Manage Cards
              </button>
            </CardWrapper>
          </div>
        </section>

        <section className="w-full xl:w-4/6 flex flex-col gap-4">
          <div>
            <CardWrapper className="overflow-x-hidden ">
              <h1 className=" font-semibold">Quick Links</h1>

              <div className="flex gap-16 mx-auto ">
                {icons.map((icon, index) => (
                  <div key={index} className="flex flex-col gap-2.5">
                    <button className="w-14 h-14 border rounded-lg justify-center items-center flex">
                      <icon.icon color="#355FE5" />
                    </button>
                    <p className="text-xs text-center ">{icon.name}</p>
                  </div>
                ))}
              </div>
            </CardWrapper>
          </div>

          <div>
            <CardWrapper>
              <h1 className="absolute  font-semibold">Money Flow</h1>
              <LineChart />
            </CardWrapper>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-4 ">
            <CardWrapper className="px-6 w-full lg:w-5/12">
              <h1 className=" font-semibold">Conversion</h1>
              <div className="w-full h-10 border rounded-lg ">
<<<<<<< HEAD
                <select className="bg-transparent  w-2/12 bg-none h-9 mx-2 border-r text-center text-sm">
=======
                <select className="bg-transparent w-2/12 bg-none h-9 mx-2 border-r text-center text-sm">
>>>>>>> a54a6db7f47c65d4fc2656c9ab1011c9a07fd9f8
                  <option value="USD">€ </option>
                  <option value="EUR">€</option>
                  <option value="GBP">₹</option>
                  <option value="GBP">.ر.ق</option>
                </select>
                <input
<<<<<<< HEAD
                  className="bg-transparent w-9/12 h-9  text-sm  outline-none text-center "
=======
                  className=" bg-transparent w-9/12 h-9  text-sm  outline-none text-center "
>>>>>>> a54a6db7f47c65d4fc2656c9ab1011c9a07fd9f8
                  id="name"
                  placeholder="Enter amount"
                />
              </div>
              <div className="w-full h-10 border rounded-lg ">
                <select className="bg-transparent w-2/12 bg-none h-9 mx-2 border-r text-center text-sm">
                  <option value="USD">€ </option>
                  <option value="EUR">€</option>
                  <option value="GBP">₹</option>
                  <option value="GBP">.ر.ق</option>
                </select>
                <input
                  className="bg-transparent w-9/12 h-9  text-sm  outline-none text-center "
                  id="name"
                  placeholder="Enter amount"
                />
              </div>
            </CardWrapper>
            <CardWrapper className="px-6 w-full lg:w-7/12">
              <h1 className=" font-semibold">Currency</h1>
              {Currency.map((props, index) => (
                <div key={index} className="flex justify-between  mb-1">
                  <div className="flex gap-2">
                    <Image
                      width={20}
                      height={20}
                      alt="Image"
                      src={props.flag.src}
                      className="w-6 h-6"
                    />
                    <h1 className="font-semibold text-sm">{props.name}</h1>
                  </div>
                  <p className="font-semibold text-sm">
                    {props.amount}
                    <span className="ml-1 text-gray-400 font-medium text-sm">
                      {props.name}
                    </span>
                  </p>
                </div>
              ))}
            </CardWrapper>
          </div>
        </section>
      </div>
    </main>
  );
}

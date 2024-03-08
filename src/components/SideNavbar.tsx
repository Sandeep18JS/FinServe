"use client";

import React, { useEffect, useState } from "react";
import { Nav } from "./ui/nav";
import {
  LayoutDashboard,
  BadgeIndianRupee,
  Bolt,
  LucideIcon,
  NotepadText,
  Wallet,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Boxes,
} from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    icon: LucideIcon;
    href: string;
  }[];
}

export default function SideNavbar({}: NavProps) {
  const [isCollapsed, setIsCollapsed] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(typeof window !== "undefined" && window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className=" relative bg-[#1f2c37] text-[#9E9E9E]">
      {isCollapsed ? (
        <div className="flex justify-center mt-4">
          <Boxes />
        </div>
      ) : (
        <h1 className="text-[20px] font-medium mx-20 my-5">
          Fin<span className="text-white">Serve</span>
        </h1>
      )}
      <h3 className="text-sm mx-4 mt-10">Menu</h3>
      <div onClick={handleToggle} className="absolute right-[-20px] top-[60px]">
        {isCollapsed ? (
          <Button variant="secondary" className="rounded-full p-2 ">
            <ChevronLeft />
          </Button>
        ) : (
          <Button variant="secondary" className="rounded-full p-2 ">
            <ChevronRight />
          </Button>
        )}
      </div>

      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            href: "/",
          },
          {
            title: "Transactions",
            icon: BadgeIndianRupee,
            href: "/transactions",
          },
          {
            title: "My Wallet",
            icon: Wallet,
            href: "/mywallet",
          },
          {
            title: "Analytics",
            icon: NotepadText,
            href: "/analytics",
          },
          {
            title: "Settings",
            icon: Bolt,
            href: "/settings",
          },
        ]}
      />
      <h1 className="text-sm mx-4 mt-4 ">Other</h1>

      <ModeToggle isCollapsed={isCollapsed} />
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Security",
            icon: ShieldCheck,
            href: "/security",
          },
        ]}
      />
    </div>
  );
}

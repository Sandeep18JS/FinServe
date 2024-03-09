"use client";
import { SidebarNav } from "@/components/SidebarNav";
import {
  CalendarDays,
  CreditCard,
  KeyRound,
  ShieldCheck,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

const sidebarNavItems = [
  {
    title: "Edit Profile",
    href: "/settings",
    icon: User,
  },
  {
    title: "Password",
    href: "/settings/password",
    icon: KeyRound,
  },
  {
    title: "Direct Debits",
    href: "/settings/debits",
    icon: CreditCard,
  },
  {
    title: "Scheduled Transfer",
    href: "/settings/transfer",
    icon: CalendarDays,
  },
  {
    title: "Data Privacy",
    href: "/settings/privacy",
    icon: ShieldCheck,
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
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

  return (
    <>
      <div className="p-4 w-full">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Settings</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0">
          <SidebarNav items={sidebarNavItems} />
          {!isCollapsed ? <div className="h-screen border-r-2"></div> : ""}
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
}

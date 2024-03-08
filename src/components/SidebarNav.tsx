"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { ChevronRight, LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    icon: LucideIcon;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();
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
    <nav
      className={cn(
        "flex space-x-2 mb-4 lg:mb-0 lg:flex-col gap-6 lg:space-x-0 lg:space-y-1 ",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted h-14 hover:bg-muted"
              : "hover:bg-transparent hover:text-blue-600",
            "justify-between gap-28 flex "
          )}
        >
          {isCollapsed ? (
            <div className="flex gap-3">
              <item.icon />
            </div>
          ) : (
            <div className="justify-between w-full gap-28 flex ">
              <div className="flex gap-3">
                <item.icon />
                {item.title}
              </div>
              <div>
                <ChevronRight />
              </div>
            </div>
          )}
        </Link>
      ))}
    </nav>
  );
}

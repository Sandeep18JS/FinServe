"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type isCollapsed = {
  isCollapsed: boolean;
};

export function ModeToggle({ isCollapsed }: isCollapsed) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className=" flex flex-row ml-10 mt-5 gap-2">
      <div
        className={cn(" relative w-9 h-5 rounded-xl  bg-gray-400", {
          "right-2": isCollapsed,
        })}
      >
        <button
          className="rounded-full absolute top-[2px]"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <Moon className="h-4 w-4 ml-[2px] text-white dark:text-white bg-white rounded-full" />
          ) : (
            <Sun className="h-4 w-4 ml-[18px] text-black dark:text-black bg-black rounded-full" />
          )}
        </button>
      </div>
      {!isCollapsed && <p className="">Theme</p>}
    </div>
  );
}

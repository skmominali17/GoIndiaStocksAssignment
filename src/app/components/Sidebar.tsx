"use client";

import { FaBell, FaUser } from "react-icons/fa";
import { TbMessage2 } from "react-icons/tb";
import { ImCoinDollar } from "react-icons/im";
import { VscTriangleRight } from "react-icons/vsc";
import { useState } from "react";

export default function Sidebar() {
  const navItems: Array<string> = [
    "Discussion Forum",
    "Market Stories",
    "Sentiments",
    "Market",
    "Sector",
    "Watchist",
    "Events",
    "News/Interview",
  ];

  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  return (
    <aside className="h-screen flex items-center">
      {showSidebar && (
        <div className="h-full w-52 bg-zinc-700 sm:w-96 antialiased">
          <nav className="h-full text-white">
            <div className="flex justify-between items-center mb-3 px-4 py-6 border-b-2 border-zinc-400 sm:px-8 sm:py-8">
              <div className="flex items-center gap-2">
                <FaUser className="text-xl" />
                <p className="text-lg">Hello, User</p>
              </div>
              <div className="relative">
                <FaBell className="text-2xl" />
                <div className="w-2 h-2 rounded-full bg-red-500 absolute left-4 bottom-4"></div>
              </div>
            </div>
            <ul className="w-44 mx-auto sm:w-9/12 sm:text-xl">
              {navItems.map((item, index) => (
                <li key={index} className="py-3 flex items-center gap-2">
                  {index == 0 && (
                    <div>
                      <TbMessage2 className="text-white text-xl" />
                    </div>
                  )}
                  {index == 1 && (
                    <div>
                      <ImCoinDollar className="text-white text-xl" />
                    </div>
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      <div
        className="py-14 px-1 text-white bg-zinc-700"
        onClick={(e) => {
            e.preventDefault();
            setShowSidebar(!showSidebar);
        }}
      >
        <VscTriangleRight />
      </div>
    </aside>
  );
}

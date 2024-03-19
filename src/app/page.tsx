"use client";

import { useState } from "react";
import DiscussionForum from "./components/DiscussionForum";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MarketStories from "./components/MarketStories";

export default function Home() {
  const [navItem, setNavItem] = useState<string>("disscussion");
  const [selectedItem, setSelectedItem] = useState<string>("disscussion");
  console.log(navItem);
  return (
    <main className="w-screen h-screen">
      <div className="sm:hidden">
      <Navbar setNavItem={setNavItem} setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
      </div>
      <div className="flex relative gap-20">
        <div className="z-10 sm:z-0">
          <Sidebar />
        </div>
        <div className="hidden absolute sm:relative sm:block">
          <DiscussionForum />
        </div>
        <div className="hidden absolute sm:relative sm:block">
          <MarketStories />
        </div>
        <div className="absolute sm:relative sm:hidden">
          {navItem === "disscussion" && <DiscussionForum />}
        </div>
        <div className="absolute sm:relative sm:hidden">
        {navItem === "market" && <MarketStories />}
        </div>
      </div>
    </main>
  );
}

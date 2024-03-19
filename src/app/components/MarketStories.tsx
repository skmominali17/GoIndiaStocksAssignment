import { marketStoriesData } from "@/data/MarketStoriesData";
import Image from "next/image";

export default function MarketStories() {
 return (
    <div className="sm:w-96">
        <div className="py-5 w-[16rem] bg-gray-200 hidden sm:block">
        <h1 className="text-2xl uppercase font-bold text-red-400 tracking-wider ml-3">
          Market Stories
        </h1>
      </div>
      <div className="flex flex-col px-1 py-4">
        
        {marketStoriesData.map((data, index) => (
          <div key={index} className="h-72 border-2 flex flex-col items-start gap-1  shadow-lg rounded-lg sm:w-[45vw] sm:h-40 md:w-full md:h-auto">
            <div className="flex flex-col w-full">
              <div className="w-full h-40 overflow-hidden bg-red-400">
                <img src={data.image} alt={data.title} className="h-full w-full object-cover"/>
              </div>
              <div className="flex flex-col px-3 py-3 gap-2">
                <div className="flex justify-between items-center">
                 <div className="flex gap-5 sm:text-xl md:text-lg font-bold">
                   {data.title}
                 </div>
                </div>
                <div className="text-xs sm:text-sm md:text-sm">
                 {data.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 );
}

import { discussionsData } from "@/data/DissucssionForumData";
import Image from "next/image";
import { FaRegHeart, FaEye, FaShareAlt } from "react-icons/fa";
import { TiMessage } from "react-icons/ti";

export default function DiscussionForum() {
  return (
    <div className="h-screen">
      <div className="py-5 w-1/2 bg-gray-200 hidden sm:block">
        <h1 className="text-4xl uppercase font-bold text-red-400 tracking-wider ml-1">
          Disscussion Forum
        </h1>
      </div>
      <div className="flex flex-col gap-12 px-1 py-4">
        {discussionsData.map((data) => (
          <div key={data.id} className="h-32 border-2 flex items-start gap-1 py-2 shadow-lg rounded-lg sm:w-[45vw] sm:h-40 md:w-full md:h-auto">
            <div className="w-16 py-2 rounded-full overflow-hidden flex justify-center">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 sm:w-12 sm:h-12">
                <Image src={data.image} alt={data.name} width={100} height={100}/>
              </div>
            </div>
            <div className="flex flex-col pr-3 py-3 gap-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-5 sm:text-xl md:text-lg">
                  {data.name}
                  <div className="bg-blue-600 px-2 py-1 rounded-2xl text-white text-xs sm:text-sm md:text-base">
                    {data.sector}
                  </div>
                </div>
                <div className="text-xs mt-2 md:text-sm">{data.time}</div>
              </div>
              <div className="text-xs sm:text-xl md:text-lg">
                {data.description}
              </div>
              <div className="grid grid-cols-4 items-center h-5 justify-evenly">
                <div className="flex items-center text-xs gap-1 md:text-sm">
                  <FaRegHeart />
                  {data.likes}
                </div>
                <div className="flex items-center text-xs gap-1 md:text-sm">
                  <FaEye />
                  {data.views}
                </div>
                <div className="flex items-center text-xs gap-1 md:text-sm">
                  <TiMessage />
                  {data.comments}
                </div>
                <div className="flex items-center text-xs gap-1 md:text-sm">
                  <FaShareAlt />
                  Share
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

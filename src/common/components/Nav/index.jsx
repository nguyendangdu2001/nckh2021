import React from "react";
import {
  HomeIcon,
  TrendingUpIcon,
  AdjustmentsIcon,
} from "@heroicons/react/outline";
const Nav = () => {
  return (
    <div className="flex flex-col items-center w-[95px] h-full py-2 bg-white">
      <div className="flex items-center justify-center w-12 h-12 text-2xl text-blue-500 shadow bg-gray-50 rounded-xl">
        N
      </div>
      <div className="flex flex-col justify-center flex-grow text-gray-300">
        <HomeIcon className="w-20 h-20 p-6" />
        <TrendingUpIcon className="w-20 h-20 p-6" />
        <AdjustmentsIcon className="w-20 h-20 p-6 rotate-90" />
      </div>
    </div>
  );
};

export default Nav;

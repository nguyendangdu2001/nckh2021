// import Tabs from "./Tabs";
import React from "react";
import { Tab } from "@headlessui/react";
import ImageTab from "./Tabs/ImageTab";
import VideoTab from "./Tabs/VideoTab";
import { PhotographIcon, VideoCameraIcon } from "@heroicons/react/outline";

const Galery = () => {
  return (
    <Tab.Group className="grid h-full grid-cols-12" as="div">
      <div className="col-span-9">
        <Tab.Panels className="flex flex-col w-full h-full p-12 space-y-6 bg-gray-100/70 rounded-2xl">
          <Tab.Panel>
            <ImageTab />
          </Tab.Panel>
          <Tab.Panel>
            <VideoTab />
          </Tab.Panel>
        </Tab.Panels>
      </div>
      <div className="col-span-3">
        <div className="w-full h-full px-10 py-5 space-y-8">
          <div className="relative text-2xl font-semibold">
            Galery{" "}
            <div className="absolute w-8 h-1 bg-blue-500 rounded-full top-full"></div>
          </div>
          <Tab.List className="w-full space-y-6">
            <Tab
              className={({ selected }) =>
                `w-full h-[100px] rounded-l-xl p-5 text-left transition-all ${
                  selected
                    ? " rounded-r-[50px] bg-blue-500 text-white font-semibold"
                    : "rounded-r-xl bg-gray-100"
                }`
              }
            >
              <div className="text-xl">Images</div>
            </Tab>

            <Tab
              className={({ selected }) =>
                `w-full h-[100px] rounded-l-xl p-5 text-left transition-all ${
                  selected
                    ? " rounded-r-[50px] bg-blue-500 text-white font-semibold"
                    : "rounded-r-xl bg-gray-100"
                }`
              }
            >
              <div className="text-xl">Videos</div>
            </Tab>
          </Tab.List>
          <div className="space-y-7">
            <div className="relative text-2xl font-semibold">
              Detect{" "}
              <div className="absolute w-8 h-1 bg-blue-500 rounded-full top-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-x-5">
              <div className="flex items-center p-5 space-x-2 bg-gray-100 rounded-xl">
                <PhotographIcon className="w-5 h-5" /> <span>Image</span>
              </div>
              <div className="flex items-center p-5 space-x-2 bg-gray-100 rounded-xl">
                <VideoCameraIcon className="w-5 h-5" />
                <span>Video</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tab.Group>
    // <div className="container mx-auto space-y-5">
    //   <div className="text-3xl font-bold">Galery</div>
    //   <div className="p-10 space-y-4 bg-white rounded-lg shadow-sm">
    //     <div className="text-xl font-semibold">0 byte of 30 GB used</div>
    //     <div className="h-6 bg-gray-100 rounded"></div>
    //     <button className="px-4 py-2 text-base font-semibold bg-green-500 rounded-md shadow text-gray-50">
    //       Start predict
    //     </button>
    //   </div>
    //   <Tabs />
    // </div>
  );
};

export default Galery;

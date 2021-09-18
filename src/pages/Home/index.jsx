import {
  CameraIcon,
  FingerPrintIcon,
  SearchIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import React from "react";

const Home = () => {
  return (
    <div className="grid h-full grid-cols-12">
      <div className="col-span-9">
        <div className="flex flex-col w-full h-full p-12 space-y-6 bg-gray-100/70 rounded-2xl">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-5 space-y-3">
              <div className="p-8 space-y-4 bg-white shadow rounded-3xl">
                <div className="flex space-x-4">
                  <div className="w-[70px] h-[70px] bg-gray-500"></div>
                  <div>
                    <div className="text-2xl font-semibold">Hi Ninleo!</div>
                    <div className="text-xs text-gray-400">
                      Control your house from here
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 text-xs text-gray-300">
                  <div className="flex-grow">
                    Three member at home . Do you want contact them ?
                  </div>
                  <div className="w-[40px] h-[40px] p-3 bg-gray-500 flex-shrink-0"></div>
                  <div className="w-[40px] h-[40px] p-3 bg-gray-500 flex-shrink-0"></div>
                </div>
              </div>
              <div className="w-full space-y-3">
                <div className="text-xl font-medium text-gray-400">
                  My family
                </div>
                <div className="flex space-x-2">
                  <div className="w-12 h-12 bg-gray-500 shadow rounded-3xl"></div>
                  <div className="w-12 h-12 bg-gray-500 shadow rounded-3xl"></div>
                  <div className="w-12 h-12 bg-gray-500 shadow rounded-3xl"></div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex flex-col w-full h-full space-y-5">
                <div className="grid grid-cols-4 text-gray-300 bg-white shadow rounded-xl">
                  <div className="relative flex items-center justify-center p-5">
                    <div className="absolute inset-0 bg-gray-100 rounded-xl"></div>
                    <WifiIcon className="z-10 w-5 h-5 text-blue-500 bg-transparent" />
                  </div>
                  <div className="flex items-center justify-center p-5">
                    <WifiIcon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-center p-5">
                    <WifiIcon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-center p-5">
                    <WifiIcon className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex-grow w-full h-full bg-white shadow rounded-3xl"></div>
              </div>
            </div>
            <div className="col-span-3">
              <div
                className="w-full h-full p-8 space-y-3 text-white shadow rounded-3xl"
                style={{
                  background:
                    "linear-gradient(208.53deg, #5E44FF 24.38%, #5E44FF 24.39%, #B85BAE 55.43%, #FF6E6E 106.43%)",
                }}
              >
                <div className="flex space-x-2 text-white">
                  <span>Sep</span>
                  <div className="flex items-center justify-center h-full p-1 text-xs border border-white rounded-lg">
                    13
                  </div>
                </div>
                <div className="space-x-2">
                  <span className="text-5xl font-medium">11:00</span>
                  <span>AM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full space-y-6">
            <div className="text-2xl font-medium text-gray-500">Your home</div>
            <div className="grid grid-cols-12 h-44 gap-x-5">
              <div className="col-span-5">
                <div className="w-full h-full bg-white shadow rounded-3xl"></div>
              </div>
              <div className="col-span-4">
                <div className="w-full h-full bg-white shadow rounded-3xl"></div>
              </div>
              <div className="col-span-3">
                <div className="w-full h-full bg-white shadow rounded-3xl"></div>
              </div>
            </div>
          </div>
          <div className="flex-grow w-full bg-white shadow rounded-3xl"></div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="w-full h-full px-10 space-y-8">
          <div className="flex bg-gray-50 rounded-xl">
            <input
              type="text"
              className="flex-grow bg-transparent border-none"
              placeholder="Search"
            />
            <button className="p-3 text-white bg-blue-500 rounded-xl">
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3">
            <div className="text-2xl font-medium text-gray-500">Main door</div>
            <div className="text-gray-300">
              You can control main door with lock and unlock here
            </div>
            <div className="flex justify-between text-gray-400">
              <div>Your door unlocked </div>
              <div className="text-right">From: 11 am </div>
            </div>
            <div className="flex space-x-5">
              <div className="flex-1">
                <button className="w-full p-3 text-sm bg-gray-50 rounded-xl">
                  Unlock
                </button>
              </div>
              <div className="flex-1">
                <button className="w-full p-3 text-sm text-white bg-blue-500 rounded-xl">
                  Lock
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FingerPrintIcon className="w-8 h-8 text-blue-500" />
              <div className="text-gray-400">Fingerprint for login</div>
            </div>
            <div className="border-dashed border-[1.5px] rounded-3xl h-36 bg-gray-50 border-gray-300 text-gray-300 flex items-center justify-center flex-col">
              <CameraIcon className="w-8 h-8" />
              <div className="text-sm">Turn on your camera in Main door</div>
            </div>
          </div>
          <div>
            <div className="text-2xl font-medium text-gray-500">Window</div>
            <div>
              {[...Array(3)]?.map(() => (
                <div className="flex px-3 py-5 space-x-5">
                  <div className="w-[60px] h-[60px] bg-gray-200 rounded-2xl"></div>
                  <div className="flex-grow space-y-1">
                    <div className="text-lg text-gray-400">Window 1</div>
                    <div className="text-xs">Unlocked</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

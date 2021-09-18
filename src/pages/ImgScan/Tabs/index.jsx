import { Tab } from "@headlessui/react";
import React from "react";
import ImageTab from "./ImageTab";
import VideoTab from "./VideoTab";

const Tabs = () => {
  return (
    <Tab.Group as="div" className="flex flex-col items-center w-full space-y-5">
      <Tab.List className="flex w-full max-w-md p-1 space-x-1 bg-blue-900/20 rounded-xl">
        <Tab
          className={({ selected }) =>
            `w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg
                  focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60
                  ${
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  }`
          }
        >
          Image
        </Tab>
        <Tab
          className={({ selected }) =>
            `w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg
                  focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60
                  ${
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  }`
          }
        >
          Video
        </Tab>
      </Tab.List>
      <Tab.Panels className="w-full">
        <Tab.Panel>
          <ImageTab />
        </Tab.Panel>
        <Tab.Panel>
          <VideoTab />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;

import React from "react";
import { Tab } from "@headlessui/react";
import { ViewGridIcon, ViewListIcon } from "@heroicons/react/outline";
import ImageTab from "./ImageTab";
import VideoTab from "./VideoTab";
const Tabs = () => {
  return (
    <Tab.Group>
      <Tab.List className="flex">
        <Tab className={({ selected }) => `p-3 ${selected ? "bg-white" : ""}`}>
          <ViewGridIcon className="w-6 h-6" />
        </Tab>
        <Tab className={({ selected }) => `p-3 ${selected ? "bg-white" : ""}`}>
          <ViewListIcon className="w-6 h-6" />
        </Tab>
      </Tab.List>
      <Tab.Panels>
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

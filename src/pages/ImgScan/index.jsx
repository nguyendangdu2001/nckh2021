import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import useUploadMedia from "@hooks/api/mutation/useUploadMedia";
import { useForm } from "react-hook-form";

import { Tab } from "@headlessui/react";
import ImageTab from "./Tabs/ImageTab";
import VideoTab from "./Tabs/VideoTab";
import { PhotographIcon, VideoCameraIcon } from "@heroicons/react/outline";
// import {} from "hea"
const ImgScan = () => {
  // const [ava, setAva] = useState();
  // const { mutate, data: response } = useUploadMedia();
  // const { handleSubmit } = useForm();
  // const onSubmit = () => {
  //   const formData = new FormData();
  //   formData.append("cover", ava?.[0]);
  //   formData.append("title", "Pineapple");
  //   formData.append("caption", "Pineapple");
  //   formData.append("date", new Date().toISOString());
  //   formData.append("type", "I");

  //   mutate(formData);
  // };
  // const onDrop = (acceptedFiles) => {
  //   if (acceptedFiles?.length === 0) return;

  //   setAva(
  //     acceptedFiles.map((file) =>
  //       Object.assign(file, {
  //         preview: URL.createObjectURL(file),
  //       })
  //     )
  //   );
  // };
  // useEffect(() => {
  //   console.log(response);
  //   return () => {};
  // }, [response]);
  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop,
  //   accept: "image/*",
  //   maxFiles: 1,
  // });
  return (
    <Tab.Group className="grid h-full grid-cols-12" as="div">
      <div className="col-span-9">
        <Tab.Panels className="flex items-center justify-center w-full h-full p-12 space-y-6 bg-gray-100/70 rounded-2xl">
          <Tab.Panel className="w-full">
            <ImageTab />
          </Tab.Panel>
          <Tab.Panel className="w-full">
            <VideoTab />
          </Tab.Panel>
        </Tab.Panels>
      </div>
      <div className="col-span-3">
        <div className="w-full h-full px-10 py-5 space-y-8">
          <div className="relative text-2xl font-semibold">
            Detect{" "}
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
              Galery{" "}
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
  );
};

export default ImgScan;

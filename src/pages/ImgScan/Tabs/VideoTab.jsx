import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CameraIcon, CodeIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import useUploadVideo from "@hooks/api/mutation/useUploadVideo";
import { ClockLoader } from "react-spinners";
import { baseURL } from "@config/axios";
const VideoTab = () => {
  const [ava, setAva] = useState();
  const { mutate, data: response, isLoading } = useUploadVideo();
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    const formData = new FormData();
    formData.append("video", ava?.[0]);
    formData.append("title", "Pineapple");
    formData.append("caption", "Takecare");
    formData.append("date", new Date().toISOString());
    // formData.append("type", "I");

    mutate(formData);
  };
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles?.length === 0) return;

    setAva(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };
  useEffect(() => {
    console.log(response);
    return () => {};
  }, [response]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "video/*",
    maxFiles: 1,
  });
  return (
    <div className="grid w-full grid-cols-2 gap-x-10">
      <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center w-full">
          <div
            className="flex items-center justify-center bg-gray-100 border-2 border-gray-500 border-dashed shadow-md cursor-pointer w-fulltext-center rounded-xl form__input"
            {...getRootProps()}
          >
            <input {...getInputProps()} className="w-full" />
            {!ava ? (
              <div className="space-y-1 text-center text-gray-500 p-28">
                <CameraIcon className="w-10 h-10 mx-auto" />
                <p>Drop video here</p>
              </div>
            ) : (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video
                controls
                src={ava?.[0]?.preview}
                alt=""
                className="object-cover w-full h-auto shadow-md rounded-xl"
              />
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="flex items-center px-5 py-3 space-x-2 text-lg font-semibold bg-green-500 rounded-md shadow-md text-gray-50"
            disabled={!ava || isLoading}
          >
            <span>Predict</span>
            {isLoading && <ClockLoader size={20} color="white" />}
          </button>
        </div>
      </form>
      <div className="w-full space-y-4">
        <div className="flex items-center justify-center w-full">
          <div
            className="flex items-center justify-center text-center bg-gray-100 border-2 border-gray-500 border-dashed shadow-md cursor-pointer rounded-xl form__input"
            disabled={!ava}
          >
            {!response ? (
              <div className="space-y-1 text-center text-gray-500 p-28">
                <CodeIcon className="w-10 h-10 mx-auto" />
                <p>Your result goes here</p>
              </div>
            ) : (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video
                src={`${baseURL}${response?.data?.link}`}
                alt=""
                className="object-cover w-full h-auto shadow-md rounded-xl"
                controls
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTab;

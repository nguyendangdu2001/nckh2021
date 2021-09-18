import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CameraIcon, CodeIcon } from "@heroicons/react/outline";
import useUploadMedia from "@hooks/api/mutation/useUploadMedia";
import { useForm } from "react-hook-form";
import { baseURL } from "@config/axios";
const ImageTab = () => {
  const [ava, setAva] = useState();
  const { mutate, data: response } = useUploadMedia();
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    const formData = new FormData();
    formData.append("cover", ava?.[0]);
    formData.append("title", "Pineapple");
    formData.append("caption", "Pineapple");
    formData.append("date", new Date().toISOString());
    formData.append("type", "I");

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
    accept: "image/*",
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
                <p>Drop image here</p>
              </div>
            ) : (
              <img
                src={ava?.[0]?.preview}
                alt=""
                className="object-cover w-full h-auto shadow-md rounded-xl"
              />
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="px-5 py-3 text-lg font-semibold bg-green-500 rounded-md shadow-md text-gray-50"
            disabled={!ava}
          >
            Predict
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
              <img
                src={`${baseURL}${response?.data}`}
                alt=""
                className="object-cover w-full h-auto shadow-md rounded-xl"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTab;

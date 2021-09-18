import { baseURL } from "@config/axios";
import useVideos from "@hooks/api/queries/useVideos";
import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

const VideoTab = () => {
  const { data } = useVideos();
  console.log(
    data,
    data?.map((img, i) => (
      <div className="relative w-full overflow-hidden bg-gray-400 rounded-lg shadow aspect-w-1 aspect-h-1">
        <button
          className="text-base"
          onClick={() => {
            showCase(i);
          }}
        >
          <img
            src={`${baseURL}${img?.thumbnail_image}`}
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900 to-transparent">
            <div className="font-medium text-gray-50">{img?.title}</div>
          </div>
        </button>
      </div>
    ))
  );
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [slideState, setSlideState] = useState({ show: false, slide: 0 });
  const showCase = (slide) => {
    setIsOpen(!isOpen);
    setPhotoIndex(slide);
  };
  return (
    <div>
      <div className="grid grid-cols-6 gap-x-2 gap-y-2">
        {data &&
          data?.map((img, i) => (
            <div className="relative w-full overflow-hidden bg-gray-400 rounded-lg shadow aspect-w-1 aspect-h-1">
              <button
                className="text-base"
                onClick={() => {
                  showCase(i);
                }}
              >
                <img
                  src={`${baseURL}${img?.thumbnail_image}`}
                  alt=""
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900 to-transparent">
                  <div className="font-medium text-gray-50">{img?.title}</div>
                </div>
              </button>
            </div>
          ))}
      </div>
      <FsLightbox
        toggler={isOpen}
        sources={data?.map((v) => `${baseURL}${v?.video}`) || []}
        sourceIndex={photoIndex}
      />
    </div>
  );
};

export default VideoTab;

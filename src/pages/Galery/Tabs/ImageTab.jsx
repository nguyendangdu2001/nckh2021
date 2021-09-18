import { baseURL } from "@config/axios";
import useAlbums from "@hooks/api/queries/useAlbums";
import FsLightbox from "fslightbox-react";
import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";

const ImageTab = () => {
  const { data } = useAlbums();
  // console.log(data);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [slideState, setSlideState] = useState({ show: false, slide: 0 });
  const showCase = (slide) => {
    setIsOpen(!isOpen);
    setPhotoIndex(slide);
  };
  console.log(data?.map((v) => `${baseURL}${v?.cover}`));
  return (
    <>
      <div className="grid grid-cols-6 gap-x-2 gap-y-2">
        {data?.map((img, i) => (
          <div className="relative w-full overflow-hidden bg-gray-400 rounded-lg shadow aspect-w-1 aspect-h-1">
            <button
              className="text-base"
              onClick={() => {
                showCase(i);
              }}
            >
              <img
                src={`${baseURL}${img?.cover}`}
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
      {/* {isOpen && (
        <Lightbox
          mainSrc={`${baseURL}${data[photoIndex]?.cover}`}
          nextSrc={`${baseURL}${data[(photoIndex + 1) % data.length]?.cover}`}
          prevSrc={`${baseURL}${
            data[(photoIndex + data.length - 1) % data.length]?.cover
          }`}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(photoIndex + data.length - 1) % data.length
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % data.length)
          }
        />
      )} */}
      <FsLightbox
        toggler={isOpen}
        sources={
          data?.map((v) => (v?.cover ? `${baseURL}${v?.cover}` : "")) || []
        }
        sourceIndex={photoIndex}
      />
    </>
  );
};

export default ImageTab;

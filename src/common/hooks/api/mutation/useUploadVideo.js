import axios from "axios";
import React from "react";
import { useMutation } from "react-query";

const useUploadVideo = () => {
  return useMutation(async (requestData) => {
    const { data } = await axios.post("/videos/", requestData);
    return data;
  });
};

export default useUploadVideo;

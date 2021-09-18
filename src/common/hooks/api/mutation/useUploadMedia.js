import axios from "axios";
import React from "react";
import { useMutation } from "react-query";

const useUploadMedia = () => {
  return useMutation(async (requestData) => {
    const { data } = await axios.post("/images/", requestData);
    console.log(data);
    return data;
  });
};

export default useUploadMedia;

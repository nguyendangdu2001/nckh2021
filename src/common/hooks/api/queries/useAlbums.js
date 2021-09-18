import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const useAlbums = () => {
  return useQuery(["images"], async () => {
    const { data } = await axios.get("/images/");
    return data?.data;
  });
};

export default useAlbums;

import axios from "axios";
import { useQuery } from "react-query";

const useVideos = () => {
  return useQuery(["videos"], async () => {
    const { data } = await axios.get("/videos/");
    console.log(data?.data);
    return data?.data;
  });
};

export default useVideos;

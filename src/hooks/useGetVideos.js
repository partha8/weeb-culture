import axios from "axios";
import { useEffect } from "react";
import { useStateContext } from "../context/StateProvider";

export const useGetVideos = () => {
  const { videosDispatch } = useStateContext();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        if (response.status === 200 || response.status === 201) {
          videosDispatch({
            type: "SET_VIDEOS",
            payload: response.data.videos,
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
};

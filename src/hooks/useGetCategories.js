import axios from "axios";
import { useEffect } from "react";
import { useStateContext } from "../context/StateProvider";

export const useGetCategories = () => {
  const { videosDispatch } = useStateContext();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        if (response.status === 200 || response.status === 201) {
          videosDispatch({
            type: "SET_CATEGORIES",
            payload: response.data.categories,
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
};

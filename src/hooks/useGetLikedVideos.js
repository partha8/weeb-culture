import axios from "axios";
import { useEffect } from "react";
import { useStateContext } from "../context/StateProvider";
import { useAuthContext } from "../context/AuthProvider";

export const useGetLikedVideos = () => {
  const { videosDispatch } = useStateContext();
  const { userState } = useAuthContext();
  useEffect(() => {
    const encodedToken = localStorage.getItem("token");

    if (userState._id) {
      (async () => {
        try {
          const response = await axios.get("/api/user/likes", {
            headers: {
              authorization: encodedToken,
            },
          });
          if (response.status === 200 || response.status === 201) {
            videosDispatch({
              type: "SET_LIKEDVIDEOS",
              payload: response.data.likes,
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      videosDispatch({ type: "SET_LIKEDVIDEOS", payload: [] });
    }
  }, [userState._id]);
};

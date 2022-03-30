import { useStateContext } from "../context/StateProvider";

export const useFilteredVideos = () => {
  const { videos, sortByCategory } = useStateContext();
  if (sortByCategory === "All") {
    return videos;
  }
  return videos.filter((video) => video.categoryName === sortByCategory);
};

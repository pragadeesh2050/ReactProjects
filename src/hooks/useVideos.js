import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (searchTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    handleVideoSearch(searchTerm);
  }, []);

  const handleVideoSearch = async (term) => {
    console.log(`Term: ${term}`);
    const videoResult = await youtube.get("/search", { params: { q: term } });
    console.log(videoResult.data.items);
    setVideos(videoResult.data.items);
  };

  return [videos, handleVideoSearch];
};

export default useVideos;

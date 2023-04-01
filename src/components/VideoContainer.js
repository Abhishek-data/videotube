import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const data = await response.json();
    setVideos(data.items);
    console.log(data.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map(video=><VideoCard key={video.id} info={video}/>)}
      
    </div>
  );
};

export default VideoContainer;

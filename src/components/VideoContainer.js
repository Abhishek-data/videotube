import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const data = await response.json();
    setVideos(data.items);
    
  };

  return (videos.length===0)?<Shimmer/>:(
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/video?v=" + video.id}  key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

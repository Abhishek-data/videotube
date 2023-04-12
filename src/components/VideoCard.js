import React from "react";

const VideoCard = ({ info }) => {
  
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return <div className="p-2 m-2 max-w-xs h-72 shadow-lg">
    
    <ul>
        <li><img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnails" /></li>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        {/* {statistics.viewCount && <li>{statistics.viewCount}views</li>} */}
    </ul>
  </div>;
};

export default VideoCard;

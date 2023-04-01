import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return <div className="p-2 m-2 w-72 shadow-lg">
    
    <ul>
        <li className=' h-40   overflow-hidden rounded-lg flex items-center '><img className='h-56 w-full' src={thumbnails.medium.url} alt="thumbnails" /></li>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}views</li>
    </ul>
  </div>;
};

export default VideoCard;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchResult } from "../utils/searchSlice";
import { GOOGLE_API_KEY } from "../utils/constant";

const SearchVideoContainer = () => {
  const videos = useSelector((state) => state.search.searchResult);
  const dispatch = useDispatch();
  useEffect(() => {
    searchResultHandler("iphone");
  }, []);

  const searchResultHandler = async (text) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${text}&type=video&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error();
      }
      dispatch(updateSearchResult(data.items));
      console.log(data.items);
    } catch (err) {
      console.log(err);
    }
  };

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/video?v=" + video.id.videoId} key={video.id.videoId}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideoContainer;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu, openMenu } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";
import Livechat from "./Livechat";

const VideoPage = () => {
  const [params] = useSearchParams();
  const param = params.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    return () => dispatch(openMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full">
      <div className="pl-20 flex">
        <div>
          <iframe
            width="800"
            height="430"
            src={"https://www.youtube.com/embed/" + param}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className=" w-full pl-2">
          <Livechat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default VideoPage;

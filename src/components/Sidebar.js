import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li className="p-2 hover:bg-gray-200"><Link to="/">Home</Link></li>
        <li className="p-2 hover:bg-gray-200">Subscriptions</li>
        <li className="p-2 hover:bg-gray-200">Originals</li>
        <li className="p-2 hover:bg-gray-200">Youtube Music</li>
      </ul>
      {/* <h1 className="font-bold pt-5">Subscriptions</h1> */}
      <ul>
        <li className="p-2 hover:bg-gray-200">Library</li>
        <li className="p-2 hover:bg-gray-200">History</li>
        <li className="p-2 hover:bg-gray-200">Your Videos</li>
        <li className="p-2 hover:bg-gray-200">Watch later</li>
        <li className="p-2 hover:bg-gray-200">Downloads</li>
        <li className="p-2 hover:bg-gray-200">Liked videos</li>
      </ul>
    </div>
  );
};

export default Sidebar;

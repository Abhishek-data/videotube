import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch()  
  const toggleHandler = ()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <button onClick={toggleHandler}>
        <img
          className="h-8 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
          alt="menu"
        />
        </button>
        <img
          className="h-8 mx-3"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/059df0b4-8444-4b77-a472-0e70e7f33255/dero1o2-283777bf-e9d2-4a15-bc1d-af4a6f6a7639.png/v1/fill/w_1280,h_424,strp/videotube__1988_2003__logo_by_blakeharris02_dero1o2-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI0IiwicGF0aCI6IlwvZlwvMDU5ZGYwYjQtODQ0NC00Yjc3LWE0NzItMGU3MGU3ZjMzMjU1XC9kZXJvMW8yLTI4Mzc3N2JmLWU5ZDItNGExNS1iYzFkLWFmNGE2ZjZhNzYzOS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._h5MYmWe_4eTT_NwUe_it_c7Lqwx5xhmEumPCwZRins"
          alt="logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <input type="text" className="w-1/2 border border-gray-400 p-2 rounded-l-full"/>
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">Search</button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavCDvlRFf6Y1gcbHAoYvLDWSjR6GFpI1sYErd3F8&s"
          alt="usericon"
        />
      </div>
    </div>
  );
};

export default Header;
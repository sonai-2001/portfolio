import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div
      id="navbar"
      className="max-w-screen-xl px-3 py-1 bg-zinc-700 mx-auto flex justify-between items-center rounded-md"
    >
      <div
        id="nleft"
        className="w-[75px] h-[75px] rounded-full border  overflow-hidden"
      >
      <img id="navimage" className="w-full h-full object-cover object-left-top
" src="myimage2.jpg" alt="" />

      </div>
      <div id="nright" className="flex gap-4">
            {["Home","AboutMe","ContactMe"].map((item,index)=><Link key={index} className="hover:opacity-[0.5]" to={`/${index===0?"":item}`}>{item}</Link>)}
      </div>
    </div>
  );
};

export default Nav;

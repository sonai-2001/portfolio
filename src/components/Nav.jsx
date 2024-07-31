import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
 
 
 const[open,setOpen]=useState(false)
 const handleClick=()=>{
   setOpen(!open)
 }
 const handleLink=()=>{
      if(open){
        setOpen(false)
      }
 }
  return (
    <div
      id="navbar"
      className="max-w-screen-xl px-3 py-1 bg-zinc-700 mx-auto flex justify-between items-center rounded-md relative"
    >
      <div
        id="nleft"
        className="w-[70px] md:w-[75px] h-[70px] md:h-[75px] rounded-full border  overflow-hidden"
      >
        <img
          id="navimage"
          className="w-full h-full object-cover object-left-top
"
          src="myimage2.jpg"
          alt=""
        />
      </div>
      <div id="nright" className={`absolute z-50 md:static  h-[30vh] md:h-0 ${open?"top-[-10px] w-full":"top-[-700px]"} left-[-8px] rounded-sm bg-zinc-600 flex items-center justify-center gap-3 m-2 md:m-0  flex-col md:flex md:flex-row  md:gap-4`}>
        {["Home", "AboutMe", "ContactMe"].map((item, index) => (
          <Link
            onClick={handleLink}
            key={index}
            className="hover:opacity-[0.5]"
            to={`/${index === 0 ? "" : item}`}
          >
            {item}
          </Link>
        ))}


      </div>
      <span id="menu" className="absolute top-[37%] right-[2%]  md:hidden">
            <i onClick={handleClick} className={`${open?"ri-close-fill":"ri-menu-line"}`}></i>
      </span>
      
    </div>
  );
};

export default Nav;

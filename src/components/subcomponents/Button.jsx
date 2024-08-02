import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title,link }) => {
  return (
    <Link
    target="blank"
    to={`${link}`}  
    id="btn"
      className=" px-[2px] md:px-1  w-[130px] rounded-lg flex items-center justify-between bg-white text-black text-xs md:text-sm "
    >
      <span>{title}</span>
      <i class="ri-corner-down-right-line"></i>
    </Link>
  );
};

export default Button;

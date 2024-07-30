import React from "react";

import Info from "./subcomponents/Info";
import Project from "./subcomponents/Project";
    
const Home = () => {
  return (
    <div id="home" className="w-full my-4 bg-zinc-900 p-1 md:p-4 ">
      <Info/>
      <div id="project-heading" className=" w-[25vw] text-center rounded-md shadow-md  shadow-white p-3 uppercase mx-auto border border-zinc-100 mt-32 md:mt-28">
           Projects
      </div>
      <div id="projects" className="w-full my-4">
            <Project/>
            <Project/>
            <Project/>
            <Project/>
      </div>
    </div>
  );
};

export default Home;

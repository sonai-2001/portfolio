import React from "react";

import Info from "./subcomponents/Info";
import Project from "./subcomponents/Project";
import Marquee from "./Marquee";
    
const Home = () => {
  const skillSet=[
    ["javascript","React","Redux","Tailwind","Nodejs"],
    ["javascript","React","Redux","Tailwind","Nodejs"]
  ]
  return (
    <div id="home" className="w-full my-4 bg-zinc-900 p-1 md:p-4 ">
      <Info/>
      <div id="project-heading" className=" w-[25vw] text-center rounded-md shadow-md  shadow-white p-3 uppercase mx-auto border border-zinc-100 mt-32 md:mt-28">
           Projects
      </div>
      <div id="projects" className="w-full my-4 relative">
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            
      </div>

      <div id="project-heading" className=" w-[25vw] text-center rounded-md shadow-md  shadow-white p-3 uppercase mx-auto border border-zinc-100 mt-32 md:mt-28">
           Skills
      </div>

      <div id="all-skills" className="w-full mt-20 pb-10" >
        {skillSet.map((skills,ind)=><Marquee key={ind} skills={skills}/>)}
      </div>
    </div>
  );
};

export default Home;

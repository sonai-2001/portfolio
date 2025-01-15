import React from "react";

import Info from "./subcomponents/Info";
import Project from "./subcomponents/Project";
import Marquee from "./Marquee";
    
const Home = () => {
  const projects=[
    {name:"Products",description:"A product listing website build on react libary where we can see products as per the categories and add and edit product",github:"https://github.com/sonai-2001/products",project:"https://sonai-2001.github.io/products/",video:"product.mp4"},
    {name:"Foodie Fest",description:"A food ordering website build on react libary where we can see foods as per the categories and add o cart and order",github:"https://github.com/sonai-2001/food-ordering-app",project:null,video:"food_ordering.mp4"},
  ]
  return (
    <div id="home" className="w-full my-4 bg-zinc-900 p-1 md:p-4 ">
      <Info/>
      <div id="project-heading" className=" w-[25vw] text-center rounded-md shadow-md  shadow-white p-3 uppercase mx-auto border border-zinc-100 mt-32 md:mt-28">
           Projects
      </div>
      <div id="projects" className="w-full my-4 relative">
           {projects.map((p,i)=>{
            return(
              <Project key={i} p={p}/>
            )
           })}
           
            
      </div>

      <div id="project-heading" className=" w-[25vw] text-center rounded-md shadow-md  shadow-white p-3 uppercase mx-auto border border-zinc-100 mt-32 md:mt-28">
           Skills
      </div>

      <div className="w-full mt-20 overflow-hidden ">
            <Marquee direction={"left"}/>
            <Marquee direction={"Right"}/>
        </div>
    </div>
  );
};

export default Home;

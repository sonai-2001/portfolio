import React from "react";
import Button from "./Button";
import "../../project.css";

const Project = ({ p }) => {
  const { name, github, project, description,video } = p;
  return (
    <div
      id="project"
      className="w-full md:max-w-screen-lg p-1 mx-auto h-[23vh] md:h-[38vh] bg-zinc-700 hover:bg-violet-500
      rounded-md flex items-center justify-between mt-4 md:mt-12 relative"
    >
      <div id="p-left" className="w-[30%]">
        <h1 className="text-xl md:text-5xl">{name}</h1>
      </div>
      <div id="p-right" className="w-[35%] md:w-[30%] pl-1">
        <p className="text-xs md:text-sm">{description}</p>
        <div className="flex gap-3 md:gap-4 mt-4">
          <Button link={project} title={"Project Link"} />
          <Button link={github} title={"Github"} />
        </div>
      </div>
      <div className="absolute top-[50%] left-[47%] md:left-[50%] -translate-x-[50%] -translate-y-[50%] w-[32%] md:w-[35%] h-[80%] md:h-full rounded-md overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src={`${video}`}
        ></video>
      </div>
    </div>
  );
};

export default Project;

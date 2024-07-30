import React from "react";
import "../../info.css";

const Info = () => {
  const images = [
      { url: "js.webp", top: "60%", left: "45%", isActive: true },
      { url: "samer.jpeg", top: "45%", left: "37%", isActive: true },
    { url: "redux.jpeg", top: "65%", left: "60%", isActive: true },
    { url: "nodejs.webp", top: "43%", left: "80%", isActive: true },
  ];
  return (
    <div
      id="info"
      className=" relative max-w-screen-lg px-3 min-h-[30vh] py-1 bg-zinc-700 mx-auto md:flex  rounded-md md:justify-between"
    >
      <div className="md:w-[60%] ">
        <h3 className="text-zinc-300 text-3xl md:text-3xl font-bold my-4 md:my-4">
          Hi,I'm
        </h3>
        <h1 className=" text-4xl md:text-5xl font-bold">Apurba Bhadra...</h1>
        <div className=" my-4 md:my-4 text-3xl">
          <span className="md:text-4xl lg:text-5xl">A</span>

          <h1
            id="designation"
            className="inline-block md:text-4xl lg:text-5xl mx-2 md:mx-4 border p-2 md:p-3 rounded-lg bg-violet-500 my-4"
          >
            Software Developer
          </h1>
        </div>
        <span className="px-2 py-1 border border-zinc-200 rounded-lg shadow-md shadow-white inline-block ml-[45px]">
          RESUME
        </span>
      </div>
      <div className="w-[280px] h-[280px] rounded-full border border-zinc-300 overflow-hidden mx-auto my-3  ">
        <img
          className="w-full h-full object-cover object-top "
          src="myimage1.jpg"
          alt=""
        />
      </div>
      <div
        className="scroll-images absolute w-[150px] md:w-[200px] h-[150px] md:h-[200px] top-[105%] md:top-[90%] left-[50%]
    -translate-x-[50%] -translate-y-[50%] border border-zinc-200"
      >
        {images.map(
          (image, ind) =>
            image.isActive && (
              <img
                key={ind}
                className="w-full h-full absolute -translate-x-[50%] -translate-y-[50%] rounded-md"
                src={image.url}
                alt=""
                style={{ top: image.top, left: image.left }}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Info;

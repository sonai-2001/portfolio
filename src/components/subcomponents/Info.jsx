import React, { useState } from "react";
import "../../info.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Info = () => {
  const [images, setImages] = useState([
    { url: "js.webp", top: "60%", left: "45%", isActive: false },
    { url: "samer.jpeg", top: "45%", left: "37%", isActive: false },
    { url: "redux.jpeg", top: "35%", left: "60%", isActive: false },
    { url: "nodejs.webp", top: "23%", left: "10%", isActive: false },
  ]);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", Math.floor(latest * 100));

    const showImage = (arr) => {
      const newImage = images.map((img, ind) => (
        arr.indexOf(ind) == -1 ? {...img,isActive:false}:{...img,isActive:true}
    ));
    setImages(newImage);
    };

    switch (Math.floor(latest * 100)) {
      case 0:
        showImage([]);
        break;
      case 1:
        showImage([0]);
        break;
      case 4:
        showImage([0,1]);
        break;
      case 7:
        showImage([0,1,2]);
        break;
      case 10:
        showImage([0,1,2,3]);
        break;
    }
  });

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
          className="w-full h-full object-cover object-right-top "
          src="myimage1.jpg"
          alt=""
        />
      </div>
      <div
        className="scroll-images absolute w-[150px]  h-[150px]  top-[105%] md:top-[90%] left-[50%]
    -translate-x-[50%] -translate-y-[50%]  "
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

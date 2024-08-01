import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full my-4 bg-zinc-900 p-1 md:p-4">
      <div
        id="about-heading"
        className="w-[90vw] md:w-[25vw] text-center rounded-md shadow-md shadow-white p-3 uppercase mx-auto border border-zinc-100 mt-16 md:mt-10"
      >
        About Me
      </div>

      <div
        id="about-content"
        className="w-full mt-10 md:mt-12 p-4 flex flex-col items-center text-white"
      >
        <div className="w-full md:w-3/4 lg:w-1/2 bg-zinc-700 p-6 rounded-md">
          <h1 className="text-2xl md:text-4xl mb-4">Apurba Bhadra</h1>
          <p className="text-sm md:text-lg mb-2">
            <strong>Qualification:</strong> BCA, MCA
          </p>
          <p className="text-sm md:text-lg mb-2">
            <strong>Aspiration:</strong> Want to become a Full Stack Web
            Developer
          </p>
          <p className="text-sm md:text-lg mt-4">
            I am Apurba Bhadra, a dedicated and passionate individual with a
            solid educational background in computer applications, holding both
            a Bachelor's (BCA) and a Master's degree (MCA). My journey in the
            world of technology has equipped me with a robust understanding of
            various programming languages and development frameworks. My
            aspiration is to become a proficient Full Stack Web Developer, where
            I can leverage my skills to build dynamic and responsive web
            applications. I am eager to continuously learn and grow, and I am
            committed to contributing to innovative projects that make a
            significant impact.
          </p>
          <p className="text-sm md:text-lg mt-4">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/sonai-2001"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/sonai-2001
            </a>
          </p>
          <p className="text-sm md:text-lg">
            <strong>LeetCode:</strong>{" "}
            <a
              href="https://leetcode.com/u/ron-sonai/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              leetcode.com/u/ron-sonai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

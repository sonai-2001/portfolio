import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full my-4 bg-zinc-900 p-1 md:p-4">
      <div
        id="contact-heading"
        className="w-[90vw] md:w-[25vw] text-center rounded-md shadow-md shadow-white p-3 uppercase mx-auto border border-zinc-100 mt-16 md:mt-10 lg:mt-4"
      >
        Contact Me
      </div>

      <div
        id="contact-content"
        className="w-full mt-10 md:mt-10 lg:mt-6 p-4 flex flex-col items-center text-white"
      >
        <div className="w-full md:w-3/4 lg:w-1/2 bg-zinc-700 p-6 rounded-md">
          <h1 className="text-2xl md:text-4xl mb-4">Get In Touch</h1>
          <p className="text-sm md:text-lg mb-2">
            <strong>Contact No:</strong> 9330548045
          </p>
          <p className="text-sm md:text-lg mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:sonaibhadra11174@gmail.com" className="underline">
              sonaibhadra11174@gmail.com
            </a>
          </p>
          <p className="text-sm md:text-lg mb-2">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/apurba-bhadra-b19ab6238/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apurba Bhadra
            </a>
          </p>
          <p className="text-sm md:text-lg mt-4">
            Feel free to reach out to me through any of the above methods. I am
            always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Let's connect and make
            something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { CodeIcon } from "./SocialIcons";

const Work = () => {
  return (
    <div>
      <div className="background_text">
        <h1>work</h1>
      </div>
      <p className="text-center mt-5 border bg-blue-dark w-max text-blue-light uppercase px-2 py-1 lg:hidden">
        work
      </p>
      <div className="hidden lg:inline absolute right-5 top-5">
        <CodeIcon />
      </div>
      <div className="w-full absolute top-20 lg:top-24 text-center my-5 px-2">
        <div className="flex flex-col items-center lg:ml-32">
          <p className="text-base sm:text-xl lg:text-2xl border-2 border-blue-dark bg-blue p-4 hover:bg-blue-dark hover:text-blue-light transition-all duration-100 ease-in-out hover:no-underline cursor-pointer focus:outline-black">
            A simple Calculator with HTML, CSS, and JavaScript
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;

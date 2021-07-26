import React from "react";
import GitHubBrand from "./assets/github-brands.svg";
import TwitterBrand from "./assets/twitter-brands.svg";
import { PaperPlane } from "./LottieIcons";

const Contact = () => {
  return (
    <div>
      <div className="background_text">
        <h1>contact</h1>
      </div>
      <p className="text-center mt-5 border bg-blue-dark w-max text-blue-light uppercase px-2 py-1 lg:hidden">
        Contact
      </p>
      <div className="absolute top-1/3 lg:top-1/3 w-full lg:-mt-10 z-0">
        <div className="flex flex-col items-center lg:ml-60">
          <PaperPlane className="w-28 h-28" />
          <a href="mailto:vimalkwh05@gmail.com">
            <h1 className="text-blue-dark text-2xl sm:text-4xl lg:text-6xl font-bold mt-16 lg:mt-36 lg:ml-20 underline hover:bg-blue-dark p-4 hover:text-blue-light hover:no-underline transition-all duration-150 ease-in-out cursor-pointer focus:placeholder-blue-dark">
              vimalkwh05@gmail.com
            </h1>
          </a>

          {/* Social links for the mobile view */}
          <div className="flex mt-16 lg:hidden">
            <a href="https://github.com/vmlk" target="_blank">
              <p className="mx-4 underline">
                <span>
                  <img src={GitHubBrand} alt="" className="h-6 w-6 inline" />
                </span>
                vmlk
              </p>
            </a>
            <a href="https://twitter.com/vmlKushwaha" target="_blank">
              <p className="mx-4 underline">
                <span>
                  <img src={TwitterBrand} alt="" className="h-6 w-6 inline" />
                </span>
                vmlKushwaha
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

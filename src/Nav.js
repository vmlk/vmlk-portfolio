import React from "react";
import { GitHubIcon } from "./SocialIcons";
import { LinkedInIcon } from "./SocialIcons";
import { TwitterIcon } from "./SocialIcons";
const Nav = (props) => {
  return (
    <div className="bg-blue-light flex flex-col items-center py-10 shadow h-screen">
      <div className="btn_div">
        <button onClick={props.handleToggle} className="btn">
          about
        </button>
      </div>
      <div className="btn_div">
        <button onClick={props.handleToggle} className="btn">
          work
        </button>
      </div>
      <div className="btn_div">
        <button onClick={props.handleToggle} className="btn">
          skills
        </button>
      </div>
      <div className="btn_div">
        <button onClick={props.handleToggle} className="btn">
          contact
        </button>
      </div>
      <div className="w-full flex flex-row justify-around mt-2">
        <div className="social_icon">
          <GitHubIcon />
        </div>
        <div className="social_icon">
          <LinkedInIcon />
        </div>
        <div className="social_icon">
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default Nav;

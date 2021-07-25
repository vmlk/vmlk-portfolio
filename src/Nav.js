import React from "react";
import { Link } from "react-router-dom";
import { GitHubIcon } from "./SocialIcons";
import { LinkedInIcon } from "./SocialIcons";
import { TwitterIcon } from "./SocialIcons";
const Nav = (props) => {
  return (
    <div className="bg-blue-light flex flex-col items-center py-8 h-screen div-shadow">
      <div className="btn_div">
        <Link to="/about">
          <button onClick={props.handleToggle} className="btn">
            about
          </button>
        </Link>
      </div>
      <div className="btn_div">
        <Link to="/work">
          <button onClick={props.handleToggle} className="btn">
            work
          </button>
        </Link>
      </div>
      <div className="btn_div">
        <Link to="/skills">
          <button onClick={props.handleToggle} className="btn">
            skills
          </button>
        </Link>
      </div>
      <div className="btn_div">
        <Link to="/contact">
          <button onClick={props.handleToggle} className="btn">
            contact
          </button>
        </Link>
      </div>
      <div className="w-full flex flex-row justify-around mt-2">
        <div className="social_icon">
          <a href="https://github.com/vmlk" target="_blank">
            <GitHubIcon />
          </a>
        </div>
        <div className="social_icon">
          <a href="https://www.linkedin.com/in/vmlkushwaha/" target="_blank">
            <LinkedInIcon />
          </a>
        </div>
        <div className="social_icon">
          <a href="https://twitter.com/vmlKushwaha" target="_blank">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;

import React, { useState } from "react";
import { CodeIcon } from "./SocialIcons";
import WorkItem from "./WorkItem";

const Work = () => {
  const projects = [
    {
      heading: "👉 Feed a Mole game (HTML + CSS + JavaScript)",
      link: "https://vmlk.github.io/mole-game/index.html",
    },
    {
      heading: "👉 TODO List app (React + Friebase + Materail-UI)",
      link: "https://todo-app-vimalk.web.app/",
    },
    {
      heading: "👉 Messenger App (React + Firebase + Material-UI)",
      link: "https://fb-messenger-clone-vimalk.web.app/",
    },
  ];
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
        {projects.map((obj, index) => {
          console.log("a");
          return <WorkItem key={index} obj={obj} />;
        })}
      </div>
    </div>
  );
};

export default Work;

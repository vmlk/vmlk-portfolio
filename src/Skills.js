import React from "react";
import SkillList from "./SkillList";

const Skills = () => {
  const arr = [
    {
      title: "Programming Languages",
      icon: [
        {
          iconTitle: "C++",
          iconLink:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
        },
        {
          iconTitle: "JavaScript",
          iconLink:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
          iconTitle: "TypeScript",
          iconLink:
            "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
        },
      ],
    },
    {
      title: "Frontend Development",
      icon: [
        {
          iconTitle: "HTML",
          iconLink:
            "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
        },
        {
          iconTitle: "CSS",
          iconLink:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        },
        {
          iconTitle: "Bootstrap",
          iconLink:
            "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
        },
        {
          iconTitle: "ReactJS",
          iconLink:
            "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
        },
        {
          iconTitle: "Redux",
          iconLink:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        },
        {
          iconTitle: "Tailwind-CSS",
          iconLink:
            "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: [
        {
          iconTitle: "Node.js",
          iconLink: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
        },
        {
          iconTitle: "Express",
          iconLink:
            "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
        },
        {
          iconTitle: "GraphQL",
          iconLink:
            "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
        },
      ],
    },
    {
      title: "Mobile App Development",
      icon: [
        {
          iconTitle: "React Native",
          iconLink:
            "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
        },
      ],
    },
    {
      title: "Database",
      icon: [
        {
          iconTitle: "MongoDB",
          iconLink:
            "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
        },
      ],
    },
    {
      title: "Data Visualization",
      icon: [
        {
          iconTitle: "D3",
          iconLink: "https://www.vectorlogo.zone/logos/d3js/d3js-icon.svg",
        },
      ],
    },
    {
      title: "Devops",
      icon: [
        {
          iconTitle: "Docker",
          iconLink: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
        },
      ],
    },
    {
      title: "Backend as a Service (BaaS)",
      icon: [
        {
          iconTitle: "Firebase",
          iconLink:
            "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        },
      ],
    },
    {
      title: "Static site generator",
      icon: [
        {
          iconTitle: "Gatsby",
          iconLink:
            "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
        },
        {
          iconTitle: "Next.js",
          iconLink: "https://cdn.worldvectorlogo.com/logos/nextjs-3.svg",
        },
      ],
    },
    {
      title: "Others",
      icon: [
        {
          iconTitle: "Git",
          iconLink:
            "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        },
        {
          iconTitle: "Linux",
          iconLink: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="background_text">
        <h1>skills</h1>
      </div>
      <p className="text-center mt-5 border bg-blue-dark w-max text-blue-light uppercase px-2 py-1 lg:hidden">
        skills
      </p>
      <div className="mx-10 mt-8 sm:mt-16 lg:ml-96 lg:pl-10 flex flex-wrap items-center">
        {arr.map((obj, index) => {
          return <SkillList obj={obj} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Skills;

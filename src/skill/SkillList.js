import React from "react";
import SkillIcon from "./SkillIcon";

const SkillList = ({ obj }) => {
  return (
    <div className="w-max m-2 sm:m-5 flex flex-col items-center border-b bg-blue-light">
      <p className="text-xs mb-5 lg:text-base w-full text-center border bg-blue p-1">
        {obj.title}
      </p>
      <div className="skills-container">
        {obj.icon.map((obj, index) => {
          return <SkillIcon obj={obj} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SkillList;

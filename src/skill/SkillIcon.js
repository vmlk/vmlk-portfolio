import React from "react";

const SkillIcon = ({ obj }) => {
  return (
    <div className="mx-1 flex flex-col items-center">
      <img
        src={obj.iconLink}
        alt=""
        className="skill-icon"
        title={obj.iconTitle}
      />
      <p className="text-xs">{obj.iconTitle}</p>
    </div>
  );
};

export default SkillIcon;

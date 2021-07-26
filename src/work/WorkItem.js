import React from "react";

const WorkItem = ({ obj }) => {
  return (
    <div className="flex flex-col mb-20 lg:mb-24 lg:max-w-5xl lg:ml-96">
      <a href={obj.link} target="_blank">
        <p className="text-lg sm:text-2xl lg:text-3xl underline font-semibold text-blue-dark p-4 hover:bg-blue-dark hover:text-blue-light transition-all duration-100 ease-in-out hover:no-underline cursor-pointer focus:outline-black">
          {obj.heading}
        </p>
      </a>
    </div>
  );
};

export default WorkItem;

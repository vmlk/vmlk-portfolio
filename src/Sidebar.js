import React, { useState } from "react";
import MyImg from "./assets/4.png";
import Nav from "./Nav";
const Sidebar = () => {
  return (
    <div className="absolute top-0 left-0 bottom-0 w-80 overflow-hidden">
      <div className="w-80 h-80 shadow">
        <img src={MyImg} alt="Vimal Kushwaha" className="object-contain" />
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default Sidebar;

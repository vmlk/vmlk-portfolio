import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyImg from "./assets/4.png";
import Nav from "./Nav";
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-80 overflow-hidden div-shadow z-50">
      <div className="w-80 h-80 shadow">
        <Link to="/">
          <img src={MyImg} alt="Vimal Kushwaha" className="object-contain" />
        </Link>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default Sidebar;

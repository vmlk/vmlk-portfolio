import React from "react";
import MyImg from "./assets/4.png";
const Home = () => {
  return (
    <div>
      <div className="background_text">
        <h1>Hello</h1>
      </div>
      <div className="flex flex-col items-center absolute top-28 sm:top-32 lg:top-1/3 left-20 sm:left-40 lg:left-2/4 lg:-ml-24">
        <div className="flex flex-row items-end">
          <img
            src={MyImg}
            alt=""
            className="xl:hidden h-32 w-32 sm:h-60 sm:w-60"
          />
          <h2 className="text-2xl sm:text-4xl lg:text-5xl ml-2">I am</h2>
        </div>
        <div className="my-14 sm:my-28 lg:my-14">
          <p
            className="text-3xl sm:text-5xl lg:text-7xl"
            style={{ fontFamily: "'Mr Dafoe', cursive" }}
          >
            Vimal Kushwaha
          </p>
        </div>
        <div className="my-16">
          <p className="text-2xl sm:text-5xl">Frontend Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

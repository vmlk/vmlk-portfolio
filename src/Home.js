import React from "react";
import MyImg from "./assets/4.png";
import Typical from "react-typical";
const Home = () => {
  return (
    <div>
      <div className="background_text">
        <h1>Hello</h1>
      </div>
      <div className="flex flex-col items-center w-full lg:w-1/3 absolute top-28 sm:top-32 lg:top-1/3 lg:left-2/4 lg:-ml-24">
        <img
          src={MyImg}
          alt=""
          className="xl:hidden h-32 w-32 sm:h-60 sm:w-60 shadow rounded-full lg:rounded-none"
        />
        <h2 className="text-2xl sm:text-4xl lg:text-5xl my-3">I am</h2>
        <div className="my-3 sm:my-12 lg:my-14">
          <p
            className="text-5xl sm:text-7xl lg:text-7xl"
            style={{ fontFamily: "'Mr Dafoe', cursive" }}
          >
            Vimal Kushwaha
          </p>
        </div>
        <div className="my-16">
          <p className="text-2xl sm:text-4xl">
            <Typical
              steps={["Frontend Engineer🚀", 1200, "UI Developer", 1000]}
              loop={Infinity}
              wrapper="p"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

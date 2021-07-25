import React from "react";

const About = () => {
  return (
    <div>
      <div className="background_text">
        <h1>about</h1>
      </div>
      <p className="text-center mt-5 border bg-blue-dark w-max text-blue-light uppercase px-2 py-1 lg:hidden">
        about
      </p>
      <div className="absolute top-20 lg:left-96 lg:top-0">
        <p className="p-8 text-base sm:text-xl lg:text-2xl leading-7 sm:leading-10 lg:leading-10">
          A passionate developer from <b>India</b> 🇮🇳
          <br />
          <br />
          I design the visual layer to create a beautiful user experience.
          <br />
          <br />
          ⚡ I like to code things from scratch, and enjoy bringing ideas to
          life in the browser.
          <br />
          <br />
          🌱 My Primary purpose:
          <br />
          --> write code that is communicating with others.
          <br />
          --> code must be readable. <br />
          --> more declarative, less Imperative.
          <br />
          <br />I love❤️ to code in <b>JavaScript</b>.
          <br />
          <br />
          📝 I regularly write articles on -->{" "}
          <span>
            <a
              href="https://vmlk.hashnode.dev/"
              className="underline bg-blue-dark bg-opacity-30 hover:bg-blue-dark hover:text-blue-light hover:no-underline"
            >
              vmlk.hashnode.dev
            </a>
          </span>
          <br />
          <br />
          😆 Fun fact --> veins overloaded with coffee
        </p>
      </div>
    </div>
  );
};

export default About;

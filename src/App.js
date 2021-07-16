import "./App.css";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import hamburger from "./assets/hamburger.svg";
import cross from "./assets/delete.svg";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Work from "./Work";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  function handleToggle() {
    setNavToggle(!navToggle);
  }

  return (
    <div className="App">
      <div className="text-blue-dark underline cursor-pointer text-xs sm:text-sm font-semibold w-full text-center mt-3 lg:hidden focus:outline-black">
        <p>Back to HOME</p>
      </div>
      {!navToggle && (
        <div
          onClick={handleToggle}
          className="absolute right-6 top-3 cursor-pointer z-50 focus:outline-black active:outline-black lg:hidden"
        >
          <img src={hamburger} alt="hamburger" className="h-10 w-10" />
        </div>
      )}

      {navToggle && (
        <div
          onClick={handleToggle}
          className="absolute right-6 top-3 cursor-pointer z-50 focus:outline-black active:outline-black lg:hidden"
        >
          <img src={cross} alt="hamburger" className="h-10 w-10" />
        </div>
      )}

      <div
        className={
          !navToggle
            ? "lg:hidden z-40 nav_transition"
            : "lg:hidden z-40 nav_transition hide_nav"
        }
      >
        <Nav handleToggle={handleToggle} />
      </div>
      <div className="lg-sidebar">
        <Sidebar />
      </div>
      {/* <Home /> */}
      {/* <About /> */}
      <Work />
    </div>
  );
}

export default App;

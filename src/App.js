import React, { useEffect } from "react";
import Nav from "./nav/Nav";
import Sidebar from "./nav/Sidebar";
import hamburger from "./assets/hamburger.svg";
import cross from "./assets/delete.svg";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Work from "./work/Work";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Skills from "./skill/Skills";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  /*Function that handle toggel of nav in mobile view*/
  function handleToggle() {
    setNavToggle(!navToggle);
  }

  return (
    <Router basename="/vmlk-portfolio">
      <div className="App">
        <div className="text-blue-dark underline text-xs sm:text-sm font-semibold w-full text-center mt-3 lg:hidden focus:outline-black">
          <p>
            <Link to="/">Back to HOME</Link>
          </p>
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
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

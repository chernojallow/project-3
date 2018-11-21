import React from "react";
import "./Jumbotron.css";
import Hero from "../Hero";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    {/* <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg"> */}
    <Hero backgroundImage="http://www.cambridgehealth.edu/wp-content/uploads/2014/02/IMG_0001-78-e1395148734654.jpg">
    <h1>Nursing School Clinical App</h1>
    </Hero>

    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/chernojallow"
    >
      Powered by Cherno Jallow
    </a>
  </div>
);

export default Jumbotron;

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter 
      options={{
        strings: [
           "300 DAY'S OF CODER",
          "PROBLEM SOLVER",
          "CONTINUOUS LEARNER",
          "Full Stack Developer",
        
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

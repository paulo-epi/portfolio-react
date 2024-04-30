import React from "react";
import Typewriter from "typewriter-effect";

const TextWritter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Mobile Developer",
          "UI/UX Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TextWritter;
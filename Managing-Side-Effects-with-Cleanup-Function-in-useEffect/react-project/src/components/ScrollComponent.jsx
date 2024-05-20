import { useState, useEffect } from "react";
import React from "react";

const ScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={{ height: "200vh", padding: "10px" }}>
      <h1>Scroll Position: {scrollPosition}</h1>
    </div>
  );
};

export default ScrollComponent;

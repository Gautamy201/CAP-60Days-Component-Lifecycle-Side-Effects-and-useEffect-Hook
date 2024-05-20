import React, { useState, useEffect } from "react";

const TimerComonent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>timer : {count}</h1>
    </div>
  );
};

export default TimerComonent;

import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    counter === 0 ? setCounter(0) : setCounter(counter - 1);
  };
  return (
    <>
      <h1
        className=" text-center m-10"
        style={{
          fontSize: "45px",
          textTransform: "capitalize",
          fontWeight: "600",
        }}
      >
        basic counter application
      </h1>
      <Counter
        contervalue={counter}
        increment={increment}
        decrement={decrement}
      />
    </>
  );
};

export default App;

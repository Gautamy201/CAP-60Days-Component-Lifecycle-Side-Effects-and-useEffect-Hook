import React from "react";
import Button from "./Button";

const Counter = ({ contervalue, increment, decrement }) => {
  return (
    <>
      <h1 className="text-center text-red-700" style={{ fontSize: "45px" }}>
        Count is <span className=" ml-7">{contervalue}</span>
      </h1>
      <div className=" flex justify-center w-screen gap-7 mt-5">
        <Button buttonText={"Substract"} buttonFunction={decrement} />
        <Button buttonText={"Add"} buttonFunction={increment} />
      </div>
    </>
  );
};

export default Counter;

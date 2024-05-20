import React from "react";

const Button = ({ buttonText, buttonFunction }) => {
  return (
    <>
      <button
        className=" border-2 w-40 bg-slate-600 text-white p-2 rounded-lg"
        style={{ fontSize: "22px" }}
        onClick={() => buttonFunction()}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;

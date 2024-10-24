import React from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const AppTools = () => {
  const buttonStyles = {};
  const divStyles = {
    display: "flex",
    flexDirection: "coloumn",
    justifyContent: "flex-end",
  };
  const eyeStyles = {
    fontSize: "48px",
  };
  return (
    <div style={divStyles}>
      <IoMdEye style={eyeStyles} />
      <button>CREATE</button>
    </div>
  );
};

export default AppTools;

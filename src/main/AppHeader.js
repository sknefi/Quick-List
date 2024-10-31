import React from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

const AppHeader = () => {
  const divStyles = {
    display: "flex",
    flexDirection: "coloumn",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyles = {
    width: "120px",
    height: "auto",
  };

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }

  return (
    <div style={divStyles}>
      <FaUsers style={{ fontSize: "4rem"}}/>
      <img src={logo} style={logoStyles} onClick={handleNavigate} />
    </div>
  );
};

export default AppHeader;

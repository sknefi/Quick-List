import React from "react";
import logo from "./logo.png";

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

  const h1Styles = {
    fontSize: "3rem",
  };
  return (
    <div style={divStyles}>
      <h1 style={h1Styles}>Quick List</h1>
      <img src={logo} style={logoStyles} />
    </div>
  );
};

export default AppHeader;

import React from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import ShowUsers from "../components/ShowUsers/ShowUsers";
import { changeColorTheme } from "./ColorPallet";
import { MdOutlineDarkMode } from "react-icons/md";


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
	cursor: "pointer",
  };

  const moonStyles = {
	fontSize: "2em",       
	cursor: "pointer",     
 };

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }

  return (
    <div style={divStyles}>
      <ShowUsers/>
	  <MdOutlineDarkMode onClick={changeColorTheme} style={moonStyles}/>
      <img src={logo} style={logoStyles} onClick={handleNavigate} />
    </div>
  );
};

export default AppHeader;

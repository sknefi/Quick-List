import React from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import ShowUsers from "../components/ShowUsers/ShowUsers";
import { changeColorTheme } from "./ColorPallet";
import { MdOutlineDarkMode } from "react-icons/md";
import { useContext } from "react";
import { TranslationContext } from "../tech/contexts/TranslationContext";
// import LanguageSwitcher from "../translation/languageSwitcher";

const AppHeader = () => {
  const { switchLanguage, language } = useContext(TranslationContext);
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
      <ShowUsers />
      <MdOutlineDarkMode onClick={changeColorTheme} style={moonStyles} />
      {language === "sk" ? (
        <p onClick={() => switchLanguage("sk")} style={{ cursor: "pointer" }}>
          EN
        </p>
      ) : (
        <p onClick={() => switchLanguage("en")} style={{ cursor: "pointer" }}>
          SK
        </p>
      )}

      <img src={logo} style={logoStyles} onClick={handleNavigate} />
    </div>
  );
};

export default AppHeader;

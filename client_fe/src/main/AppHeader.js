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

  const iconsStyles = {
	fontSize: "1.5em",
	cursor: "pointer",
	display: "flex",
	flexDirection: "row",
	gap: "30px",
  };

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }

  return (
    <div style={divStyles}>
      <div style={iconsStyles}>
        <ShowUsers />
        <MdOutlineDarkMode onClick={changeColorTheme} style={moonStyles} />
        {language === "sk" ? (
          <p onClick={() => switchLanguage("sk")} style={{ cursor: "pointer", margin: "0" }}>
            EN
          </p>
        ) : (
          <p onClick={() => switchLanguage("en")} style={{ cursor: "pointer", margin: "0" }}>
            SK
          </p>
        )}
      </div>

      <img src={logo} style={logoStyles} onClick={handleNavigate} />
    </div>
  );
};

export default AppHeader;

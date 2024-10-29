import React, { useState } from "react";
import "./AppTools.css";
import { useContext } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { EventsContext } from "../tech/contexts/EventsContext";

const AppTools = () => {
  const { displayArchived, statusArchivedMap } = useContext(EventsContext);

  function handleClickArchived() {
    statusArchivedMap.setStatusArchived(!statusArchivedMap.statusArchived);
    displayArchived(!statusArchivedMap.statusArchived);
  }

  return (
    <div className="app-tools-div">
      {statusArchivedMap.statusArchived && (
        <IoMdEye
          className="icon-eye"
          onClick={handleClickArchived}
        />
      )}
      {!statusArchivedMap.statusArchived && (
        <IoMdEyeOff
          className="icon-eye"
          onClick={handleClickArchived}
        />
      )}
      <button>CREATE</button>
    </div>
  );
};

export default AppTools;

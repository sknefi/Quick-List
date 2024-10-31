import React, { useState } from "react";
import "./AppTools.css";
import { useContext } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { EventsContext } from "../tech/contexts/EventsContext";
import CreateEventModal from "../components/CreateEventModal/CreateEventModal";

const AppTools = () => {
  const { displayArchived, statusArchivedMap } = useContext(EventsContext);

  // po stlačení ikonky oko - zobraz iba archivované
  function handleClickArchived() {
    statusArchivedMap.setStatusArchived(!statusArchivedMap.statusArchived);
    displayArchived(!statusArchivedMap.statusArchived);
  }

  const [showCreateEventModal, setShowCreateEventModal] = useState(false);

  return (
    <div className="app-tools-div">
      {statusArchivedMap.statusArchived && (
        <IoMdEye className="icon-eye" onClick={handleClickArchived} />
      )}
      {!statusArchivedMap.statusArchived && (
        <IoMdEyeOff className="icon-eye" onClick={handleClickArchived} />
      )}
      <button onClick={() => setShowCreateEventModal(true)}>CREATE</button>
      <CreateEventModal
        show={showCreateEventModal}
        handleClose={() => setShowCreateEventModal(false)}
      />
    </div>
  );
};

export default AppTools;

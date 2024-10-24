import React, { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import ArchiveModal from "../ArchiveModal/ArchiveModal";
import { FaTrash } from "react-icons/fa";
import { FaFileArchive } from "react-icons/fa";
import "./EventCard.css";

const EventCard = ({ event, loggedInUser }) => {
  const [showBtnDelete, setShowBtnDelete] = useState(false);

  const handleCloseBtnDelete = () => setShowBtnDelete(false);
  const handleShowBtnDelete = () => setShowBtnDelete(true);

  const [showBtnArchive, setShowBtnArchive] = useState(false);

  const handleCloseBtnArchive = () => setShowBtnArchive(false);
  const handleShowBtnArchive = () => setShowBtnArchive(true);
  return (
    <div className="event-card">
      <h2 className="event-name">{event.name}</h2>
      <h3 className="event-icon">{event.icon}</h3>
      <div className="event-card-icons">
        {loggedInUser.id === event.owner && (
          <FaFileArchive
            className="icon-archive"
            onClick={handleShowBtnArchive}
          />
        )}
        {loggedInUser.id === event.owner && (
          <FaTrash className="icon-delete" onClick={handleShowBtnDelete} />
        )}
      </div>
      <DeleteModal
        show={showBtnDelete}
        handleClose={handleCloseBtnDelete}
        event={event}
      />
      <ArchiveModal
        show={showBtnArchive}
        handleClose={handleCloseBtnArchive}
        event={event}
      />
    </div>
  );
};

export default EventCard;

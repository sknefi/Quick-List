import React, { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import ArchiveModal from "../ArchiveModal/ArchiveModal";
import { FaTrash } from "react-icons/fa";
import { FaFileArchive } from "react-icons/fa";
import "./EventCard.css";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event, loggedInUser }) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/${event._id}`);
  }

  // handle deleteButton
  const [showBtnDelete, setShowBtnDelete] = useState(false);
  const handleCloseBtnDelete = () => setShowBtnDelete(false);
  const handleShowBtnDelete = () => setShowBtnDelete(true);

  // handle archiveButton
  const [showBtnArchive, setShowBtnArchive] = useState(false);
  const handleCloseBtnArchive = () => setShowBtnArchive(false);
  const handleShowBtnArchive = () => setShowBtnArchive(true);

  return (
    <div
      className={`event-card ${
        event.archived === true ? "event-card-archived-color" : ""
      }`}
    >
      <h2 className="event-name" onClick={handleNavigate}>
        {event.name}
      </h2>
      <h3 className="event-icon" onClick={handleNavigate}>
        {event.icon}
      </h3>

      <div className="event-card-footer">
        <div className="tasks-done">
            {event.items.filter((item) => item.state === "done").length}/
            {event.items.length}
        </div>
        <div className="icons-card">
          {loggedInUser._id === event.owner && (
            <FaFileArchive
              className="icon-archive"
              onClick={handleShowBtnArchive}
            />
          )}
          {loggedInUser._id === event.owner && (
            <FaTrash className="icon-delete" onClick={handleShowBtnDelete} />
          )}
        </div>
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

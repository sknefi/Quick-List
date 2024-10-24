import React from "react";
import ArchiveModal from "../ArchiveModal/ArchiveModal";

const EventCard = ({ event, loggedInUser }) => {
  return (
    <div>
      <h2>{event.name}</h2>
      <h3>{event.icon}</h3>
      {loggedInUser.id === event.owner && <ArchiveModal/>}
    </div>
  );
};

export default EventCard;

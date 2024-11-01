import React, { useContext, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import ShowItems from "../components/ShowItems/ShowItems";
import "./EventDetail.css";
import { useParams } from "react-router-dom";
import { EventsContext } from "../tech/contexts/EventsContext";
import { ItemsContext } from "../tech/contexts/ItemsContext";
import AddItemModal from "../components/AddItemModal/AddItemModal";

const EventDetail = () => {
  const { id } = useParams();
  const { events } = useContext(EventsContext);
  const { getEventItems } = useContext(ItemsContext);

  const event = events.find((event) => event.id === id);
  const items = getEventItems(event);

  const [showAll, setShowAll] = useState(true);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  return (
    <div>
      <div className="event-detail">
        <div className="event-info">
          <h2>{event.icon}</h2>
          <h2>{event.name}</h2>
        </div>
        <div className="event-detail-icons">
          {showAll && (
            <IoMdEye
              onClick={() => setShowAll(!showAll)}
              className="event-detail-icon"
            />
          )}
          {!showAll && (
            <IoMdEyeOff
              onClick={() => setShowAll(!showAll)}
              className="event-detail-icon"
            />
          )}
          <IoIosAddCircleOutline
            className="event-detail-icon"
            onClick={() => setShowAddItemModal(!showAddItemModal)}
          />
          <IoIosSettings className="event-detail-icon" />
        </div>
      </div>
      <ShowItems items={items} />
      <AddItemModal
        show={showAddItemModal}
        handleClose={() => setShowAddItemModal(false)}
        eventId={event.id}
      />
    </div>
  );
};

export default EventDetail;

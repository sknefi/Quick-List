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

const EventDetail = () => {
  const { id } = useParams();
  const { events } = useContext(EventsContext);
  const event = events.find((event) => event.id === id);
  const [showAll, setShowAll] = useState(true);
  const { getEventItems } = useContext(ItemsContext);

  const items = getEventItems(event);
  console.log(items)
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
          <IoIosAddCircleOutline className="event-detail-icon" />
          <IoIosSettings className="event-detail-icon" />
        </div>
      </div>
      <ShowItems items={items} />
    </div>
  );
};

export default EventDetail;
